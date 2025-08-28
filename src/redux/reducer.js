import { playersTurn } from "../constant";
export const initialState = {
  currentPlayer: playersTurn.TURN_X,
  info: `Начните игру`,
  field: new Array(9).fill(""),
  isGameEnd: false,
};

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CURRENT_PLAYER":
      return {
        ...state,
        currentPlayer: payload,
      };
    case "SET_FIELD": {
      return {
        ...state,
        field: payload,
      };
    }
    case "SET_INFO": {
      return {
        ...state,
        info: payload,
      };
    }
    case "SET_GAME_END": {
      return {
        ...state,
        info: payload,
        isGameEnd: true,
      };
    }
    case "RESTART_GAME":
      return initialState;
    default:
      return state;
  }
};
appReducer("NEW_GAME", {});
