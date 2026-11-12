"use client";

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@resume-template-components/shadcn-ui";
import { FC } from "react";
import { useData } from "./index.hook";

export const DeleteResumeDialog: FC = () => {
  const { onDelete, deleteResume, setDeleteResume } = useData();

  return (
    <Dialog
      open={!!deleteResume}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setDeleteResume(undefined);
        }
      }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete a Resume ? </DialogTitle>
          <DialogDescription>{`Are You Sure to delete '${deleteResume?.title}' ?`}</DialogDescription>
          <Button
            type="button"
            variant={"destructive"}
            onClick={() => onDelete()}
          >
            Delete
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
