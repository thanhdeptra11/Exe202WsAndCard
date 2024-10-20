// import React from "react";
// import { IconStar, IconStarFilled } from "@tabler/icons-react";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
// import ShopeeFoodLogo from "../../assets/icons8-shopee.svg";
// import GrabFoodLogo from "../../assets/grab-2.svg";

// // SocialMediaIcons component to handle social media links
// const SocialMediaIcons = ({ link, platform, size = "h-6 w-6" }) => {
//   const iconComponents = {
//     Instagram: (
//       <svg viewBox="0 0 30 30" fill="currentColor" className={size}>
//         <circle cx="15" cy="15" r="4"></circle>
//         <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
//       </svg>
//     ),
//     Facebook: (
//       <svg viewBox="0 0 24 24" fill="currentColor" className={size}>
//         <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
//       </svg>
//     ),
//     ShopeeFood: <img src={ShopeeFoodLogo} alt="ShopeeFood" className={size} />,
//     GrabFood: <img src={GrabFoodLogo} alt="GrabFood" className={size} />,
//   };

//   return (
//     <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors duration-300 hover:text-red-400 flex items-center">
//       {iconComponents[platform]}
//     </a>
//   );
// };

// // ShopCard component to display individual shop details
// const ShopCard = ({ shop }) => {
//   // Function to generate stars based on rating
//   const renderStars = (rating) => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(i <= rating ? <IconStarFilled key={i} className="text-yellow-400" /> : <IconStar key={i} className="text-gray-300" />);
//     }
//     return stars;
//   };

//   // Function to generate Google Maps link
//   const getGoogleMapsLink = (location) => {
//     const query = `${location.specificAddress}, ${location.district}, ${location.city}`;
//     return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
//   };

//   return (
//     <div className="relative rounded-xl animate-in zoom-in ring-1 break-inside-avoid bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 flex flex-col p-4 mb-4">
//       <div className="flex justify-between items-center">
//         <h2 className="text-lg font-bold mb-2 text-red-400">{shop.name}</h2>
//         <div className="text-sm">
//           <ul className="flex space-x-2 mt-1">
//             {shop.social.map((social, index) => (
//               <li key={index}>
//                 <SocialMediaIcons size="h-6 w-6" link={social.link} platform={social.name} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       <div className="text-sm mb-2">
//         <strong>Địa chỉ:</strong>
//         <ul>
//           {shop.address.map((location, index) => (
//             <li key={index}>
//               <a href={getGoogleMapsLink(location)} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
//                 {location.specificAddress}, {location.district}, {location.city}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="text-sm mb-2">
//         <strong>Số điện thoại:</strong> {shop.phone}
//       </div>

//       <div className="text-sm mb-2">
//         <strong>Thực đơn nổi bật:</strong>
//         <ul>
//           {shop.menu.slice(0, 2).map((item) => (
//             <li key={item.id}>
//               {item.name} - {item.price} {item.currency}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="text-sm mb-2 flex items-center">
//         <strong>Đánh giá:</strong>
//         <span className="ml-2 flex">{renderStars(shop.rating)}</span>
//         <span className="ml-2">({shop.reviews} đánh giá)</span>
//       </div>
//     </div>
//   );
// };

// const FavoriteSideBar = () => {
//   const shops = [
//     {
//       id: 0,
//       name: "Bún bò Thái Anh",
//       imageUrl: ["https://example.com/image1.jpg"],
//       email: "contact@bunbothaianh.com",
//       phone: "0909-123-456",
//       social: [
//         {
//           name: "Facebook",
//           link: "https://www.facebook.com/shop",
//         },
//         {
//           name: "Instagram",
//           link: "https://www.instagram.com/shop",
//         },
//         {
//           name: "ShopeeFood",
//           link: "https://www.shopeefood.vn/shop",
//         },
//         {
//           name: "GrabFood",
//           link: "https://www.grab.com/vn/food",
//         },
//       ],

