import cls from "classnames";
// components
import {
  LogoIcon,
  BlueCircleIcon,
  NotebookIcon,
  DownloadCircleIcon,
  UserCircleIcon,
  SaveIcon,
  GreenCircleIcon,
  PurpleCircleIcon,
  GoldCircle,
  GreyCircleIcon,
  CheckIcon,
} from "../Icons";
import Typography from "../Typography";
// types //TODO => change type path
import { FontFamily, FonSize, ThemeColor } from "../../index.type";
// locals
import { texts } from "./index.texts";
import { useData } from "./index.hook";
import classes from "./index.module.scss";
import Popup from "../Popup";

type Avatar = {
  src: string;
  alt: string;
};

type User = {
  avatar: Avatar;
  fullName: string;
};

export type MenuItem = {
  title?: React.ReactNode;
  text?: string;
  isHidden?: boolean;
  popup?: React.ReactNode;
  onClick?: () => void;
};

export type MenuProps = {
  isLoggedIn?: boolean;
  user?: User;
  color: ThemeColor;
  onChangeColor: (color: ThemeColor) => void;
  sections: string[];
  onChangeSections: (sections: string[]) => void;
  fontFamily: FontFamily;
  onChangeFontFamily: (fontFamily: FontFamily) => void;
  fonSize: FonSize;
  onChangeFontSize: (fonSize: FonSize) => void;
};

export const Menu: React.FC<MenuProps> = ({
  isLoggedIn = true,
  user = { fullName: "", avatar: { src: "", alt: "" } },
  color,
  onChangeColor,
  sections,
  onChangeSections,
  fontFamily,
  onChangeFontFamily,
  fonSize,
  onChangeFontSize,
}) => {
  const data = useData();

  const renderMenuItem = ({
    title,
    text,
    isHidden,
    popup,
    onClick,
  }: MenuItem) => {
    if (isHidden) return;
    return (
      <div>
        {popup}
        <div className={classes.menu__content} onClick={onClick}>
          {title && <Typography component="div">{title}</Typography>}
          {text && <Typography>{text}</Typography>}
        </div>
      </div>
    );
  };

  const renderLogo = () => {
    return renderMenuItem({ title: <LogoIcon width="32px" height="32px" /> });
  };

  const renderColor = () => {
    return renderMenuItem({
      title: <BlueCircleIcon width="35px" height="35px" />,
      text: texts.color,
      popup: (
        <Popup
          className={cls(classes.popup, classes.colors__container)}
          isOpen={data.isOpenColorPicker}
          onClose={data.handleToggleColorPicker}
        >
          <div
            className={classes.color__icon_container}
            onClick={() => onChangeColor(ThemeColor.blue)}
          >
            <BlueCircleIcon />
            {color === ThemeColor.blue && (
              <CheckIcon className={classes.color__icon} />
            )}
          </div>
          <div
            className={classes.color__icon_container}
            onClick={() => onChangeColor(ThemeColor.green)}
          >
            <GreenCircleIcon />
            {color === ThemeColor.green && (
              <CheckIcon className={classes.color__icon} />
            )}
          </div>
          <div
            className={classes.color__icon_container}
            onClick={() => onChangeColor(ThemeColor.purple)}
          >
            <PurpleCircleIcon />
            {color === ThemeColor.purple && (
              <CheckIcon className={classes.color__icon} />
            )}
          </div>
          <div
            className={classes.color__icon_container}
            onClick={() => onChangeColor(ThemeColor.gold)}
          >
            <GoldCircle />
            {color === ThemeColor.gold && (
              <CheckIcon className={classes.color__icon} />
            )}
          </div>
          <div
            className={classes.color__icon_container}
            onClick={() => onChangeColor(ThemeColor.grey)}
          >
            <GreyCircleIcon />
            {color === ThemeColor.grey && (
              <CheckIcon className={classes.color__icon} />
            )}
          </div>
        </Popup>
      ),
      onClick: data.handleToggleColorPicker,
    });
  };

  const renderSections = () => {
    return renderMenuItem({
      title: <NotebookIcon width="34px" height="34px" />,
      popup: (
        <Popup
          className={classes.popup}
          isOpen={data.isOpenSectionsPicker}
          onClose={data.handleToggleSectionsPicker}
        >
          Sections
        </Popup>
      ),
      text: texts.sections,
      onClick: data.handleToggleSectionsPicker,
    });
  };

  const renderFont = () => {
    return renderMenuItem({
      popup: (
        <Popup
          className={classes.popup}
          isOpen={data.isOpenFontFamilyPicker}
          onClose={data.handleToggleFontFamilyPicker}
        >
          {Object.values(FontFamily).map((currentFontFamily) => (
            <Typography
              className={cls(classes.font, {
                [classes.font__active]: currentFontFamily === fontFamily,
              })}
              onClick={() => onChangeFontFamily(currentFontFamily)}
            >
              {currentFontFamily}
            </Typography>
          ))}
        </Popup>
      ),
      title: <div className={classes.select}>Change</div>,
      text: texts.font,
      onClick: data.handleToggleFontFamilyPicker,
    });
  };

  const renderSize = () => {
    return renderMenuItem({
      popup: (
        <Popup
          className={classes.popup}
          isOpen={data.isOpenFontSizePicker}
          onClose={data.handleToggleFontSizePicker}
        >
          {Object.values(FonSize).map((currentFontSize) => (
            <Typography
              className={cls(classes.font, {
                [classes.font__active]: currentFontSize === fonSize,
              })}
              onClick={() => onChangeFontSize(currentFontSize)}
            >
              {currentFontSize}
            </Typography>
          ))}
        </Popup>
      ),
      title: <div className={classes.select}>Change</div>,
      text: texts.size,
      onClick: data.handleToggleFontSizePicker,
    });
  };

  const renderDownload = () => {
    return renderMenuItem({
      title: <DownloadCircleIcon width="34px" height="34px" />,
      text: texts.download,
    });
  };

  const renderLogin = () => {
    return renderMenuItem({
      title: <UserCircleIcon width="34px" height="34px" />,
      text: texts.login,
      isHidden: isLoggedIn,
    });
  };

  const renderProfile = () => {
    return renderMenuItem({
      title: (
        <img
          className={classes.person}
          src={user.avatar.src}
          width="20px"
          height="20px"
          alt={user.avatar.alt}
        />
      ),
      text: user.fullName,
    });
  };

  const renderSave = () => {
    return renderMenuItem({
      title: <SaveIcon width="34px" height="34px" />,
      text: texts.save,
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        {renderLogo()}
        {renderColor()}
        {renderSections()}
        {renderFont()}
        {renderSize()}
        {renderDownload()}
        {renderLogin()}
        {renderProfile()}
        {renderSave()}
      </div>
    </div>
  );
};

export default Menu;
