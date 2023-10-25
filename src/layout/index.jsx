import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="h-screen">
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="flex relative">
        <section className="max-w-[260px] w-full h-full fixed top-0 left-0 z-50 mt-[65px]">
          <Sidebar />
        </section>

        <section className="grow bg-[rgb(245, 245, 245)] p-5 ml-[260px] mt-[65px]">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
