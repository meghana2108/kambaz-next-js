export default function AddingAndRemovingToFromArrays() {
  const numberArray1: number[] = [1245];
  const stringArray1: string[] = ["string1", "string2"];
  const todoArray = [<li key={1}>Buy milk</li>, <li key={2}>Feed the pets</li>];

  numberArray1.push(6);
  stringArray1.push("string3");
  todoArray.push(<li key={3}>Walk the dogs</li>);

  numberArray1.splice(2, 1);
  stringArray1.splice(1, 1);

  return (
    <div id="wd-adding-removing-from-arrays">
      <h4>Add/remove to/from arrays</h4>
      numberArray1 = {numberArray1.join("")} <br />
      stringArray1 = {stringArray1.join("")} <br />
      Todo list:
      <ol>{todoArray}</ol>
      <hr />
    </div>
  );
}
