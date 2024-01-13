import cls from "classnames";
import Typography from "../Typography";
import { Button } from "../Button";

import classes from "./index.module.scss";
import { BlogCardProps } from "../../index.type";

export const BlogCard: React.FC<BlogCardProps> = ({
  rootClassName = "",
  title,
  description,
  shortDescription,
  image,
  imageWidth = "",
  imageHeight = "",
  link = "",
  categories = [],
  isCutOutImage = false,
}) => {
  return (
    <div
      className={cls(classes.root, {
        [rootClassName]: !!rootClassName,
      })}
    >
      <img
        src={image}
        alt={"blog-post-img"}
        width={imageWidth}
        height={imageHeight}
        className={classes.blog__image}
      />
      <Typography
        variant="h6"
        className={cls(classes.blog__title, {
          [classes.blog__title__cutout]: !!isCutOutImage,
        })}
      >
        {title}
      </Typography>
      <Typography variant="h4" className={classes.blog__description}>
        {description}
      </Typography>
      <Typography variant="h9" className={classes.blog__short__description}>
        {shortDescription}
      </Typography>
      <div className={classes.blog__categories}>
        {categories.length > 0 &&
          categories.map((category) => (
            <Button key={category.name} variant="rounded">
              {category.name}
            </Button>
          ))}
      </div>
    </div>
  );
};

export default BlogCard;
