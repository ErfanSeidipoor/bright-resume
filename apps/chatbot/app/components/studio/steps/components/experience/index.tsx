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

export const Experience: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedExperienceIndex,
    addNewExperience,
    addNewPoint,
    removePoint,
    removeExperience,
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
          name="isShowExperience"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              <FormLabel className="ml-3">isShowExperience</FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="experienceLabel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder="experienceLabel" {...field} />
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
                  .getValues("experiences")
                  ?.map((experience, experienceIndex) => (
                    <button
                      key={"experience" + experienceIndex}
                      type="button"
                      className={clsx(
                        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ",
                        experienceIndex === resumeSubSectionIndex &&
                          "bg-blue-400"
                      )}
                      onClick={() => {
                        changeSelectedExperienceIndex(experienceIndex);
                      }}
                    >
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">
                              {experience.role}
                            </div>
                          </div>
                          <div className="ml-auto text-xs">
                            {experience.from} {"-"} {experience.to}
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          {experience.company} - {experience.location}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FormField
                          control={form.control}
                          name={`experiences.${experienceIndex}.isShow`}
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
                  onClick={() => addNewExperience()}
                >
                  New experience
                </button>
              </div>
            </ScrollArea>
          </div>
          <div className="grow p-3">
            {form.watch("experiences")?.map((experience, experienceIndex) => (
              <div
                key={"experience-" + experienceIndex}
                className={clsx(
                  "grow p-3 flex flex-col gap-2",
                  experienceIndex !== resumeSubSectionIndex && "hidden"
                )}
              >
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeExperience(experienceIndex)}
                  type="button"
                >
                  <DeleteIcon className="h-4 w-4" />
                </Button>
                <FormField
                  control={form.control}
                  name={`experiences.${experienceIndex}.role`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Input placeholder="role" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`experiences.${experienceIndex}.company`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Role</FormLabel>
                      <FormControl>
                        <Input placeholder="company" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name={`experiences.${experienceIndex}.isShowLocation`}
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
                  name={`experiences.${experienceIndex}.location`}
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
                  name={`experiences.${experienceIndex}.isShowDate`}
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
                  name={`experiences.${experienceIndex}.from`}
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
                  name={`experiences.${experienceIndex}.to`}
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
                  name={`experiences.${experienceIndex}.isShowPoints`}
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
                {experience?.points?.map((_, pointIndex) => (
                  <div
                    className="flex justify-center items-center gap-2"
                    key={`experiences.${experienceIndex}.points.${pointIndex}`}
                  >
                    <div className="grow">
                      <FormField
                        key={pointIndex}
                        control={form.control}
                        name={`experiences.${experienceIndex}.points.${pointIndex}`}
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
                      onClick={() => removePoint(experienceIndex, pointIndex)}
                    >
                      remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addNewPoint(experienceIndex)}
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
