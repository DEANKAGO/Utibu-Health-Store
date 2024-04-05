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
    name: 'Truvada',
    imgUrl: require('../images/drug1.jpeg'),
    description:
      'Protein is important because it is needed to make, repair and maintain cells in the body. It also plays a role in the immune system.',
    price: 50,
    inStock: 17,
  },
  {
    id: 2,
    name: 'Gilead',
    imgUrl: require('../images/drug2.jpeg'),
    description:
      'Only HIV medication will increase your CD4 count. Nothing else, including multi-vitamins, supplements or herbal remedies can increase your CD4 count.',
    price: 30,
    inStock: 10,
  },
  {
    id: 3,
    name: 'ARVs',
    imgUrl: require('../images/arvs.jpg'),
    description:
      'The most effective treatment for HIV is antiretroviral therapy (ART). This is a combination of several medicines that aims to control the amount of virus in your body.',
    price: 35,
    inStock: 20,
  },
  {
    id: 4,
    name: 'VOA',
    imgUrl: require('../images/drug4.webp'),
    description:
      'CD4 cell count is an indicator of immune function in patients living with HIV and one of the key determinants for the need of opportunistic infection (OI) prophylaxis.',
    price: 10,
    inStock: 7,
  },
  {
    id: 5,
    name: 'Prep',
    imgUrl: require('../images/drug5.png'),
    description:
      'CD4 cell count is an indicator of immune function in patients living with HIV and one of the key determinants for the need of opportunistic infection (OI) prophylaxis.',
    price: 80,
    inStock: 7,
  },
  {
    id: 6,
    name: 'Probiotoc',
    imgUrl: require('../images/Probiotic.png'),
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 20,
    inStock: 12,
  },
  {
    id: 7,
    name: 'Prevenir',
    imgUrl: require('../images/drug6.jpeg'),
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 23,
    inStock: 12,
  },
  {
    id: 8,
    name: '701',
    imgUrl: require('../images/drug8.jpeg'),
    description:
      'Probiotics are food and health products that contribute live, beneficial microbes to the populations within your gut and elsewhere, in order to strengthen those communities.',
    price: 27,
    inStock: 12,
  },
];
