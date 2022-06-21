import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import store, { RootState } from "src/store";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector; // Export a hook that can be reused to resolve types
