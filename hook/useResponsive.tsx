import { useMediaQuery } from "react-responsive";

export default function useResponsive() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return { isTabletOrMobile, isMobile };
}