//       address: [
//         {
//           district: "Quận 1",
//           province: "Hồ Chí Minh",
//           city: "Hồ Chí Minh",
//           specificAddress: "123 Nguyễn Du",
//         },
//         {
//           district: "Quận 2",
//           province: "Hồ Chí Minh",
//           city: "Hồ Chí Minh",
//           specificAddress: "456 Lê Lợi",
//         },
//       ],
//       menu: [
//         {
//           id: 0,
//           name: "Bún bò Huế",
//           type: "bát",
//           price: "35000",
//           currency: "đ",
//           rating: 3,
//           reviews: {
//             reviewCount: 100,
//             reviewDetail: [
//               {
//                 id: 0,
//                 name: "Nguyễn Phi Tuấn Anh",
//                 email: "user1@example.com",
//                 rating: 4,
//                 comment: "Ngon lắm!",
//               },
//               {
//                 id: 1,
//                 name: "Trần Văn B",
//                 email: "user2@example.com",
//                 rating: 3,
//                 comment: "Bình thường.",
//               },
//             ],
//           },
//         },
//         {
//           id: 1,
//           name: "Bún bò Nam Giao",
//           type: "bát",
//           price: "40000",
//           currency: "đ",
//           rating: 2,
//           reviews: 311,
//         },
//         {
//           id: 2,
//           name: "Quẩy",
//           type: "cái",
//           price: "5000",
//           currency: "đ",
//           rating: 1,
//           reviews: 10,
//         },
//       ],
//       rating: 4.5,
//       reviews: 1000,
//     },
//     {
//       id: 1,
//       name: "Phở Gia Truyền Bát Đàn",
//       imageUrl: ["https://example.com/image2.jpg"],
//       email: "contact@phogiabatdan.com",
//       phone: "0912-654-789",
//       social: [
//         {
//           name: "Facebook",
//           link: "https://www.facebook.com/phogiabatdan",
//         },
//       ],
//       address: [
//         {
//           district: "Quận Hoàn Kiếm",
//           province: "Hà Nội",
//           city: "Hà Nội",
//           specificAddress: "49 Bát Đàn",
//         },
//       ],
//       menu: [
//         {
//           id: 0,
//           name: "Phở tái",
//           type: "bát",
//           price: "45000",
//           currency: "đ",
//           rating: 5,
//           reviews: {
//             reviewCount: 200,
//             reviewDetail: [
//               {
//                 id: 0,
//                 name: "Lê Thị C",
//                 email: "user3@example.com",
//                 rating: 5,
//                 comment: "Phở ngon, nước dùng đậm đà.",
//               },
//             ],
//           },
//         },
//         {
//           id: 1,
//           name: "Phở chín",
//           type: "bát",
//           price: "45000",
//           currency: "đ",
//           rating: 4,
//           reviews: 150,
//         },
//       ],
//       rating: 4.7,
//       reviews: 500,
//     },
//     {
//       id: 2,
//       name: "Cơm Tấm Cali",
//       imageUrl: ["https://example.com/image3.jpg"],
//       email: "contact@comtamcali.com",
//       phone: "0987-123-456",
//       social: [
//         {
//           name: "Facebook",
//           link: "https://www.facebook.com/comtamcali",
//         },
//       ],
//       address: [
//         {
//           district: "Quận 3",
//           province: "Hồ Chí Minh",
//           city: "Hồ Chí Minh",
//           specificAddress: "236 Pasteur",
//         },
//       ],
//       menu: [
//         {
//           id: 0,
//           name: "Cơm tấm sườn bì chả",
//           type: "phần",
//           price: "60000",
//           currency: "đ",
//           rating: 4,
//           reviews: 300,
//         },
//         {
//           id: 1,
//           name: "Cơm tấm sườn nướng",
//           type: "phần",
//           price: "55000",
//           currency: "đ",
//           rating: 4.5,
//           reviews: 250,
//         },
//       ],
//       rating: 4.6,
//       reviews: 800,
//     },
//     {
//       id: 3,
//       name: "Bánh Mì Huỳnh Hoa",
//       imageUrl: ["https://example.com/image4.jpg"],
//       email: "contact@banhmihuynhhoa.com",
//       phone: "0923-456-789",
//       social: [
//         {
//           name: "Facebook",
//           link: "https://www.facebook.com/banhmihuynhhoa",
//         },
//       ],
//       address: [
//         {
//           district: "Quận 1",
//           province: "Hồ Chí Minh",
//           city: "Hồ Chí Minh",
//           specificAddress: "26 Lê Thị Riêng",
//         },
//       ],
//       menu: [
//         {
//           id: 0,
//           name: "Bánh mì thập cẩm",
//           type: "ổ",
//           price: "55000",
//           currency: "đ",
//           rating: 5,
//           reviews: 500,
//         },
//       ],
//       rating: 4.8,
//       reviews: 1000,
//     },
//     {
//       id: 4,
//       name: "Bún Chả Hàng Mành",
//       imageUrl: ["https://example.com/image5.jpg"],
//       email: "contact@bunchahangmanh.com",
//       phone: "0908-765-432",
//       social: [
//         {
//           name: "Instagram",
//           link: "https://www.instagram.com/bunchahangmanh",
//         },
//       ],
//       address: [
//         {
//           district: "Quận Hoàn Kiếm",
//           province: "Hà Nội",
//           city: "Hà Nội",
//           specificAddress: "1 Hàng Mành",
//         },
//       ],
//       menu: [
//         {
//           id: 0,
//           name: "Bún chả",
//           type: "phần",
//           price: "40000",
//           currency: "đ",
//           rating: 4.5,
//           reviews: {
//             reviewCount: 400,
//             reviewDetail: [
//               {
//                 id: 0,
//                 name: "Phạm Văn D",
//                 email: "user4@example.com",
//                 rating: 5,
//                 comment: "Chả thơm, nước chấm tuyệt vời.",
//               },
//             ],
//           },
//         },
//       ],
//       rating: 4.5,
//       reviews: 700,
//     },
//     {
//       id: 5,
//       name: "Nem Nướng Nha Trang",
//       imageUrl: ["https://example.com/image6.jpg"],
//       email: "contact@nemnuongnhatrang.com",
//       phone: "0934-567-890",
//       social: [
//         {
//           name: "Facebook",
//           link: "https://www.facebook.com/nemnuongnhatrang",
//         },
//       ],
//       address: [
//         {
//           district: "Quận Phú Nhuận",
//           province: "Hồ Chí Minh",
//           city: "Hồ Chí Minh",
//           specificAddress: "123 Phan Xích Long",
//         },
//       ],
//       menu: [
//         {
//           id: 0,
//           name: "Nem nướng",
//           type: "phần",
//           price: "50000",
//           currency: "đ",
//           rating: 4.2,
//           reviews: 250,
//         },
//       ],
//       rating: 4.4,
//       reviews: 600,
//     },
//   ];

