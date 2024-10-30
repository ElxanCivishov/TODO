export type Action =
  | { type: "ADD_LIST"; payload: TAddListActionProps }
  | { type: "DELETE_LIST"; payload: TDeleteListActionProps }
  | { type: "ADD_CARD"; payload: TAddCardActionProps }
  | { type: "DELETE_CARD"; payload: TDeleteCardActionProps }
  | {
      type: "EDIT_CARD";
      payload: { listId: string; cardId: string; title: string };
    };

export type TAddListActionProps = { title: string };
export type TDeleteListActionProps = { listId: string };

export type TAddCardActionProps = { listId: string; title: string };
export type TDeleteCardActionProps = { listId: string; cardId: string };
export type TEditCardActionProps = {
  listId: string;
  cardId: string;
  title: string;
};
