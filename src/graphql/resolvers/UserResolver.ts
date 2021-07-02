import {
  AuthenticateResponse,
  MutationRegisterArgs,
  QueryLoginArgs,
  Resolvers,
} from "../generated/graphql";
import { IResolvers } from "graphql-tools";

export const UserResolvers: IResolvers = {
  Query: {
    async login(_: void, args: QueryLoginArgs): Promise<AuthenticateResponse> {
      return { token: "token" };
    },
  },
  Mutation: {
    async register(
      _: void,
      args: MutationRegisterArgs
    ): Promise<AuthenticateResponse> {
      return { token: "token" };
    },
  },
};
