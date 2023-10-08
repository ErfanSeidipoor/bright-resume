import { Document, FilterQuery, Model } from "mongoose";

export interface IPaginate<T> {
  edges: T[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
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

  const totalItems = await model.countDocuments().where(query).exec();
  const itemCount = items.length;
  const totalPages = Math.ceil(totalItems / limit);

  const meta = {
    totalItems,
    itemCount,
    itemsPerPage: Number(limit),
    totalPages,
    currentPage: Number(page),
  };

  return { edges: items, meta };
};
