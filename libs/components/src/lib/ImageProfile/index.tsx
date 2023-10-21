import { ProfileImageIcon } from "../Icons/profileImage";
import Typography from "../Typography";
import { useData } from "./index.hook";
import classes from "./index.module.scss";
import { texts } from "./text";

export const ImageProfile = () => {
  const { inputRef, profileImage, handleChange, uploadHandler } = useData();

  return (
    <div className={classes.container} onClick={uploadHandler}>
      <input
        ref={inputRef}
        type="file"
        onChange={handleChange}
        accept=".png,.jpeg"
      />
      <ProfileImageIcon />
      <Typography variant="h6" rootClassName={classes.text__wrapper}>
        {texts.yourPicture}
      </Typography>
      {profileImage && <img src={profileImage} alt="profile-img" />}
    </div>
  );
};

export default ImageProfile;
