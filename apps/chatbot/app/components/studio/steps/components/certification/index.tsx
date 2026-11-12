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

export const Certification: FC = () => {
  const {
    form,
    onSubmit,
    resumeSubSectionIndex,
    changeSelectedCertificationIndex,
    addNewCertification,
    addNewPoint,
    removePoint,
    removeCertification,
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
          name="isShowCertification"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={(checked) => field.onChange(checked)}
                />
              </FormControl>
              <FormLabel className="ml-3">isShowCertification</FormLabel>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="certificationLabel"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input placeholder="certificationLabel" {...field} />
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
                  .getValues("certifications")
                  ?.map((certification, certificationIndex) => (
                    <button
                      key={"certification" + certificationIndex}
                      type="button"
                      className={clsx(
                        "flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent ",
                        certificationIndex === resumeSubSectionIndex &&
                          "bg-blue-400"
                      )}
                      onClick={() => {
                        changeSelectedCertificationIndex(certificationIndex);
                      }}
                    >
                      <div className="flex w-full flex-col gap-1">
                        <div className="flex items-center">
                          <div className="flex items-center gap-2">
                            <div className="font-semibold">
                              {certification.name}
                            </div>
                          </div>
                          <div className="ml-auto text-xs">
                            {certification.year}
                          </div>
                        </div>
                        <div className="text-xs font-medium">
                          {certification.institute}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <FormField
                          control={form.control}
                          name={`certifications.${certificationIndex}.isShow`}
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
                  onClick={() => addNewCertification()}
                >
                  New certification
                </button>
              </div>
            </ScrollArea>
          </div>
          <div className="grow p-3">
            {form
              .watch("certifications")
              ?.map((certification, certificationIndex) => (
                <div
                  key={"certification-" + certificationIndex}
                  className={clsx(
                    "grow p-3 flex flex-col gap-2",
                    certificationIndex !== resumeSubSectionIndex && "hidden"
                  )}
                >
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => removeCertification(certificationIndex)}
                    type="button"
                  >
                    <DeleteIcon className="h-4 w-4" />
                  </Button>
                  <FormField
                    control={form.control}
                    name={`certifications.${certificationIndex}.name`}
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
                    name={`certifications.${certificationIndex}.isShowInstitute`}
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
                        <FormLabel className="ml-3">isShowInstitute</FormLabel>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name={`certifications.${certificationIndex}.institute`}
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
                    name={`certifications.${certificationIndex}.isShowDate`}
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
                    name={`certifications.${certificationIndex}.year`}
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
                    name={`certifications.${certificationIndex}.isShowPoints`}
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
                  {certification?.points?.map((_, pointIndex) => (
                    <div
                      className="flex justify-center items-center gap-2"
                      key={`certifications.${certificationIndex}.points.${pointIndex}`}
                    >
                      <div className="grow">
                        <FormField
                          key={pointIndex}
                          control={form.control}
                          name={`certifications.${certificationIndex}.points.${pointIndex}`}
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
                          removePoint(certificationIndex, pointIndex)
                        }
                      >
                        remove
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addNewPoint(certificationIndex)}
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
