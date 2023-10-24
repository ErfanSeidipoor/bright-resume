import {
  ChangeEvent,
  useRef,
  useState,
} from "react";

export const useData = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<File | null>(null);

  const uploadHandler = () => {
    inputRef.current?.click?.();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    return setProfileImage(e.target.files[0]);
  };

  return {
    inputRef,
    profileImage,
    uploadHandler,
    handleChange,
  };
};
