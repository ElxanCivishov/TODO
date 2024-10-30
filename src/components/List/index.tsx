import { FC, memo, useCallback } from "react";
import { useKanban } from "../../context/kanban/KanbanContext";
import AddForm from "../AddForm";
import Card, { TCard } from "../Card";
import Button from "../elements/button";
import "./List.scss";

const List: FC<TListProps> = memo(({ list }) => {
  const { dispatch } = useKanban();

  const handleAddCard = useCallback(
    (title: string) => {
      dispatch({
        type: "ADD_CARD",
        payload: { listId: list.id, title },
      });
    },
    [dispatch, list.id]
  );

  const handleDelete = useCallback(
    () =>
      dispatch({
        type: "DELETE_LIST",
        payload: { listId: list.id },
      }),
    [dispatch, list]
  );

  return (
    <div className="list">
      <div className="list-title">
        <h3>{list.title}</h3>
        <Button onClick={handleDelete} variant="danger">
          x
        </Button>
      </div>

      {list.cards.map((card) => (
        <Card key={card.id} card={card} listId={list.id} />
      ))}

      <AddForm
        handleSubmit={handleAddCard}
        buttonLabel="Əlavə et"
        inputPlaceholder="Tapşırıq əlavə edin"
      />
    </div>
  );
});

export default List;

type TListProps = {
  list: TList;
};

export type TList = {
  id: string;
  title: string;
  cards: TCard[];
};
