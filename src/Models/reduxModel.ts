import { ErrorState } from "./errorModels";
import { LoadingState } from "./loadingModels";
//import {UserMain} from './UserModels';
export interface StoreState {
  loading: LoadingState;
  error: ErrorState;
  user: any;
}