//   return (
//     <div className="p-4">
//       {/*filter shops list */}
//       <div className="flex"></div>
//       {shops.map((shop) => (
//         // click on the shop card => flip card to show shop image
//         <ShopCard key={shop.id} shop={shop} />
//       ))}
//     </div>
//   );
// };

// export default FavoriteSideBar;

import React from "react";
import { IconStar, IconStarFilled } from "@tabler/icons-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import ShopeeFoodLogo from "../../assets/icons8-shopee.svg";
import GrabFoodLogo from "../../assets/grab-2.svg";

// SocialMediaIcons component to handle social media links
const SocialMediaIcons = ({ link, platform, size = "h-6 w-6" }) => {
  const iconComponents = {
    Instagram: (
      <svg viewBox="0 0 30 30" fill="currentColor" className={size}>
        <circle cx="15" cy="15" r="4"></circle>
        <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1 c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
      </svg>
    ),
    Facebook: (
      <svg viewBox="0 0 24 24" fill="currentColor" className={size}>
        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"></path>
      </svg>
    ),
    ShopeeFood: <img src={ShopeeFoodLogo} alt="ShopeeFood" className={size} />,
    GrabFood: <img src={GrabFoodLogo} alt="GrabFood" className={size} />,
  };
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors duration-300 hover:text-red-400 flex items-center">
      {iconComponents[platform]}
    </a>
  );
};

