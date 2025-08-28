import { calculateCurrentPlayer } from "./calculateCurrentPlayer";
import { WIN_PATTERNS } from "../constant";
import { endGame, swapInfo } from "../redux/actions";

export const informationField = (field, currentPlayer, dispatch) => {
  const gameWinner = WIN_PATTERNS.some((el) =>
    el.every((el) => field[el] === calculateCurrentPlayer(currentPlayer))
  );

  const gameDraw = !field.includes("");

  const anyMove = field.some(Boolean);

  if (gameWinner) {
    dispatch(endGame(`Победил ${calculateCurrentPlayer(currentPlayer)}`));
  } else if (gameDraw) {
    dispatch(endGame("У нас ничья!"));
  } else if (anyMove) {
    dispatch(swapInfo(`Сейчас ходит  ${currentPlayer}`));
  }
  return null;
};
