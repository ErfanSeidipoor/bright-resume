import { NextPage } from "next";
// components
import { LogoIcon, Typography } from "@bright-resume/components";

const HomePage: NextPage = () => {
  return (
    <div>
      <Typography variant="h5" component="input" />
      <LogoIcon width={20} />
    </div>
  );
};

export default HomePage;
