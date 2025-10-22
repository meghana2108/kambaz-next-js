export default function FindIndexFunction() {
  const numberArray1: number[] = [1, 2, 4, 5, 6];
  const stringArray1: string[] = ["string1", "string3"];

  const fourIndex: number = numberArray1.findIndex((a) => a === 4);
  const string3Index: number = stringArray1.findIndex((a) => a === "string3");

  return (
    <div id="wd-find-index-function">
      <h4>Find Index Function</h4>
      fourIndex = {fourIndex} <br />
      string3Index = {string3Index}
      <hr />
    </div>
  );
}
