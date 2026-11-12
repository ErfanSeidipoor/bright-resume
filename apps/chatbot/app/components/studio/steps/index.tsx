"use client";

import {
  Separator,
  Sheet,
  SheetContent,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@resume-template-components/shadcn-ui";
import { FC, ReactNode } from "react";

import { ResumeSectionType } from "@models";
import { useStudioContext } from "../use-context";
import {
  Certification,
  CourseWork,
  Education,
  Experience,
  Header,
  Hobby,
  Involvement,
  Language,
  Project,
  Skill,
  Summary,
} from "./components";

const sections: { section: ResumeSectionType; component: ReactNode }[] = [
  {
    section: "header",
    component: <Header />,
  },
  {
    section: "summary",
    component: <Summary />,
  },
  {
    section: "experience",
    component: <Experience />,
  },
  {
    section: "involvement",
    component: <Involvement />,
  },
  {
    section: "project",
    component: <Project />,
  },
  {
    section: "education",
    component: <Education />,
  },
  {
    section: "skill",
    component: <Skill />,
  },
  {
    section: "courseWork",
    component: <CourseWork />,
  },
  {
    section: "certification",
    component: <Certification />,
  },
  {
    section: "hobby",
    component: <Hobby />,
  },
  {
    section: "language",
    component: <Language />,
  },
];

export const Steps: FC = () => {
  const { isOpenSteps, setIsOpenSteps, resumeSection, setResumeSection } =
    useStudioContext();

  return (
    <Sheet open={isOpenSteps} onOpenChange={setIsOpenSteps}>
      <SheetContent style={{ width: "80%", maxWidth: "80%" }} side="right">
        <Tabs
          defaultValue="header"
          value={resumeSection}
          className="h-full flex flex-col"
        >
          <TabsList className="bg-blue-300">
            {sections.map(({ section }) => (
              <TabsTrigger
                key={section}
                value={section!}
                onClick={() => setResumeSection(section)}
                className="text-zinc-600 dark:text-zinc-200"
              >
                {section}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="header" className="overflow-auto">
            <Header />
          </TabsContent>
          <TabsContent value="summary" className="overflow-auto">
            <Summary />
          </TabsContent>
          <TabsContent value="experience" className="overflow-auto">
            <Experience />
          </TabsContent>
          <TabsContent value="involvement" className="overflow-auto">
            <Involvement />
          </TabsContent>
          <TabsContent value="project" className="overflow-auto">
            <Project />
          </TabsContent>
          <TabsContent value="education" className="overflow-auto">
            <Education />
          </TabsContent>
          <TabsContent value="skill" className="overflow-auto">
            <Skill />
          </TabsContent>
          <TabsContent value="courseWork" className="overflow-auto">
            <CourseWork />
          </TabsContent>
          <TabsContent value="certification" className="overflow-auto">
            <Certification />
          </TabsContent>
          <TabsContent value="hobby" className="overflow-auto">
            <Hobby />
          </TabsContent>
          <TabsContent value="language" className="overflow-auto">
            <Language />
          </TabsContent>
        </Tabs>
        <Separator />
      </SheetContent>
    </Sheet>
  );
};
