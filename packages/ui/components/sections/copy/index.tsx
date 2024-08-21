import React from "react";

import { cn } from "../../../utils";
import { RichText } from "../../ui/richText";
import type { ICopyProps } from "./types";

export const Copy: React.FC<ICopyProps> = (props) => {
  const { columns, isReversedOnMobile } = props;

  return (
    <div
      className={cn("flex flex-col items-center gap-6 lg:flex-row", {
        "flex-col-reverse": isReversedOnMobile,
      })}
    >
      {columns.map((text, index) => (
        <div key={index} className="w-full overflow-hidden rounded-lg">
          <RichText {...text} />
        </div>
      ))}
    </div>
  );
};
