import { Meta, StoryFn } from "@storybook/react";

import { Experience } from "./";
import { texts } from "./texts";
import { useState } from "react";
import { ExperienceChildProps, MonthEnum } from "../../index.type";

export default {
  component: Experience,
  title: "Experience",
} as Meta<typeof Experience>;

const Template: StoryFn<typeof Experience> = (args) => {
  const hoverItems: ExperienceChildProps = {
    id: "item-1",
    role: { placeholder: texts.position },
    company: { placeholder: texts.company },
  };
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
    showLocation: {
      isShow: false,
      onToggle: () => undefined,
    },
    showDate: {
      isShow: false,
      onToggle: () => undefined,
    },
    showPoints: {
      isShow: false,
      onToggle: () => undefined,
    },
  };

  const [items, setItems] = useState<ExperienceChildProps[]>([
    defaultExperienceItems,
  ]);

  const onChangeRole = (id: string, value: string) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        role: { ...updatedItems[itemIndex].role, value },
      };
      return updatedItems;
    });
  };

  const onChangeCompany = (id: string, value: string) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        company: { ...updatedItems[itemIndex].company, value },
      };
      return updatedItems;
    });
  };

  const onChangeLocation = (id: string, value: string) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        location: { ...updatedItems[itemIndex].location, value },
      };
      return updatedItems;
    });
  };

  const onChangePoints = (id: string, value: string | undefined) => {
    if (!value) return;
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        points: { ...updatedItems[itemIndex].points, value },
      };
      return updatedItems;
    });
  };

  const onChangeShowLocation = (id: string, isShow: boolean) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        showLocation: {
          ...updatedItems[itemIndex].showLocation,
          isShow,
          onToggle: () => undefined,
        },
      };
      return updatedItems;
    });
  };

  const onChangeShowPoints = (id: string, isShow: boolean) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        showPoints: {
          ...updatedItems[itemIndex].showPoints,
          isShow,
          onToggle: () => undefined,
        },
      };
      return updatedItems;
    });
  };

  const onChangeShowDate = (id: string, isShow: boolean) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        showDate: {
          ...updatedItems[itemIndex].showDate,
          isShow,
          onToggle: () => undefined,
        },
      };
      return updatedItems;
    });
  };

  const onChangeFromMonth = (id: string, value: MonthEnum) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        rangeDate: updatedItems[itemIndex].rangeDate
          ? { ...updatedItems[itemIndex].rangeDate, fromMonth: value }
          : undefined,
      };
      return updatedItems;
    });
  };

  const onChangeToMonth = (id: string, value: MonthEnum) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        rangeDate: updatedItems[itemIndex].rangeDate
          ? { ...updatedItems[itemIndex].rangeDate, toMonth: value }
          : undefined,
      };
      return updatedItems;
    });
  };

  const onChangeFromYear = (id: string, value: number) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        rangeDate: updatedItems[itemIndex].rangeDate
          ? { ...updatedItems[itemIndex].rangeDate, fromYear: value }
          : undefined,
      };
      return updatedItems;
    });
  };

  const onChangeToYear = (id: string, value: number) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        rangeDate: updatedItems[itemIndex].rangeDate
          ? { ...updatedItems[itemIndex].rangeDate, toYear: value }
          : undefined,
      };
      return updatedItems;
    });
  };

  const onDecrease = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };
  const onIncrease = () => {
    setItems((prevState) => [
      ...prevState,
      { ...defaultExperienceItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  return (
    <div id="theme-blue">
      <Experience
        {...args}
        items={items.map((item) => ({
          id: item.id,
          role: {
            ...item.role,
            onChange: (e) => onChangeRole(item.id, e.target.value),
          },
          company: {
            ...item.company,
            onChange: (e) => onChangeCompany(item.id, e.target.value),
          },
          location: {
            ...item.location,
            onChange: (e) => onChangeLocation(item.id, e.target.value),
          },
          points: {
            ...item.points,
            value: item.points?.value,
            isSeparateValue: true,
            setValue: (value: string | undefined) =>
              onChangePoints(item.id, value),
            onChange: (e) => onChangePoints(item.id, e.target.value),
          },
          rangeDate: {
            fromMonth: item?.rangeDate?.fromMonth,
            toMonth: item?.rangeDate?.toMonth,
            fromYear: item?.rangeDate?.fromYear,
            toYear: item?.rangeDate?.toYear,
            onChangeFromMonth: (month) => onChangeFromMonth(item.id, month),
            onChangeToMonth: (month) => onChangeToMonth(item.id, month),
            onChangeFromYear: (year) => onChangeFromYear(item.id, year),
            onChangeToYear: (year) => onChangeToYear(item.id, year),
          },
          showLocation: {
            isShow: !!item.showLocation?.isShow,
            onToggle: () =>
              onChangeShowLocation(item.id, !item.showLocation?.isShow),
          },
          showDate: {
            isShow: !!item.showDate?.isShow,
            onToggle: () => onChangeShowDate(item.id, !item.showDate?.isShow),
          },
          showPoints: {
            isShow: !!item.showPoints?.isShow,
            onToggle: () =>
              onChangeShowPoints(item.id, !item.showPoints?.isShow),
          },
        }))}
        header={{ label: texts.experience, placeholder: texts.experience }}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        hoverItem={hoverItems}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
