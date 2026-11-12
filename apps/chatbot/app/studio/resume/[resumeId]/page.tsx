import { cookie } from "@chatbot/cookie";
import { redirect } from "next/navigation";
import StudioComponents from "../../../components/studio";
import { ResumeSectionType } from "@models";

export default async function Page(props: {
  params: { resumeId: string };
  searchParams: {
    sheet?: "chat" | "steps";
    section?: ResumeSectionType;
    resumeSubSectionIndex?: string;
  };
}) {
  const {
    params: { resumeId },
    searchParams: { sheet, section, resumeSubSectionIndex },
  } = props;

  const userCookie = await cookie.user.get();

  if (!userCookie?.id) {
    redirect("/auth/sign-in");
  }

  return (
    <StudioComponents
      user={userCookie}
      resumeId={resumeId}
      sheet={sheet}
      section={section}
      resumeSubSectionIndex={resumeSubSectionIndex}
    />
  );
}
