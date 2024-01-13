import { useState } from "react";

type IUseData = { defaultRows: number };

export const useData = ({ defaultRows = 3 }: IUseData) => {
  const [isInputActive, setIsInputActive] = useState<boolean>(false);
  const [rows, setRows] = useState<number>(defaultRows);

  const handleDeActiveInput = () => {
    setIsInputActive(false);
  };

  const handleActiveInput = () => {
    setIsInputActive(true);
  };

  const handleMakeArrayValue = (value: string | undefined) => {
    if (!value) return [];
    const separatedText = value.toString().split(/\n/g).join("").split("• ");
    const values = separatedText.filter((value) => !!value);

    return values;
  };

  const handleSeparateSentences = (value: string | undefined) => {
    if (!value) return " ";
    const separatedText = value.toString().split(/\n/g);
    const formattedText = separatedText
      .map((sentence) =>
        sentence ? (sentence.includes("• ") ? sentence : "• " + sentence) : ""
      )
      .join("\n");

    return formattedText;
  };

  const handleChangeValue = ({
    value,
    isSeparateValue,
  }: {
    value: string | undefined;
    isSeparateValue: boolean;
  }) => {
    if (!isSeparateValue) return value;
    return handleSeparateSentences(value);
  };

  const handleRemoveEmptyValue = ({ value }: { value: string | undefined }) => {
    if (!value) return undefined;
    const separatedText = value.toString().split(/\n/g);
    const result = separatedText
      .filter((sentence) => sentence !== "• ")
      .join("\n");
    return result;
  };

  const handleChangeRows = (value: string | undefined) => {
    if (!value) return;
    const separatedText = value.toString().split(/\n/g);
    return setRows(
      separatedText.length > defaultRows ? separatedText.length : defaultRows
    );
  };

  const handleResetRows = (value: string | undefined) => {
    if (value) return;
    return setRows(defaultRows);
  };

  return {
    isInputActive,
    handleActiveInput,
    handleDeActiveInput,
    handleChangeValue,
    rows,
    handleChangeRows,
    handleResetRows,
    handleMakeArrayValue,
    handleRemoveEmptyValue,
  };
};
