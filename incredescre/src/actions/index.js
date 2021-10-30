export const incNumber = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decNumber = (number) => {
  return {
    type: "DESCREMENT",
    payload: number,
  };
};
