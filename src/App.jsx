import { Field } from "./components";
import { useEffect, useState } from "react";
import { WIN_PATTERNS, playersTurn } from "./constant";
import { store } from "./redux";
import "./App.css";

function App() {
  const [field, setField] = useState(store.getState().field);
  const [currentPlayer, setCurrentPlayer] = useState(
    store.getState().currentPlayer
  );
  const [info, setInfo] = useState(store.getState().info);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      const state = store.getState();
      setCurrentPlayer(state.currentPlayer);
      setInfo(state.info);
      setField(state.field);
    });

    return unsubscribe;
  }, []);

  const drawCurrentSymbol = (index) => {
    if (field[index] === "") {
      const fieldValue = [...field];
      fieldValue[index] = currentPlayer;
      store.dispatch({ type: "SET_FIELD", payload: fieldValue });
      store.dispatch({
        type: "SET_CURRENT_PLAYER",
        payload:
          currentPlayer === playersTurn.TURN_X
            ? playersTurn.TURN_O
            : playersTurn.TURN_X,
      });
    }
  };
  useEffect(() => {
    const informationField = () => {
      const lastPlayer =
        currentPlayer === playersTurn.TURN_X
          ? playersTurn.TURN_O
          : playersTurn.TURN_X;
      const gameWinner = WIN_PATTERNS.some((el) =>
        el.every((el) => field[el] === lastPlayer)
      );

      const gameDraw = !field.includes("");

      const anyMove = field.some(Boolean);

      if (gameWinner) {
        store.dispatch({
          type: "SET_GAME_END",
          payload: `Победил ${lastPlayer}`,
        });
      } else if (gameDraw) {
        store.dispatch({ type: "SET_GAME_END", payload: "У нас ничья!" });
      } else if (anyMove) {
        store.dispatch({
          type: "SET_INFO",
          payload: `Сейчас ходит  ${currentPlayer}`,
        });
      }
    };
    informationField();
  }, [field, currentPlayer]);

  const clearField = () => {
    store.dispatch({ type: "RESTART_GAME" });
  };
  return (
    <Field drawCurrentSymbol={drawCurrentSymbol} clearField={clearField} />
  );
}

export default App;
