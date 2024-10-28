"use client";

import { ListWithCards } from "@/types";
import { ListForm } from "./list-form";

interface ListCointainerProps {
  data: ListWithCards[];
  boardId: string;
}

export const ListContainer = ({ data, boardId }: ListCointainerProps) => {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};
