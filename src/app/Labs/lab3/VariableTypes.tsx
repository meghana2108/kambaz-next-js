export default function VariableTypes () {
    let number = 123;
    let floating = 234.567;
    let string = "Hello World";
    let boolean = true;
    let isnumber = typeof number;
    let isfloating = typeof floating;
    let isstring = typeof string;
    let isboolean = typeof boolean;
    return (
        <div id="wd-variable-types">
            <h3>Variable Types</h3>
            number = {number};<br/>
            floating = {floating};<br/>
            string = {string};<br/>
            boolean = {boolean};<br/>
            isnumber = {isnumber};<br/>
            isstring = {isstring};<br/>
            isfloating = {isfloating};<br/>
            isboolean = {isboolean+ " "};<hr/>
        </div>
    );
}