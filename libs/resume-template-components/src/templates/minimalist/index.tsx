"use client";

import { faker } from "@faker-js/faker";

import {
  WebIcon,
  EditIcon,
  PhoneIcon,
  MailIcon,
  LinkedinIcon,
  UpIcon,
  DownIcon,
  AIIcon,
  VisibilityOffIcon,
  LocationIcon,
} from "../icons";

import "./general.css";
import "./header.css";
import "./summary.css";
import "./experience.css";
import "./project.css";
import "./course-work.css";
import "./certification.css";
import "./education.css";
import "./skill.css";
import "./language.css";
import "./involvement.css";
import "./hobby.css";
import {
  ResumeColorEnum,
  ResumeFontFamilyEnum,
  ResumeFontSizeEnum,
} from "@enums";
import { RichText } from "@resume-template-components/rich-text";
import { ResumeTemplateProps } from "../resume-template-props";
import { ResumeSectionType } from "@models";

export function TemplateMinimalist({
  zoom = 1,
  resume = {},
  staticMode,
  hoverSection,
  setHoverSection,
  hoverSubSectionPoint,
  setHoverSubSectionPoint,
  hoverSubSection,
  setHoverSubSection,
  onChangeSubSectionIndex,
  onChangeSubSectionPointIndex,
  callResumeSetMethod,
  callResumeGetMethod,
  callResumeProjectSetMethod,
  callResumeCertificationSetMethod,
  callResumeCourseWorkSetMethod,
  callResumeEducationSetMethod,
  callResumeExperienceSetMethod,
  callResumeInvolvementSetMethod,
  callResumeLanguageSetMethod,
  callResumeSkillSetMethod,
  callResumeHobbySetMethod,
  onMoveUpSection,
  onMoveDownSection,
  onClickEditSection,
  onClickEditSubSection,
}: ResumeTemplateProps) {
  const { fontSize, fontFamily, color } = resume;

  let subTextFontSize: string;
  let textFontSize: string;
  let subTitleFontSize: string;
  let titleFontSize: string;
  let headerFontSize: string;

  if (fontSize === ResumeFontSizeEnum.XxSmall) {
    subTextFontSize = "font-size-6";
    textFontSize = "font-size-7";
    subTitleFontSize = "font-size-9";
    titleFontSize = "font-size-10";
    headerFontSize = "font-size-15";
  } else if (fontSize === ResumeFontSizeEnum.XSmall) {
    subTextFontSize = "font-size-7";
    textFontSize = "font-size-8";
    subTitleFontSize = "font-size-10";
    titleFontSize = "font-size-11";
    headerFontSize = "font-size-16";
  } else if (fontSize === ResumeFontSizeEnum.Small) {
    subTextFontSize = "font-size-8";
    textFontSize = "font-size-9";
    subTitleFontSize = "font-size-11";
    titleFontSize = "font-size-12";
    headerFontSize = "font-size-17";
  } else if (fontSize === ResumeFontSizeEnum.Medium) {
    subTextFontSize = "font-size-9";
    textFontSize = "font-size-10";
    subTitleFontSize = "font-size-12";
    titleFontSize = "font-size-13";
    headerFontSize = "font-size-18";
  } else if (fontSize === ResumeFontSizeEnum.Large) {
    subTextFontSize = "font-size-10";
    textFontSize = "font-size-11";
    subTitleFontSize = "font-size-13";
    titleFontSize = "font-size-14";
    headerFontSize = "font-size-18";
  } else if (fontSize === ResumeFontSizeEnum.XLarge) {
    subTextFontSize = "font-size-11";
    textFontSize = "font-size-12";
    subTitleFontSize = "font-size-14";
    titleFontSize = "font-size-15";
    headerFontSize = "font-size-18";
  } else if (fontSize === ResumeFontSizeEnum.XxLarge) {
    subTextFontSize = "font-size-12";
    textFontSize = "font-size-13";
    subTitleFontSize = "font-size-15";
    titleFontSize = "font-size-16";
    headerFontSize = "font-size-18";
  }

  let fontColorClass = "text-black";
  let borderColorClass = "border-black";
  if (color === ResumeColorEnum.Black) {
    fontColorClass = "text-black";
    borderColorClass = "border-black";
  } else if (color === ResumeColorEnum.Gray) {
    fontColorClass = "text-gray";
    borderColorClass = "border-gray";
  } else if (color === ResumeColorEnum.Red) {
    fontColorClass = "text-red";
    borderColorClass = "border-red";
  } else if (color === ResumeColorEnum.Yellow) {
    fontColorClass = "text-yellow";
    borderColorClass = "border-yellow";
  } else if (color === ResumeColorEnum.Blue) {
    fontColorClass = "text-blue";
    borderColorClass = "border-blue";
  } else if (color === ResumeColorEnum.Green) {
    fontColorClass = "text-green";
    borderColorClass = "border-green";
  } else if (color === ResumeColorEnum.Purple) {
    fontColorClass = "text-purple";
    borderColorClass = "border-purple";
  } else if (color === ResumeColorEnum.Orange) {
    fontColorClass = "text-orange";
    borderColorClass = "border-orange";
  } else if (color === ResumeColorEnum.Brown) {
    fontColorClass = "text-brown";
    borderColorClass = "border-brown";
  }

  let fontFamilyClass = "font-family-arial";
  if (fontFamily === ResumeFontFamilyEnum.Arial) {
    fontFamilyClass = "font-family-arial";
  } else if (fontFamily === ResumeFontFamilyEnum.Montserrat) {
    fontFamilyClass = "font-family-montserrat";
  } else if (fontFamily === ResumeFontFamilyEnum.Nunito) {
    fontFamilyClass = "font-family-nunito";
  } else if (fontFamily === ResumeFontFamilyEnum.Roboto) {
    fontFamilyClass = "font-family-roboto";
  } else if (fontFamily === ResumeFontFamilyEnum.Raleway) {
    fontFamilyClass = "font-family-raleway";
  }

  const onMouseOverSection = (part: ResumeSectionType) => {
    if (setHoverSection) {
      setHoverSection(part);
    }
  };

  const onMouseOutSection = () => {
    if (setHoverSection) {
      setHoverSection();
    }
  };

  const onMouseOverSubSection = (
    section: ResumeSectionType,
    subSectionIndex: number
  ) => {
    if (setHoverSubSection) {
      setHoverSubSection({ section, subSectionIndex });
    }
  };

  const onMouseOutSubSection = () => {
    if (setHoverSubSection) {
      setHoverSubSection();
    }
  };

  const onMouseOverSubSectionPoint = (
    section: ResumeSectionType,
    subSectionIndex: number,
    pointIndex: number
  ) => {
    if (setHoverSubSectionPoint) {
      setHoverSubSectionPoint({ section, subSectionIndex, pointIndex });
    }
  };

  const onMouseOutSectionPoint = () => {
    if (setHoverSubSectionPoint) {
      setHoverSubSectionPoint();
    }
  };

  const renderSectionToolbar = (section: typeof hoverSection) => {
    return (
      <div
        className={[
          "section-toolbar",
          hoverSection === section && "section-toolbar-show",
        ].join(" ")}
      >
        {onMoveUpSection &&
          callResumeGetMethod &&
          callResumeGetMethod("getUpperAndVisibleSection", section) && (
            <div className="button" onClick={() => onMoveUpSection(section)}>
              <UpIcon />
            </div>
          )}

        {callResumeSetMethod && (
          <div
            className="button"
            onClick={() => callResumeSetMethod("setHiddenSection", section)}
          >
            <VisibilityOffIcon />
          </div>
        )}
        {onClickEditSection && (
          <div className="button" onClick={() => onClickEditSection(section)}>
            <EditIcon />
          </div>
        )}
        <div className="button">
          <AIIcon />
        </div>
        {onMoveDownSection &&
          callResumeGetMethod &&
          callResumeGetMethod("getLowerAndVisibleSection", section) && (
            <div className="button" onClick={() => onMoveDownSection(section)}>
              <DownIcon />
            </div>
          )}
      </div>
    );
  };

  const renderSubSectionToolbar = (
    section: typeof hoverSection,
    subSectionIndex: number,
    subSectionLength: number
  ) => {
    return (
      <div
        className={[
          "sub-section-toolbar",
          hoverSubSection &&
            hoverSubSection.section === section &&
            hoverSubSection.subSectionIndex === subSectionIndex &&
            "sub-section-toolbar-show",
        ].join(" ")}
      >
        {onChangeSubSectionIndex &&
          subSectionIndex > 0 &&
          subSectionLength > 1 && (
            <div
              className="button"
              onClick={() =>
                onChangeSubSectionIndex(
                  section,
                  subSectionIndex,
                  subSectionIndex - 1
                )
              }
            >
              <UpIcon />
            </div>
          )}
        {onClickEditSubSection && (
          <div
            className="button"
            onClick={() => onClickEditSubSection(section, subSectionIndex)}
          >
            <EditIcon />
          </div>
        )}
        <div className="button">
          <AIIcon />
        </div>
        {onChangeSubSectionIndex && subSectionIndex < subSectionLength - 1 && (
          <div
            className="button"
            onClick={() =>
              onChangeSubSectionIndex(
                section,
                subSectionIndex,
                subSectionIndex + 1
              )
            }
          >
            <DownIcon />
          </div>
        )}
      </div>
    );
  };

  const renderSubSectionPointToolbar = (
    section: typeof hoverSection,
    subSectionIndex: number,
    pointIndex: number,
    pointLength: number
  ) => {
    return (
      <div
        className={[
          "section-toolbar-point",
          hoverSubSectionPoint &&
            hoverSubSectionPoint.section === section &&
            hoverSubSectionPoint.subSectionIndex === subSectionIndex &&
            hoverSubSectionPoint.pointIndex === pointIndex &&
            "section-toolbar-point-show",
        ].join(" ")}
      >
        {onChangeSubSectionPointIndex && pointIndex > 0 && pointLength > 1 && (
          <div
            className="button"
            onClick={() =>
              onChangeSubSectionPointIndex(
                section,
                subSectionIndex,
                pointIndex,
                pointIndex - 1
              )
            }
          >
            <UpIcon />
          </div>
        )}
        <div className="button">
          <EditIcon />
        </div>
        <div className="button">
          <AIIcon />
        </div>
        {onChangeSubSectionPointIndex && pointIndex < pointLength - 1 && (
          <div
            className="button"
            onClick={() =>
              onChangeSubSectionPointIndex(
                section,
                subSectionIndex,
                pointIndex,
                pointIndex + 1
              )
            }
          >
            <DownIcon />
          </div>
        )}
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className="hr-container">
        {resume.isShowImage && (
          <img
            className="hr-image"
            src={faker.image.avatar()}
            alt={resume.name || ""}
          />
        )}
        <div className="hr-text">
          <div
            className={["hr-name", headerFontSize, fontColorClass].join(" ")}
          >
            {staticMode ? (
              resume.name
            ) : (
              <RichText
                value={resume.name || ""}
                onChange={(value) =>
                  callResumeSetMethod && callResumeSetMethod("setName", value)
                }
              />
            )}
          </div>
          <div
            className={["hr-role", headerFontSize, fontColorClass].join(" ")}
          >
            {staticMode ? (
              resume.role
            ) : (
              <RichText
                value={resume.role || ""}
                onChange={(value) =>
                  callResumeSetMethod && callResumeSetMethod("setRole", value)
                }
              />
            )}
          </div>
          <div className="hr-social-media">
            {resume.isShowLinkedin && (
              <div className={["hr-item", subTextFontSize].join(" ")}>
                <div className="hr-item-icon">
                  <LinkedinIcon />
                </div>
                {staticMode ? (
                  resume.linkedin
                ) : (
                  <RichText
                    value={resume.linkedin || ""}
                    onChange={(value) =>
                      callResumeSetMethod &&
                      callResumeSetMethod("setLinkedin", value)
                    }
                  />
                )}
              </div>
            )}
            {resume.isShowEmail && (
              <div className={["hr-item", subTextFontSize].join(" ")}>
                <div className="hr-item-icon">
                  <MailIcon />
                </div>
                {staticMode ? (
                  resume.email
                ) : (
                  <RichText
                    value={resume.email || ""}
                    onChange={(value) =>
                      callResumeSetMethod &&
                      callResumeSetMethod("setEmail", value)
                    }
                  />
                )}
              </div>
            )}
            {resume.isShowPhoneNumber && (
              <div className={["hr-item", subTextFontSize].join(" ")}>
                <div className="hr-item-icon">
                  <PhoneIcon />
                </div>
                {staticMode ? (
                  resume.phoneNumber
                ) : (
                  <RichText
                    value={resume.phoneNumber || ""}
                    onChange={(value) =>
                      callResumeSetMethod &&
                      callResumeSetMethod("setPhoneNumber", value)
                    }
                  />
                )}
              </div>
            )}
            {resume.isShowWebsite && (
              <div className={["hr-item", subTextFontSize].join(" ")}>
                <div className="hr-item-icon">
                  <WebIcon />
                </div>
                {staticMode ? (
                  resume.website
                ) : (
                  <RichText
                    value={resume.website || ""}
                    onChange={(value) =>
                      callResumeSetMethod &&
                      callResumeSetMethod("setWebsite", value)
                    }
                  />
                )}
              </div>
            )}
            {resume.isShowLocation && (
              <div className={["hr-item", subTextFontSize].join(" ")}>
                <div className="hr-item-icon">
                  <LocationIcon />
                </div>
                {staticMode ? (
                  resume.location
                ) : (
                  <RichText
                    value={resume.location || ""}
                    onChange={(value) =>
                      callResumeSetMethod &&
                      callResumeSetMethod("setLocation", value)
                    }
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    return (
      <div className="sm-container">
        <div
          className={[
            "sm-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
          onMouseOver={() => onMouseOverSection("summary")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("summary")}
          {staticMode ? (
            resume.summaryLabel
          ) : (
            <RichText
              value={resume.summaryLabel || ""}
              onChange={(value) =>
                callResumeSetMethod &&
                callResumeSetMethod("setSummaryLabel", value)
              }
            />
          )}
        </div>
        <div className={["sm-text", textFontSize].join(" ")}>
          {staticMode ? (
            resume.summary
          ) : (
            <RichText
              withToolbar
              scale={zoom}
              value={resume.summary || ""}
              onChange={(value) =>
                callResumeSetMethod && callResumeSetMethod("setSummary", value)
              }
            />
          )}
        </div>
      </div>
    );
  };

  const renderExperience = () => {
    return (
      <div className="ex-container">
        <div
          className={[
            "ex-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
          onMouseOver={() => onMouseOverSection("experience")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("experience")}
          {staticMode ? (
            resume.experienceLabel
          ) : (
            <RichText
              value={resume.experienceLabel || ""}
              onChange={(value) =>
                callResumeSetMethod &&
                callResumeSetMethod("setExperienceLabel", value)
              }
            />
          )}
        </div>
        {resume.experiences &&
          resume.experiences
            .filter((experience) => experience.isShow)
            .map((experience, subSectionIndex) => (
              <div key={"ex-item" + subSectionIndex} className="ex-item">
                <div
                  className="ex-item-header"
                  onMouseOver={() =>
                    onMouseOverSubSection("experience", subSectionIndex)
                  }
                  onMouseOut={() => onMouseOutSubSection()}
                >
                  {renderSubSectionToolbar(
                    "experience",
                    subSectionIndex,
                    resume.experiences?.length || 0
                  )}
                  <div className={["ex-item-role", subTitleFontSize].join(" ")}>
                    {staticMode ? (
                      experience.role
                    ) : (
                      <RichText
                        value={experience.role || ""}
                        onChange={(value) =>
                          callResumeExperienceSetMethod &&
                          callResumeExperienceSetMethod(
                            subSectionIndex,
                            "setRole",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className="ex-item-company-date-location">
                    <div
                      className={["ex-item-company", textFontSize].join(" ")}
                    >
                      {staticMode ? (
                        experience.company
                      ) : (
                        <RichText
                          value={experience.company || ""}
                          onChange={(value) =>
                            callResumeExperienceSetMethod &&
                            callResumeExperienceSetMethod(
                              subSectionIndex,
                              "setCompany",
                              value
                            )
                          }
                        />
                      )}
                    </div>
                    <div className={["ex-item-date", textFontSize].join(" ")}>
                      {staticMode ? (
                        experience.from
                      ) : (
                        <RichText
                          value={experience.from || ""}
                          onChange={(value) =>
                            callResumeExperienceSetMethod &&
                            callResumeExperienceSetMethod(
                              subSectionIndex,
                              "setFrom",
                              value
                            )
                          }
                        />
                      )}
                      {"-"}
                      {staticMode ? (
                        experience.to
                      ) : (
                        <RichText
                          value={experience.to || ""}
                          onChange={(value) =>
                            callResumeExperienceSetMethod &&
                            callResumeExperienceSetMethod(
                              subSectionIndex,
                              "setTo",
                              value
                            )
                          }
                        />
                      )}
                      {","}
                    </div>
                    <div
                      className={["ex-item-location", textFontSize].join(" ")}
                    >
                      {staticMode ? (
                        experience.location
                      ) : (
                        <RichText
                          value={experience.location || ""}
                          onChange={(value) =>
                            callResumeExperienceSetMethod &&
                            callResumeExperienceSetMethod(
                              subSectionIndex,
                              "setLocation",
                              value
                            )
                          }
                        />
                      )}
                    </div>
                  </div>
                </div>
                {experience.points &&
                  experience.points.map((point, pointIndex) => (
                    <div
                      key={"ex-item-point" + pointIndex}
                      className={["ex-item-point", textFontSize].join(" ")}
                      onMouseOver={() =>
                        onMouseOverSubSectionPoint(
                          "experience",
                          subSectionIndex,
                          pointIndex
                        )
                      }
                      onMouseOut={() => onMouseOutSectionPoint()}
                    >
                      {renderSubSectionPointToolbar(
                        "experience",
                        subSectionIndex,
                        pointIndex,
                        experience.points?.length || 0
                      )}
                      <div className="ex-item-point-icon">•</div>
                      <div className="ex-item-point-text">
                        {staticMode ? (
                          point
                        ) : (
                          <RichText
                            withToolbar
                            scale={zoom}
                            value={point || ""}
                            onChange={(value) =>
                              callResumeExperienceSetMethod &&
                              callResumeExperienceSetMethod(
                                subSectionIndex,
                                "setPoint",
                                pointIndex,
                                value
                              )
                            }
                          />
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
      </div>
    );
  };

  const renderInvolvement = () => {
    return (
      <div className="iv-container">
        <div
          className={[
            "iv-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
          onMouseOver={() => onMouseOverSection("involvement")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("involvement")}
          {staticMode ? (
            resume.involvementLabel
          ) : (
            <RichText
              value={resume.involvementLabel || ""}
              onChange={(value) =>
                callResumeSetMethod &&
                callResumeSetMethod("setInvolvementLabel", value)
              }
            />
          )}
        </div>
        {resume.involvements &&
          resume.involvements.map((involvement, subSectionIndex) => (
            <div key={"iv-item" + subSectionIndex} className="iv-item">
              <div
                className="iv-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("involvement", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "involvement",
                  subSectionIndex,
                  resume.involvements?.length || 0
                )}
                <div className={["iv-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    resume.role
                  ) : (
                    <RichText
                      value={involvement.role || ""}
                      onChange={(value) =>
                        callResumeInvolvementSetMethod &&
                        callResumeInvolvementSetMethod(
                          subSectionIndex,
                          "setRole",
                          value
                        )
                      }
                    />
                  )}
                </div>
                <div className="iv-item-company-date-location">
                  <div className={["iv-item-company", textFontSize].join(" ")}>
                    {staticMode ? (
                      involvement.company
                    ) : (
                      <RichText
                        value={involvement.company || ""}
                        onChange={(value) =>
                          callResumeInvolvementSetMethod &&
                          callResumeInvolvementSetMethod(
                            subSectionIndex,
                            "setCompany",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className={["iv-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      involvement.from
                    ) : (
                      <RichText
                        value={involvement.from || ""}
                        onChange={(value) =>
                          callResumeInvolvementSetMethod &&
                          callResumeInvolvementSetMethod(
                            subSectionIndex,
                            "setFrom",
                            value
                          )
                        }
                      />
                    )}
                    {"-"}
                    {staticMode ? (
                      involvement.to
                    ) : (
                      <RichText
                        value={involvement.to || ""}
                        onChange={(value) =>
                          callResumeInvolvementSetMethod &&
                          callResumeInvolvementSetMethod(
                            subSectionIndex,
                            "setTo",
                            value
                          )
                        }
                      />
                    )}
                    {","}
                  </div>
                  <div className={["iv-item-location", textFontSize].join(" ")}>
                    {staticMode ? (
                      involvement.location
                    ) : (
                      <RichText
                        value={involvement.location || ""}
                        onChange={(value) =>
                          callResumeInvolvementSetMethod &&
                          callResumeInvolvementSetMethod(
                            subSectionIndex,
                            "setLocation",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              {involvement.points &&
                involvement.points.map((point, pointIndex) => (
                  <div
                    key={"iv-item-point" + pointIndex}
                    className={["iv-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseOverSubSectionPoint(
                        "involvement",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "involvement",
                      subSectionIndex,
                      pointIndex,
                      involvement.points?.length || 0
                    )}
                    <div className="iv-item-point-icon">•</div>
                    <div className="iv-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          withToolbar
                          scale={zoom}
                          value={point || ""}
                          onChange={(value) =>
                            callResumeInvolvementSetMethod &&
                            callResumeInvolvementSetMethod(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderProject = () => {
    return (
      <div className="pr-container">
        <div
          className={[
            "pr-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
          onMouseOver={() => onMouseOverSection("project")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("project")}
          {staticMode ? (
            resume.projectLabel
          ) : (
            <RichText
              value={resume.projectLabel || ""}
              onChange={(value) =>
                callResumeSetMethod &&
                callResumeSetMethod("setProjectLabel", value)
              }
            />
          )}
        </div>
        {resume.projects &&
          resume.projects.map((project, subSectionIndex) => (
            <div key={"pr-item" + subSectionIndex} className="pr-item">
              <div
                className="pr-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("project", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "project",
                  subSectionIndex,
                  resume.projects?.length || 0
                )}
                <div className={["pr-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    project.role
                  ) : (
                    <RichText
                      value={project.role || ""}
                      onChange={(value) =>
                        callResumeProjectSetMethod &&
                        callResumeProjectSetMethod(
                          subSectionIndex,
                          "setRole",
                          value
                        )
                      }
                    />
                  )}
                </div>
                <div className="pr-item-company-date-location">
                  <div className={["pr-item-company", textFontSize].join(" ")}>
                    {staticMode ? (
                      project.company
                    ) : (
                      <RichText
                        value={project.company || ""}
                        onChange={(value) =>
                          callResumeProjectSetMethod &&
                          callResumeProjectSetMethod(
                            subSectionIndex,
                            "setCompany",
                            value
                          )
                        }
                      />
                    )}
                    {staticMode ? (
                      project.url
                    ) : (
                      <RichText
                        value={project.url || ""}
                        onChange={(value) =>
                          callResumeProjectSetMethod &&
                          callResumeProjectSetMethod(
                            subSectionIndex,
                            "setUrl",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className={["pr-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      project.from
                    ) : (
                      <RichText
                        value={project.from || ""}
                        onChange={(value) =>
                          callResumeProjectSetMethod &&
                          callResumeProjectSetMethod(
                            subSectionIndex,
                            "setFrom",
                            value
                          )
                        }
                      />
                    )}
                    {"-"}
                    {staticMode ? (
                      project.to
                    ) : (
                      <RichText
                        value={project.to || ""}
                        onChange={(value) =>
                          callResumeProjectSetMethod &&
                          callResumeProjectSetMethod(
                            subSectionIndex,
                            "setTo",
                            value
                          )
                        }
                      />
                    )}
                    {","}
                  </div>
                  <div className={["pr-item-location", textFontSize].join(" ")}>
                    {staticMode ? (
                      project.location
                    ) : (
                      <RichText
                        value={project.location || ""}
                        onChange={(value) =>
                          callResumeProjectSetMethod &&
                          callResumeProjectSetMethod(
                            subSectionIndex,
                            "setLocation",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              {project.points &&
                project.points.map((point, pointIndex) => (
                  <div
                    key={"pr-item-point" + pointIndex}
                    className={["pr-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseOverSubSectionPoint(
                        "project",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "project",
                      subSectionIndex,
                      pointIndex,
                      project.points?.length || 0
                    )}
                    <div className="pr-item-point-icon">•</div>
                    <div className="pr-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          withToolbar
                          scale={zoom}
                          value={point || ""}
                          onChange={(value) =>
                            callResumeProjectSetMethod &&
                            callResumeProjectSetMethod(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderEducation = () => {
    return (
      <div className="ed-container">
        <div
          className={[
            "ed-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
          onMouseOver={() => onMouseOverSection("education")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("education")}
          {staticMode ? (
            resume.educationLabel
          ) : (
            <RichText
              value={resume.educationLabel || ""}
              onChange={(value) =>
                callResumeSetMethod &&
                callResumeSetMethod("setEducationLabel", value)
              }
            />
          )}
        </div>
        {resume.educations &&
          resume.educations.map((education, subSectionIndex) => (
            <div key={"ed-item" + subSectionIndex} className="ed-item">
              <div
                className="ed-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("education", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "education",
                  subSectionIndex,
                  resume.educations?.length || 0
                )}
                <div className={["ed-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    education.degree
                  ) : (
                    <RichText
                      value={education.degree || ""}
                      onChange={(value) =>
                        callResumeEducationSetMethod &&
                        callResumeEducationSetMethod(
                          subSectionIndex,
                          "setDegree",
                          value
                        )
                      }
                    />
                  )}
                </div>
                <div className="ed-item-company-date-location">
                  <div className={["ed-item-company", textFontSize].join(" ")}>
                    {staticMode ? (
                      education.institute
                    ) : (
                      <RichText
                        value={education.institute || ""}
                        onChange={(value) =>
                          callResumeEducationSetMethod &&
                          callResumeEducationSetMethod(
                            subSectionIndex,
                            "setInstitute",
                            value
                          )
                        }
                      />
                    )}{" "}
                    {staticMode ? (
                      education.gpa
                    ) : (
                      <RichText
                        value={education.gpa || ""}
                        onChange={(value) =>
                          callResumeEducationSetMethod &&
                          callResumeEducationSetMethod(
                            subSectionIndex,
                            "setGpa",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className={["ed-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      education.from
                    ) : (
                      <RichText
                        value={education.from || ""}
                        onChange={(value) =>
                          callResumeEducationSetMethod &&
                          callResumeEducationSetMethod(
                            subSectionIndex,
                            "setFrom",
                            value
                          )
                        }
                      />
                    )}
                    {"-"}
                    {staticMode ? (
                      education.to
                    ) : (
                      <RichText
                        value={education.to || ""}
                        onChange={(value) =>
                          callResumeEducationSetMethod &&
                          callResumeEducationSetMethod(
                            subSectionIndex,
                            "setTo",
                            value
                          )
                        }
                      />
                    )}
                    {","}
                  </div>
                  <div className={["ed-item-location", textFontSize].join(" ")}>
                    {staticMode ? (
                      education.location
                    ) : (
                      <RichText
                        value={education.location || ""}
                        onChange={(value) =>
                          callResumeEducationSetMethod &&
                          callResumeEducationSetMethod(
                            subSectionIndex,
                            "setLocation",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              {education.points &&
                education.points.map((point, pointIndex) => (
                  <div
                    key={"ed-item-point" + pointIndex}
                    className={["ed-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseOverSubSectionPoint(
                        "education",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "education",
                      subSectionIndex,
                      pointIndex,
                      education.points?.length || 0
                    )}
                    <div className="ed-item-point-icon">•</div>
                    <div className="ed-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          withToolbar
                          scale={zoom}
                          value={point || ""}
                          onChange={(value) =>
                            callResumeEducationSetMethod &&
                            callResumeEducationSetMethod(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderSkills = () => {
    return (
      <div className="sk-container">
        <div
          className={[
            "sk-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
          onMouseOver={() => onMouseOverSection("skill")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("skill")}
          {staticMode ? (
            resume.skillLabel
          ) : (
            <RichText
              value={resume.skillLabel || ""}
              onChange={(value) =>
                callResumeSetMethod &&
                callResumeSetMethod("setSkillLabel", value)
              }
            />
          )}
        </div>
        {resume.skills &&
          resume.skills.map((skill, subSectionIndex) => (
            <div
              key={subSectionIndex}
              className={["sk-item", textFontSize].join(" ")}
              onMouseOver={() =>
                onMouseOverSubSection("skill", subSectionIndex)
              }
              onMouseOut={() => onMouseOutSubSection()}
            >
              {renderSubSectionToolbar(
                "skill",
                subSectionIndex,
                resume.skills?.length || 0
              )}
              <div className="sk-item-icon">•</div>
              <div className="sk-item-text">
                {staticMode ? (
                  skill.point
                ) : (
                  <RichText
                    withToolbar
                    scale={zoom}
                    value={skill.point || ""}
                    onChange={(value) =>
                      callResumeSkillSetMethod &&
                      callResumeSkillSetMethod(
                        subSectionIndex,
                        "setPoint",
                        value
                      )
                    }
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    );
  };

  const renderLanguages = () => {
    return (
      <div className="ln-container">
        <div
          className={[
            "ln-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
          onMouseOver={() => onMouseOverSection("language")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("language")}
          {staticMode ? (
            resume.languageLabel
          ) : (
            <RichText
              value={resume.languageLabel || ""}
              onChange={(value) =>
                callResumeSetMethod &&
                callResumeSetMethod("setLanguageLabel", value)
              }
            />
          )}
        </div>
        {resume.languages &&
          resume.languages.map((item, subSectionIndex) => (
            <div
              key={"ln-item" + subSectionIndex}
              className={["ln-item", textFontSize].join(" ")}
              onMouseOver={() =>
                onMouseOverSubSection("language", subSectionIndex)
              }
              onMouseOut={() => onMouseOutSubSection()}
            >
              {renderSubSectionToolbar(
                "language",
                subSectionIndex,
                resume.languages?.length || 0
              )}
              <div className="ln-item-icon">•</div>
              <div className="ln-item-text">
                {staticMode ? (
                  item.name
                ) : (
                  <RichText
                    value={item.name || ""}
                    onChange={(value) =>
                      callResumeLanguageSetMethod &&
                      callResumeLanguageSetMethod(
                        subSectionIndex,
                        "setName",
                        value
                      )
                    }
                  />
                )}
                <div className="ln-item-divider">{":"}</div>

                {staticMode ? (
                  item.level
                ) : (
                  <RichText
                    value={item.level || ""}
                    onChange={(value) =>
                      callResumeLanguageSetMethod &&
                      callResumeLanguageSetMethod(
                        subSectionIndex,
                        "setLevel",
                        value
                      )
                    }
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    );
  };

  const renderCourseWork = () => {
    return (
      <div className="cw-container">
        <div
          className={[
            "cw-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
          onMouseOver={() => onMouseOverSection("courseWork")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("courseWork")}
          {staticMode ? (
            resume.courseWorkLabel
          ) : (
            <RichText
              value={resume.courseWorkLabel || ""}
              onChange={(value) =>
                callResumeSetMethod &&
                callResumeSetMethod("setCourseWorkLabel", value)
              }
            />
          )}
        </div>
        {resume.courseWorks &&
          resume.courseWorks.map((courseWork, subSectionIndex) => (
            <div key={"cw-item" + subSectionIndex} className="cw-item">
              <div
                className="cw-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("courseWork", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "courseWork",
                  subSectionIndex,
                  resume.courseWorks?.length || 0
                )}
                <div className={["cw-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    courseWork.name
                  ) : (
                    <RichText
                      value={courseWork.name || ""}
                      onChange={(value) =>
                        callResumeCourseWorkSetMethod &&
                        callResumeCourseWorkSetMethod(
                          subSectionIndex,
                          "setName",
                          value
                        )
                      }
                    />
                  )}
                </div>
                <div className="cw-item-institute-date">
                  <div
                    className={["cw-item-institute", textFontSize].join(" ")}
                  >
                    {staticMode ? (
                      courseWork.institute
                    ) : (
                      <RichText
                        value={courseWork.institute || ""}
                        onChange={(value) =>
                          callResumeCourseWorkSetMethod &&
                          callResumeCourseWorkSetMethod(
                            subSectionIndex,
                            "setInstitute",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className={["cw-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      courseWork.year
                    ) : (
                      <RichText
                        value={courseWork.year || ""}
                        onChange={(value) =>
                          callResumeCourseWorkSetMethod &&
                          callResumeCourseWorkSetMethod(
                            subSectionIndex,
                            "setYear",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                </div>
                <div className={["cw-item-skill", textFontSize].join(" ")}>
                  {staticMode ? (
                    courseWork.skills
                  ) : (
                    <RichText
                      value={courseWork.skills || ""}
                      onChange={(value) =>
                        callResumeCourseWorkSetMethod &&
                        callResumeCourseWorkSetMethod(
                          subSectionIndex,
                          "setSkills",
                          value
                        )
                      }
                    />
                  )}
                </div>
              </div>
              {courseWork.points &&
                courseWork.points.map((point, pointIndex) => (
                  <div
                    key={"cw-item-point" + pointIndex}
                    className={["cw-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseOverSubSectionPoint(
                        "courseWork",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "courseWork",
                      subSectionIndex,
                      pointIndex,
                      courseWork.points?.length || 0
                    )}
                    <div className="cw-item-point-icon">•</div>
                    <div className="cw-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          withToolbar
                          scale={zoom}
                          value={point || ""}
                          onChange={(value) =>
                            callResumeCourseWorkSetMethod &&
                            callResumeCourseWorkSetMethod(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderCertification = () => {
    return (
      <div className="cc-container">
        <div
          className={[
            "cc-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
          onMouseOver={() => onMouseOverSection("certification")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("certification")}
          {staticMode ? (
            resume.certificationLabel
          ) : (
            <RichText
              value={resume.certificationLabel || ""}
              onChange={(value) =>
                callResumeSetMethod &&
                callResumeSetMethod("setCertificationLabel", value)
              }
            />
          )}
        </div>
        {resume.certifications &&
          resume.certifications.map((certification, subSectionIndex) => (
            <div key={"cc-item" + subSectionIndex} className="cc-item">
              <div
                className="cc-item-header"
                onMouseOver={() =>
                  onMouseOverSubSection("certification", subSectionIndex)
                }
                onMouseOut={() => onMouseOutSubSection()}
              >
                {renderSubSectionToolbar(
                  "certification",
                  subSectionIndex,
                  resume.certifications?.length || 0
                )}
                <div className={["cc-item-role", subTitleFontSize].join(" ")}>
                  {staticMode ? (
                    certification.name
                  ) : (
                    <RichText
                      value={certification.name || ""}
                      onChange={(value) =>
                        callResumeCertificationSetMethod &&
                        callResumeCertificationSetMethod(
                          subSectionIndex,
                          "setName",
                          value
                        )
                      }
                    />
                  )}
                </div>
                <div className="cc-item-institute-date">
                  <div
                    className={["cc-item-institute", textFontSize].join(" ")}
                  >
                    {staticMode ? (
                      certification.institute
                    ) : (
                      <RichText
                        value={certification.institute || ""}
                        onChange={(value) =>
                          callResumeCertificationSetMethod &&
                          callResumeCertificationSetMethod(
                            subSectionIndex,
                            "setInstitute",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                  <div className={["cc-item-date", textFontSize].join(" ")}>
                    {staticMode ? (
                      certification.year
                    ) : (
                      <RichText
                        value={certification.year || ""}
                        onChange={(value) =>
                          callResumeCertificationSetMethod &&
                          callResumeCertificationSetMethod(
                            subSectionIndex,
                            "setYear",
                            value
                          )
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
              {certification.points &&
                certification.points.map((point, pointIndex) => (
                  <div
                    key={"cc-item-point" + pointIndex}
                    className={["cc-item-point", textFontSize].join(" ")}
                    onMouseOver={() =>
                      onMouseOverSubSectionPoint(
                        "certification",
                        subSectionIndex,
                        pointIndex
                      )
                    }
                    onMouseOut={() => onMouseOutSectionPoint()}
                  >
                    {renderSubSectionPointToolbar(
                      "certification",
                      subSectionIndex,
                      pointIndex,
                      certification.points?.length || 0
                    )}
                    <div className="cc-item-point-icon">•</div>
                    <div className="cc-item-point-text">
                      {staticMode ? (
                        point
                      ) : (
                        <RichText
                          withToolbar
                          scale={zoom}
                          value={point || ""}
                          onChange={(value) =>
                            callResumeCertificationSetMethod &&
                            callResumeCertificationSetMethod(
                              subSectionIndex,
                              "setPoint",
                              pointIndex,
                              value
                            )
                          }
                        />
                      )}
                    </div>
                  </div>
                ))}
            </div>
          ))}
      </div>
    );
  };

  const renderHobbies = () => {
    return (
      <div className="hb-container">
        <div
          className={[
            "hb-label",
            titleFontSize,
            fontColorClass,
            borderColorClass,
          ].join(" ")}
          onMouseOver={() => onMouseOverSection("hobby")}
          onMouseOut={() => onMouseOutSection()}
        >
          {renderSectionToolbar("hobby")}
          {staticMode ? (
            resume.hobbyLabel
          ) : (
            <RichText
              value={resume.hobbyLabel || ""}
              onChange={(value) =>
                callResumeSetMethod &&
                callResumeSetMethod("setHobbyLabel", value)
              }
            />
          )}
        </div>
        {resume.hobbies &&
          resume.hobbies.map((hobby, subSectionIndex) => (
            <div
              key={subSectionIndex + "hb-item"}
              className={["hb-item", textFontSize].join(" ")}
              onMouseOver={() =>
                onMouseOverSubSection("hobby", subSectionIndex)
              }
              onMouseOut={() => onMouseOutSubSection()}
            >
              {renderSubSectionToolbar(
                "hobby",
                subSectionIndex,
                resume.hobbies?.length || 0
              )}
              <div className="hb-item-icon">•</div>
              <div className="hb-item-text">
                {staticMode ? (
                  hobby.point
                ) : (
                  <RichText
                    withToolbar
                    scale={zoom}
                    value={hobby.point || ""}
                    onChange={(value) =>
                      callResumeHobbySetMethod &&
                      callResumeHobbySetMethod(
                        subSectionIndex,
                        "setPoint",
                        value
                      )
                    }
                  />
                )}
              </div>
            </div>
          ))}
      </div>
    );
  };

  return (
    <div
      className={[
        "container",
        zoom === 0.5 && "container-scale-0_50",
        zoom === 0.75 && "container-scale-0_75",
        zoom === 1.25 && "container-scale-1_25",
        zoom === 1.5 && "container-scale-1_50",
        zoom === 1.75 && "container-scale-1_75",
        fontFamilyClass,
        borderColorClass,
      ].join(" ")}
    >
      {renderHeader()}
      {[
        {
          title: "summary",
          order: resume.summaryOrder || 1,
          render: renderSummary,
          show: resume.isShowSummary,
        },
        {
          title: "experience",
          order: resume.experienceOrder || 2,
          render: renderExperience,
          show: resume.isShowExperience,
        },
        {
          title: "project",
          order: resume.projectOrder || 3,
          render: renderProject,
          show: resume.isShowProject,
        },
        {
          title: "education",
          order: resume.educationOrder || 4,
          render: renderEducation,
          show: resume.isShowEducation,
        },
        {
          title: "involvement",
          order: resume.involvementOrder || 5,
          render: renderInvolvement,
          show: resume.isShowInvolvement,
        },
        {
          title: "courseWork",
          order: resume.courseWorkOrder || 6,
          render: renderCourseWork,
          show: resume.isShowCourseWork,
        },
        {
          title: "certification",
          order: resume.certificationOrder || 7,
          render: renderCertification,
          show: resume.isShowCertification,
        },
        {
          title: "skill",
          order: resume.skillOrder || 8,
          render: renderSkills,
          show: resume.isShowSkill,
        },
        {
          title: "language",
          order: resume.languageOrder || 9,
          render: renderLanguages,
          show: resume.isShowLanguage,
        },
        {
          title: "hobby",
          order: resume.hobbyOrder || 10,
          render: renderHobbies,
          show: resume.isShowHobby,
        },
      ]
        .filter((item) => item.show)
        .sort((item1, item2) => item1.order - item2.order)
        .map((item) => item.render())}
    </div>
  );
}
