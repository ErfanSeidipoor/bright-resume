"use client";

import { FC } from "react";
import { useStudioContext } from "../use-context";

export const Header: FC = () => {
  const { user, selectedResume } = useStudioContext();
  return (
    <div className="bg-gray-400 w-full h-full">
      Hi, {user && (user.name || user.email || user.username)}
      <br />
      {selectedResume && "Resume: " + selectedResume.title}
    </div>
  );
};
