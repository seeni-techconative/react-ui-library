// import autoprefixer from "autoprefixer";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
// import postcss from "rollup-plugin-postcss";
// import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

export default {
    input: "src/index.ts", // Entry point of your library
    output: [
        {
            file: "dist/main.js", // CommonJS output
            format: "cjs",
            sourcemap: true,
        },
        {
            file: "dist/index.esm.js", // ES Module output
            format: "esm",
            sourcemap: true,
        },
    ],
    plugins: [
        del({ targets: "dist/*" }),
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        terser(),
        url({
            include: ["**/*.ttf", "**/*.woff", "**/*.woff2"],
            limit: 0, // Ensures files are copied rather than inlined as base64
            fileName: "[dirname][hash][extname]",
        }),
        // postcss({
        //   plugins: [autoprefixer()],
        //   extract: true,
        //   inject: true,
        // }),
        // copy({
        //   targets: [{ src: "src/styles/*", dest: "dist/styles" }],
        // }),
    ],
    external: ["react", "react-dom"], // Mark peer dependencies like react as external
};
