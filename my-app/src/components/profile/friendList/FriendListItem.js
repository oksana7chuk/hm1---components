import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./FriendList.module.css";

const FriendListItem = ({ id, name, avatar, isOnline = false }) => (
  <Fragment>
    <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </Fragment>
);
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string,
};

export default FriendListItem;
