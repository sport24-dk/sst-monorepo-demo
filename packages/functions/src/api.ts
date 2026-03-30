import { Resource } from "sst";
import { Handler } from "aws-lambda";
import { Example } from "@clean-sst-monorepo/core/example";

export const handler: Handler = async (_event) => {
  return {
    statusCode: 200,
    body: `${Example.hello()} Linked to ${Resource.MyBucket.name}.`,
  };
};
