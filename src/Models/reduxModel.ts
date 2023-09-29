import { ErrorState } from "./errorModels";
import { LoadingState } from "./loadingModels";
import {UserMain} from "./userModels"
export interface StoreState {
  loading: LoadingState;
  error: ErrorState;
  user: UserMain;
}
