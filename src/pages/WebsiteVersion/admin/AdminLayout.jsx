// export default AdminLayout;
import { useState } from "react";
import { Outlet } from "react-router-dom"; // Import Outlet
import AdminHeader from "../../../components/admin/AdminHeader";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import AdminDashboard from "./AdminDashboard";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <AdminSidebar isOpen={sidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader toggleSidebar={toggleSidebar} />
        <div className="p-4 flex-1 overflow-auto">
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
