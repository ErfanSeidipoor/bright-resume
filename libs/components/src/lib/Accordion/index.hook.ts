import { useState, useEffect } from "react";

export const useData = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return {
    isOpen,
    handleToggle,
  };
};

export const useAnimation = ({
  classes,
}: {
  classes: { readonly [key: string]: string };
}) => {
  useEffect(() => {
    const accordionItems = document.querySelectorAll(
      `.${classes.accordion__item}`
    );

    accordionItems.forEach((item) => {
      item.addEventListener("click", () => {
        new Promise((resolve) => {
          setTimeout(() => {
            const content = item.querySelector<HTMLElement>(
              `.${classes.accordion__item__children}`
            );
            if (!content) return;
            if (
              content.classList.contains(
                classes.accordion__item__children__open
              )
            ) {
              content.style.height = `${content.scrollHeight}px`;
            } else {
              content.style.height = "1px";
            }
            item.classList.toggle("__open");
            resolve(null);
          }, 0);
        });
      });
    });
  }, []);
};
