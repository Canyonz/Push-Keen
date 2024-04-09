import { Text } from "@/shared/ui/text/Text";
import cls from "classnames";
import styles from "./Card.module.sass";
import { useState } from "react";

/**
 * @param {{
 *  title: string,
 *  text: string,
 *  className: string
 * }}
 *
 */

export const Card = ({ title, text, className }) => {
	const [active, setActive] = useState(false);

	const handleOnCardClick = () => () => {
		setActive((prev) => !prev);
	};

	const card = (
		<div className={cls(styles.card, { [styles.card_active]: active }, className)}>
			<Text title={title} size="lg" className={styles.card_title} />
			<Text text={text} className={styles.card_text} />
		</div>
	);

	return (
		<button className={styles.cardWrapper} onClick={handleOnCardClick()}>
			{card}
		</button>
	);
};
