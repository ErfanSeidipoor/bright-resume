import { NextPage } from 'next';
// components
import { Button, LogoIcon, Typography } from '@bright-resume/components';

const HomePage: NextPage = () => {
  return (
    <div>
      <Button>as</Button>
      <Typography variant="h7">Hi</Typography>
      <Typography variant="h8">Hi</Typography>
      <Typography variant="h9">Hi</Typography>
      <LogoIcon width={20} />
    </div>
  );
};

export default HomePage;
