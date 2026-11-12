import { ObjectType, Field, Directive } from "@nestjs/graphql";

@ObjectType()
@Directive("@shareable")
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
