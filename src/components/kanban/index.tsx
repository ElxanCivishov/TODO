import { FC, useCallback, useMemo, useState } from "react";
import { useKanban } from "../../context/kanban/KanbanContext";
import AddForm from "../AddForm";
import Input from "../elements/input";
import List from "../List";
import "./Kanban.scss";

const KanbanBoard: FC = () => {
  const { state, dispatch } = useKanban();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredLists = useMemo(() => {
    if (!searchQuery) return state.lists;
    return state.lists.filter((list) =>
      list.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, state.lists]);

  const handleAddList = useCallback(
    (title: string) => {
      setSearchQuery("");
      dispatch({ type: "ADD_LIST", payload: { title } });
    },
    [dispatch]
  );

  return (
    <div className="kanban-board">
      <h1>Kanban Board</h1>
      <Input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Axtarın"
      />

      <div className="konban-wrapper">
        <div className="lists-container">
          {filteredLists.map((list) => (
            <List key={list.id} list={list} />
          ))}
        </div>

        <AddForm
          handleSubmit={handleAddList}
          buttonLabel="Yeni list"
          buttonVariant="primary"
          inputPlaceholder="List əlavə edin"
        />
      </div>
    </div>
  );
};

export default KanbanBoard;
