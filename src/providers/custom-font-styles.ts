import InterRegular from "../fonts/Inter-Regular.ttf";
import InterSemiBold from "../fonts/Inter-SemiBold.ttf";
import InterBold from "../fonts/Inter-Bold.ttf";

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default css`
  @font-face {
    font-family: "InterRegular";
    src: url(${InterRegular}) format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "InterSemiBold";
    src: url(${InterSemiBold}) format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "InterBold";
    src: url(${InterBold}) format("truetype");
    font-weight: 700;
    font-style: normal;
  }

  body {
    font-family: "InterRegular", sans-serif;
  }
`;
