import React from "react";
import { Separator } from "@/components/ui/separator";

type Props = {
  children: React.ReactNode;
  subtitle: string;
  title: string;
};

export default function FieldInput({ children, subtitle, title }: Props) {
  return (
    <>
      <div className="flex flex-row items-start">
        <div className="w-[35%]">
          <div className="font-semibold">{title}</div>
          <div className="text-gray-400 w-80">{subtitle}</div>
        </div>
        {children}
      </div>
      <Separator />
    </>
  );
}
