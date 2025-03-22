import { LinkProps } from "next/link";
import Link from "next/link";

import styles from './styles.module.scss'
import { ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
}

export function TransparentLinkButton({ ...props }: Props) {
  return (
    <Link {...props} className={styles.button} />
  )
}