"use client";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Textarea,
} from "@resume-template-components/shadcn-ui";
import { FC } from "react";

import { useData } from "./use-data";

export const Summary: FC = () => {
  const { form, onSubmit } = useData();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-2 w-full flex flex-col gap-2"
      >
        <FormField
          control={form.control}
          name="summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Summary</FormLabel>
              <FormControl>
                <Textarea placeholder="summary" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <Button type="submit" disabled={!form.formState.isValid}>
          Submit
        </Button>
      </form>
    </Form>
  );
};
