import React from "react";
import { IconMapPin } from "@tabler/icons-react"; // Import icon

const Testimonials = () => {
  const sampleData = [
    {
    "id": 1,
    "name": "Nguyễn Văn An",
    "avatarURL": "https://avatar.iran.liara.run/public/18",
    "username": "@NguyenAn",
    "content": "Tham gia workshop của HealMe tại FPTU HOLA là một trải nghiệm tuyệt vời. Tôi học được cách lắng nghe bản thân và cảm thấy nhẹ nhõm hơn rất nhiều.",
    "restaurant": "FPTU HOLA",
    "dish": "workshop",
    "blogLink": ""
  },
  {
    "id": 2,
    "name": "Trần Hữu Đạt",
    "avatarURL": "https://avatar.iran.liara.run/public/12",
    "username": "@TranDat",
    "content": "Bộ bài Healing của HealMe thực sự giúp tôi hiểu rõ hơn về cảm xúc của mình. Mỗi lá bài như một người bạn đồng hành trong hành trình chữa lành.",
    "restaurant": "FPTU HOLA",
    "dish": "bộ bài",
    "blogLink": ""
  },
  {
    "id": 3,
    "name": "Lê Minh Hải",
    "avatarURL": "https://avatar.iran.liara.run/public/26",
    "username": "@LeHai",
    "content": "Bộ bài của HealMe thật sự rất ý nghĩa. Dù chỉ mới bắt đầu hành trình chữa lành, nhưng tôi cảm thấy được kết nối và an yên hơn.",
    "restaurant": "FPTU HOLA",
    "dish": "bộ bài",
    "blogLink": ""
  },
  {
    "id": 4,
    "name": "Phạm Thị Hoa",
    "avatarURL": "https://avatar.iran.liara.run/public/42",
    "username": "@PhamHoa",
    "content": "Tôi đã tham gia workshop của HealMe tại FPTU HOLA và thật sự xúc động. Không gian chữa lành và chia sẻ rất chân thật và đáng quý.",
    "restaurant": "FPTU HOLA",
    "dish": "workshop",
    "blogLink": ""
  },
  {
    "id": 5,
    "name": "Hoàng Văn Long",
    "avatarURL": "https://avatar.iran.liara.run/public/37",
    "username": "@HoangLong",
    "content": "Buổi workshop giúp tôi kết nối lại với chính mình. Cảm ơn HealMe vì một hành trình tuyệt đẹp tại FPTU HOLA.",
    "restaurant": "FPTU HOLA",
    "dish": "workshop",
    "blogLink": ""
  },
  {
    "id": 6,
    "name": "Nguyễn Thị Mai",
    "avatarURL": "https://avatar.iran.liara.run/public/51",
    "username": "@NguyenMai",
    "content": "Bộ bài của HealMe mang lại cảm giác gần gũi và dễ hiểu. Một cách tiếp cận nhẹ nhàng nhưng sâu sắc đến tâm hồn.",
    "restaurant": "FPTU HOLA",
    "dish": "bộ bài",
    "blogLink": ""
  },
  {
    "id": 7,
    "name": "Đặng Hoàng Nam",
    "avatarURL": "https://avatar.iran.liara.run/public/86",
    "username": "@DangNam",
    "content": "Mỗi lá bài như một lời nhắn nhủ đầy yêu thương. Tôi rất biết ơn vì đã tìm thấy bộ bài của HealMe.",
    "restaurant": "FPTU HOLA",
    "dish": "bộ bài",
    "blogLink": ""
  },
  {
    "id": 8,
    "name": "Trần Văn Dũng",
    "avatarURL": "https://avatar.iran.liara.run/public/85",
    "username": "@TranDung",
    "content": "Không gian workshop của HealMe thật sự chữa lành. Tôi cảm thấy được thấu hiểu và chia sẻ, điều mà lâu rồi tôi chưa có.",
    "restaurant": "FPTU HOLA",
    "dish": "workshop",
    "blogLink": ""
  },
  {
    "id": 9,
    "name": "Lê Văn Đông",
    "avatarURL": "https://avatar.iran.liara.run/public/85",
    "username": "@LeDong",
    "content": "Tôi đã sử dụng bộ bài của HealMe mỗi sáng để soi chiếu tâm trạng. Một thói quen mới nhưng rất đáng giá.",
    "restaurant": "FPTU HOLA",
    "dish": "bộ bài",
    "blogLink": ""
  },
  ];

  return (
    <div className="container mx-auto max-w-6xl p-4 mt-24">
      <h2 className="flex justify-center text-lg font-medium text-red-400">PHẢN HỒI</h2>
      <h3 className="flex justify-center text-4xl font-bold text-black my-4">Khách Hàng Nói Gì?</h3>
      <div className="md:columns-2 lg:columns-3 gap-6 p-4 sm:p-1 mt-2">
        {sampleData.map((blog) => (
          <div
            key={blog.id}
            className="animate-in zoom-in ring-1 rounded-lg flex flex-col space-y-2 p-4 break-inside-avoid mb-6 bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transform duration-200 hover:shadow-sky-200 hover:shadow-md z-0 relative"
          >
            <div className="flex flex-col break-inside-avoid-page z-0 relative">
              <div className="flex justify-between">
                <div className="flex space-x-6">
                  <div className="flex space-x-4 flex-shrink-0 w-52">
                    <img src={blog.avatarURL} className="w-10 h-10 rounded-full" alt={`${blog.name}'s avatar`} />
                    <div>
                      <div className="font-semibold">{blog.name}</div>
                      <div className="text-sm">{blog.username}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Thông tin tên quán ăn và món ăn */}
              <div className="flex items-center mt-4">
                <IconMapPin className="text-red-500 mr-2" /> {/* Icon quán ăn */}
                <p className="text-sm text-gray-700">
                  {blog.restaurant} - <strong>{blog.dish}</strong>
                </p>
              </div>
              {/* Nội dung đánh giá */}
              <a href={blog.blogLink} target="_blank" rel="noopener noreferrer" className="whitespace-pre-line break-inside-avoid-page mt-2">
                {blog.content}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
