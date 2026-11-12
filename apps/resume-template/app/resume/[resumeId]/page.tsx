import { TemplateMinimalist } from "@resume-template-components/templates/minimalist";
import { IResume } from "@models";
import { dbConnect } from "../../../libs/db";
import mongoose from "mongoose";

export default async function Page(props: { params: { resumeId: string } }) {
  await dbConnect();

  console.log({ resumeId: props.params.resumeId });

  const resumeId = props.params.resumeId;
  if (!mongoose.Types.ObjectId.isValid(resumeId)) {
    return <div>Invalid resumeId</div>;
  }

  const resume = (await mongoose.connection.db.collection("resumes").findOne({
    _id: new mongoose.Types.ObjectId(resumeId),
  })) as unknown as IResume;

  if (!resume) {
    return <div>404 - Resume not found</div>;
  }

  return <TemplateMinimalist staticMode={true} resume={resume} />;
}
