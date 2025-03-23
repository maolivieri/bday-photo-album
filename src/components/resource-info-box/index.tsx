import { ResourceMetadata } from "@/app/api/types"
import styles from "./styles.module.scss";
import { ArrowsVertical, Clock, Scales } from "@phosphor-icons/react/dist/ssr";

interface Props {
  metadata: ResourceMetadata;
  title: string;
}

export function ResourceInfoBox({ metadata, title }: Props) {
  const { date, description, size, time, weight } = metadata;
  return (
    <div className={styles.box}>
      <span className={styles.blur} />
      <div className={styles['title-box']}>
        {date && (<span>{date}</span>)}
        <h2>{title}</h2>
      </div>
      <div className={styles.description}>
        {description && (<p>{description}</p>)}
      </div>
      <div className={styles.extra}>
        {time && (<span><Clock weight="bold" />{time}</span>)}
        {size && (<span><ArrowsVertical weight="bold" />{size}</span>)}
        {weight && (<span><Scales weight="bold" />{weight}</span>)}
      </div>
    </div>
  )
}