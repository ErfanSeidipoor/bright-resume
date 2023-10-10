import {
  ChangeEvent,
  useRef,
  useState,
} from "react";

export const useData = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [profileImage, setProfileImage] = useState<string>("");

  const uploadHandler = () => {
    inputRef.current?.click?.();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.target.files && setProfileImage(URL.createObjectURL(e.target.files[0]));
  };

  return {
    inputRef,
    profileImage,
    uploadHandler,
    handleChange,
  };
};
