import { Card } from "@/entities/card/ui/Card";
import styles from "./CardsPage.module.sass";

const cardTemplate = {
	title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
  Earum molestiae, hic amet ab ducimus commodi error cupiditate fugiat esse architecto ut! Aspernatur, 
  a voluptate quia delectus vitae harum cum quaerat?`,

	text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
};

export const CardsPage = () => {
	return (
		<div className={styles.cardsPage}>
			<div className={styles.cards_wrapper}>
				{Array(12)
					.fill(cardTemplate)
					.map((card, index) => (
						<Card key={index} title={card.title} text={card.text} />
					))}
			</div>
		</div>
	);
}; 