export default function getTextFromRegexHelper(text, separators, replacers) {
  const separatorString = separators.join("");
  let regexString = "[-]";
  regexString = regexString.replace("-", separatorString);
  const regex = new RegExp(regexString);
  const matchedText = text.match(regex);
  let separatorIndex;
  let separator;
  let textWithReplacer = text;
  if (matchedText) {
    separator = matchedText[0];
    const index = separators.findIndex((item) => item === separator);
    textWithReplacer = text.split(separator).join(replacers[index]);
    separatorIndex = matchedText["index"];
  }

  return [textWithReplacer, separator, separatorIndex];
}
