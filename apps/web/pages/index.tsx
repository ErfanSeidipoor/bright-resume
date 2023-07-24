import { NextPage } from 'next';
// components
import { Button, LogoIcon, Typography } from '@bright-resume/components';

const HomePage: NextPage = () => {
  return (
    <div>
      <Button>as</Button>
      <Typography variant="h2">Hi</Typography>
      <LogoIcon width={20} />
    </div>
  );
};

export default HomePage;
