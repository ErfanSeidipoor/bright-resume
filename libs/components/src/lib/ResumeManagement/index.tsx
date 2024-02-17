import { FC, MouseEvent, useState } from "react";
import Search from "../Search";
import classes from "./index.module.scss";
import { CancelIcon } from "../Icons/cancel";
import { ResumeManagementProps } from "../../index.type";
import MyResumeCard from "../MyResumeCard";

export const ResumeManagement: FC<ResumeManagementProps> = ({
  resumes,
  onClose,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className={classes.backdrop} onClick={onClose}>
      <div className={classes.modal} onClick={(e) => e.stopPropagation()}>
        <div className={classes.header}>
          <Search
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onEmptyValue={() => setValue("")}
            rootClassName={classes.search}
          />
          <CancelIcon onClick={onClose} />
        </div>
        <div className={classes["resumes-wrapper"]}>
          {resumes.map((resume) => (
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
