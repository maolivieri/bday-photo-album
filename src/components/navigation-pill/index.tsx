import { ComponentProps, ReactNode } from "react";
import styles from "./styles.module.scss";

interface Props extends ComponentProps<'button'> {
  children: ReactNode;
  $isActive: boolean;
}

export function NavigationPill({ children, $isActive, ...props }: Props) {
  return (
    <button
      {...props}
      className={`${styles.button} ${$isActive && styles.active}`}
    >
      {children}
    </button>
  )
}