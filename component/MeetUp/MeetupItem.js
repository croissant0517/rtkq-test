import Image from "next/image";

import styles from "./MeetupItem.module.css";

export default function MeetupItem({ data }) {
  const { image, title, address } = data;

  return (
    <li className={styles.meetupItemWrapper}>
      <div>
        <Image src={image} alt={title} height={200} width={200} />
      </div>
      <div>
        <h3>{title}</h3>
        <address>{address}</address>
      </div>
    </li>
  );
}
