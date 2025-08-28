import { playersTurn } from "../constant";

export const calculateCurrentPlayer = (currentPlayer) => {
  return currentPlayer === playersTurn.TURN_X
    ? playersTurn.TURN_O
    : playersTurn.TURN_X;
};
