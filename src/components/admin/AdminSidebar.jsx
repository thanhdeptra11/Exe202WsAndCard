import { Link } from "react-router-dom";
import { IconHome, IconUsers, IconChartBar, IconSettings } from "@tabler/icons-react";

const sidebarItems = [
  { name: "Home", icon: IconHome, link: "/" },
  { name: "Users", icon: IconUsers, link: "/admin/users" },
  { name: "Shop", icon: IconSettings, link: "/admin/shop" },
  { name: "Analytics", icon: IconChartBar, link: "/admin/analytics" },
];

function AdminSidebar({ isOpen }) {
  return (
    <aside className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${isOpen ? "" : "hidden"}`}>
      <nav>
        <ul className="space-y-2">
          {sidebarItems.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className="flex items-center p-2 hover:bg-gray-700 rounded">
                <item.icon className="mr-2" />
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
