import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useContext,
  useMemo,
  useReducer,
} from "react";
import { Action } from "./Actions";
import { kanbanReducer, TKanbanState } from "./Reducer";

const KanbanContext = createContext<KanbanContextType | undefined>(undefined);

export const KanbanProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(kanbanReducer, { lists: [] });

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <KanbanContext.Provider value={value}>{children}</KanbanContext.Provider>
  );
};

// eslint-disable-next-line
export const useKanban = (): KanbanContextType => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error("KanbanContext  not found");
  }
  return context;
};

interface KanbanContextType {
  state: TKanbanState;
  dispatch: Dispatch<Action>;
}
