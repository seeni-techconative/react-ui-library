import { Meta, StoryObj } from "@storybook/react";
import React from "react";

import CloudIcon from "@mui/icons-material/Cloud";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";

import { MyDivider } from "../MyDivider";
import { MyListItemIcon } from "../MyListItemIcon";
import { MyListItemText } from "../MyListItemText";
import { MyMenuItem } from "../MyMenuItem";
import { MyMenuList } from "../MyMenuList";
import { MyPaper } from "../MyPaper";
import { MyTypography } from "../MyTypography";
import MyMenu from "./MyMenu";

// Metadata about the story
const meta: Meta<typeof MyMenu> = {
    title: "Components/Basic/MyMenu",
    component: MyMenu,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyMenu>;

export const BasicMenu: Story = {
    args: {
        children: (
            <>
                <MyMenuItem>Profile</MyMenuItem>
                <MyMenuItem>My Account</MyMenuItem>
                <MyMenuItem>Logout</MyMenuItem>
            </>
        ),
        open: true,
    },
};

export const IconMenu: Story = {
    decorators: () => (
        <MyPaper sx={{ width: 320, maxWidth: "100%" }}>
            <MyMenuList>
                <MyMenuItem>
                    <MyListItemIcon>
                        <ContentCutIcon fontSize="small" />
                    </MyListItemIcon>
                    <MyListItemText>Cut</MyListItemText>

                    <MyTypography variant="body2" color="text.secondary">
                        ⌘X
                    </MyTypography>
                </MyMenuItem>

                <MyMenuItem>
                    <MyListItemIcon>
                        <ContentCopyIcon fontSize="small" />
                    </MyListItemIcon>
                    <MyListItemText>Copy</MyListItemText>

                    <MyTypography variant="body2" color="text.secondary">
                        ⌘C
                    </MyTypography>
                </MyMenuItem>

                <MyMenuItem>
                    <MyListItemIcon>
                        <ContentPasteIcon fontSize="small" />
                    </MyListItemIcon>
                    <MyListItemText>Paste</MyListItemText>

                    <MyTypography variant="body2" color="text.secondary">
                        ⌘V
                    </MyTypography>
                </MyMenuItem>

                <MyDivider />

                <MyMenuItem>
                    <MyListItemIcon>
                        <CloudIcon fontSize="small" />
                    </MyListItemIcon>
                    <MyListItemText>Web Clipboard</MyListItemText>
                </MyMenuItem>
            </MyMenuList>
        </MyPaper>
    ),
};
