"use client";

import { Button } from "@/components/ui/button";
import { FormSubmit } from "@/components/ui/form/form-submit";
import { FormTextarea } from "@/components/ui/form/form-textarea";
import { Plus, X } from "lucide-react";
import { forwardRef, useRef, ElementRef, KeyboardEventHandler } from "react";
import { useAction } from "@/hooks/use-action";
import { createCard } from "@/actions/create-card";
import { useParams } from "next/navigation";

interface CardFormProps {
  listId: string;
  enableEditing: () => void;
  disableEditing: () => void;
  isEditing: boolean;
}

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, enableEditing, disableEditing, isEditing }, ref) => {
    const params = useParams();
    const formRef = useRef<ElementRef<"form">>(null);

    const { execute, fieldErrors } = useAction(createCard);
    if (isEditing) {
      return (
        <form className="m-1 py-0.5 px-1 space-y-4">
          <FormTextarea
            id="title"
            onKeyDown={() => {}}
            ref={ref}
            placeholder="Enter a title for this card..."
          />
          <input hidden id="listId" name="listId" value={listId} />
          <div className="flex items-center gap-x-1">
            <FormSubmit>Add Card</FormSubmit>
            <Button onClick={disableEditing} size="sm" variant="ghost">
              <X />
            </Button>
          </div>
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
