export type Product = {
  id: number;
  name: string;
  description: string;
  imgUrl: string;
  price: number;
  inStock: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: 'Probiotic',
    imgUrl: require('../images/pharmacyDelivery1.png'),
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 17,
  },
  {
    id: 2,
    name: 'Probiotoc 3000',
    imgUrl: require('../images/pharmacyGetStarted1.png'),
    description:
      'Probiotics 300 are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 30,
    inStock: 10,
  },
  {
    id: 3,
    name: 'Probiotoc',
    imgUrl: require('../images/profile.png'),
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 20,
  },
  {
    id: 4,
    name: 'Probiotoc',
    imgUrl: require('../images/Probiotic.png'),
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 40,
  },
  {
    id: 5,
    name: 'Probiotoc',
    imgUrl: require('../images/Probiotic.png'),
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 7,
  },
  {
    id: 6,
    name: 'Probiotoc',
    imgUrl: require('../images/Probiotic.png'),
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 12,
  },
];
