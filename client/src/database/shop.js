const shop = [
  {
    "id": 0,
    "name": "Bún bò Thái Anh",
    "image": "",
    "email": "",
    "phone": "",
    "social": [
      {
        "name": "Facebook",
        "link": "https://www.facebook.com/bunbothaianh",
      },
      {
        "name": "Instagram",
        "link": "https://www.instagram.com/bunbothaianh",
      },
    ],
    "address": [{
      "subName": "Cơ sở 1",
      "district": "Quận 1",
      "province": "Hồ Chí Minh",
      "city": "Hồ Chí Minh",
    }, {
      "subName": "Cơ sở 2",
      "district": "Quận 2",
      "province": "Hồ Chí Minh",
      "city": "Hồ Chí Minh",
    }],
    "menu": [
      {
        "id": 0,
        "name": "Bún bò Huế",
        "type": "bát",
        "price": "35000",
        "currency": "đ",
        "rating": 3,
        "reviews": 127,
      },
      {
        "id": 1,
        "name": "Bún bò Nam Giao",
        "type": "bát",
        "price": "40000",
        "currency": "đ",
        "rating": 2,
        "reviews": 311,
      },
      {
        "id": 2,
        "name": "Quẩy",
        "type": "cái",
        "price": "5000",
        "currency": "đ",
        "rating": 1,
        "reviews": 10,
      },
    ],
    "ratting" : 4.5,
    "reviews": 1000,

  },
];

const plan = [
  {
    "id": 0,
    "planCode": "plan00",
    "type": "1 months",
    "status": "active",
    "pricePerMonth": "20000",
    "total": "20000",
  },
  {
    "id": 1,
    "planCode": "plan01",
    "type": "6 months",
    "status": "active",
    "pricePerMonth": "15000",
    "total": "90000",
  },
  {
    "id": 2,
    "planCode": "plan02",
    "type": "12 months",
    "status": "active",
    "pricePerMonth": "12000",
    "total": "144000",
  }
];

const user = [
  {
    "id": 0,
    "fullName": "Nguyễn Phi Tuan Anh",
    "role": "user",
    "plan": {
      "id": 0,  // plan id
      "planCode": "plan01",
      "type": "6 months",
      "startDate": "2021-01-01",
      "endDate": "2022-01-01",
    },
    "email": "anhnpthe17099@fpt.edu.vn",
    "phone": "0911111111",
    "address": "Dương Liễu, Hoài Đức, Hà Nội",
    "favoriteShop": [
      {
        "id": 0,
        "shopId": 0,
        "menuId": 0,
      },
      {
        "id": 1,
        "shopId": 0,
        "menuId": 1,
      },
    ],
    "bill": [
      {
        "id": 0,
        "billCode": "bill01",
        "bankName": "Vietcombank",
        "plan": {
          "planCode": "plan01",
          "type": "6 months",
          "pricePerMonth": "15000",
          "total": "90000",
        } ,
        "account": "Van Minh Tuan",
        "title": "chuyen khoan nang cap acc",
        "total": "100000",
        "date": "2021-12-01 12:00:00",
        "status": "success",
      },
      {
        "id": 1,
        "billCode": "bill02",
        "bankName": "MBBank",
        "plan" : {
          "planCode": "plan02",
          "type": "12 months",
          "pricePerMonth": "12000",
          "total": "144000",
        },
        "account": "Nguyen Phi Tuan Anh",
        "title": "chuyen khoan nang cap acc",
        "total": "200000",
        "date": "2021-11-01 12:00:00",
        "status": "success",
      },
    ],
  }
];

