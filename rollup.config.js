import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import alias from "@rollup/plugin-alias";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import del from "rollup-plugin-delete";
import { visualizer } from "rollup-plugin-visualizer";
import path from "path";
import { getFiles } from "./getFilePaths";

const autoprefixer = require("autoprefixer");
const tailwindcss = require("tailwindcss");

const createdExternalCssFile = true;

export default {
  input: ["./src/index.ts", ...getFiles("./src", [".tsx"], [".stories.tsx"])],
  output: [
    {
      dir: "build",
      format: "esm",
      exports: "named",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    commonjs(),
    resolve(),
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: {
        exclude: ["**/*.stories.tsx"]
      }
    }),
    alias({
      entries: [
        { find: "@app", replacement: path.resolve(__dirname, "src") },
        { find: "@root", replacement: path.resolve(__dirname) }
      ]
    }),
    postcss({
      modules: true,
      minimize: true,
      extensions: [".css", ".module.scss", ".scss"],
      inject: !createdExternalCssFile, // * Inject css directly to index.js
      extract: createdExternalCssFile, // * OR extract into a seperate css file
      plugins: [autoprefixer(), tailwindcss()],
      use: [
        [
          "sass",
          {
            includePaths: [path.resolve(__dirname, "src", "styles"), path.resolve("node_modules")]
          }
        ]
      ]
    }),
    terser(),
    visualizer({
      filename: "bundle-analysis.html",
      open: true,
      template: "sunburst",
      gzipSize: true,
      brotliSize: true
    }),
    del({ targets: ["build/*"] })
  ],
  external: ["react", "react-dom", "@ant-design/compatible", "antd"]
};
