import { FC, memo, useCallback, useState } from "react";
import { useKanban } from "../../context/kanban/KanbanContext";
import Button from "../elements/button";
import Input from "../elements/input";
import "./card.scss";

const Card: FC<TCardProps> = memo(({ card, listId }) => {
  const { dispatch } = useKanban();
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(card.title);

  const handleEdit = useCallback(() => {
    dispatch({
      type: "EDIT_CARD",
      payload: { listId, cardId: card.id, title },
    });
    setIsEditing(false);
  }, [card.id, dispatch, listId, title]);

  const handleDelete = useCallback(
    () =>
      dispatch({
        type: "DELETE_CARD",
        payload: { listId, cardId: card.id },
      }),
    [card.id, dispatch, listId]
  );

  return (
    <div className="card">
      {isEditing ? (
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={handleEdit}
          autoFocus
        />
      ) : (
        <p onDoubleClick={() => setIsEditing(true)}>{card.title}</p>
      )}
      <Button onClick={handleDelete} variant="danger">
        x
      </Button>
    </div>
  );
});

export default Card;

type TCardProps = {
  card: TCard;
  listId: string;
};

export type TCard = { id: string; title: string };
