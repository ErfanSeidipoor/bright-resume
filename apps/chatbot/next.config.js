//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require("@nx/next");
require("dotenv").config();

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/

const nextConfig = {
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  async rewrites() {
    return [
      {
        source: "/api/graphql",
        destination: process.env["BACK_URL"] + "/graphql",
      },
      {
        source: "/back/auth/sign-in/google",
        destination: process.env["BACK_URL"] + "/auth/sign-in/google",
      },
      {
        source: "/back/auth/sign-in/linkedin",
        destination: process.env["BACK_URL"] + "/auth/sign-in/linkedin",
      },
      {
        source: "/back/auth/sign-in/github",
        destination: process.env["BACK_URL"] + "/auth/sign-in/github",
      },
    ];
  },
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);
