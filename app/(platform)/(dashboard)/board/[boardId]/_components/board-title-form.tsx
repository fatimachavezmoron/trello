"use client";
import React from "react";
import { Board } from "@prisma/client";
import { Button } from "../../../../../../components/ui/button";

interface BoardTitleFormProps {
  data: Board;
}

export const BoardTitleForm = ({ data }: BoardTitleFormProps) => {
  return (
    <Button className="font-bold text-lg h-auto w-auto p-1 px-2 ">
      {data.title}
    </Button>
  );
};