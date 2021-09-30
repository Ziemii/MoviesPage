// Convert time to hours and minutes
export const calcTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
};
// Convert a number to money formatting
export const convertMoney = (money: number) : string => {
  const formatter: Intl.NumberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const isPersistedState = (statName: string): any => {
  const sessionState = sessionStorage.getItem(statName);

  return sessionState && JSON.parse(sessionState);
};
