import { StoreState } from "../../Models/reduxModel";

const InitialState: StoreState = {
  error: {
    error: undefined,
  },
  loading: {
    count: 0,
    message: "",
  },
};

export default InitialState;
