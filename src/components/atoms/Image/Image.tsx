import { memo } from "react";

import NextImage, { ImageProps } from "next/image";

const Image = memo(({ src, ...rest }: ImageProps) => {
  const isRelativeURL = src.startsWith("//");

  return <NextImage src={isRelativeURL ? `https:${src}` : src} {...rest} />;
});

export { Image };
