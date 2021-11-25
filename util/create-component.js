require("colors");
const templates = require("./templates");
const readlineSync = require("readline-sync");
const fs = require("fs");

let generateTestFile;

if (readlineSync.keyInYN("Do you want to generate .test.tsx file ?")) {
  generateTestFile = "y";
} else {
  generateTestFile = "n";
  console.log("Skipping .test.tsx file generation".dim);
}

const componentName = process.argv[2];

if (!componentName) {
  console.error("Please supply a valid component name".red);
  process.exit(1);
}

console.log(`Creating Component Templates with name: ${componentName}`);

const componentDirectory = `./src/${componentName}`;

if (fs.existsSync(componentDirectory)) {
  console.error(`Component ${componentName} already exists.`.red);
  process.exit(1);
}

fs.mkdirSync(componentDirectory);

const generatedTemplates = templates.map(template => template(componentName));

generatedTemplates.forEach(template => {
  if (template.extension === ".test.tsx" && generateTestFile === "n") {
    return;
  }
  fs.writeFileSync(`${componentDirectory}/${componentName}${template.extension}`, template.content);
});

// export component from src/index.ts
fs.writeFile("./src/index.ts", `export * from "./${componentName}/${componentName}";`, { flag: "a+" }, err => {
  if (err) throw err;
  console.log(`export * from "./${componentName}/${componentName}" appended to src/index.ts`.italic.magenta);
});

console.log(`Successfully created component under: ${componentDirectory.green}`);
