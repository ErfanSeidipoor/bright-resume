import { ProfileImageIcon } from "../Icons/profileImage";
import Typography from "../Typography";
import { useData } from "./index.hook";
import classes from "./index.module.scss";
import { texts } from "./text";

export const ImageProfile = () => {
  const { inputRef, profileImage, handleChange, uploadHandler } = useData();

  const renderImage = () => {
     if (!profileImage) {
       return (
         <>
           <ProfileImageIcon />
           <Typography variant="h6" rootClassName={classes.text__wrapper}>
             {texts.yourPicture}
           </Typography>
         </>
       );
     } else {
       return <img src={URL.createObjectURL(profileImage)} alt="profile-img" />;
     }
  };

  return (
    <div
      className={classes.container}
      data-testid="image-uploader-container"
      onClick={uploadHandler}
    >
      <input
        data-testid="image-file-input"
        ref={inputRef}
        type="file"
        onChange={handleChange}
        accept="image/*"
      />
      {renderImage()}
    </div>
  );
};
