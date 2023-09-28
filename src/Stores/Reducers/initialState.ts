import { StoreState } from "../../Models/reduxModel";

const InitialState: StoreState = {
  error: {
    error: undefined,
  },
  loading: {
    count: 0,
    message: "",
  },
  user: {
    user_detail: undefined,
    
  },
};

export default InitialState;
