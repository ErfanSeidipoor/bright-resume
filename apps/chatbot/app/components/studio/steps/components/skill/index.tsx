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
} from "@resume-template-components/shadcn-ui";
import { DeleteIcon } from "lucide-react";
import { FC } from "react";

import { Separator } from "@radix-ui/react-menubar";
import clsx from "clsx";
import { useData } from "./use-data";

export const Skill: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedSkillIndex,
    addNewSkill,
    removeSkill,
  } = useData();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 w-full flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="isShowSkill"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              <FormLabel className="ml-3">isShowSkill</FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skillLabel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder="skillLabel" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Separator />
        <div className="flex">
          <div className="p-1 bg-slate-400 w-[400px]">
            <ScrollArea>
              <div className="flex flex-col gap-2  pt-0">
                {form.getValues("skills")?.map((skill, skillIndex) => (
                  <button
                    key={"skill" + skillIndex}
                    type="button"
                    className={clsx(
                      "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ",
                      skillIndex === resumeSubSectionIndex && "bg-blue-400"
                    )}
                    onClick={() => {
                      changeSelectedSkillIndex(skillIndex);
                    }}
                  >
                    <div className="flex w-full flex-col gap-1">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">
                            {skill.point?.substring(0, 40)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name={`skills.${skillIndex}.isShow`}
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
                  onClick={() => addNewSkill()}
                >
                  New skill
                </button>
              </div>
            </ScrollArea>
          </div>
          <div className="grow p-3">
            {form.watch("skills")?.map((skill, skillIndex) => (
              <div
                key={"skill-" + skillIndex}
                className={clsx(
                  "grow p-3 flex flex-col gap-2",
                  skillIndex !== resumeSubSectionIndex && "hidden"
                )}
              >
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeSkill(skillIndex)}
                  type="button"
                >
                  <DeleteIcon className="h-4 w-4" />
                </Button>
                <FormField
                  control={form.control}
                  name={`skills.${skillIndex}.point`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>point</FormLabel>
                      <FormControl>
                        <Input placeholder="point" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
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
