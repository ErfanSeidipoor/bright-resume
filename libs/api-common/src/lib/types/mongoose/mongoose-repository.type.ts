//below import is necessary since it does affect mongoose declarations
import {} from 'mongoose-paginate-v2';
import { PaginateModel } from 'mongoose';
import { SoftDeleteDocument } from 'mongoose-delete';

export type repository<T> = SoftDeleteDocument & PaginateModel<T>;
