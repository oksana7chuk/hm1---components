import React from "react";
import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => (
  <div>
    <table className={styles.transactionHistory}>
      <thead className={styles.thead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className={styles.tr}>
            <TransactionItem {...transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
