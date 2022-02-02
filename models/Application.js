import mongoose, { Schema } from "mongoose" 

const ApplicationSchema = new Schema( 
    { 
        full_name: { type: String, required: true, unique: true, default: "application" }, 
        cohort: { type: Schema.Types.ObjectId, ref: "Cohort" }, 
        products: [{ type: Schema.Types.ObjectId, ref: "Product" }], 
    }, 
    { minimize: false, timestamps: true, collection: "applications"}
)

export default mongoose.models.Application || mongoose.model("Application", ApplicationSchema)
