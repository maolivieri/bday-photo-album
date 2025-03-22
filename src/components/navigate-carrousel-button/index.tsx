import styles from "./styles.module.scss";
import { ComponentProps } from 'react';
import { ArrowLeft, ArrowRight } from '@phosphor-icons/react/dist/ssr';

export function NavigateCarrouselButtonRight({ ...props }: ComponentProps<'button'>) {
  return (
    <button className={styles.right} {...props}>
      <ArrowRight color='#322F4D' weight="bold" />
    </button>
  )
}

export function NavigateCarrouselButtonLeft({ ...props }: ComponentProps<'button'>) {
  return (
    <button className={styles.left} {...props}>
      <ArrowLeft color='#322F4D' weight="bold" />
    </button>
  )
}