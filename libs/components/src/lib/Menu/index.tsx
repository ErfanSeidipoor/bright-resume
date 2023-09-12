// components
import {
  LogoIcon,
  BlueCircleIcon,
  NotebookIcon,
  DownloadCircleIcon,
  UserCircleIcon,
  SaveIcon,
} from "../Icons";
// locals
import classes from "./index.module.scss";
import { texts } from "./index.texts";

export type MenuProps = {
  isLoggedIn?: boolean;
};

export type MenuItem = {
  title?: React.ReactNode;
  text?: string;
  isHidden?: boolean;
};

export const Menu: React.FC<MenuProps> = ({ isLoggedIn = false }) => {
  const menuItems: MenuItem[] = [
    { title: <LogoIcon width="25px" height="25px" /> },
    {
      title: <BlueCircleIcon width="28px" height="28px" />,
      text: texts.color,
    },
    {
      title: <NotebookIcon width="30px" height="30px" />,
      text: texts.sections,
    },
    {
      title: <div className={classes.select}>Select</div>,
      text: texts.font,
    },
    {
      title: <div className={classes.select}>Select</div>,
      text: texts.size,
    },
    {
      title: <DownloadCircleIcon width="30px" height="30px" />,
      text: texts.download,
    },
    {
      title: <UserCircleIcon width="30px" height="30px" />,
      text: texts.login,
      isHidden: !isLoggedIn,
    },
    {
      title: (
        <img
          className={classes.person}
          src="/assets/image/person.png"
          width="20px"
          height="20px"
          alt="user"
        />
      ),
      text: "Simon",
      isHidden: isLoggedIn,
    },
    {
      title: <SaveIcon width="30px" height="30px" />,
      text: texts.save,
      isHidden: isLoggedIn,
    },
  ];

  const renderMenuItem = (
    { title, text, isHidden }: MenuItem,
    index: number
  ) => {
    if (isHidden) return;
    return (
      <div key={`menu-${index}`}>
        {title && <div>{title}</div>}
        {text && <div className={classes.text}>{text}</div>}
      </div>
    );
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {menuItems.map((menuItem, index) => renderMenuItem(menuItem, index))}
      </div>
    </div>
  );
};

export default Menu;
