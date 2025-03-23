import { X } from '@phosphor-icons/react/dist/ssr';
import styles from "./styles.module.scss";
import { ComponentProps } from 'react';

export function CloseButton({ ...props }: ComponentProps<'button'>) {
  return (
    <button className={styles.button} {...props}>
      <X color='#FFF' weight="bold" />
    </button>
  )
}