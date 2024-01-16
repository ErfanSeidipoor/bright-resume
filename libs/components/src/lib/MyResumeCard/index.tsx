import cls from "classnames";

import classes from "./index.module.scss";
import { MyResumeCardProps } from "../../index.type";
import { EditIcon, TrashIcon } from "../Icons";

export const MyResumeCard: React.FC<MyResumeCardProps> = ({
  rootClassName = "",
  id = "",
  title,
  image,
  imageWidth,
  imageHeight,
  onEdit = () => null,
  onDelete = () => null,
}) => {
  return (
    <div
      className={cls(classes.root, {
        [rootClassName]: !!rootClassName,
      })}
    >
      <img
        src={image}
        alt={"resume-card-img"}
        width={imageWidth}
        height={imageHeight}
        className={classes.resume__card__image}
      />
      <div className={classes.resume__card__content}>
        {title}
        <div className={classes.resume__card__content__icons}>
          <EditIcon
            className={classes.resume__card__icon}
            onClick={() => onEdit(id)}
          />
          <TrashIcon
            className={classes.resume__card__icon}
            onClick={() => onDelete(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default MyResumeCard;
