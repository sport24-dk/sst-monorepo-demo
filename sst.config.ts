/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "clean-sst-monorepo",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const storage = await import("./infra/storage");
    await import("./infra/api");
    const web = await import("./infra/web");

    return {
      MyBucket: storage.bucket.name,
      WebUrl: web.web.url,
    };
  },
});
