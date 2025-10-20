export default function VariableAndConstants () {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    return (
        <div id="wd-variables-and-constants">
            <h3>Variables and Constants</h3>
            functionScoped = {functionScoped} <br/>
            blockScoped = {blockScoped} <br/>
            Constant1 = {constant1} <hr/>
        </div>
    );
}