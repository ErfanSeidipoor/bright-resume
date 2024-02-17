import { FC, MouseEvent, useEffect, useState } from "react";
import Search from "../Search";
import classes from "./index.module.scss";
import { CancelIcon } from "../Icons/cancel";
import { ResumeManagementProps } from "../../index.type";
import MyResumeCard from "../MyResumeCard";
import cls from "classnames";

export const ResumeManagement: FC<ResumeManagementProps> = ({
  resumes,
  onClose,
  isStoryBook = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => {
      onClose?.();
    }, 500);
  };

  return (
    <div
      className={cls(classes.backdrop, {
        [classes["show-backdrop"]]: showModal,
      })}
      onClick={closeModal}
    >
      <div
        className={cls(classes.modal, {
          [classes["modal-story-book"]]: isStoryBook,
          [classes["show-modal"]]: showModal,
        })}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={classes.header}>
          <Search
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onEmptyValue={() => setValue("")}
            rootClassName={classes.search}
          />
          <CancelIcon onClick={closeModal} />
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
