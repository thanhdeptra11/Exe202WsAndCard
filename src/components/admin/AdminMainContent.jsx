function AdminMainContent() {
  return (
    <main className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Total Users</h3>
          <p className="text-3xl">1,234</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Revenue</h3>
          <p className="text-3xl">$56,789</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-2">Active Projects</h3>
          <p className="text-3xl">23</p>
        </div>
      </div>
    </main>
  );
}

export default AdminMainContent;
