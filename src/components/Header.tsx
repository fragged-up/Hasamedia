import { useMediaQuery } from "react-responsive";
import MobileHeader from "./UI/MobileHeader";
import DesktopHeader from "./UI/DesktopHeader";
const Header: React.FC = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1024px)" });

  return isDesktop ? <DesktopHeader /> : <MobileHeader />;
};

export default Header;
