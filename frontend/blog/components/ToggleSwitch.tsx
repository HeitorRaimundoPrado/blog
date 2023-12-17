import styles from '@/style/toggleswitch.module.css';

const ToggleSwitch = ({ id }) => {
  return (
    <label className={styles.toggleSwitch}>
      <input type="checkbox" id={id ? id : ""} />
      <span className={styles.slider}></span>
    </label>
  );
};

export default ToggleSwitch;
