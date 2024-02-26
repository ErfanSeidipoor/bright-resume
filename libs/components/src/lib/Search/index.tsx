import cls from "classnames";

import classes from "./index.module.scss";
import { SearchProps } from "../../index.type";
import Typography from "../Typography";
import { SearchIcon } from "../Icons/search";
import { CancelIcon } from "../Icons/cancel";
import { texts } from "./texts";
import DotLoading from "../DotLoading";

export const Search: React.FC<SearchProps> = ({
  rootClassName = "",
  onEmptyValue = () => null,
  isLoading = false,
  ...props
}) => {
  const renderIcons = () => {
    if (!props.value)
      return <SearchIcon aria-label="search-icon" width={25} height={25} />;
    else
      return (
        <CancelIcon
          aria-label="cancel-icon"
          className={classes.icons}
          width={25}
          height={25}
          onClick={onEmptyValue}
        />
      );
  };

  const renderLoading = () => {
    if (isLoading) return <DotLoading color="blue" />;
  };

  return (
    <div
      className={cls(classes.root, {
        [`${rootClassName}`]: !!rootClassName,
      })}
    >
      <div className={classes.search__box}>
        <Typography
          component="input"
          className={classes.input}
          type="text"
          name="search"
          placeholder={texts.placeHolder}
          {...props}
        />
        {isLoading ? renderLoading() : renderIcons()}
      </div>
    </div>
  );
};

export default Search;
