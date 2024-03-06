export const truncateText = (str: string) => {
  return str.length > 15 ? str.substring(0, 10) + "...." : str;
};
