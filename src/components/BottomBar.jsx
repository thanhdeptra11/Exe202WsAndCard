import React, { useState } from 'react';
import { IconHome, IconBrandTinder, IconToolsKitchen2, IconPhoneOutgoing } from '@tabler/icons-react';

function BottomBar() {
  const [selected, setSelected] = useState(null);

  const navItems = [
    { label: 'Trang Chủ', icon: <IconHome size={30} stroke={2} />, href: '#trang chủ' },
    { label: 'Ăn Gì', icon: <IconToolsKitchen2 size={30} stroke={2} />, href: '#ăn gì' },
    { label: 'Yêu Thích', icon: <IconBrandTinder size={30} stroke={2} />, href: '#yêu thích' },
    { label: 'Liên Hệ', icon: <IconPhoneOutgoing size={30} stroke={2} />, href: '#liên hệ' },
  ];

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-[#EAEAEC] rounded-full shadow-lg p-3 flex justify-around items-center space-x-4">
      {navItems.map((item, index) => (
        <a
          key={index}
          href={item.href}
          onClick={() => setSelected(index)}
          className={`rounded-full flex flex-col items-center justify-center text-orange-400 hover:text-white transition-colors duration-300 ${
            selected === index ? 'border-2 border-white bg-orange-400 rounded-full p-2' : ''
          }`}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}

export default BottomBar;


