import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.css";

const TransactionItem = ({ id, type, amount, currency }) => (
  <Fragment>
    <td className={styles.td}>{type}</td>
    <td className={styles.td}>{amount}</td>
    <td className={styles.td}>{currency}</td>
  </Fragment>
);

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionItem;
