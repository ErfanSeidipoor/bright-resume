import cls from "classnames";
import Typography from "../Typography";
import { Button } from "../Button";
import blogImage from "@assets/image/logo-dark.png";

import classes from "./index.module.scss";
import { BlogCardProps } from "../../index.type";
import { texts } from "./text";

export const BlogCard: React.FC<BlogCardProps> = ({
  rootClassName = "",
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
        src={blogImage}
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
        {texts.title}
      </Typography>
      <Typography variant="h4" className={classes.blog__description}>
        {texts.description}
      </Typography>
      <Typography variant="h9" className={classes.blog__short__description}>
        {texts.shortDescription}
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
