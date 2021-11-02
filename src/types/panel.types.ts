import { ReactNode } from "react";

import { PanelThemeEnum, PlacementEnum } from "@app/constants/theme.constants";

export interface PanelSectionProps {
  children?: ReactNode;
  image?: string | null;
  heading?: string;
  text?: string;
  theme?: PanelThemeEnum;
  decorationImage?: string;
  decorationPlacement?: PlacementEnum;
  alt?: string;
  title?: string;
}
