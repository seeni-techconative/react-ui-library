import { TypographyVariantsOptions } from "@mui/material";

const InterRegular = "'InterRegular', san-serif";
const InterBold = "'InterBold', san-serif";

export const typography: TypographyVariantsOptions = {
  fontFamily: InterRegular,

  // Headings h1 to h6
  h1: {
    fontFamily: InterBold,
    fontSize: "2.25rem",
    lineHeight: 1.25,
    letterSpacing: "0.7px",
  },
  h2: {
    fontFamily: InterBold,
    fontSize: "1.75rem",
    lineHeight: 1.25,
    letterSpacing: "0.6px",
  },
  h3: {
    fontFamily: InterBold,
    fontSize: "1.375rem",
    lineHeight: 1.28,
    letterSpacing: "0.4px",
  },
  h4: {
    fontFamily: InterBold,
    fontSize: "1.125rem",
    lineHeight: 1.23,
    letterSpacing: 0,
  },
  h5: {
    fontFamily: InterBold,
    fontSize: "1rem",
    lineHeight: 1.25,
    letterSpacing: 0,
  },
  h6: {
    fontFamily: InterBold,
    fontSize: "0.875rem",
    lineHeight: 1.3,
    letterSpacing: 0,
  },

  // Body
  body1: {
    fontSize: "1rem",
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  body2: {
    fontSize: "0.875rem",
    lineHeight: 1.5,
    letterSpacing: 0,
  },
  subtitle1: {
    fontSize: "0.75rem",
    lineHeight: 1.15,
    letterSpacing: 0,
  },
  subtitle2: {
    fontSize: "0.625rem",
    lineClamp: 1.2,
  },
};
