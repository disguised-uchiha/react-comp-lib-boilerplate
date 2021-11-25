module.exports = componentName => ({
  content: `export interface ${componentName}Props {
    children: string | React.ReactNode;
}
`,
  extension: ".types.ts"
});
