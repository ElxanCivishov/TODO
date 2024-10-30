import { TList } from "../../components/List";
import { Action } from "./Actions";

export const kanbanReducer = (
  state: TKanbanState = initialState,
  action: Action
): TKanbanState => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        lists: [
          ...state.lists,
          { id: Date.now().toString(), title: action.payload.title, cards: [] },
        ],
      };
    case "DELETE_LIST":
      return {
        lists: state.lists.filter((list) => list.id !== action.payload.listId),
      };
    case "ADD_CARD":
      return {
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: [
                  ...list.cards,
                  { id: Date.now().toString(), title: action.payload.title },
                ],
              }
            : list
        ),
      };
    case "DELETE_CARD":
      return {
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: list.cards.filter(
                  (card) => card.id !== action.payload.cardId
                ),
              }
            : list
        ),
      };
    case "EDIT_CARD":
      return {
        lists: state.lists.map((list) =>
          list.id === action.payload.listId
            ? {
                ...list,
                cards: list.cards.map((card) =>
                  card.id === action.payload.cardId
                    ? { ...card, title: action.payload.title }
                    : card
                ),
              }
            : list
        ),
      };
    default:
      return state;
  }
};

export type TKanbanState = {
  lists: TList[];
};

const initialState: TKanbanState = {
  lists: [],
};
