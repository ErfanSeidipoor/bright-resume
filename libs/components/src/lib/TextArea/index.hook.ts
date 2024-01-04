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

  const handleSeparateSentences = (
    value: string | number | readonly string[] | undefined
  ) => {
    if (!value) return;
    const separatedText = value.toString().split(/\n/g);
    const formattedText = separatedText
      .map((sentence) => (sentence.includes("• ") ? sentence : "• " + sentence))
      .join("\n");
    setRows(
      separatedText.length + 1 > defaultRows
        ? separatedText.length + 1
        : defaultRows
    );
    return formattedText;
  };

  const handleChangeValue = ({
    value,
    isSeparate,
  }: {
    value: string | number | readonly string[] | undefined;
    isSeparate: boolean;
  }) => {
    if (!value) return;
    if (!isSeparate) return value;
    return handleSeparateSentences(value);
  };

  return {
    isInputActive,
    handleActiveInput,
    handleDeActiveInput,
    handleChangeValue,
    rows,
  };
};
