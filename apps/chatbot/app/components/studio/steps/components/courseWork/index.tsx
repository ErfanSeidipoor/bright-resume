"use client";

import {
  Button,
  Checkbox,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
  ScrollArea,
  Textarea,
} from "@resume-template-components/shadcn-ui";
import { FC } from "react";
import { DeleteIcon } from "lucide-react";

import { Separator } from "@radix-ui/react-menubar";
import clsx from "clsx";
import { useData } from "./use-data";

export const CourseWork: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedCourseWorkIndex,
    addNewCourseWork,
    addNewPoint,
    removePoint,
    removeCourseWork,
  } = useData();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 w-full flex flex-col gap-2"
      >
        {JSON.stringify({ resumeSubSectionIndex })}
        <FormField
          control={form.control}
          name="isShowCourseWork"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              <FormLabel className="ml-3">isShowCourseWork</FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="courseWorkLabel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder="courseWorkLabel" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Separator />
        <div className="flex">
          <div className="p-1 bg-slate-400 w-[400px]">
            <ScrollArea>
              <div className="flex flex-col gap-2  pt-0">
                {form
                  .getValues("courseWorks")
                  ?.map((courseWork, courseWorkIndex) => (
                    <button
                      key={"courseWork" + courseWorkIndex}
                      type="button"
                      className={clsx(
                        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ",
                        courseWorkIndex === resumeSubSectionIndex &&
                          "bg-blue-400"
                      )}
                      onClick={() => {
                        changeSelectedCourseWorkIndex(courseWorkIndex);
                      }}
                    >
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">
                              {courseWork.name}
                            </div>
                          </div>
                          <div className="ml-auto text-xs">
                            {courseWork.year}
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          {courseWork.institute}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FormField
                          control={form.control}
                          name={`courseWorks.${courseWorkIndex}.isShow`}
                          render={({ field }) => (
                            <FormItem>
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={(checked) =>
                                    field.onChange(checked)
                                  }
                                />
                              </FormControl>
                              <FormLabel className="ml-3">Show/hide</FormLabel>
                            </FormItem>
                          )}
                        />
                      </div>
                    </button>
                  ))}

                <button
                  type="button"
                  className={clsx(
                    "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent bg-blue-400"
                  )}
                  onClick={() => addNewCourseWork()}
                >
                  New courseWork
                </button>
              </div>
            </ScrollArea>
          </div>
          <div className="grow p-3">
            {form.watch("courseWorks")?.map((courseWork, courseWorkIndex) => (
              <div
                key={"courseWork-" + courseWorkIndex}
                className={clsx(
                  "grow p-3 flex flex-col gap-2",
                  courseWorkIndex !== resumeSubSectionIndex && "hidden"
                )}
              >
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeCourseWork(courseWorkIndex)}
                  type="button"
                >
                  <DeleteIcon className="h-4 w-4" />
                </Button>
                <FormField
                  control={form.control}
                  name={`courseWorks.${courseWorkIndex}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree</FormLabel>
                      <FormControl>
                        <Input placeholder="name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`courseWorks.${courseWorkIndex}.isShowSkills`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">isShowSkills</FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`courseWorks.${courseWorkIndex}.skills`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Skills</FormLabel>
                      <FormControl>
                        <Input placeholder="skills" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`courseWorks.${courseWorkIndex}.isShowInstitute`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">isShowInstitute</FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`courseWorks.${courseWorkIndex}.institute`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Institute</FormLabel>
                      <FormControl>
                        <Input placeholder="institute" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`courseWorks.${courseWorkIndex}.isShowDate`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">isShowDate</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`courseWorks.${courseWorkIndex}.year`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>year</FormLabel>
                      <FormControl>
                        <Input placeholder="year" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`courseWorks.${courseWorkIndex}.isShowPoints`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">isShowPoints</FormLabel>
                    </FormItem>
                  )}
                />
                {courseWork?.points?.map((_, pointIndex) => (
                  <div
                    className="flex justify-center items-center gap-2"
                    key={`courseWorks.${courseWorkIndex}.points.${pointIndex}`}
                  >
                    <div className="grow">
                      <FormField
                        key={pointIndex}
                        control={form.control}
                        name={`courseWorks.${courseWorkIndex}.points.${pointIndex}`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>point</FormLabel>
                            <FormControl>
                              <Textarea placeholder="point" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>

                    <button
                      type="button"
                      className="grow-0"
                      onClick={() => removePoint(courseWorkIndex, pointIndex)}
                    >
                      remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addNewPoint(courseWorkIndex)}
                >
                  AddPoint
                </button>
              </div>
            ))}
          </div>
        </div>
        <Button type="submit" disabled={!form.formState.isValid}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
