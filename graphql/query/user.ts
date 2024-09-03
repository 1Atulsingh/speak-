import gql from "graphql-tag";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

// Define the expected response and variables types
interface VerifyGoogleTokenResponse {
  verifyGoogleToken: string;
}

interface VerifyGoogleTokenVariables {
  token: string;
}

// Define the query using gql and TypedDocumentNode
export const verifyGoogleTokenQuery = gql(`
  query VerifyUserGoogleToken($token: String!) {
    verifyGoogleToken(token: $token)
  }
`) as TypedDocumentNode<VerifyGoogleTokenResponse, VerifyGoogleTokenVariables>;
