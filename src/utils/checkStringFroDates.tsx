export function checkStringForDates(input: string) {
  let dates = input
    .replace(/(\r\n|\n|\r)/gm, "")
    .match(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/g);

  return dates === null ? "" : dates.toString();
}
