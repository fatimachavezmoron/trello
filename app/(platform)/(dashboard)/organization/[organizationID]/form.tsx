"use client";

import React from "react";

import { FormButton } from "./form-button";
import { useAction } from "@/hooks/use-action";
import { createBoard } from "@/actions/create-board/index";
import { FormInput } from "@/components/ui/form/form-input";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "SUCCESS!");
    },
    onError: (error) => {
      console.error(error);
    },
  });
  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };
  return (
    <form action={onSubmit}>
      <div className="flex flex-col space-y-2">
        <FormInput id="title" errors={fieldErrors} />
      </div>
      <FormButton />
    </form>
  );
};
