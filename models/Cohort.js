import mongoose, { Schema } from "mongoose";

const CohortSchema = new Schema(
  { object: { type: String, default: "cohort" },
    name: { type: String, unique: true} },
  { minimize: false, timestamps: true, collection: "cohorts" }
);

export default mongoose.models.Cohort || mongoose.model("Cohort", CohortSchema);
