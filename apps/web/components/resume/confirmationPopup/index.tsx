import {
  Button,
  createResumeControlType,
  Popup,
  TextField,
} from "@bright-resume/components";
// locals
import classes from "./index.module.scss";

type ResumeConfirmationPopupProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
  control: createResumeControlType;
};

export const ResumeConfirmationPopup: React.FC<
  ResumeConfirmationPopupProps
> = ({ isOpen = false, onClose, onSubmit, control }) => {
  return (
    <Popup isOpen={isOpen} onClose={onClose} className={classes.container}>
      {/* <div className={classes.container}> */}
      <div className={classes.wrapper}>
        <TextField
          variant="h3"
          label="Title"
          placeholder="Write a title for your resume"
          fullWidth
          fixedInput
        />
        <div className={classes.actions}>
          <Button onClick={onSubmit}>Save</Button>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </div>
      {/* </div> */}
    </Popup>
  );
};
