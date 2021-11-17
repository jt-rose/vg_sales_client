import { GraphQLClient } from "graphql-request";
import { getSdkWithHooks } from "./generated/graphql";

const client = new GraphQLClient("http://localhost:8000/graphql");
export const sdk = getSdkWithHooks(client);
