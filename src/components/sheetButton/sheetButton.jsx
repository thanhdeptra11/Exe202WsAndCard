import React from "react";
import styles from "./sheetButton.module.css";
import tinderSVG from "../../assets/tinder-svgrepo-com.svg";

const SheetButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className={styles.Btn} {...props}>
      <div className={styles.sign}>
        <img src={tinderSVG} alt="tinder" style={{ width: "1.5rem", height: "1.5rem" }} />
      </div>
      <div className={styles.text}>Favorite</div>
    </button>
  );
});

export default SheetButton;
