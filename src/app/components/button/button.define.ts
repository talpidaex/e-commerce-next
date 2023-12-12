import { MouseEventHandler } from "react";

export type Button = {
  type: "submit" | "reset" | "button";
  label: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  bgColor?: string;
  color?: string;
};
