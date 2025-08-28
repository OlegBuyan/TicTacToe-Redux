import styles from "./field.module.css";
import { store } from "../redux";
import { useSelector } from "react-redux";
export const Field = ({ drawCurrentSymbol, clearField }) => {
  const info = useSelector((state) => state.info);
  const isGameEnd = useSelector((state) => state.isGameEnd);
  const field = store.getState().field;

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
