import { load } from "js-yaml";

export default async function getData() {
  const response = await fetch("/menu.yaml");
  const text = await response.text();
  const data = load(text);
  return data;
}
