import { IconMenu2, IconUser } from "@tabler/icons-react";

function AdminHeader({ toggleSidebar }) {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4">
          <IconMenu2 size={24} />
        </button>
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </div>
      <div className="flex items-center">
        <IconUser size={24} className="mr-2" />
        <span>Admin User</span>
      </div>
    </header>
  );
}

export default AdminHeader;
