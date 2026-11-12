import { KeyboardEvent, useRef, useState } from "react";
import useSize from "@react-hook/size";

import {
  BtnBold,
  BtnItalic,
  ContentEditableEvent,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";
import "./index.css";

export interface RichTextProps {
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  withToolbar?: boolean;
  scale?: number;
}

export function RichText({
  value = "",
  onChange = () => "",
  className,
  withToolbar = false,
  scale = 1,
}: RichTextProps) {
  const [left, setLeft] = useState(0);
  const target = useRef(null);
  const [containerWidth] = useSize(target);
  const [displayToolbar, setToolbarDisplay] = useState("none");

  const cleanHtml = (htmlString: string) => {
    const allowedTags = ["b", "strong", "em", "i"];
    const tagRegex = new RegExp(`<([^\\s>]+)(?:[^>]*)>(.*?)</\\1>`, "gi");

    htmlString = htmlString.replace(tagRegex, (match, tagName) => {
      if (allowedTags.includes(tagName.toLowerCase())) {
        // Remove inline styles
        return match.replace(/(style="[^"]*")|(style='[^']*')/gi, "");
      } else {
        return "";
      }
    });

    htmlString = htmlString.replace(/(style="[^"]*")|(style='[^']*')/gi, "");

    return htmlString;
  };

  const onChangeEvent = (event: ContentEditableEvent) => {
    onChange(cleanHtml(event.target.value));
  };

  const onKeyDownEvent = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  const onBlurEvent = () => {
    setToolbarDisplay("none");
  };

  return (
    <div style={{ position: "relative", zIndex: 1 }} ref={target}>
      <div
        style={{
          position: "absolute",
          top: "-90%",
          left: 0,
          width: "100%",
          height: "190%",
          // backgroundColor: "#F003",
          zIndex: 2,
          display: displayToolbar !== "none" ? "block" : "none",
        }}
        onMouseLeave={() => {
          setToolbarDisplay("none");
        }}
      />
      <div
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <EditorProvider>
          <Editor
            className={className}
            value={value}
            onKeyDown={onKeyDownEvent}
            onChange={onChangeEvent}
            onBlur={onBlurEvent}
            onSelect={(e) => {
              const selection = window.getSelection();

              // @ts-ignore
              const layerX = (e.nativeEvent as MouseEvent).layerX;
              if (selection && selection.anchorOffset && layerX) {
                const text = selection.toString();
                setToolbarDisplay(text ? "flex" : "none");
                setLeft(layerX / scale);
              }
            }}
          ></Editor>
          <Toolbar
            style={{
              display: withToolbar ? displayToolbar : "none",
              position: "absolute",
              bottom: "100%",
              left: left > (containerWidth / scale || 0) * 0.9 ? "unset" : left,
              right:
                left > (containerWidth / scale || 0) * 0.9 ? "5%" : "unset",
            }}
            onMouseOver={() => setToolbarDisplay("flex")}
          >
            <div className="rsw-btn-container">
              <BtnBold />
            </div>
            <div className="rsw-btn-container">
              <BtnItalic />
            </div>
            <button
              className="rsw-btn-container"
              onClick={(e) => {
                console.log("Link");
              }}
            >
              AI
            </button>
          </Toolbar>
        </EditorProvider>
      </div>
    </div>
  );
}
