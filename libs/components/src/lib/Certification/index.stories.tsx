import { Meta, StoryFn } from "@storybook/react";

import { Certification } from "./";
import { texts } from "./texts";
import { useState } from "react";
import { CertificationChildProps, MonthEnum } from "../../index.type";

export default {
  component: Certification,
  title: "Certification",
} as Meta<typeof Certification>;

const Template: StoryFn<typeof Certification> = (args) => {
  const hoverItems: CertificationChildProps = {
    id: "item-1",
    name: { placeholder: texts.name },
  };
  const defaultCertificationItems: CertificationChildProps = {
    id: "item-1",
    name: { placeholder: texts.name },
    institute: { placeholder: texts.institute },
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
    showDate: {
      isShow: false,
      onToggle: () => undefined,
    },
    showPoints: {
      isShow: false,
      onToggle: () => undefined,
    },
  };

  const [title, setTitle] = useState<string>(texts.certification);

  const [items, setItems] = useState<CertificationChildProps[]>([
    defaultCertificationItems,
  ]);

  const onChangeName = (id: string, value: string) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        name: { ...updatedItems[itemIndex].name, value },
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
      { ...defaultCertificationItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  return (
    <div id="theme-blue">
      <Certification
        {...args}
        items={items.map((item) => ({
          id: item.id,
          name: {
            ...item.name,
            onChange: (e) => onChangeName(item.id, e.target.value),
          },
          institute: {
            ...item.institute,
            onChange: (e) => onChangeInstitute(item.id, e.target.value),
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
          placeholder: texts.certification,
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
