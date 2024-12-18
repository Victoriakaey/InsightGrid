import Dashboard from "./components/dashboard/dashboard";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <main className="flex h-full">
        <Sidebar />
        <div className="flex-1 flex-col">
          <Navbar />
          <Dashboard />
        </div>
      </main>
    </div>
  );
}
