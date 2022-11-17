import React from "react";

const SmoothScrolling = () => {
  return (
    <>
      <div
        onClick={() => {
          let el = document.querySelector(`[name=middleDiv]`);
          if (el) {
            el.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        }}
      >
        Home
      </div>
      <div className={styles.tempBox}>Home1</div>

      <div className={styles.tempBox}>Home2</div>

      <div name="middleDiv" className={styles.tempBox}>
        Home3
      </div>

      <div className={styles.tempBox}>Home4</div>

      <div className={styles.tempBox}>Home5</div>

      <div className={styles.tempBox}>Home6</div>

      <div name="homeDiv" className={styles.newBox}>
        Home7
      </div>
    </>
  );
};
export default SmoothScrolling;
