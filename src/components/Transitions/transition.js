import PropTypes from "prop-types";
import style from "./transition.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={style.transaction__history}>
      <thead>
        <tr>
          <th className={style.titleTable}>Type</th>
          <th className={style.titleTable}>Amount</th>
          <th className={style.titleTable}>Currency</th>
        </tr>
      </thead>
      {items.map((a) => (
        <tbody key={a.id}>
          <tr className={style.text}>
            <td>{a.type}</td>
            <td>{a.amount}</td>
            <td>{a.currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;
