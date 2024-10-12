import { Link } from "react-router-dom";
import { IconHome, IconUsers, IconChartBar, IconSettings } from "@tabler/icons-react";

function AdminSidebar({ isOpen }) {
  return (
    <aside className={`bg-gray-800 text-white w-64 min-h-screen p-4 ${isOpen ? "" : "hidden"}`}>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <IconHome className="mr-2" /> Home
            </Link>
          </li>
          <li>
            <Link to="/users" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <IconUsers className="mr-2" /> Users
            </Link>
          </li>
          <li>
            <Link to="/analytics" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <IconChartBar className="mr-2" /> Analytics
            </Link>
          </li>
          <li>
            <Link to="/settings" className="flex items-center p-2 hover:bg-gray-700 rounded">
              <IconSettings className="mr-2" /> Settings
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default AdminSidebar;
