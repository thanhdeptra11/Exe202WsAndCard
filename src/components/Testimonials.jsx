import React from "react";
import { IconMapPin } from "@tabler/icons-react"; // Import icon

const Testimonials = () => {
  const sampleData = [
    {
      id: 1,
      name: "Nguyễn Văn An",
      avatarURL: "https://avatar.iran.liara.run/public/18",
      username: "@NguyenAn",
      content: "Tôi rất ấn tượng với món phở ở nhà hàng này. Nước dùng đậm đà và hương vị thật khó quên. Đây chắc chắn sẽ là điểm đến yêu thích của tôi mỗi cuối tuần.",
      restaurant: "Nhà hàng Phở Việt",
      dish: "Phở bò",
      blogLink: "#",
    },
    {
      id: 2,
      name: "Trần Hữu Đạt",
      avatarURL: "https://avatar.iran.liara.run/public/12",
      username: "@TranDat",
      content: "Bún chả tại đây thực sự ngon, thịt nướng thơm phức, nước chấm đậm đà và vừa miệng. Tôi đã giới thiệu cho nhiều bạn bè và ai cũng thích.",
      restaurant: "Quán Bún Chả Hà Nội",
      dish: "Bún chả",
      blogLink: "#",
    },
    {
      id: 3,
      name: "Lê Minh Hải",
      avatarURL: "https://avatar.iran.liara.run/public/26",
      username: "@LeHai",
      content: "Nhà hàng phục vụ rất nhanh và chuyên nghiệp. Món bánh xèo của họ là món tôi yêu thích nhất, giòn rụm và đầy đặn. Rất đáng thử!",
      restaurant: "Nhà hàng Bánh Xèo Miền Tây",
      dish: "Bánh xèo",
      blogLink: "#",
    },
    {
      id: 4,
      name: "Phạm Thị Hoa",
      avatarURL: "https://avatar.iran.liara.run/public/42",
      username: "@PhamHoa",
      content: "Cơm tấm ở đây thật sự rất ngon, đặc biệt là sườn nướng mềm và thơm. Tôi đã có một bữa ăn tuyệt vời và sẽ quay lại nhiều lần nữa.",
      restaurant: "Quán Cơm Tấm Sài Gòn",
      dish: "Cơm tấm sườn nướng",
      blogLink: "#",
    },
    {
      id: 5,
      name: "Hoàng Văn Long",
      avatarURL: "https://avatar.iran.liara.run/public/37",
      username: "@HoangLong",
      content: "Món lẩu Thái cay cay chua chua thật hoàn hảo cho những buổi tối se lạnh. Đồ ăn kèm cũng rất phong phú và tươi ngon.",
      restaurant: "Nhà hàng Lẩu Thái Lan",
      dish: "Lẩu Thái",
      blogLink: "#",
    },
    {
      id: 6,
      name: "Nguyễn Thị Mai",
      avatarURL: "https://avatar.iran.liara.run/public/51",
      username: "@NguyenMai",
      content: "Tôi rất thích bánh cuốn ở đây, bánh mỏng và nhân rất vừa miệng. Không gian nhà hàng cũng rất ấm cúng và phục vụ chu đáo.",
      restaurant: "Quán Bánh Cuốn Tây Hồ",
      dish: "Bánh cuốn",
      blogLink: "#",
    },
    {
      id: 7,
      name: "Đặng Hoàng Nam",
      avatarURL: "https://avatar.iran.liara.run/public/86",
      username: "@DangNam",
      content: "Món bún bò Huế đúng chuẩn vị miền Trung. Nước lèo đậm đà và thịt bò rất mềm. Tôi sẽ ghé lại để thử thêm các món khác.",
      restaurant: "Quán Bún Bò Huế O Hoa",
      dish: "Bún bò Huế",
      blogLink: "#",
    },
    {
      id: 8,
      name: "Trần Văn Dũng",
      avatarURL: "https://avatar.iran.liara.run/public/85",
      username: "@TranDung",
      content: "Không thể bỏ qua món chả giò tại nhà hàng này, giòn tan và hương vị thơm ngon. Món ăn vừa đẹp mắt vừa ngon miệng.",
      restaurant: "Nhà hàng Chả Giò Hà Nội",
      dish: "Chả giò",
      blogLink: "#",
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
