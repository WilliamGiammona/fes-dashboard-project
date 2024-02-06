import Card from "../components/dashboard/card/card";
import styles from "../components/dashboard/card/card.module.css";

const Dashborad = () => {
  return (
    <div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashborad;
