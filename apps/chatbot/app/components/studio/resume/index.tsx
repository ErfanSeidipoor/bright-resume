"use client";

import { FC } from "react";
import { useRef, useState } from "react";
import useSize from "@react-hook/size";
import {
  Checkbox,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarTrigger,
  Button,
} from "@resume-template-components/shadcn-ui";
import { TemplateMinimalist } from "@resume-template-components/templates/minimalist";

import { useData } from "./index.hook";
import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";
import { ResumeSectionType } from "@models";
import { useStudioContext } from "../use-context";

type ZoomRangeType = 0.5 | 0.75 | 1 | 1.25 | 1.5 | 1.75;

export const Resume: FC = () => {
  const data = useData();
  const [zoom, setZoom] = useState<ZoomRangeType>(1);
  const target = useRef(null);
  const [width, height] = useSize(target);
  const {
    setIsOpenSteps,
    setDeleteResume,
    selectedResume,
    generatePdfLoading,
  } = useStudioContext();

  return (
    <div className="resume-container h-full px-9">
      <div
        className="my-3 flex justify-center items-center"
        style={{ minWidth: width * zoom }}
      >
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger className="whitespace-nowrap">{`FontSize: (${data.resumeModel.getFontSize()})`}</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup
                value={data.resumeModel.getFontSize() || undefined}
              >
                {Object.values(ResumeFontSizeEnum).map((value) => (
                  <MenubarRadioItem
                    key={value}
                    value={value}
                    onClick={() => {
                      data.callResumeSetMethod("setFontSize", value);
                    }}
                    className="flex gap-3"
                  >
                    {value}
                  </MenubarRadioItem>
                ))}
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="whitespace-nowrap">{`Color: (${data.resumeModel.getColor()})`}</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup
                value={data.resumeModel.getColor() || undefined}
              >
                {Object.values(ResumeColorEnum).map((value) => (
                  <MenubarRadioItem
                    key={value}
                    value={value}
                    onClick={() => {
                      data.callResumeSetMethod("setColor", value);
                    }}
                    className="flex gap-3"
                  >
                    <div
                      className="rounded"
                      style={{
                        backgroundColor: data.resumeModel.getColorValue(value),
                        width: "20px",
                        height: "20px",
                      }}
                    />
                    {value}
                  </MenubarRadioItem>
                ))}
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="whitespace-nowrap">{`FontFamily: (${data.resumeModel.getFontFamily()})`}</MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup
                value={data.resumeModel.getFontFamily() || undefined}
              >
                {Object.values(ResumeFontFamilyEnum).map((value) => (
                  <MenubarRadioItem
                    key={value}
                    value={value}
                    onClick={() => {
                      data.callResumeSetMethod("setFontFamily", value);
                    }}
                    className="flex gap-3"
                  >
                    {value}
                  </MenubarRadioItem>
                ))}
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>{`Sections`}</MenubarTrigger>
            <MenubarContent>
              {(
                [
                  {
                    section: "summary",
                    isShow: !!data.resumeModel.getIsShowSummary(),
                  },
                  {
                    section: "experience",
                    isShow: !!data.resumeModel.getIsShowExperience(),
                  },
                  {
                    section: "involvement",
                    isShow: !!data.resumeModel.getIsShowInvolvement(),
                  },
                  {
                    section: "project",
                    isShow: !!data.resumeModel.getIsShowProject(),
                  },
                  {
                    section: "education",
                    isShow: !!data.resumeModel.getIsShowEducation(),
                  },
                  {
                    section: "skill",
                    isShow: !!data.resumeModel.getIsShowSkill(),
                  },
                  {
                    section: "courseWork",
                    isShow: !!data.resumeModel.getIsShowCourseWork(),
                  },
                  {
                    section: "certification",
                    isShow: !!data.resumeModel.getIsShowCertification(),
                  },
                  {
                    section: "hobby",
                    isShow: !!data.resumeModel.getIsShowHobby(),
                  },
                  {
                    section: "language",
                    isShow: !!data.resumeModel.getIsShowLanguage(),
                  },
                ] as { section: ResumeSectionType; isShow: boolean }[]
              ).map(({ section, isShow }) => (
                <MenubarItem
                  key={section}
                  className="flex gap-2"
                  onClick={(e) => {
                    e.preventDefault();
                    isShow
                      ? data.callResumeSetMethod("setHiddenSection", section)
                      : data.callResumeSetMethod("setShowSection", section);
                  }}
                >
                  <Checkbox id={section} checked={isShow} />
                  {section}
                </MenubarItem>
              ))}
              <MenubarItem
                className="flex gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  data.callResumeSetMethod(
                    "setIsShowImage",
                    !data.resumeModel.getIsShowImage()
                  );
                }}
              >
                <Checkbox
                  id={"image"}
                  checked={data.resumeModel.getIsShowImage() || undefined}
                />
                {"Image"}
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="whitespace-nowrap">
              {`Zoom (×${zoom})`}{" "}
            </MenubarTrigger>
            <MenubarContent>
              <MenubarRadioGroup value={zoom.toString()}>
                {([0.5, 0.75, 1, 1.25, 1.5, 1.75] as ZoomRangeType[]).map(
                  (value) => (
                    <MenubarRadioItem
                      key={value.toString()}
                      value={value.toString()}
                      onClick={() => setZoom(value)}
                    >
                      {`×${value}`}
                    </MenubarRadioItem>
                  )
                )}
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setIsOpenSteps(true)}
            >
              Edit
            </Button>
          </MenubarMenu>
          <MenubarMenu>
            <Button
              variant="outline"
              size="icon"
              onClick={() => data.updateResume()}
              disabled={!data.isChanged}
            >
              save
            </Button>
          </MenubarMenu>
          <MenubarMenu>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDeleteResume(selectedResume)}
            >
              delete
            </Button>
          </MenubarMenu>
          <MenubarMenu>
            <Button
              variant="outline"
              size="icon"
              onClick={() => data.generatePdf()}
              disabled={generatePdfLoading}
            >
              PDF
            </Button>
          </MenubarMenu>
        </Menubar>
      </div>
      <div
        className="resume my-4 ml-auto mr-auto relative overflow-hidden"
        style={{ width: width * zoom, height: height * zoom }}
      >
        <div className="shadow-md absolute left-0" ref={target}>
          <TemplateMinimalist
            {...data}
            resume={data.resumeModel.input}
            zoom={zoom}
          />
        </div>
      </div>
    </div>
  );
};
