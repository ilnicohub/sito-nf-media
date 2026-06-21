import Image from "next/image";
import styles from "./BrandLogo.module.css";

type BrandLogoProps = {
  compact?: boolean;
  priority?: boolean;
};

export default function BrandLogo({
  compact = false,
  priority = false,
}: BrandLogoProps) {
  return (
    <span className={styles.brand}>
      <Image
        src="/nf-logo.svg"
        alt="NF Media Lab"
        width={160}
        height={44}
        className={compact ? styles.compact : styles.logo}
        priority={priority}
      />
    </span>
  );
}
