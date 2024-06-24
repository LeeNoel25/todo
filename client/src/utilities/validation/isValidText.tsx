export default function isValidText(text: string) {
  const regex = /^[a-zA-Z0-9 .,!?'"]+$/;
  return regex.test(text);
}
