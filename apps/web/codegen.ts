import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://back-development.bright-resume.com/graphql/",
  documents: ["apps/web/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "./apps/web/gql/": {
      preset: "client",
      plugins: ["typescript"],
      config: {
        typesPrefix: "I",
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
