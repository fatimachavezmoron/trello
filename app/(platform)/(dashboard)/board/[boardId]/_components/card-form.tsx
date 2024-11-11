"use client";

import { Button } from "@/components/ui/button";
import { FormTextarea } from "@/components/ui/form/form-textarea";
import { Plus } from "lucide-react";
import { forwardRef } from "react";

interface CardFormProps {
  listId: string;
  enableEditing: () => void;
  disableEditing: () => void;
  isEditing: boolean;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, enableEditing, disableEditing, isEditing }, ref) => {
    if (isEditing) {
      return (
        <form className="m-1 py-0.5 px-1 space-y-4">
          <FormTextarea
            id="title"
            onKeyDown={() => {}}
            ref={ref}
            placeholder="Enter a title for this card..."
          />
        </form>
      );
    }
    return (
      <div className="pt-2 px-2">
        <Button
          onClick={enableEditing}
          className="h-auto px-2 py-1.5 w-full justify-start text-muted-foreground text-sm"
          size="sm"
          variant="ghost"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add a card
        </Button>
      </div>
    );
  }
);

CardForm.displayName = "CardForm";
