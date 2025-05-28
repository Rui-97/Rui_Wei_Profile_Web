import type { NavId } from "@/types/navigation";

interface NavItemProps {
  navId: NavId;
  setHovered: (item: NavId) => void;
  hovered: NavId;
  activeSection: NavId;
}

const NavItem = ({
  navId,
  setHovered,
  hovered,
  activeSection,
}: NavItemProps) => {
  return (
    <a
      href={`#${navId}`}
      className="group flex items-center hover:cursor-pointer"
      onMouseEnter={() => setHovered(navId)}
      onMouseLeave={() => setHovered("")}
    >
      <div
        className={`h-0.5 transition-all duration-500 ease-in-out ${
          hovered === navId || activeSection === navId
            ? "w-20 bg-highlight"
            : "w-10 bg-main"
        }`}
      />
      <p
        className={`ml-3 font-bold ${
          hovered === navId || activeSection === navId
            ? "text-highlight"
            : "text-main"
        }`}
      >
        {navId.toUpperCase()}
      </p>
    </a>
  );
};

export default NavItem;
