import { HTMLAttributes } from "react";

export const HTagLevelStorybook = Object.freeze([1, 2, 3, 4, 5, 6]);

export type HTagLevelType = 1 | 2 | 3 | 4 | 5 | 6;

export type htmlTagProps = "span" | "p" | "div" | "a" | "li";

export interface HTagProps extends HTMLAttributes<HTMLHeadingElement> {
  /**
   * Sets the H tag level, ie. h1, h2, h3, etc.
   */
  hTagLevel?: HTagLevelType;
  /**
   * Use a different tag for the element but keep the styling from hTagLevel
   */
  htmlTag?: htmlTagProps;
}
