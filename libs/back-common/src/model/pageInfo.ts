import { ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class PageInfo {
  @Field()
  totalEdges: number;

  @Field({ nullable: true })
  edgeCount: number;

  @Field()
  edgesPerPage: number;

  @Field()
  totalPages: number;

  @Field()
  currentPage: number;
}
