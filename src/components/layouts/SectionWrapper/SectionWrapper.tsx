import { memo } from "react";
import cx from "classnames";

interface WrapperProps {
  /**
   * @xsmall 744px
   * @small 860px
   * @medium 976px
   * @large 1092px
   * @xlarge 1208px
   * @xxlarge 1334px
   */
  size?:
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "full";
  noPadding?: boolean;
  marginBottom?: "none" | "small" | "medium" | "large" | "xlarge";
  className?: string;
}

const SectionWrapper: React.FC<WrapperProps> = memo(
  ({
    marginBottom = "large",
    noPadding,
    size = "full",
    children,
    className,
  }) => {
    return (
      <section
        className={cx(
          "mx-auto",
          {
            /* Padding */
            "px-6 lg:px-8": !noPadding,
            /* max width */
            "max-w-xsmall": size === "xsmall",
            "max-w-small": size === "small",
            "max-w-medium": size === "medium",
            "max-w-large": size === "large",
            "max-w-xlarge": size === "xlarge",
            "max-w-xxlarge": size === "xxlarge",
            /* margin bottom */
            "mb-0": marginBottom === "none",
            "mb-8": marginBottom === "small",
            "mb-12": marginBottom === "medium",
            "mb-16": marginBottom === "large",
            "mb-20": marginBottom === "xlarge",
          },
          className
        )}
      >
        {children}
      </section>
    );
  }
);

SectionWrapper.displayName = "SectionWrapper";
export { SectionWrapper };
