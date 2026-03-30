# Monorepo Template

A template to create a monorepo SST v3 project. [Learn more](https://sst.dev/docs/set-up-a-monorepo).

## Get started

1. Install dependencies.

   ```bash
   npm install
   ```

2. Deploy!

   ```bash
   npx sst deploy
   ```

   This deploys the Lambda API, S3 bucket, and Next.js app to AWS. Once complete, the CLI outputs the `WebUrl` for your site.

3. Optionally, enable [_git push to deploy_](https://sst.dev/docs/console/#autodeploy).

## Development

Start the SST dev environment to work on all resources locally with live reload.

```bash
npx sst dev
```

Then in a separate terminal, start the Next.js dev server.

```bash
npm run dev -w apps/web
```

## Project structure

This template uses [npm Workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces).

```
apps/
  web/          → Next.js 15 frontend (deployed via SST Nextjs component)
packages/
  core/         → Shared library code
  functions/    → Lambda function handlers
  scripts/      → One-off scripts (run via sst shell)
infra/          → SST infrastructure definitions
```

### `apps/web/`

A Next.js 15 app using React 19 and the App Router. Deployed to AWS with the [`sst.aws.Nextjs`](https://sst.dev/docs/component/aws/nextjs) component.

```bash
# Run the dev server
npm run dev -w apps/web

# Build locally
npm run build -w apps/web
```

### `packages/core/`

Shared code defined as modules. For example, there's the `Example` module.

```ts
import { Example } from "@clean-sst-monorepo/core/example";

Example.hello();
```

Tests use [Vitest](https://vitest.dev/) via the `sst shell` CLI.

```bash
npm test -w packages/core
```

### `packages/functions/`

Lambda function handlers. Uses the `core` package as a local dependency.

### `packages/scripts/`

Scripts that run against your SST app using `sst shell` and [`tsx`](https://www.npmjs.com/package/tsx).

```bash
npm run shell src/example.ts -w packages/scripts
```

### `infra/`

Infrastructure definitions split into separate files. Imported in `sst.config.ts`.

| File         | Resources                                |
|--------------|------------------------------------------|
| `storage.ts` | S3 bucket                                |
| `api.ts`     | Lambda function with URL                 |
| `web.ts`     | Next.js site (CloudFront + Lambda@Edge)  |

---

**Join our community** [Discord](https://sst.dev/discord) | [YouTube](https://www.youtube.com/c/sst-dev) | [X.com](https://x.com/SST_dev)
