/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, ObjectType } from "@nestjs/graphql";
import { Type } from "@nestjs/common";
import { PageInfo } from "./pageInfo";

export function Paginated<T>(classRef: Type<T>): any {
  @ObjectType({ isAbstract: true })
  abstract class PaginatedType {
    @Field(() => [classRef], { nullable: false })
    edges: T[];

    @Field(() => PageInfo, { nullable: false })
    pageInfo: PageInfo;
  }

  return PaginatedType;
}
