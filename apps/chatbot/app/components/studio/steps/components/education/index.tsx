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

export const Education: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedEducationIndex,
    addNewEducation,
    addNewPoint,
    removePoint,
    removeEducation,
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
          name="isShowEducation"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              <FormLabel className="ml-3">isShowEducation</FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="educationLabel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder="educationLabel" {...field} />
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
                  .getValues("educations")
                  ?.map((education, educationIndex) => (
                    <button
                      key={"education" + educationIndex}
                      type="button"
                      className={clsx(
                        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ",
                        educationIndex === resumeSubSectionIndex &&
                          "bg-blue-400"
                      )}
                      onClick={() => {
                        changeSelectedEducationIndex(educationIndex);
                      }}
                    >
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">
                              {education.degree}
                            </div>
                          </div>
                          <div className="ml-auto text-xs">
                            {education.from} {"-"} {education.to}
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          {education.institute} - {education.location}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FormField
                          control={form.control}
                          name={`educations.${educationIndex}.isShow`}
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
                  onClick={() => addNewEducation()}
                >
                  New education
                </button>
              </div>
            </ScrollArea>
          </div>
          <div className="grow p-3">
            {form.watch("educations")?.map((education, educationIndex) => (
              <div
                key={"education-" + educationIndex}
                className={clsx(
                  "grow p-3 flex flex-col gap-2",
                  educationIndex !== resumeSubSectionIndex && "hidden"
                )}
              >
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeEducation(educationIndex)}
                  type="button"
                >
                  <DeleteIcon className="h-4 w-4" />
                </Button>
                <FormField
                  control={form.control}
                  name={`educations.${educationIndex}.degree`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Degree</FormLabel>
                      <FormControl>
                        <Input placeholder="degree" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`educations.${educationIndex}.isShowInstitute`}
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
                  name={`educations.${educationIndex}.institute`}
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
                  name={`educations.${educationIndex}.isShowGpa`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">isShowGpa</FormLabel>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`educations.${educationIndex}.gpa`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>gpa</FormLabel>
                      <FormControl>
                        <Input placeholder="gpa" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`educations.${educationIndex}.isShowLocation`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked)}
                        />
                      </FormControl>
                      <FormLabel className="ml-3">isShowLocation</FormLabel>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`educations.${educationIndex}.location`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>location</FormLabel>
                      <FormControl>
                        <Input placeholder="location" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`educations.${educationIndex}.isShowDate`}
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
                  name={`educations.${educationIndex}.from`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>from</FormLabel>
                      <FormControl>
                        <Input placeholder="from" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`educations.${educationIndex}.to`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>to</FormLabel>
                      <FormControl>
                        <Input placeholder="to" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`educations.${educationIndex}.isShowPoints`}
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
                {education?.points?.map((_, pointIndex) => (
                  <div
                    className="flex justify-center items-center gap-2"
                    key={`educations.${educationIndex}.points.${pointIndex}`}
                  >
                    <div className="grow">
                      <FormField
                        key={pointIndex}
                        control={form.control}
                        name={`educations.${educationIndex}.points.${pointIndex}`}
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
                      onClick={() => removePoint(educationIndex, pointIndex)}
                    >
                      remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addNewPoint(educationIndex)}
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
