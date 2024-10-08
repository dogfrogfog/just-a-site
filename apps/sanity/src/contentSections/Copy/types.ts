import type { IRichText } from "@/lib/adapters/prepareRichTextProps";

export interface ICopyProps {
  data: ICopy;
}

export interface ICopy {
  _key: string;
  columns: IRichText[];
  theme?: "light" | "dark";
}
