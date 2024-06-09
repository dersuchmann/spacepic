export const tw = (strings: TemplateStringsArray, ...values: unknown[]) => {
  const stringList: string[] = [];
  strings.forEach((str, i) => {
    stringList.push(str);
    if (i in values) {
      stringList.push(String(values[i]));
    }
  });
  stringList.push(" ");
  return stringList.join("");
};
