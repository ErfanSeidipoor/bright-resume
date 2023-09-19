import { FAQ } from "../containers/home/faq";
import { Features } from "../containers/home/features";
import styles from "./page.module.scss";
export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <div className={styles.hero} />
      <Features />
      <FAQ />
    </div>
  );
}
