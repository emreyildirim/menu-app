import getTextFromRegexHelper from "./getTextFromRegexHelper";
export default function getSubNameHelper(subName) {
  const [text, separator, separatorIndex] = getTextFromRegexHelper(
    subName,
    ["*", "&"],
    ["/", "-"]
  );

  subName = text.split("-").join(" ");
  if (separatorIndex && separator === "&") {
    subName =
      subName.substr(0, separatorIndex) +
      "-" +
      subName.substr(separatorIndex + 1, subName.length);
  }

  return subName;
}
