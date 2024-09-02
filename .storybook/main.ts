/** @type { import('@storybook/react-webpack5').StorybookConfig } */

const config = {
    stories: ["../**/*.mdx", "../**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-onboarding",
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@chromatic-com/storybook",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {
            builder: {
                useSWC: true,
            },
        },
    },
    webpackFinal: async (config, { configType }) => {
        if (configType === "DEVELOPMENT") {
            // Modify config for development
        }
        if (configType === "PRODUCTION") {
            // Modify config for production
        }
        return config;
    },
};

export default config;

export const framework = "@storybook/react";
