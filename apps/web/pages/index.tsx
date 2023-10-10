import { Menu, useTheme } from "@bright-resume/components";
import React, { useState } from "react";

const HomePage = () => {
  const {
    themeColor,
    fontWeight,
    fontFamily,
    changeThemeColor,
    changeFontWeight,
    changeFontFamily,
  } = useTheme();

  return (
    <div>
      <Menu
        sections={[]}
        color={themeColor}
        fontWeight={fontWeight}
        fontFamily={fontFamily}
        onChangeColor={changeThemeColor}
        onChangeFontWeight={changeFontWeight}
        onChangeFontFamily={changeFontFamily}
        onChangeSections={() => undefined}
      />
    </div>
  );
};

export default HomePage;
