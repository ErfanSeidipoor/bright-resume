import { Menu, useTheme, Typography } from "@bright-resume/components";

const HomePage = () => {
  const {
    themeColor,
    fonSize,
    fontFamily,
    changeThemeColor,
    changeFontSize,
    changeFontFamily,
  } = useTheme();

  return (
    <div>
      <Typography variant="h1">h1</Typography>
      <Typography variant="h2">h2</Typography>
      <Typography variant="h3">h3</Typography>
      <Typography variant="h4">h4</Typography>
      <Typography variant="h5">h5</Typography>
      <Typography variant="h6">h6</Typography>
      <Typography variant="h7">h7</Typography>
      <Menu
        user={{
          fullName: "Simon",
          avatar: { src: "/assets/image/person.png", alt: "Simon" },
        }}
        sections={[]}
        color={themeColor}
        fonSize={fonSize}
        fontFamily={fontFamily}
        onChangeColor={changeThemeColor}
        onChangeFontSize={changeFontSize}
        onChangeFontFamily={changeFontFamily}
        onChangeSections={() => undefined}
      />
    </div>
  );
};

export default HomePage;
