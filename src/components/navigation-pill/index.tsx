import { ComponentProps, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props extends ComponentProps<'button'> {
  children: ReactNode;
  $isActive: boolean;
  $theme: 'light' | 'dark'
}

export function NavigationPill({ children, $isActive, $theme, ...props }: Props) {
  return (
    <button
      {...props}
      className={`${styles.button} ${$isActive && styles.active} ${$theme === 'dark' && styles.dark}`}
    >
      {children}
    </button>
  )
}