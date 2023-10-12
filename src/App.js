import { useState } from "react";
import "./App.css";
import {
  BsArrowLeftShort,
  BsSearch,
  BsChevronDown,
  BsFillImageFill,
  BsReverseLayoutTextSidebarReverse,
  BsPerson,
} from "react-icons/bs";
import {
  AiFillEnvironment,
  AiOutlineBarChart,
  AiOutlineFileText,
  AiOutlineLogout,
  AiOutlineMail,
  AiOutlineSetting,
} from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";

function App() {
  const [Open, setOpen] = useState(false);
  const [submenuOpen, setsubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard" },
    { title: "Pages", icon: <AiOutlineFileText /> },
    { title: "Media", spacing: true, icon: <BsFillImageFill /> },
    {
      title: "Projects",
      icon: <BsReverseLayoutTextSidebarReverse />,
      submenu: true,
      submenuItems: [
        { title: "submenu 1" },
        { title: "submenu 2" },
        { title: "submenu 3" },
      ],
    },
    { title: "Analytics", icon: <AiOutlineBarChart /> },
    { title: "Inbox", icon: <AiOutlineMail /> },
    { title: "Profile", spacing: true, icon: <BsPerson /> },
    { title: "Setting", icon: <AiOutlineSetting /> },
    { title: "Logout", icon: <AiOutlineLogout /> },
  ];
  return (
    <>
      <div className="flex">
        <div
          className={`p-5 pt-8 bg-dark-purple h-[100%] ${
            Open ? "w-72" : "w-20"
          } duration-300 relative`}
        >
          <BsArrowLeftShort
            onClick={() => setOpen(!Open)}
            className={`text-3xl bg-white rounded-full absolute top-3 -right-3 border border-dark-purple cursor-pointer ${
              !Open && "rotate-180"
            }`}
          />
          <div className="inline-flex">
            <AiFillEnvironment
              className={`bg-amber-300 text-3xl rounded block float-left mr-2 duration-500 ${
                Open && "rotate-[360deg]"
              }`}
            />
            <h1
              className={`text-white origin-left font-medium text-2xl duration-300 ${
                !Open && "scale-0"
              }`}
            >
              Tailwind
            </h1>
          </div>

          <div
            className={`flex items-center bg-light-white rounded-md mt-6 px-4 py-2 ${
              !Open ? "px-2.5" : "px-4"
            }`}
          >
            <BsSearch
              className={`text-white text-lg block float-left cursor-pointer ${
                Open && "mr-2"
              }`}
            />

            <input
              type={"search"}
              placeholder="Search"
              className={`text-base bg-transparent w-full focus:outline-none text-white ${
                !Open && "hidden"
              }`}
            />
          </div>

          <ul className="pt-2">
            {Menus.map((menu, index) => (
              <>
                <li
                  key={index}
                  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
                    menu.spacing ? "mt-7" : "mt-1"
                  }`}
                >
                  <span className="text-2xl block float-left">
                    {menu.icon ? menu.icon : <RiDashboardFill />}
                  </span>
                  <span
                    className={`text-base font-medium flex-1 duration-300 ${
                      !Open && "scale-0"
                    }`}
                  >
                    {menu.title}
                  </span>
                  {menu.submenu && Open && (
                    <BsChevronDown
                      className={`${submenuOpen && "rotate-180"}`}
                      onClick={() => setsubmenuOpen(!submenuOpen)}
                    />
                  )}
                </li>

                {menu.submenu && submenuOpen && Open && (
                  <ul>
                    {menu.submenuItems.map((submenuItem, index) => (
                      <li
                        key={index}
                        className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-light-white rounded-md"
                      >
                        {submenuItem.title}
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ))}
          </ul>
        </div>
        <div className="p-7">Home Page</div>
      </div>
    </>
  );
}

export default App;
