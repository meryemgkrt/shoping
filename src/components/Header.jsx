import { useContext } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { BsBag } from "react-icons/bs";
const Header = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  return (
    <header className="bg-gray-300 h-12">
      <div className="">Header</div>
      <div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="cursor-pointer"
      >
        <BsBag className="text-2xl hover:scale-110 hover:text-green-500" />{" "}
      </div>
    </header>
  );
};

export default Header;
