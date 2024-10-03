"use client";

import React from "react";
import { useFormStatus } from "react-dom";
import { Input } from "@/components/ui/input";

interface FormInputsProps {
  errors?: {
    title?: string[];
  };
}

export const FormInput = ({ errors }: FormInputsProps) => {
  const { pending } = useFormStatus();
  return (
    <div>
      <Input
        id="title"
        name="title"
        required
        placeholder="Enter a board title"
        disabled={pending}
      />
      {errors?.title ? (
        <div>
          {errors.title.map((error: string) => (
            <p key={error} className="text-rose-500">
              {error}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );
};
