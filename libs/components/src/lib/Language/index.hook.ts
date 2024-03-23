import { useFieldArray } from "react-hook-form";
import { createResumeControlType } from "../../index.type";

export const useData = (control: createResumeControlType) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "languages",
  });

  const handleIncrease = () => {
    append({
      name: "",
      level: "",
      isShowLevel: false,
    });
  };

  const handleDecrease = (index: number) => {
    remove(index);
  };

  return {
    fields,
    handleIncrease,
    handleDecrease,
  };
};
