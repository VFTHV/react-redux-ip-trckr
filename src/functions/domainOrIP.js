export const domainOrIP = (input) => {
  if (!input) return;
  const expressionString =
    "^((?!-))(xn--)?[a-z0-9][a-z0-9-_]{0,61}[a-z0-9]{0,1}.(xn--)?([a-z0-9-]{1,61}|[a-z0-9-]{1,30}.[a-z]{2,})$";
  const expression = new RegExp(expressionString);

  if (input.toLowerCase().match(expression)) {
    return true;
  } else {
    return false;
  }
};
