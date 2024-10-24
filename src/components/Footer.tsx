import React from "react";
import { useMediaQuery } from "react-responsive";
import MobileFooter from "./UI/MobileFooter";
import DesktopFooter from "./UI/DesktopFooter";
const Footer: React.FC = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 495px)" });

  return isDesktop ? <DesktopFooter /> : <MobileFooter />;
};

export default Footer;
