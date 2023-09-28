import { ErrorState } from "./errorModels";
import { LoadingState } from "./loadingModels";

export interface StoreState {
  loading: LoadingState;
  error: ErrorState;
}
