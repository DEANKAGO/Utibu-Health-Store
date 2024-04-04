import AsyncStorage from '@react-native-async-storage/async-storage';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const signUp = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) => {
  const users_string = (await AsyncStorage.getItem('@users')) || '[]';
  const users: User[] = JSON.parse(users_string);

  const existingUser = users.find(user => user.email === email.toLowerCase());
  if (existingUser) {
    return {
      Response: {
        success: false,
        error: 'A user already exists with the same email',
      },
    };
  }

  users.push({
    firstName,
    lastName,
    email: email.toLowerCase(),
    password,
  });

  AsyncStorage.setItem('@users', JSON.stringify(users));

  return {
    Response: {
      success: true,
      message: 'User created succesfully',
    },
  };
};

const login = async (email: string, password: string) => {
  const users_string = (await AsyncStorage.getItem('@users')) || '[]';
  const users: User[] = JSON.parse(users_string);

  const existingUser = users.find(
    user => user.email === email.toLowerCase() && user.password === password,
  );
  console.log('users===>', users);
  console.log('existingUser===>', existingUser);
  if (existingUser) {
    AsyncStorage.setItem('@loginUserData', JSON.stringify(existingUser));
    return {
      Response: {
        success: true,
        message: 'User logged in successfully',
      },
    };
  }

  return {
    Response: {
      success: false,
      error: 'Invalid credentials',
    },
  };
};

const clearData = () => {
  AsyncStorage.clear();
};

const AuthService = {
  login,
  signUp,
  clearData,
};

export default AuthService;
