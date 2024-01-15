import { Meta, StoryFn } from "@storybook/react";

import { Education } from "./";
import { texts } from "./texts";
import { useState } from "react";
import { EducationChildProps, MonthEnum } from "../../index.type";

export default {
  component: Education,
  title: "Education",
} as Meta<typeof Education>;

const Template: StoryFn<typeof Education> = (args) => {
  const hoverItems: EducationChildProps = {
    id: "item-1",
    degree: { placeholder: texts.degree, label: texts.degree },
  };
  const defaultEducationItems: EducationChildProps = {
    id: "item-1",
    degree: { placeholder: texts.degree, label: texts.degree },
    institute: { placeholder: texts.institute, label: texts.institute },
    gpa: { placeholder: texts.gpa, label: texts.gpa },
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
    showInstitute: {
      isShow: false,
      onToggle: () => undefined,
    },
    showGpa: {
      isShow: false,
      onToggle: () => undefined,
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

  const [title, setTitle] = useState<string>(texts.education);

  const [items, setItems] = useState<EducationChildProps[]>([
    defaultEducationItems,
  ]);

  const onChangeDegree = (id: string, value: string) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        degree: { ...updatedItems[itemIndex].degree, value },
      };
      return updatedItems;
    });
  };

  const onChangeInstitute = (id: string, value: string) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        institute: { ...updatedItems[itemIndex].institute, value },
      };
      return updatedItems;
    });
  };

  const onChangeGpa = (id: string, value: string) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        gpa: { ...updatedItems[itemIndex].gpa, value },
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

  const onChangeShowInstitute = (id: string, isShow: boolean) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        showInstitute: {
          ...updatedItems[itemIndex].showInstitute,
          isShow,
          onToggle: () => undefined,
        },
      };
      return updatedItems;
    });
  };

  const onChangeShowGpa = (id: string, isShow: boolean) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        showGpa: {
          ...updatedItems[itemIndex].showGpa,
          isShow,
          onToggle: () => undefined,
        },
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
      { ...defaultEducationItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  return (
    <div id="theme-blue">
      <Education
        {...args}
        items={items.map((item) => ({
          id: item.id,
          degree: {
            ...item.degree,
            onChange: (e) => onChangeDegree(item.id, e.target.value),
          },
          institute: {
            ...item.institute,
            onChange: (e) => onChangeInstitute(item.id, e.target.value),
          },
          gpa: {
            ...item.gpa,
            onChange: (e) => onChangeGpa(item.id, e.target.value),
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
          showInstitute: {
            isShow: !!item.showInstitute?.isShow,
            onToggle: () =>
              onChangeShowInstitute(item.id, !item.showInstitute?.isShow),
          },
          showGpa: {
            isShow: !!item.showGpa?.isShow,
            onToggle: () => onChangeShowGpa(item.id, !item.showGpa?.isShow),
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
        header={{
          placeholder: texts.education,
          value: title,
          onChange: (e) => setTitle(e.target.value),
        }}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        hoverItem={hoverItems}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
