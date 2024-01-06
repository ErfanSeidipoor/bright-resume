import { Meta, StoryFn } from "@storybook/react";

import { Experience } from "./";
import { texts } from "./texts";
import { useState } from "react";
import {
  BackgroundInfoRangeDateChildKeys,
  ExperienceChildProps,
  ExperienceInfoChildKeys,
  MonthEnum,
  TextFieldProps,
} from "../../index.type";

export default {
  component: Experience,
  title: "Experience",
} as Meta<typeof Experience>;

const renderChangedDateValue = ({
  item,
  changeItemKey,
  changeItemMonth,
  changeItemYear,
}: {
  item: ExperienceChildProps;
  changeItemKey?: BackgroundInfoRangeDateChildKeys;
  changeItemMonth?: MonthEnum;
  changeItemYear?: number;
}): ExperienceChildProps => {
  if (item.rangeDate) {
    switch (changeItemKey) {
      case "fromMonth":
        return {
          ...item,
          rangeDate: { ...item.rangeDate, fromMonth: changeItemMonth },
        };
      case "toMonth":
        return {
          ...item,
          rangeDate: { ...item.rangeDate, toMonth: changeItemMonth },
        };
      case "fromYear":
        return {
          ...item,
          rangeDate: { ...item.rangeDate, fromYear: changeItemYear },
        };
      case "toYear":
        return {
          ...item,
          rangeDate: { ...item.rangeDate, toYear: changeItemYear },
        };
      default:
        return { ...item };
    }
  }
  return { ...item };
};

const renderChangedValue = ({
  item,
  changeItemKey,
  changeItemValue,
  changeItemDateKey,
  changeItemMonth,
  changeItemYear,
}: {
  item: ExperienceChildProps;
  changeItemKey: ExperienceInfoChildKeys;
  changeItemValue?: TextFieldProps["value"];
  changeItemDateKey?: BackgroundInfoRangeDateChildKeys;
  changeItemMonth?: MonthEnum;
  changeItemYear?: number;
}): ExperienceChildProps => {
  switch (changeItemKey) {
    case "role":
      return {
        ...item,
        role: { ...item.role, value: changeItemValue },
      };
    case "company":
      return {
        ...item,
        company: { ...item.company, value: changeItemValue },
      };
    case "location":
      return {
        ...item,
        location: { ...item.location, value: changeItemValue },
      };
    case "points":
      return {
        ...item,
        points: {
          ...item.points,
          value: changeItemValue as string | undefined,
        },
      };
    case "rangeDate":
      return renderChangedDateValue({
        item,
        changeItemKey: changeItemDateKey,
        changeItemMonth,
        changeItemYear,
      });
    default:
      return { ...item };
  }
};

const onChangeItems = ({
  defaultItems,
  setItems,
  defaultItemId,
  changeItemKey,
  changeItemValue,
  changeItemDateKey,
  changeItemMonth,
  changeItemYear,
}: {
  defaultItems: ExperienceChildProps[];
  setItems: React.Dispatch<React.SetStateAction<ExperienceChildProps[]>>;
  defaultItemId: string;
  changeItemKey: ExperienceInfoChildKeys;
  changeItemValue?: TextFieldProps["value"];
  changeItemDateKey?: BackgroundInfoRangeDateChildKeys;
  changeItemMonth?: MonthEnum;
  changeItemYear?: number;
}) => {
  const itemIndex = defaultItems.findIndex(
    (defaultItem) => defaultItem.id === defaultItemId
  );
  const items = [...defaultItems];
  const item = items[itemIndex];

  const newItem = changeItemDateKey
    ? renderChangedValue({
        item,
        changeItemKey,
        changeItemDateKey,
        changeItemMonth,
        changeItemYear,
      })
    : renderChangedValue({ item, changeItemKey, changeItemValue });
  items[itemIndex] = newItem;
  setItems(items);
};

const Template: StoryFn<typeof Experience> = (args) => {
  const defaultExperienceItems: ExperienceChildProps = {
    id: "item-1",
    role: { placeholder: texts.position },
    company: { placeholder: texts.company },
    location: { placeholder: texts.location },
    points: {
      placeholder: texts.points,
      isSeparateValue: true,
      setValue: (value: string | undefined) => undefined,
      value: "",
    },
    rangeDate: {
      fromMonth: undefined,
      fromYear: undefined,
      toMonth: undefined,
      toYear: undefined,
      onChangeFromMonth: () => undefined,
      onChangeToMonth: () => undefined,
      onChangeToYear: () => undefined,
      onChangeFromYear: () => undefined,
    },
  };

  const [experienceItems, setExperienceItems] = useState<
    ExperienceChildProps[]
  >([defaultExperienceItems]);

  const [headerValue, setHeaderValue] = useState<string | undefined>(
    texts.experience
  );
  const [pointsValue, setPointsValue] = useState<string | undefined>("");

  const onDecrease = (id: string) => {
    const newItems = experienceItems.filter((item) => item.id !== id);
    setExperienceItems(newItems);
  };
  const onIncrease = () => {
    setExperienceItems((prevState) => [
      ...prevState,
      { ...defaultExperienceItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  const onChangeExperienceItems = ({
    experienceId,
    changeItemKey,
    changeItemValue,
    changeItemDateKey,
    changeItemMonth,
    changeItemYear,
  }: {
    experienceId: string;
    changeItemKey: ExperienceInfoChildKeys;
    changeItemValue?: TextFieldProps["value"];
    changeItemDateKey?: BackgroundInfoRangeDateChildKeys;
    changeItemMonth?: MonthEnum;
    changeItemYear?: number;
  }) => {
    onChangeItems({
      defaultItems: experienceItems,
      setItems: setExperienceItems,
      defaultItemId: experienceId,
      changeItemKey,
      changeItemValue,
      changeItemDateKey,
      changeItemMonth,
      changeItemYear,
    });
  };

  return (
    <div id="theme-blue">
      <Experience
        {...args}
        items={experienceItems.map((item) => ({
          id: item.id,
          role: {
            ...item.role,
            onChange: (e) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "role",
                changeItemValue: e.target.value,
              }),
          },
          company: {
            ...item.company,
            onChange: (e) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "company",
                changeItemValue: e.target.value,
              }),
          },
          location: {
            ...item.location,
            onChange: (e) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "location",
                changeItemValue: e.target.value,
              }),
          },
          points: {
            ...item.points,
            value: pointsValue,
            setValue: setPointsValue,
            onChange: (e) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "points",
                changeItemValue: e.target.value,
              }),
          },
          rangeDate: {
            fromMonth: item?.rangeDate?.fromMonth,
            toMonth: item?.rangeDate?.toMonth,
            fromYear: item?.rangeDate?.fromYear,
            toYear: item?.rangeDate?.toYear,
            onChangeFromMonth: (month) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "rangeDate",
                changeItemDateKey: "fromMonth",
                changeItemMonth: month,
              }),
            onChangeToMonth: (month) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "rangeDate",
                changeItemDateKey: "toMonth",
                changeItemMonth: month,
              }),
            onChangeFromYear: (year) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "rangeDate",
                changeItemDateKey: "fromYear",
                changeItemYear: year,
              }),
            onChangeToYear: (year) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "rangeDate",
                changeItemDateKey: "toYear",
                changeItemYear: year,
              }),
          },
        }))}
        header={{
          label: texts.experience,
          value: headerValue,
          onChange: (e) => setHeaderValue(e.target.value),
        }}
        hoverItem={defaultExperienceItems}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
