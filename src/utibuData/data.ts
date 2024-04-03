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
    imgUrl: '/images/Probiotic.png',
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 17,
  },
  {
    id: 2,
    name: 'Probiotoc',
    imgUrl: '/images/pharmacyGetStarted1.png',
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 0,
  },
  {
    id: 3,
    name: 'Probiotoc',
    imgUrl: '/images/profile.png',
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 0,
  },
  {
    id: 4,
    name: 'Probiotoc',
    imgUrl: '/images/Probiotic.png',
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 0,
  },
  {
    id: 5,
    name: 'Probiotoc',
    imgUrl: '/images/Probiotic.png',
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 0,
  },
  {
    id: 6,
    name: 'Probiotoc',
    imgUrl: '/images/Probiotic.png',
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 50,
    inStock: 0,
  },
];
