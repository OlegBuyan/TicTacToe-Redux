import styles from "./field.module.css";
import { store } from "../redux";
export const Field = ({ drawCurrentSymbol, clearField }) => {
  const { info, isGameEnd, field } = store.getState();
  return (
    <>
      <div className={styles.label}>{info}</div>
      <div className={styles.conatiner}>
        {field.map((el, i) => {
          return (
            <button
              onClick={() => drawCurrentSymbol(i)}
              key={i}
              className={styles.item}
              disabled={isGameEnd}
            >
              {el}
            </button>
          );
        })}
      </div>
      <button onClick={clearField}> Начать с начала </button>
    </>
  );
};
