import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: process.env["BACK_URL"] + "/graphql",
  documents: ["apps/chatbot/**/*.{ts,tsx}"],
  ignoreNoDocuments: true,
  generates: {
    "apps/chatbot/gql/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
