import parseCss from "style-to-js";

const noopTag = (strings: TemplateStringsArray, ...values: unknown[]) => {
  const stringList: string[] = [];
  strings.forEach((str, i) => {
    stringList.push(str);
    if (i in values) {
      stringList.push(String(values[i]));
    }
  });
  return stringList.join("");
};

const INLINE = {
  css: (strings: TemplateStringsArray, ...values: unknown[]) =>
    parseCss(noopTag(strings, ...values)),
};

export default INLINE;
