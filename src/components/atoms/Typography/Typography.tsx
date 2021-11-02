import { HTMLAttributes, memo } from "react";

import cx from "classnames";

import styles from "./Typography.module.scss";
import {
  HTagLevelType,
  HTagProps,
  htmlTagProps,
} from "./types/typography.types";

const hTag = <T,>(level: HTagLevelType) => `h${level}` as React.ElementType<T>;
const elementTag = <T,>(tag: htmlTagProps) => `${tag}` as React.ElementType<T>;

export interface HeadingProps extends HTagProps {
  /**
   * Sets the base color for the whole element.
   */
  // color?: BrandColors;
  /**
   * The styling level. If hTagLevel is not set, then this
   * property will also set the H tag level.
   */
  level?: 1 | 2 | 3 | 4;
  /**
   * useMargin, sets a margin bottom to an em value
   */
  useMargin?: boolean;
}

export const Heading = memo(
  ({
    children,
    className,
    hTagLevel,
    level = 1,
    htmlTag,
    useMargin,
    ...rest
  }: HeadingProps) => {
    /**
     * Use any HtmlTag before hTagLevel
     * */
    const Tag = htmlTag
      ? elementTag<HeadingProps>(htmlTag)
      : hTag<HeadingProps>(hTagLevel ?? level);

    return (
      <Tag
        className={cx(
          styles.heading,
          styles[`heading${level}`],
          { [styles.useMargin]: useMargin },
          className
        )}
        {...rest}
      >
        {children}
      </Tag>
    );
  }
);

export interface SubheadingProps extends HTagProps {
  /**
   * Whether or not to use the brand color
   */
  brand?: boolean;
  /**
   * Sets the base color for the whole element.
   */
  // color?: BrandColors;
  /**
   * The styling level. If hTagLevel is not set, then this
   * property will also set the H tag level.
   */
  level?: 1 | 2 | 3 | 4;
  useMargin?: boolean;
}

export const Subheading = memo(
  ({
    brand,
    children,
    className,
    hTagLevel,
    level = 1,
    useMargin,
    ...rest
  }: SubheadingProps) => {
    const H = hTag<SubheadingProps>(hTagLevel ?? level);
    return (
      <H
        className={cx(
          styles.subheading,
          styles[`subheading${level}`],
          className,
          {
            [styles.brand]: brand,
            [styles.useMargin]: useMargin,
          }
        )}
        {...rest}
      >
        {children}
      </H>
    );
  }
);

export interface TitleProps extends HTagProps {
  /**
   * Whether or not to use the brand color
   */
  // brand?: boolean;
  /**
   * Sets the base color for the whole element.
   */
  // color?: BrandColors;
  /**
   * The styling level. If hTagLevel is not set, then this
   * property will also set the H tag level.
   */
  level?: 1 | 2 | 3 | 4;
}

export const Title = memo(
  ({ children, className, hTagLevel, level = 1, ...rest }: TitleProps) => {
    const H = hTag<TitleProps>(hTagLevel ?? level);
    return (
      <H
        className={cx(styles.title, styles[`title${level}`], className)}
        {...rest}
      >
        {children}
      </H>
    );
  }
);

export interface LabelProps extends HTagProps {
  /**
   * Sets the base color for the whole element.
   */
  // color?: BrandColors;
  /**
   * The styling level. If hTagLevel is not set, then this
   * property will also set the H tag level.
   */
  level?: 1 | 2 | 3 | 4;
  /**
   * Toogles medium font weight, which corresponds to a weight
   * of 500.
   */
  medium?: boolean;
}

export const Label = memo(
  ({
    children,
    className,
    hTagLevel,
    level = 1,
    medium,
    ...rest
  }: LabelProps) => {
    const H = hTag<LabelProps>(hTagLevel ?? level);
    return (
      <H
        className={cx(styles.label, styles[`label${level}`], className, {
          [styles.medium]: medium,
        })}
        {...rest}
      >
        {children}
      </H>
    );
  }
);

export interface BodyProps extends HTMLAttributes<HTMLParagraphElement> {
  /**
   * Sets the base color for the whole element.
   */
  // color?: BrandColors;
  /**
   * The styling level. If hTagLevel is not set, then this
   * property will also set the H tag level.
   */
  level?: 1 | 2 | 3;
  /**
   * Toogles medium font weight, which corresponds to a weight
   * of 500.
   */
  medium?: boolean;
  /**
   * Toggles whether to output the children wrapped in a paragraph,
   * or a div with the relevant Body styling attached.
   */
  richtext?: boolean;
  /**
   * Use optional other tags as elements
   */
  htmlTag?: htmlTagProps;
}

export const Body = memo(
  ({
    children,
    className,
    color,
    level = 1,
    medium,
    richtext,
    htmlTag,
    ...rest
  }: BodyProps) => {
    /**
     * If richtext is chosen then any optional htmlTag is ignored.
     * defaults to "p"
     */
    const optionalTag = htmlTag && elementTag<HTMLElement>(htmlTag);

    const Wrapper = (
      richtext ? "div" : optionalTag || "p"
    ) as React.ElementType;

    return (
      <Wrapper
        className={cx(
          styles.body,
          styles[`body${level}`],
          styles[color ?? ""],
          className,
          {
            [styles.medium]: medium,
          }
        )}
        {...rest}
      >
        {children}
      </Wrapper>
    );
  }
);
