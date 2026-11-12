import { Document, FilterQuery, Model, SortOrder } from "mongoose";

export interface IPaginate<T> {
  edges: T[];
  pageInfo: {
    totalEdges: number;
    edgeCount: number;
    edgesPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export const paginate = async <T extends Document>(
  model: Model<T>,
  query: FilterQuery<T>,
  page: number,
  limit: number,
  sortFiled?: string,
  sortOrder?: SortOrder
): Promise<IPaginate<T>> => {
  const sort = {};
  if (sortFiled) {
    sort[sortFiled] = sortOrder || -1;
  }

  const items = await model
    .find()
    .where(query)
    .skip((page - 1) * limit)
    .sort(sort)
    .limit(limit)
    .exec();

  const totalEdges = await model.countDocuments().where(query).exec();
  const edgeCount = items.length;
  const totalPages = Math.ceil(totalEdges / limit);

  const pageInfo = {
    totalEdges,
    edgeCount,
    edgesPerPage: Number(limit),
    totalPages,
    currentPage: Number(page),
  };

  return { edges: items, pageInfo };
};
