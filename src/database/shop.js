const shop = [
  {
    id: 0,
    name: "Bún bò Thái Anh",
    imageUrl: [],
    email: "",
    phone: "",
    social: [
      {
        name: "Facebook",
        link: "https://www.facebook.com/bunbothaianh",
      },
      {
        name: "Instagram",
        link: "https://www.instagram.com/bunbothaianh",
      },
    ],
    address: [
      {
        district: "Quận 1",
        province: "Hồ Chí Minh",
        city: "Hồ Chí Minh",
        specificAddress: "123 Nguyễn Du",
      },
      {
        district: "Quận 2",
        province: "Hồ Chí Minh",
        city: "Hồ Chí Minh",
        specificAddress: "123 Nguyễn Du",
      },
    ],
    menu: [
      {
        id: 0, // menu id
        name: "Bún bò Huế",
        type: "bát",
        price: "35000",
        currency: "đ",
        rating: 3,
        reviews: {
          reviewCount: 100,
          reviewDetail: [
            {
              id: 0,
              name: "Nguyễn Phi Tuan Anh",
              email: "hihi@gmail.com",
              rating: 4,
              comment: "ngon",
            },
            {
              id: 1,
              name: "Nguyễn Phi",
              email: "hihi@gmail.com",
              rating: 3,
              comment: "bình thường",
            },
          ],
        },
      },
      {
        id: 1,
        name: "Bún bò Nam Giao",
        type: "bát",
        price: "40000",
        currency: "đ",
        rating: 2,
        reviews: 311,
      },
      {
        id: 2,
        name: "Quẩy",
        type: "cái",
        price: "5000",
        currency: "đ",
        rating: 1,
        reviews: 10,
      },
    ],
    ratting: 4.5,
    reviews: 1000,
  },
];

const plan = [
  {
    id: 0,
    planCode: "plan00",
    planName: "Basic",
    monthAvailable: "1",
    status: "active",
    pricePerMonth: "20000",
    totalPrice: "20000",
  },
  {
    id: 1,
    planCode: "plan01",
    planName: "Standard",
    monthAvailable: "6",
    status: "active",
    pricePerMonth: "15000",
    totalPrice: "90000",
  },
  {
    id: 2,
    planCode: "plan02",
    planName: "Premium",
    monthAvailable: "12",
    status: "active",
    pricePerMonth: "12000",
    totalPrice: "144000",
  },
];

const user = [
  {
    id: 0,
    fullName: "Nguyễn Phi Tuan Anh",
    role: "user",
    email: "anhnpthe17099@fpt.edu.vn",
    phone: "0911111111",
    address: "Dương Liễu, Hoài Đức, Hà Nội",
    plan: {
      id: 0, // plan id
      planCode: "plan01",
      type: "6 months",
      startDate: "2021-01-01",
      endDate: "2022-01-01",
    },
    favoriteShop: [
      {
        id: 0,
        shopId: 0,
        menuId: 0,
      },
      {
        id: 1,
        shopId: 0,
        menuId: 1,
      },
    ],
    bill: [
      {
        id: 0,
        billCode: "bill01",
        bankName: "Vietcombank",
        plan: {
          planCode: "plan01",
          type: "6 months",
          pricePerMonth: "15000",
          total: "90000",
        },
        account: "Van Minh Tuan",
        title: "chuyen khoan nang cap acc",
        totalPrice: "100000",
        date: "2021-12-01 12:00:00",
        status: "success",
      },
      {
        id: 1,
        billCode: "bill02",
        bankName: "MBBank",
        plan: {
          planCode: "plan02",
          type: "12 months",
          pricePerMonth: "12000",
          total: "144000",
        },
        account: "Nguyen Phi Tuan Anh",
        title: "chuyen khoan nang cap acc",
        totalPrice: "200000",
        date: "2021-11-01 12:00:00",
        status: "success",
      },
    ],
  },
];

const food = [
  {
    id: 0,
    name: "Bún bò Huế",
  },
  {
    id: 1,
    name: "Bún bò Nam Giao",
  },
  {
    id: 2,
    name: "Quẩy",
  },
  {
    id: 3,
    name: "Cơm tấm sườn nướng",
  },
];

/**
 * - import thằng food vào shop
 * - cần có function để check xem food đã có trong db chưa - function checkFoodExist
 */
