import styles from '../styles/Loading.module.css';

export default function Loading() {
  return (
<div className={styles.loader}>
  <div className={styles.wrapper}>
    <div className={styles.textLines}>
      <div className={styles.line1} />
      <div className={styles.line2} />
      <div className={styles.line3} />
      <div className={styles.line4} />
      <div className={styles.line5} />
      <div className={styles.line6} />
      <div className={styles.line7} />
    </div>
  </div>
</div>

  );
}
