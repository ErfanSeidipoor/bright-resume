"use client";

import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  Input,
} from "@resume-template-components/shadcn-ui";

import { useData } from "./useData";

export default function Page() {
  const { form, onSubmit } = useData();

  const renderForm = () => {
    return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-2 w-full max-w-96"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Display Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="Password" {...field} />
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

  const renderSocialMediaButtons = () => {
    return (
      <div className="flex gap-2 mt-9">
        <Button
          onClick={() => window.location.replace("/back/auth/sign-in/google")}
        >
          Sign in with Google
        </Button>
        <Button
          onClick={() => window.location.replace("/back/auth/sign-in/linkedin")}
        >
          Sign in with Linkedin
        </Button>
        <Button
          onClick={() => window.location.replace("/back/auth/sign-in/github")}
        >
          Sign in with Github
        </Button>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center w-100 h-screen gap-1  px-4">
      <h1 className="text-2xl mb-3">Sign up</h1>
      {renderForm()}
      {renderSocialMediaButtons()}
    </div>
  );
}
