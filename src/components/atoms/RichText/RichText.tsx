import { memo } from "react";

import HtmlMapper from "react-html-map";

import { Body } from "@app/components/atoms";

type RichTextProps = {
  content: string;
};
const RichText = memo(({ content }: RichTextProps) => {
  return (
    <HtmlMapper html={content} decodeEntities>
      {{
        p: Body,
        // h1: props => <Title variant="large" {...props} />,
        // h2: props => <Title variant="regular" {...props} />,
        // h3: props => <Title variant="small" {...props} />,
        // h4: props => <Title variant="micro" {...props} />,
        // h5: props => <Title variant="tiny" {...props} />,
        // a: ({ href, children, ...rest }) =>
        //   href?.startsWith("/") ? (
        //     // assume internal link
        //     <Link to={href}>{children}</Link>
        //   ) : (
        //     <a href={href} {...rest}>
        //       {children}
        //     </a>
        //   ),
      }}
    </HtmlMapper>
  );
});

export { RichText };
