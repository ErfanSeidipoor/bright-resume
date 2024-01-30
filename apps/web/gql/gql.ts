/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  mutation signInUsr($username: String!, $password: String!) {\n    signIn(signInAuthInputs: { username: $username, password: $password }) {\n      token\n    }\n  }\n": types.SignInUsrDocument,
    "\n  mutation SignUpUsr($name: String!, $username: String!, $password: String!) {\n    signUp(\n      signUpAuthInputs: {\n        name: $name\n        username: $username\n        password: $password\n      }\n    ) {\n      token\n    }\n  }\n": types.SignUpUsrDocument,
    "\n  query getUserProfile {\n    getProfile {\n      name\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": types.GetUserProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation signInUsr($username: String!, $password: String!) {\n    signIn(signInAuthInputs: { username: $username, password: $password }) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation signInUsr($username: String!, $password: String!) {\n    signIn(signInAuthInputs: { username: $username, password: $password }) {\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation SignUpUsr($name: String!, $username: String!, $password: String!) {\n    signUp(\n      signUpAuthInputs: {\n        name: $name\n        username: $username\n        password: $password\n      }\n    ) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation SignUpUsr($name: String!, $username: String!, $password: String!) {\n    signUp(\n      signUpAuthInputs: {\n        name: $name\n        username: $username\n        password: $password\n      }\n    ) {\n      token\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getUserProfile {\n    getProfile {\n      name\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"): (typeof documents)["\n  query getUserProfile {\n    getProfile {\n      name\n      username\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;