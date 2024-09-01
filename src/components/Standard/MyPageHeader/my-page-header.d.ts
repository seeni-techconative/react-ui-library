import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";

export type MenuItem = {
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
    name: string;
    link: string;
    hasDivider?: boolean;
};
