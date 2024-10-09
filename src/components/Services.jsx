import React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";

function Services() {
  const oneMonthPrice = 29000; // Giá gói 1 tháng
  const plans = [
    {
      title: "Gói cơ bản",
      price: 0,
      duration: 0,
      benefits: ["Random món ăn", "Tìm kiếm món ăn", "Thông tin quán cơ bản", "10 lượt random/ngày"],
    },
    {
      title: "Gói 1 tháng",
      price: 29000,
      duration: 1,
      benefits: ["Tất cả tính năng từ Gói cơ bản", "Random món ăn nâng cao", "Thông tin chi tiết về quán", "Lưu lịch sử tìm kiếm", "20 lượt random/ngày"],
    },
    {
      title: "Gói 6 tháng",
      price: 99000,
      duration: 6,
      benefits: ["Tất cả tính năng từ Gói 1 tháng", "Danh sách yêu thích", "Thông báo ưu đãi", "Bản đồ tương tác", "30 lượt random/ngày"],
    },
    {
      title: "Gói 12 tháng",
      price: 169000,
      duration: 12,
      benefits: ["Tất cả tính năng từ Gói 6 tháng", "So sánh quán ăn", "Ưu đãi đặc biệt từ đối tác", "Khám phá món ăn “hot trend”", "Hỗ trợ khách hàng 24/7", "Không giới hạn lượt random/ngày"],
    },
  ];

  const formatCurrency = (amount) => {
    return amount.toLocaleString("vi-VN") + "đ";
  };

  const [selectedPlan, setSelectedPlan] = React.useState(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleChoosePlan = (plan) => {
    setSelectedPlan(plan);
    setIsDialogOpen(true);
  };

  const handleConfirmPlan = () => {
    alert(`Bạn đã chọn ${selectedPlan.title}`);
    // Thực hiện logic đăng ký gói ở đây
    setIsDialogOpen(false);
  };

  return (
    <section className="mt-28 max-md:mt-10">
      <div className="mt-16">
        <h2 className="flex justify-center text-lg font-medium text-red-400">CÁC GÓI NÂNG CẤP</h2>
        <h3 className="flex justify-center mt-4 ml-12 text-4xl font-bold text-black max-md:max-w-full">
          Nâng cao trải nghiệm của bạn chỉ từ <span className="text-red-400 ml-2 italic">29,000₫/tháng</span>
        </h3>
        <div className="flex justify-center gap-5 mt-8 max-md:flex-col">
          {plans.map((plan, index) => {
            // Tính giá theo tháng
            const monthlyPrice = plan.duration > 0 ? plan.price / plan.duration : 0;
            // Định dạng hiển thị giá
            let priceDisplay = "";
            if (plan.duration === 0) {
              priceDisplay = "Free";
            } else {
              priceDisplay = `${formatCurrency(plan.price)}`;
            }
            // Tính phần trăm tiết kiệm so với gói 1 tháng
            let percentageSaved = null;
            if (plan.duration > 1) {
              const totalOneMonthPrice = oneMonthPrice * plan.duration;
              const savings = totalOneMonthPrice - plan.price;
              percentageSaved = Math.round((savings / totalOneMonthPrice) * 100);
            }
            return (
              <div
                key={index}
                className="animate-in zoom-in ring-1 rounded flex flex-col justify-between p-6 bg-white hover:ring-2 ring-gray-300 hover:ring-red-400 transition duration-200 hover:shadow-md"
                style={{ minHeight: "400px" }}
              >
                <div>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold mb-3">{plan.title}</h3>
                    <div>
                      {percentageSaved && (
                        <span className="inline-flex items-center rounded-md bg-pink-50 px-2 py-1 text-xs font-medium text-pink-700 ring-1 ring-inset ring-pink-700/10">
                          Tiết kiệm {percentageSaved}%
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-red-400 text-lg font-semibold mb-4">{priceDisplay}</p>
                  <ul className="text-gray-700 mb-4 list-disc list-inside">
                    {plan.benefits.map((benefit, i) => (
                      <li key={i} className="mb-2">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto">
                  {plan.duration === 0 ? (
                    <div className="flex items-center gap-3 px-4 py-2 border border-gray-200 bg-white shadow-sm text-base font-semibold rounded hover:text-red-400 hover:border-red-400 transition-colors duration-300">
                      Gói hiện tại của bạn
                    </div>
                  ) : (
                    <button onClick={() => handleChoosePlan(plan)} className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-500 transition-colors w-full">
                      Đăng ký
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedPlan && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Xác nhận đăng ký</DialogTitle>
              <DialogDescription>
                Bạn có chắc chắn muốn đăng ký <strong>{selectedPlan.title}</strong> với giá <strong>{formatCurrency(selectedPlan.price)}</strong>?
              </DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <p className="font-semibold">Lợi ích của gói:</p>
              <ul className="list-disc list-inside">
                {selectedPlan.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
            <DialogFooter>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="flex items-center gap-3 px-4 py-2 border border-gray-200 bg-white shadow-sm text-sm font-semibold rounded hover:text-red-400 hover:border-red-400 transition-colors duration-300"
              >
                Hủy bỏ
              </button>
              <button onClick={handleConfirmPlan} className="bg-red-400 text-white py-2 px-4 rounded hover:bg-red-500 transition-colors">
                Xác nhận
              </button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

export default Services;
