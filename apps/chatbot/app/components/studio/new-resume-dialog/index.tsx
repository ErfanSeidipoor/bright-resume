"use client";

import { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@resume-template-components/shadcn-ui";
import { useData } from "./index.hook";

export const NewResumeDialog: FC = () => {
  const {
    form,
    onSubmit,
    isOpenNewResumeDialog,
    setIsOpenNewResumeDialog,
    resumes,
    initialLoading,
    selectedResumeId,
  } = useData();

  const renderForm = () => {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full max-w-96"
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title of the Resume</FormLabel>
                <FormControl>
                  <Input placeholder="title" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <DialogFooter>
            <Button type="submit" disabled={!form.formState.isValid}>
              Submit
            </Button>
          </DialogFooter>
        </form>
      </Form>
    );
  };

  return (
    <Dialog
      open={
        resumes.length === 0 && !initialLoading && !selectedResumeId
          ? true
          : isOpenNewResumeDialog
      }
      onOpenChange={setIsOpenNewResumeDialog}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create A new Resume</DialogTitle>
          <DialogDescription>
            {"Choose a name for your resume. You can change it later."}
          </DialogDescription>
        </DialogHeader>
        {renderForm()}
      </DialogContent>
    </Dialog>
  );
};
