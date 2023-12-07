import { Document, FilterQuery, Model } from "mongoose";

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
  limit: number
): Promise<IPaginate<T>> => {
  const items = await model
    .find()
    .where(query)
    .skip((page - 1) * limit)
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
