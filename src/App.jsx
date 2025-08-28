import { Field } from "./components";
import { useEffect } from "react";
import { swapField, swapPlayer, RESET } from "./redux/actions";
import "./App.css";
import { store } from "./redux";
import { calculateCurrentPlayer, informationField } from "./functions";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const field = store.getState().field;
  const currentPlayer = useSelector((state) => state.currentPlayer);

  const drawCurrentSymbol = (index) => {
    if (field[index] === "") {
      const fieldValue = [...field];

      fieldValue[index] = currentPlayer;

      dispatch(swapField(fieldValue));

      dispatch(swapPlayer(calculateCurrentPlayer(currentPlayer)));
    }
  };
  useEffect(() => {
    informationField(field, currentPlayer, dispatch);
  }, [field, currentPlayer]);

  const clearField = () => {
    dispatch(RESET);
  };

  return (
    <Field drawCurrentSymbol={drawCurrentSymbol} clearField={clearField} />
  );
}

export default App;
