import { ProfileImageIcon } from "../Icons/profileImage";
import Typography from "../Typography";
import { useData } from "./index.hook";
import classes from "./index.module.scss";
import { texts } from "./text";
import Image from "next/image";

export const ImageProfile = () => {
  const { inputRef, profileImage, handleChange, uploadHandler } = useData();

  const renderImage = () => {
    if (!profileImage) {
      return (
        <>
          <ProfileImageIcon className={classes.icon} />
          <Typography variant="h6" rootClassName={classes.text__wrapper}>
            {texts.yourPicture}
          </Typography>
        </>
      );
    } else {
      return (
        <Image
          width={200}
          height={200}
          src={URL.createObjectURL(profileImage)}
          alt="profile-img"
        />
      );
    }
  };

  return (
    <div
      className={classes.container}
      style={{
        width: "40mm",
        height: "40mm",
      }}
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
