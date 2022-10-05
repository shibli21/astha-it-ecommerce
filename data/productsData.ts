export interface Category {
  id: number;
  name: any;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
  stock: number;
}

export const productsData: Product[] = [
  {
    id: 94,
    title: "Fantastic Soft Table",
    price: 466,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=4444",
    },
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6174",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6841",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1122",
    ],
    stock: 1,
  },
  {
    id: 95,
    title: "Refined Wooden Table",
    price: 311,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=4537",
    },
    images: [
      "https://api.lorem.space/image/furniture?w=640&h=480&r=9547",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=2694",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=9831",
    ],
    stock: 1,
  },
  {
    id: 96,
    title: "Rustic Frozen Bacon",
    price: 738,
    description:
      "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
    category: {
      id: 2,
      name: "Electronics",
      image: "https://api.lorem.space/image/watch?w=640&h=480&r=4552",
    },
    images: [
      "https://api.lorem.space/image/watch?w=640&h=480&r=5391",
      "https://api.lorem.space/image/watch?w=640&h=480&r=9200",
      "https://api.lorem.space/image/watch?w=640&h=480&r=9698",
    ],
    stock: 10,
  },
  {
    id: 97,
    title: "Rustic Granite Computer",
    price: 724,
    description:
      "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
    category: {
      id: 5,
      name: "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=9748",
    },
    images: [
      "https://api.lorem.space/image?w=640&h=480&r=8866",
      "https://api.lorem.space/image?w=640&h=480&r=1655",
      "https://api.lorem.space/image?w=640&h=480&r=3223",
    ],
    stock: 0,
  },
  {
    id: 98,
    title: "Refined Concrete Ball",
    price: 432,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: {
      id: 5,
      name: "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=9748",
    },
    images: [
      "https://api.lorem.space/image?w=640&h=480&r=7448",
      "https://api.lorem.space/image?w=640&h=480&r=1573",
      "https://api.lorem.space/image?w=640&h=480&r=7016",
    ],
    stock: 13,
  },
  {
    id: 99,
    title: "Incredible Wooden Chair",
    price: 690,
    description:
      "Carbonite web goalkeeper gloves are ergonomically designed to give easy fit",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=4537",
    },
    images: [
      "https://api.lorem.space/image/furniture?w=640&h=480&r=7458",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=116",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=4631",
    ],
    stock: 7,
  },
  {
    id: 100,
    title: "Licensed Fresh Keyboard",
    price: 633,
    description: "The Football Is Good For Training And Recreational Purposes",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=7359",
    },
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=5584",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=5333",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=7739",
    ],
    stock: 12,
  },
  {
    id: 101,
    title: "Handmade Wooden Shirt",
    price: 292,
    description:
      "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=7359",
    },
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=128",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=661",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=3422",
    ],
    stock: 10,
  },
  {
    id: 102,
    title: "Small Wooden Bacon",
    price: 66,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: {
      id: 5,
      name: "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=9748",
    },
    images: [
      "https://api.lorem.space/image?w=640&h=480&r=2976",
      "https://api.lorem.space/image?w=640&h=480&r=9879",
      "https://api.lorem.space/image?w=640&h=480&r=2493",
    ],
    stock: 10,
  },
  {
    id: 103,
    title: "Practical Fresh Pants",
    price: 405,
    description:
      "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
    category: {
      id: 5,
      name: "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=9748",
    },
    stock: 10,

    images: [
      "https://api.lorem.space/image?w=640&h=480&r=2568",
      "https://api.lorem.space/image?w=640&h=480&r=9253",
      "https://api.lorem.space/image?w=640&h=480&r=3644",
    ],
  },
  {
    id: 104,
    title: "Licensed Fresh Shirt",
    stock: 10,
    price: 697,
    description:
      "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=4537",
    },
    images: [
      "https://api.lorem.space/image/furniture?w=640&h=480&r=4686",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=133",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=1928",
    ],
  },
  {
    stock: 10,

    id: 105,
    title: "Licensed Soft Shirt",
    price: 150,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=4444",
    },
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=4471",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6231",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=199",
    ],
  },
  {
    id: 106,
    title: "Practical Cotton Shoes",
    price: 503,
    description:
      "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
    stock: 10,
    category: {
      id: 5,
      name: "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=9748",
    },
    images: [
      "https://api.lorem.space/image?w=640&h=480&r=8188",
      "https://api.lorem.space/image?w=640&h=480&r=9387",
      "https://api.lorem.space/image?w=640&h=480&r=1586",
    ],
  },
  {
    id: 107,
    title: "Small Concrete Bike",
    price: 690,
    stock: 10,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=7359",
    },
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=6629",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=2141",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=5983",
    ],
  },
  {
    id: 108,
    title: "Intelligent Frozen Chicken",
    stock: 10,
    price: 781,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=4537",
    },
    images: [
      "https://api.lorem.space/image/furniture?w=640&h=480&r=6020",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=7164",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=2721",
    ],
  },
  {
    id: 109,
    stock: 10,
    title: "Tasty Plastic Pizza",
    price: 673,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: {
      id: 4,
      name: "Shoes",
      image: "https://api.lorem.space/image/shoes?w=640&h=480&r=4444",
    },
    images: [
      "https://api.lorem.space/image/shoes?w=640&h=480&r=8074",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=6683",
      "https://api.lorem.space/image/shoes?w=640&h=480&r=1405",
    ],
  },
  {
    id: 110,
    stock: 10,
    title: "Refined Soft Bacon",
    price: 684,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: {
      id: 1,
      name: "Clothes",
      image: "https://api.lorem.space/image/fashion?w=640&h=480&r=7359",
    },
    images: [
      "https://api.lorem.space/image/fashion?w=640&h=480&r=2202",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=9885",
      "https://api.lorem.space/image/fashion?w=640&h=480&r=2710",
    ],
  },
  {
    id: 111,
    stock: 10,
    title: "Refined Cotton Cheese",
    price: 38,
    description:
      "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=4537",
    },
    images: [
      "https://api.lorem.space/image/furniture?w=640&h=480&r=9150",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=7656",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=2474",
    ],
  },
  {
    id: 112,
    stock: 10,
    title: "Refined Fresh Pizza",
    price: 446,
    description:
      "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
    category: {
      id: 3,
      name: "Furniture",
      image: "https://api.lorem.space/image/furniture?w=640&h=480&r=4537",
    },
    images: [
      "https://api.lorem.space/image/furniture?w=640&h=480&r=1318",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=342",
      "https://api.lorem.space/image/furniture?w=640&h=480&r=7006",
    ],
  },
  {
    id: 113,
    title: "Licensed Steel Pants",
    stock: 10,
    price: 437,
    description:
      "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
    category: {
      id: 5,
      name: "Others",
      image: "https://api.lorem.space/image?w=640&h=480&r=9748",
    },
    images: [
      "https://api.lorem.space/image?w=640&h=480&r=7186",
      "https://api.lorem.space/image?w=640&h=480&r=8007",
      "https://api.lorem.space/image?w=640&h=480&r=2340",
    ],
  },
];
