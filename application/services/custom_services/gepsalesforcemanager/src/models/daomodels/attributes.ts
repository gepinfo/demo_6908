
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const attributesSchema = new Schema({
   created_date_at: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date_at: { type: Date, default: Date.now },
   type: { type: String, ref: 'testsaleforcepathapi', default: null },
   url: { type: String, ref: 'testsaleforcepathapi', default: null}
})

const attributesModel = mongoose.model('attributes', attributesSchema, 'attributes');
export default attributesModel;
