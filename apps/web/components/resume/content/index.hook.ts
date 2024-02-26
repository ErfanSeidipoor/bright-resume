import { useForm } from "react-hook-form";
import { classValidatorResolver } from "@hookform/resolvers/class-validator";
import { CreateResumeResumeInputs } from "@dto";

export const useData = () => {
  const {
    handleSubmit,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<CreateResumeResumeInputs>({
    mode: "onSubmit",
    resolver: classValidatorResolver(CreateResumeResumeInputs),
    defaultValues: {
      experiences: [
        {
          company: "",
          role: "",
          points: [],
        },
      ],
      experienceLabel: "Experience",
      educations: [
        {
          degree: "",
          points: [],
        },
      ],
      educationLabel: "Education",
      certifications: [
        {
          name: "",
          points: [],
        },
      ],
      certificationLabel: "Certification",
      courseWorks: [
        {
          name: "",
          points: [],
        },
      ],
      courseWorkLabel: "Course Work",
      involvements: [
        {
          role: "",
          points: [],
        },
      ],
      involvementLabel: "Involvement",
      projects: [
        {
          title: "",
          points: [],
        },
      ],
      projectLabel: "Project",
    },
  });

  return {
    control,
    setValue,
    experienceValues: watch("experiences"),
    certificationValues: watch("certifications"),
    educationValues: watch("educations"),
    courseWorkValues: watch("courseWorks"),
    involvementValues: watch("involvements"),
    projectValues: watch("projects"),
  };
};
