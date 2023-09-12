import { NextPage } from "next";
// components
import {
  LogoIcon,
  Typography,
  Menu,
  ThemeProvider,
} from "@bright-resume/components";

const HomePage: NextPage = () => {
  return (
    <ThemeProvider>
      <Menu />
    </ThemeProvider>
  );
};

export default HomePage;
