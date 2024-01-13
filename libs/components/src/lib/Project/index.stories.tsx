import { Meta, StoryFn } from "@storybook/react";

import { Project } from "./";
import { texts } from "./texts";
import { useState } from "react";
import { ProjectChildProps, MonthEnum } from "../../index.type";

export default {
  component: Project,
  title: "Project",
} as Meta<typeof Project>;

const Template: StoryFn<typeof Project> = (args) => {
  const hoverItems: ProjectChildProps = {
    id: "item-1",
    title: { placeholder: texts.title },
  };
  const defaultProjectItems: ProjectChildProps = {
    id: "item-1",
    title: { placeholder: texts.title },
    role: { placeholder: texts.role },
    company: { placeholder: texts.company },
    location: { placeholder: texts.location },
    url: { placeholder: texts.url },
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
    showRole: {
      isShow: false,
      onToggle: () => undefined,
    },
    showCompany: {
      isShow: false,
      onToggle: () => undefined,
    },
    showUrl: {
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

  const [items, setItems] = useState<ProjectChildProps[]>([
    defaultProjectItems,
  ]);

  const onChangeTitle = (id: string, value: string) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        title: { ...updatedItems[itemIndex].title, value },
      };
      return updatedItems;
    });
  };

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

  const onChangeUrl = (id: string, value: string) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        url: { ...updatedItems[itemIndex].url, value },
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

  const onChangeShowRole = (id: string, isShow: boolean) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        showRole: {
          ...updatedItems[itemIndex].showRole,
          isShow,
          onToggle: () => undefined,
        },
      };
      return updatedItems;
    });
  };

  const onChangeShowCompany = (id: string, isShow: boolean) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        showCompany: {
          ...updatedItems[itemIndex].showCompany,
          isShow,
          onToggle: () => undefined,
        },
      };
      return updatedItems;
    });
  };

  const onChangeShowUrl = (id: string, isShow: boolean) => {
    const itemIndex = items.findIndex((item) => item.id === id);
    setItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        showUrl: {
          ...updatedItems[itemIndex].showUrl,
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
      { ...defaultProjectItems, id: `item-${prevState.length + 1}` },
    ]);
  };

  return (
    <div id="theme-blue">
      <Project
        {...args}
        items={items.map((item) => ({
          id: item.id,
          title: {
            ...item.title,
            onChange: (e) => onChangeTitle(item.id, e.target.value),
          },
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
          url: {
            ...item.url,
            onChange: (e) => onChangeUrl(item.id, e.target.value),
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
          showRole: {
            isShow: !!item.showRole?.isShow,
            onToggle: () => onChangeShowRole(item.id, !item.showRole?.isShow),
          },
          showCompany: {
            isShow: !!item.showCompany?.isShow,
            onToggle: () =>
              onChangeShowCompany(item.id, !item.showCompany?.isShow),
          },
          showLocation: {
            isShow: !!item.showLocation?.isShow,
            onToggle: () =>
              onChangeShowLocation(item.id, !item.showLocation?.isShow),
          },
          showUrl: {
            isShow: !!item.showUrl?.isShow,
            onToggle: () => onChangeShowUrl(item.id, !item.showUrl?.isShow),
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
        header={{ placeholder: texts.project }}
        onDecrease={onDecrease}
        onIncrease={onIncrease}
        hoverItem={hoverItems}
      />
    </div>
  );
};

export const Main = Template.bind({});
Main.args = {};
