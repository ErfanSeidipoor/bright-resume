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

export const Hobby: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedHobbyIndex,
    addNewHobby,
    removeHobby,
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
          name="isShowHobby"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              <FormLabel className="ml-3">isShowHobby</FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="hobbyLabel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder="hobbyLabel" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Separator />
        <div className="flex">
          <div className="p-1 bg-slate-400 w-[400px]">
            <ScrollArea>
              <div className="flex flex-col gap-2  pt-0">
                {form.getValues("hobbies")?.map((hobby, hobbyIndex) => (
                  <button
                    key={"hobby" + hobbyIndex}
                    type="button"
                    className={clsx(
                      "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ",
                      hobbyIndex === resumeSubSectionIndex && "bg-blue-400"
                    )}
                    onClick={() => {
                      changeSelectedHobbyIndex(hobbyIndex);
                    }}
                  >
                    <div className="flex w-full flex-col gap-1">
                      <div className="flex items-center">
                        <div className="flex items-center gap-2">
                          <div className="font-semibold">
                            {hobby.point?.substring(0, 40)}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FormField
                        control={form.control}
                        name={`hobbies.${hobbyIndex}.isShow`}
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
                  onClick={() => addNewHobby()}
                >
                  New hobby
                </button>
              </div>
            </ScrollArea>
          </div>
          <div className="grow p-3">
            {form.watch("hobbies")?.map((hobby, hobbyIndex) => (
              <div
                key={"hobby-" + hobbyIndex}
                className={clsx(
                  "grow p-3 flex flex-col gap-2",
                  hobbyIndex !== resumeSubSectionIndex && "hidden"
                )}
              >
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => removeHobby(hobbyIndex)}
                  type="button"
                >
                  <DeleteIcon className="h-4 w-4" />
                </Button>
                <FormField
                  control={form.control}
                  name={`hobbies.${hobbyIndex}.point`}
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
