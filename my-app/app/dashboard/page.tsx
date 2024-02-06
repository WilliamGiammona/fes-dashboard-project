import Card from "../components/dashboard/card/card";
import Chart from "../components/dashboard/chart/chart";
import styles from "../components/dashboard/dashboard.module.css";
import RightBar from "../components/dashboard/rightbar/rightbar";
import Transactions from "../components/dashboard/transactions/transactions";

const Dashborad = () => {
  return (
    <div className={styles.wrapper}>
      <main className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </main>
      <div className={styles.side}>
        <RightBar />
      </div>
    </div>
  );
};

export default Dashborad;
