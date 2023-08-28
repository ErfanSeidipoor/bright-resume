import { NextPage } from "next";
// components
import { Button, LogoIcon, Typography } from "@bright-resume/components";

const HomePage: NextPage = () => {
  return (
    <div>
      <Typography variant="h5" component="input" />
      <LogoIcon width={20} />
      <Button>click</Button>
    </div>
  );
};

export default HomePage;
