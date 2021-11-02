import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import { PanelThemeEnum, PlacementEnum } from "@app/constants/theme.constants";
import { FeatureSectionProps } from "@app/types/feature.types";
import { PanelSectionProps } from "@app/types/panel.types";

import { DEFAULT_NS, INITIAL_LANG } from "../constants/localization.constants";

const LOREM =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit quaerat reprehenderit officiis sed delectus. Quidem nam enim distinctio eius, illum exercitationem totam laboriosam. Nesciunt temporibus, dolorem reiciendis ipsum voluptatum amet.";
const IMAGE = "/images/profile.jpg";
const IMAGE2 = "/images/unsplash1.jpg";

const panel1: PanelSectionProps = {
  heading: "Welcome to the exchange you’ll love",
  text: LOREM,
  theme: PanelThemeEnum.BRAND,
  image: IMAGE,
  alt: "panel",
  title: "panel title",
};
const panel2: PanelSectionProps = {
  heading: "Welcome to the exchange you’ll love",
  text: `<p>Onro is the safe and easy marketplace for preloved special goods which are picked up and delivered to your door.</p><p>Everybody wins and so does the planet.</p>`,
  decorationImage: IMAGE,
  decorationPlacement: PlacementEnum.CENTER,
  alt: "panel",
  title: "panel title",
};
const panel3: PanelSectionProps = {
  heading: "No hassle & no haggle!",
  text: "To make trading easier than ever, we’ve created The Price Matcher. A unique feature that automatically finds the fairest price and lets us enjoy trading without the haggling.",
  theme: PanelThemeEnum.LIGHT,
  image: IMAGE,
  alt: "panel",
  title: "panel title",
};
const panel4: PanelSectionProps = {
  heading: "Need to sell quickly? Choose Firesale",
  text: `Would you like to sell preloved items quickly?
Sell with our Firesale option for 2 days.${LOREM}${LOREM}`,
  theme: PanelThemeEnum.BRAND,
  image: IMAGE,
  alt: "panel",
  title: "panel title",
};
const panel5: PanelSectionProps = {
  heading: "No need to leave the house. We organise & deliver door to door.",
  text: "Would you like to sell preloved items quickly? Sell with our Firesale option for 2 days.",
  theme: PanelThemeEnum.LIGHT,
  image: IMAGE2,
  alt: "panel",
  title: "panel title",
};
const feature: FeatureSectionProps = {
  heading: "A better, safer & more sustainable way to shop.",
  col1Header: "We pick up and deliver",
  col1Text: LOREM,
  col2Header: "We pick up and deliver",
  col2Text: LOREM,
  col3Header: "We pick up and deliver",
  col3Text: LOREM,
};

i18next.use(initReactI18next).init({
  fallbackLng: INITIAL_LANG,
  lng: INITIAL_LANG,
  interpolation: {
    escapeValue: false,
  },
  defaultNS: DEFAULT_NS,
  resources: {
    "en-EN": {
      translation: {
        default: {},

        website: {
          title: "Ombrello",
        },
        panel1,
        panel2,
        panel3,
        panel4,
        panel5,
        feature,
      },
    },
  },
});

export default i18next;
