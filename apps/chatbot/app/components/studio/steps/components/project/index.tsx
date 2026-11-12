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

export const Project: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedProjectIndex,
    addNewProject,
    addNewPoint,
    removePoint,
    removeProject,
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
          name="isShowProject"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              <FormLabel className="ml-3">isShowProject</FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="projectLabel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder="projectLabel" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Separator />
        <div className="flex">
          <div className="p-1 bg-slate-400 w-[400px]">
            <ScrollArea>
              <div className="flex flex-col gap-2  pt-0">
                {form.getValues("projects")?.map((project, projectIndex) => (
                  <button
                    key={"project" + projectIndex}
                    type="button"
                    className={clsx(
                      "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ",
                      projectIndex === resumeSubSectionIndex && "bg-blue-400"
                    )}
                    onClick={() => {
                      changeSelectedProjectIndex(projectIndex);
                    }}
                  >
                    <div className="flex w-full flex-col gap-1">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">{project.role}</div>
                        </div>
                        <div className="ml-auto text-xs">
                          {project.from} {"-"} {project.to}
                        </div>
                      </div>
                      <div className="text-xs font-medium">
                        {project.company} - {project.location}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name={`projects.${projectIndex}.isShow`}
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
                  onClick={() => addNewProject()}
                >
                  New project
                </button>
              </div>
            </ScrollArea>
          </div>
          <div className="grow p-3">
            {form.watch("projects")?.map((project, projectIndex) => (
              <div
                key={"project-" + projectIndex}
                className={clsx(
                  "grow p-3 flex flex-col gap-2",
                  projectIndex !== resumeSubSectionIndex && "hidden"
                )}
              >
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeProject(projectIndex)}
                  type="button"
                >
                  <DeleteIcon className="h-4 w-4" />
                </Button>
                <FormField
                  control={form.control}
                  name={`projects.${projectIndex}.role`}
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
                  name={`projects.${projectIndex}.company`}
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
                  name={`projects.${projectIndex}.isShowLocation`}
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
                  name={`projects.${projectIndex}.location`}
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
                  name={`projects.${projectIndex}.isShowDate`}
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
                  name={`projects.${projectIndex}.from`}
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
                  name={`projects.${projectIndex}.to`}
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
                  name={`projects.${projectIndex}.isShowPoints`}
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
                {project?.points?.map((_, pointIndex) => (
                  <div
                    className="flex justify-center items-center gap-2"
                    key={`projects.${projectIndex}.points.${pointIndex}`}
                  >
                    <div className="grow">
                      <FormField
                        key={pointIndex}
                        control={form.control}
                        name={`projects.${projectIndex}.points.${pointIndex}`}
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
                      onClick={() => removePoint(projectIndex, pointIndex)}
                    >
                      remove
                    </button>
                  </div>
                ))}
                <button type="button" onClick={() => addNewPoint(projectIndex)}>
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
