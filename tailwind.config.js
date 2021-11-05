const pxToRem = (num) => {
  return `${num / 16}rem`;
};

module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1640px",
      display: "2100px",
    },
    colors: {
      transparent: "transparent",
      currentcolor: "currentColor",
      white: "#FBFAF6",
      black: "#0D0D0D",
      lightBlack: "#1D1D1D",
      blue: "#2400FF",
      orange: "#FF9900",
      pink: "#FF008A",
    },
    fontSize: {
      body2: [pxToRem(14), 1.143],
      8: [pxToRem(8), 1.2],
      10: [pxToRem(10), 1.2],
      11: [pxToRem(11), 1.3],
      13: [pxToRem(13), 1.2],
      14: [pxToRem(14), 1.5],
      16: [pxToRem(16), 1.3],
      18: [pxToRem(18), 1.3],
      19: [pxToRem(19), 1.4],
      22: [pxToRem(22), 1],
      24: [pxToRem(24), 1.3],
      25: [pxToRem(25), 1],
      28: [pxToRem(28), 1],
      36: [pxToRem(36), 1],
      40: [pxToRem(40), 1.2],
      48: [pxToRem(48), 1],
      56: [pxToRem(56), 1.12],
      62: [pxToRem(62), 1.161],
      72: [pxToRem(72), 1.111],
      80: [pxToRem(80), 1],
    },
    lineHeight: {
      none: "1",
      tight: "1.2",
      snug: "1.3",
      normal: 22 / 16, // body 1.375
      relaxed: "1.5",
      loose: "2",
    },
    extend: {
      maxWidth: {
        /* 
          max widths for SectionWrapper:
          different named than breakpoints
          when used with SectionWrappers a inner padding is assumed
        */
        xsmall: pxToRem(744),
        small: pxToRem(860),
        medium: pxToRem(976),
        large: pxToRem(1092),
        xlarge: pxToRem(1200),
        xxlarge: pxToRem(1334),
        // used in footer
        w788: pxToRem(788),
      },
      minWidth: {
        w208: pxToRem(208),
      },
      spacing: {
        // TODO: necessary
      },
      fontFamily: {
        sans: "Strawford", // TODO:  defaults fonts here?
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
