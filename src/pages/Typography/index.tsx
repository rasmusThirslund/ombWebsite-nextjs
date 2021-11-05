import { HeadMeta } from "@app/components/layouts";
import { content } from "../../constants/contentHtml.constants";

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
