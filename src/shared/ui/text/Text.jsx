import cls from "classnames";
import styles from "./Text.module.sass";

/**
 *
 * @param {{
 *  text:string,
 *  title:string,
 *  size: "sm" | "md" | "lg",
 *  align: "left" | "center" | "right",
 *  className: string
 * }}
 *
 */

export const Text = ({ text, title, size = "md", align = "left", className }) => {
	const TitleTag = {
		lg: "h1",
		md: "h2",
		sm: "h3",
	}[size];

	const alignClass = {
		left: styles.left,
		center: styles.center,
		right: styles.right,
	}[align];

	if (title) return <TitleTag className={cls(styles.title, alignClass, className)}>{title}</TitleTag>;

	return <span className={cls(styles.text, alignClass, className)}>{text}</span>;
};
