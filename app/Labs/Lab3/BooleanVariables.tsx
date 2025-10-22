export default function BooleanVariables() {
  const numberVariable: number = 123;
  const floatingPointNumber: number = 234.345;

  const true1: boolean = true;
  const false1: boolean = false;

  const false2: boolean = true1 && false1;
  const true2: boolean = true1 || false1;
  const true3: boolean = !false2;

  const true4: boolean = numberVariable === 123; // always use === not ==
  const true5: boolean = floatingPointNumber !== 321.432;
  const false3: boolean = numberVariable < 100;

  return (
    <div id="wd-boolean-variables">
      <h4>Boolean Variables</h4>
      true1 = {true1 + ""} <br />
      false1 = {false1 + ""} <br />
      false2 = {false2 + ""} <br />
      true2 = {true2 + ""} <br />
      true3 = {true3 + ""} <br />
      true4 = {true4 + ""} <br />
      true5 = {true5 + ""} <br />
      false3 = {false3 + ""} <hr />
    </div>
  );
}
