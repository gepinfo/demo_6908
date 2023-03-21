
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const salesforceapiSchema = new Schema({
   created_date_at: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date, default: Date.now },
   salesforcelist: String
})

const salesforceapiModel = mongoose.model('salesforceapi', salesforceapiSchema, 'salesforceapi');
export default salesforceapiModel;
