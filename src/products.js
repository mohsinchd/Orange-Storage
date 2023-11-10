const products = [
  {
    _id: "1",
    name: "Storage Unit 1",
    image: "/images/storage6.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    location: "220 E 117th St New York City, NY 10035",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    phoneNumber: "+2319232323",
    rating: 4.5,
    numReviews: 12,
    indoorStorages: [
      {
        id: 1,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 2,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 3,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 4,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
    ],
    climateControl: true,
    indoor: true,
    outdoor: true,
    rooms: 1,
    roomsize: "10 x 10",
    distance: 5.9,
  },
  {
    _id: "2",
    name: "Storage Unit 2",
    image: "/images/storage1.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    location: "220 E 117th St New York City, NY 10035",
    category: "Electronics",
    phoneNumber: "+2319232323",
    indoorStorages: [
      {
        id: 1,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 2,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 3,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 4,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
    ],
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    climateControl: false,
    indoor: true,
    outdoor: true,
    rooms: 3,
    roomsize: "10 x 20",
    distance: 5,
  },
  {
    _id: "3",
    name: "Storage Unit 3",
    image: "/images/storage2.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    location: "220 E 117th St New York City, NY 10035",
    category: "Electronics",
    indoorStorages: [
      {
        id: 1,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 2,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 3,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 4,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
    ],
    price: 929.99,
    phoneNumber: "+2319232323",
    countInStock: 5,
    rating: 3,
    numReviews: 12,
    climateControl: true,
    indoor: false,
    outdoor: true,
    rooms: 2,
    roomsize: "20 x 20",
    distance: 8.5,
  },
  {
    _id: "4",
    name: "Storage Unit 4",
    image: "/images/storage3.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    location: "220 E 117th St New York City, NY 10035",
    category: "Electronics",
    indoorStorages: [
      {
        id: 1,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 2,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 3,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 4,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
    ],
    price: 399.99,
    phoneNumber: "+2319232323",
    climateControl: true,
    indoor: true,
    outdoor: true,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
    rooms: 1,
    roomsize: "15 x 10",
    distance: 6.9,
  },
  {
    _id: "5",
    name: "Storage Unit 5",
    image: "/images/storage4.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    indoorStorages: [
      {
        id: 1,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 2,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 3,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 4,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
    ],
    phoneNumber: "+2319232323",
    location: "220 E 117th St New York City, NY 10035",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    climateControl: true,
    indoor: true,
    outdoor: true,
    rooms: 4,
    roomsize: "30 x 10",
    distance: 9,
  },
  {
    _id: "6",
    name: "Storage Unit 6",
    image: "/images/storage5.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    indoorStorages: [
      {
        id: 1,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 2,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 3,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
      {
        id: 4,
        name: "Small | 5' x 5' x 5'",
        description:
          "Interior Lower Level Elevator Humidity Control Swing Miscellaneous Storage (up to 2 rooms)",
        price: 79.95,
        image: "/images/unit-small.webp",
      },
    ],
    phoneNumber: "+2319232323",
    location: "220 E 117th St New York City, NY 10035",
    price: 29.99,
    countInStock: 0,
    climateControl: true,
    indoor: true,
    outdoor: true,
    rating: 4,
    numReviews: 12,
    rooms: 2,
    roomsize: "15 x 15",
    distance: 5.9,
  },
];

export default products;
