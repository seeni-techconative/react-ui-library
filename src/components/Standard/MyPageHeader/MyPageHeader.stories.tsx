import { Meta, StoryObj } from '@storybook/react';
import MyPageHeader from './MyPageHeader';
import { MenuItem } from './my-page-header';

import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

// Metadata about the story
const meta: Meta<typeof MyPageHeader> = {
    title: 'Components/Standard/MyPageHeader',
    component: MyPageHeader,
};

export default meta;

// Define a type for the story object
type Story = StoryObj<typeof MyPageHeader>;

const avatarMenuList: MenuItem[] = [
    {
        name: "Profile",
        icon: Person4OutlinedIcon,
        link: "/profile"
    },
    {
        name: "Account",
        icon: SettingsOutlinedIcon,
        link: "/account",
    },
    {
        name: "Logout",
        icon: LogoutOutlinedIcon,
        link: "/logout",
        hasDivider: true
    }
];

const iconMenuList: MenuItem[] = [
    {
        name: "Co-pilot",
        icon: AutoAwesomeOutlinedIcon,
        link: "/co-pilot",
    },
    {
        name: "Dashboard",
        icon: WidgetsOutlinedIcon,
        link: "/dashboard"
    },
    {
        name: "Notification",
        icon: NotificationsOutlinedIcon,
        link: "/notification"
    }

];

const handleMenuItemClick = (menu: MenuItem) => {
    console.log("Clicked Menu Item", menu);
};

const handleOnSearch = (query: string) => {
    console.log("Search Query", query);
}

export const StandardHeader: Story = {
    args: {
        avatarMenuList,
        onAvatarMenuItemClick: handleMenuItemClick,
        iconMenuList,
        onIconMenuItemClick: handleMenuItemClick,
        onSearch: handleOnSearch
    }
};