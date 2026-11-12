import { Meta, StoryFn } from "@storybook/react";
import { useState } from "react";
import {
  BackgroundInfoChildKeys,
  BackgroundInfoChildProps,
  BackgroundInfoRangeDateChildKeys,
  MonthEnum,
  TextFieldProps,
} from "@bright-resume/components";

import BackgroundInfo from ".";
import { texts } from "./texts";

export default {
  component: BackgroundInfo,
  title: "BackgroundInfo",
} as Meta<typeof BackgroundInfo>;

const renderChangedDateValue = ({
  item,
  changeItemKey,
  changeItemMonth,
  changeItemYear,
}: {
  item: BackgroundInfoChildProps;
  changeItemKey?: BackgroundInfoRangeDateChildKeys;
  changeItemMonth?: MonthEnum;
  changeItemYear?: number;
}): BackgroundInfoChildProps => {
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
  item: BackgroundInfoChildProps;
  changeItemKey: BackgroundInfoChildKeys;
  changeItemValue?: TextFieldProps["value"];
  changeItemDateKey?: BackgroundInfoRangeDateChildKeys;
  changeItemMonth?: MonthEnum;
  changeItemYear?: number;
}): BackgroundInfoChildProps => {
  switch (changeItemKey) {
    case "title":
      return {
        ...item,
        title: { ...item.title, value: changeItemValue },
      };
    case "subtitle":
      return {
        ...item,
        subtitle: { ...item.subtitle, value: changeItemValue },
      };
    case "description":
      return {
        ...item,
        description: { ...item.description, value: changeItemValue as string | undefined },
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
  defaultItems: BackgroundInfoChildProps[];
  setItems: React.Dispatch<React.SetStateAction<BackgroundInfoChildProps[]>>;
  defaultItemId: string;
  changeItemKey: BackgroundInfoChildKeys;
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

const ExperienceTemplate: StoryFn<typeof BackgroundInfo> = (args) => {
  const defaultExperienceItems: BackgroundInfoChildProps = {
    id: "item-1",
    title: { placeholder: texts.position },
    subtitle: { placeholder: texts.company },
    description: {
      placeholder: texts.lorem_ipsum,
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
    BackgroundInfoChildProps[]
  >([defaultExperienceItems]);

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
    changeItemKey: BackgroundInfoChildKeys;
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
      <BackgroundInfo
        {...args}
        items={experienceItems.map((item) => ({
          id: item.id,
          title: {
            ...item.title,
            onChange: (e) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "title",
                changeItemValue: e.target.value,
              }),
          },
          subtitle: {
            ...item.subtitle,
            onChange: (e) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "subtitle",
                changeItemValue: e.target.value,
              }),
          },
          description: {
            ...item.description,
            onChange: (e) =>
              onChangeExperienceItems({
                experienceId: item.id,
                changeItemKey: "description",
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
        hoverItem={defaultExperienceItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

const EducationTemplate: StoryFn<typeof BackgroundInfo> = (args) => {
  const defaultEducationItems: BackgroundInfoChildProps = {
    id: "item-1",
    title: { placeholder: texts.degree },
    subtitle: { placeholder: texts.university },
  };

  const [educationItems, setEducationItems] = useState<
    BackgroundInfoChildProps[]
  >([defaultEducationItems]);

  const onDecrease = (id: string) => {
    const newItems = educationItems.filter((item) => item.id !== id);
    setEducationItems(newItems);
  };
  const onIncrease = () => {
    setEducationItems((prevState) => [
      ...prevState,
      { ...defaultEducationItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  const onChangeEducationItems = ({
    educationId,
    changeItemKey,
    changeItemValue,
  }: {
    educationId: string;
    changeItemKey: BackgroundInfoChildKeys;
    changeItemValue: TextFieldProps["value"];
  }) => {
    onChangeItems({
      defaultItems: educationItems,
      setItems: setEducationItems,
      defaultItemId: educationId,
      changeItemKey,
      changeItemValue,
    });
  };

  return (
    <div id="theme-blue">
      <BackgroundInfo
        {...args}
        items={educationItems.map((item) => ({
          id: item.id,
          title: {
            ...item.title,
            onChange: (e) =>
              onChangeEducationItems({
                educationId: item.id,
                changeItemKey: "title",
                changeItemValue: e.target.value,
              }),
          },
          subtitle: {
            ...item.subtitle,
            onChange: (e) =>
              onChangeEducationItems({
                educationId: item.id,
                changeItemKey: "subtitle",
                changeItemValue: e.target.value,
              }),
          },
        }))}
        hoverItem={defaultEducationItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

const AchievementTemplate: StoryFn<typeof BackgroundInfo> = (args) => {
  const defaultAchievementItems: BackgroundInfoChildProps = {
    id: "item-1",
    title: { placeholder: texts.achievement_number_one },
    description: {
      placeholder: texts.lorem_ipsum,
    },
  };

  const [achievementItems, setAchievementItems] = useState<
    BackgroundInfoChildProps[]
  >([defaultAchievementItems]);

  const onDecrease = (id: string) => {
    const newItems = achievementItems.filter((item) => item.id !== id);
    setAchievementItems(newItems);
  };
  const onIncrease = () => {
    setAchievementItems((prevState) => [
      ...prevState,
      { ...defaultAchievementItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  const onChangeAchievementItems = ({
    achievementId,
    changeItemKey,
    changeItemValue,
  }: {
    achievementId: string;
    changeItemKey: BackgroundInfoChildKeys;
    changeItemValue: TextFieldProps["value"];
  }) => {
    onChangeItems({
      defaultItems: achievementItems,
      setItems: setAchievementItems,
      defaultItemId: achievementId,
      changeItemKey,
      changeItemValue,
    });
  };

  return (
    <div id="theme-blue">
      <BackgroundInfo
        {...args}
        items={achievementItems.map((item) => ({
          id: item.id,
          title: {
            ...item.title,
            onChange: (e) =>
              onChangeAchievementItems({
                achievementId: item.id,
                changeItemKey: "title",
                changeItemValue: e.target.value,
              }),
          },
          description: {
            ...item.description,
            onChange: (e) =>
              onChangeAchievementItems({
                achievementId: item.id,
                changeItemKey: "description",
                changeItemValue: e.target.value,
              }),
          },
        }))}
        hoverItem={defaultAchievementItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

const SkillTemplate: StoryFn<typeof BackgroundInfo> = (args) => {
  const defaultSkillItems: BackgroundInfoChildProps = {
    id: "item-1",
    title: { placeholder: texts.skill_number_one },
    description: {
      placeholder: texts.some_skills,
    },
  };

  const [skillItems, setSkillItems] = useState<BackgroundInfoChildProps[]>([
    defaultSkillItems,
  ]);

  const onDecrease = (id: string) => {
    const newItems = skillItems.filter((item) => item.id !== id);
    setSkillItems(newItems);
  };
  const onIncrease = () => {
    setSkillItems((prevState) => [
      ...prevState,
      { ...defaultSkillItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  const onChangeSkillItems = ({
    skillId,
    changeItemKey,
    changeItemValue,
  }: {
    skillId: string;
    changeItemKey: BackgroundInfoChildKeys;
    changeItemValue: TextFieldProps["value"];
  }) => {
    onChangeItems({
      defaultItems: skillItems,
      setItems: setSkillItems,
      defaultItemId: skillId,
      changeItemKey,
      changeItemValue,
    });
  };

  return (
    <div id="theme-blue">
      <BackgroundInfo
        {...args}
        items={skillItems.map((item) => ({
          id: item.id,
          title: {
            ...item.title,
            onChange: (e) =>
              onChangeSkillItems({
                skillId: item.id,
                changeItemKey: "title",
                changeItemValue: e.target.value,
              }),
          },
          description: {
            ...item.description,
            onChange: (e) =>
              onChangeSkillItems({
                skillId: item.id,
                changeItemKey: "description",
                changeItemValue: e.target.value,
              }),
          },
        }))}
        hoverItem={defaultSkillItems}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </div>
  );
};

export const Experience = ExperienceTemplate.bind({});
Experience.args = {
  header: { placeholder: texts.experience },
};

export const Education = EducationTemplate.bind({});
Education.args = {
  header: { placeholder: texts.education },
};

export const Achievement = AchievementTemplate.bind({});
Achievement.args = {
  header: { placeholder: texts.achievements },
};

export const Skill = SkillTemplate.bind({});
Skill.args = {
  header: { placeholder: texts.skills },
};
