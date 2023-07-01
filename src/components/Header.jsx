import { useEffect, useState } from "react";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  // nav mobile state
  const [navMobile, setNavMobile] = useState(false);

  // Scroll event
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive
          ? "bg-[#02175D] h-[90px] lg:h-[90px]"
          : "bg-none h-[90px] lg:h-[90px]"
      } fixed left-0 right-0 ${
        navMobile ? "bg-white" : ""
      } z-10 w-full mx-auto transition-all duration-300`}
    ></header>
  );
};

export default Header;
