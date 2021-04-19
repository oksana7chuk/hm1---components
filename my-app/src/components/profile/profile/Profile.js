import React from "react";
import PropTypes from "prop-types";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, status }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={avatar} alt="Аватар пользователя" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>
    </div>
    <ul className={styles.status}>
      <li className={styles.statusItem}>
        <span className={styles.label}>Followers: </span>
        <span className={styles.quantity}>{status.followers}</span>
      </li>
      <li className={styles.statusItem}>
        <span className={styles.label}>Views: </span>
        <span className={styles.quantity}>{status.views}</span>
      </li>
      <li className={styles.statusItem}>
        <span className={styles.label}>Likes: </span>
        <span className={styles.quantity}>{status.likes}</span>
      </li>
    </ul>
  </div>
);
Profile.defaultProps = {
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxLkbtTa0kfmKizxJgqECQLdlt_xq1R2jEQQ&usqp=CAU",
  status: {
    followers: 0,
    views: 0,
    likes: 0,
  },
};
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
