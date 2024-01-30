import classes from "./index.module.scss";
import Image from "next/image";

export default function ImageCombo() {
  return (
    <div className={classes.imageCombo}>
      {/* <Image
        src="/assets/image/Rectangle.png"
        alt="Hero image"
        fill
        sizes="100%"
        placeholder="blur"
        blurDataURL="/assets/image/hero-image.png"
      /> */}
      <Image
        src="/assets/image/sample-3.svg"
        alt="Hero image"
        fill
        sizes="100%"
        placeholder="blur"
        blurDataURL="/assets/image/sample-2.svg"
      />
      {/* <Image
        src="/assets/image/hero-image.png"
        alt="Hero image"
        fill
        sizes="100%"
        placeholder="blur"
        blurDataURL="/assets/image/sample-3.svg"
      /> */}
    </div>
  );
}
