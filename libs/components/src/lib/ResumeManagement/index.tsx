import { FC } from "react";
import cls from "classnames";
// components
import Search from "../Search";
import MyResumeCard from "../MyResumeCard";
// icons
import { CancelIcon } from "../Icons/cancel";
// types
import { ResumeManagementProps } from "../../index.type";
// locals
import { useData } from "./index.hook";
import classes from "./index.module.scss";

export const ResumeManagement: FC<ResumeManagementProps> = ({
  resumes,
  onClose,
  isStoryBook = false,
}) => {
  const data = useData(onClose);

  return (
    <div
      className={cls(classes.backdrop, {
        [classes["show-backdrop"]]: data.showModal,
      })}
      onClick={data.closeModal}
    >
      <div
        className={cls(classes.modal, {
          [classes["modal-story-book"]]: isStoryBook,
          [classes["show-modal"]]: data.showModal,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.header}>
          <Search
            value={data.value}
            onChange={data.searchChangeHandler}
            onEmptyValue={data.emptySearchHandler}
            rootClassName={classes.search}
          />
          <CancelIcon onClick={data.closeModal} />
        </div>
        <div className={classes.body}>
          {resumes?.map((resume) => (
            <MyResumeCard
              key={resume.id}
              {...resume}
              rootClassName={classes.resume}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
