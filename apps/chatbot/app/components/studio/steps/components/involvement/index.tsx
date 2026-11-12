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

export const Involvement: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedInvolvementIndex,
    addNewInvolvement,
    addNewPoint,
    removePoint,
    removeInvolvement,
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
          name="isShowInvolvement"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              <FormLabel className="ml-3">isShowInvolvement</FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="involvementLabel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder="involvementLabel" {...field} />
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
                  .getValues("involvements")
                  ?.map((involvement, involvementIndex) => (
                    <button
                      key={"involvement" + involvementIndex}
                      type="button"
                      className={clsx(
                        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ",
                        involvementIndex === resumeSubSectionIndex &&
                          "bg-blue-400"
                      )}
                      onClick={() => {
                        changeSelectedInvolvementIndex(involvementIndex);
                      }}
                    >
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">
                              {involvement.role}
                            </div>
                          </div>
                          <div className="ml-auto text-xs">
                            {involvement.from} {"-"} {involvement.to}
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          {involvement.company} - {involvement.location}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FormField
                          control={form.control}
                          name={`involvements.${involvementIndex}.isShow`}
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
                  onClick={() => addNewInvolvement()}
                >
                  New involvement
                </button>
              </div>
            </ScrollArea>
          </div>
          <div className="grow p-3">
            {form
              .watch("involvements")
              ?.map((involvement, involvementIndex) => (
                <div
                  key={"involvement-" + involvementIndex}
                  className={clsx(
                    "grow p-3 flex flex-col gap-2",
                    involvementIndex !== resumeSubSectionIndex && "hidden"
                  )}
                >
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeInvolvement(involvementIndex)}
                    type="button"
                  >
                    <DeleteIcon className="h-4 w-4" />
                  </Button>
                  <FormField
                    control={form.control}
                    name={`involvements.${involvementIndex}.role`}
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
                    name={`involvements.${involvementIndex}.company`}
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
                    name={`involvements.${involvementIndex}.isShowLocation`}
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
                        <FormLabel className="ml-3">isShowLocation</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`involvements.${involvementIndex}.location`}
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
                    name={`involvements.${involvementIndex}.isShowDate`}
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
                        <FormLabel className="ml-3">isShowDate</FormLabel>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`involvements.${involvementIndex}.from`}
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
                    name={`involvements.${involvementIndex}.to`}
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
                    name={`involvements.${involvementIndex}.isShowPoints`}
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
                        <FormLabel className="ml-3">isShowPoints</FormLabel>
                      </FormItem>
                    )}
                  />
                  {involvement?.points?.map((_, pointIndex) => (
                    <div
                      className="flex justify-center items-center gap-2"
                      key={`involvements.${involvementIndex}.points.${pointIndex}`}
                    >
                      <div className="grow">
                        <FormField
                          key={pointIndex}
                          control={form.control}
                          name={`involvements.${involvementIndex}.points.${pointIndex}`}
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
                        onClick={() =>
                          removePoint(involvementIndex, pointIndex)
                        }
                      >
                        remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addNewPoint(involvementIndex)}
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
