const initialState: initialState = { name: null };

export const getInitialState = () => {
  if (typeof window === "undefined") {
    return initialState;
  }
  const waterFlooding = document.getElementById(
    "waterFlooding"
  ) as HTMLTextAreaElement;
  return JSON.parse(decodeURIComponent(waterFlooding.value));
};
export const createInitialState = (data) => {
  Object.assign(initialState, data);
};

export function reducer(state, action) {
  const { type, newData } = action;
  switch (type) {
    case "set":
      return {
        ...state,
        ...newData,
      };
    default:
      throw new Error();
  }
}
