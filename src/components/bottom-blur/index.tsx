import styles from "./styles.module.scss";

interface Props {
  background?: string;
}

export function BottomBlur({ background }: Props) {
  const bg = background ?? "#C1BEBB";

  return (
    <div
      className={styles['bottom-blur']}
      style={{
        "background": `linear-gradient(rgba(255, 255, 255, 0), ${bg})`
      }}
    />
  )
}