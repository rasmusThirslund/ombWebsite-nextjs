import { HeadMeta } from "@app/components/layouts";
import { content } from "./content";
import cx from "classnames";

interface ContainerProps {
  size?: "large";
}
export default function TypographyPage() {
  return (
    <>
      <HeadMeta title="Typography page" />

      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="richtext"
      ></div>
    </>
  );
}
