import { useFieldArray, useForm } from "react-hook-form";
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
      certifications: [
        {
          name: "",
          points: [],
        },
      ],
      certificationLabel: "Certification",
    },
  });

  /* -------------------------------- Experiences -------------------------------- */

  const {
    fields: experienceFields,
    append: experienceAppend,
    remove: experienceRemove,
  } = useFieldArray({
    control,
    name: "experiences",
  });

  const handleIncreaseExperience = () => {
    experienceAppend({
      company: "",
      role: "",
      points: [],
    });
  };

  const handleDecreaseExperience = (index: number) => {
    experienceRemove(index);
  };

  /* -------------------------------- Experiences -------------------------------- */

  const {
    fields: certificationFields,
    append: certificationsAppend,
    remove: certificationsRemove,
  } = useFieldArray({
    control,
    name: "certifications",
  });

  const handleIncreaseCertifications = () => {
    certificationsAppend({
      name: "",
      points: [],
    });
  };

  const handleDecreaseCertifications = (index: number) => {
    certificationsRemove(index);
  };

  return {
    control,
    setValue,
    experienceFields,
    handleIncreaseExperience,
    handleDecreaseExperience,
    experienceValues: watch("experiences"),
    certificationFields,
    handleIncreaseCertifications,
    handleDecreaseCertifications,
    certificationValues: watch("certifications"),
  };
};