// ShopCard component to display individual shop details
const ShopCard = ({ shop }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? <IconStarFilled key={i} className="text-yellow-400" /> : <IconStar key={i} className="text-gray-300" />);
    }
    return stars;
  };
  const getGoogleMapsLink = (location) => {
    const query = `${location.specificAddress}, ${location.district}, ${location.city}`;
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  };
  return (
    <div className="relative rounded-xl animate-in zoom-in ring-1 break-inside-avoid bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 flex flex-col p-4 mb-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold mb-2 text-red-400">{shop.name}</h2>
        <div className="text-sm">
          <ul className="flex space-x-2 mt-1">
            {shop.social.map((social, index) => (
              <li key={index}>
                <SocialMediaIcons size="h-6 w-6" link={social.link} platform={social.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="text-sm mb-2">
        <strong>Địa chỉ:</strong>
        <ul>
          {shop.address.map((location, index) => (
            <li key={index}>
              <a href={getGoogleMapsLink(location)} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                {location.specificAddress}, {location.district}, {location.city}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="text-sm mb-2">
        <strong>Số điện thoại:</strong> {shop.phone}
      </div>
      <div className="text-sm mb-2">
        <strong>Thực đơn nổi bật:</strong>
        <ul>
          {shop.menu.slice(0, 2).map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} {item.currency}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-sm mb-2 flex items-center">
        <strong>Đánh giá:</strong>
        <span className="ml-2 flex">{renderStars(shop.rating)}</span>
        <span className="ml-2">({shop.reviews} đánh giá)</span>
      </div>
    </div>
  );
};

const FavoriteSideBar = () => {
  const storedUser = localStorage.getItem("user");
  if (!storedUser) {
    return null;
  }

  const shops = [
    {
      id: 0,
      name: "Bún bò Thái Anh",
      imageUrl: ["https://example.com/image1.jpg"],
      email: "contact@bunbothaianh.com",
      phone: "0909-123-456",
      social: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/shop",
        },
        {
          name: "Instagram",
          link: "https://www.instagram.com/shop",
        },
        {
          name: "ShopeeFood",
          link: "https://www.shopeefood.vn/shop",
        },
        {
          name: "GrabFood",
          link: "https://www.grab.com/vn/food",
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
          specificAddress: "456 Lê Lợi",
        },
      ],
      menu: [
        {
          id: 0,
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
                name: "Nguyễn Phi Tuấn Anh",
                email: "user1@example.com",
                rating: 4,
                comment: "Ngon lắm!",
              },
              {
                id: 1,
                name: "Trần Văn B",
                email: "user2@example.com",
                rating: 3,
                comment: "Bình thường.",
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
      rating: 4.5,
      reviews: 1000,
    },
    {
      id: 1,
      name: "Phở Gia Truyền Bát Đàn",
      imageUrl: ["https://example.com/image2.jpg"],
      email: "contact@phogiabatdan.com",
      phone: "0912-654-789",
      social: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/phogiabatdan",
        },
      ],
      address: [
        {
          district: "Quận Hoàn Kiếm",
          province: "Hà Nội",
          city: "Hà Nội",
          specificAddress: "49 Bát Đàn",
        },
      ],
      menu: [
        {
          id: 0,
          name: "Phở tái",
          type: "bát",
          price: "45000",
          currency: "đ",
          rating: 5,
          reviews: {
            reviewCount: 200,
            reviewDetail: [
              {
                id: 0,
                name: "Lê Thị C",
                email: "user3@example.com",
                rating: 5,
                comment: "Phở ngon, nước dùng đậm đà.",
              },
            ],
          },
        },
        {
          id: 1,
          name: "Phở chín",
          type: "bát",
          price: "45000",
          currency: "đ",
          rating: 4,
          reviews: 150,
        },
      ],
      rating: 4.7,
      reviews: 500,
    },
    {
      id: 2,
      name: "Cơm Tấm Cali",
      imageUrl: ["https://example.com/image3.jpg"],
      email: "contact@comtamcali.com",
      phone: "0987-123-456",
      social: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/comtamcali",
        },
      ],
      address: [
        {
          district: "Quận 3",
          province: "Hồ Chí Minh",
          city: "Hồ Chí Minh",
          specificAddress: "236 Pasteur",
        },
      ],
      menu: [
        {
          id: 0,
          name: "Cơm tấm sườn bì chả",
          type: "phần",
          price: "60000",
          currency: "đ",
          rating: 4,
          reviews: 300,
        },
        {
          id: 1,
          name: "Cơm tấm sườn nướng",
          type: "phần",
          price: "55000",
          currency: "đ",
          rating: 4.5,
          reviews: 250,
        },
      ],
      rating: 4.6,
      reviews: 800,
    },
    {
      id: 3,
      name: "Bánh Mì Huỳnh Hoa",
      imageUrl: ["https://example.com/image4.jpg"],
      email: "contact@banhmihuynhhoa.com",
      phone: "0923-456-789",
      social: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/banhmihuynhhoa",
        },
      ],
      address: [
        {
          district: "Quận 1",
          province: "Hồ Chí Minh",
          city: "Hồ Chí Minh",
          specificAddress: "26 Lê Thị Riêng",
        },
      ],
      menu: [
        {
          id: 0,
          name: "Bánh mì thập cẩm",
          type: "ổ",
          price: "55000",
          currency: "đ",
          rating: 5,
          reviews: 500,
        },
      ],
      rating: 4.8,
      reviews: 1000,
    },
    {
      id: 4,
      name: "Bún Chả Hàng Mành",
      imageUrl: ["https://example.com/image5.jpg"],
      email: "contact@bunchahangmanh.com",
      phone: "0908-765-432",
      social: [
        {
          name: "Instagram",
          link: "https://www.instagram.com/bunchahangmanh",
        },
      ],
      address: [
        {
          district: "Quận Hoàn Kiếm",
          province: "Hà Nội",
          city: "Hà Nội",
          specificAddress: "1 Hàng Mành",
        },
      ],
      menu: [
        {
          id: 0,
          name: "Bún chả",
          type: "phần",
          price: "40000",
          currency: "đ",
          rating: 4.5,
          reviews: {
            reviewCount: 400,
            reviewDetail: [
              {
                id: 0,
                name: "Phạm Văn D",
                email: "user4@example.com",
                rating: 5,
                comment: "Chả thơm, nước chấm tuyệt vời.",
              },
            ],
          },
        },
      ],
      rating: 4.5,
      reviews: 700,
    },
    {
      id: 5,
      name: "Nem Nướng Nha Trang",
      imageUrl: ["https://example.com/image6.jpg"],
      email: "contact@nemnuongnhatrang.com",
      phone: "0934-567-890",
      social: [
        {
          name: "Facebook",
          link: "https://www.facebook.com/nemnuongnhatrang",
        },
      ],
      address: [
        {
          district: "Quận Phú Nhuận",
          province: "Hồ Chí Minh",
          city: "Hồ Chí Minh",
          specificAddress: "123 Phan Xích Long",
        },
      ],
      menu: [
        {
          id: 0,
          name: "Nem nướng",
          type: "phần",
          price: "50000",
          currency: "đ",
          rating: 4.2,
          reviews: 250,
        },
      ],
      rating: 4.4,
      reviews: 600,
    },
  ];

  return (
    <div className="p-4">
      <div className="flex"></div>
      {shops.map((shop) => (
        <ShopCard key={shop.id} shop={shop} />
      ))}
    </div>
  );
};

export default FavoriteSideBar;
