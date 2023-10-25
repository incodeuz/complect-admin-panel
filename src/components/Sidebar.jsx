import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const { routes } = useSelector((state) => state.routes);
  console.log(routes);
  return (
    <div className="bg-[#262e41] h-screen sticky p-3">
      <div className="h-full relative">
        {routes[0].children.map((route, index) => {
          if (route.name !== "SingleProduct") {
            return (
              <NavLink
                to={route.path}
                key={index}
                className="side-item flex items-center gap-3 cursor-pointer px-3 py-2 my-3"
              >
                <i className={`${route.icon} text-[24px] p-0`}></i>
                <p className="text-[20px]  p-0">{route.name}</p>
              </NavLink>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Sidebar;
