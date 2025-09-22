export default function Modules() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select id="wd-select-one-option">
        <option value="Publishall">Publish All</option>
        <option value="publishnone">Publish None</option>
        <option defaultValue="onemodule">Publish one module</option>
      </select>
      <button>+ Module</button>

      {/* Implement Collapse All button, View Progress button, etc. */}
      <ul id="wd-modules">
        <li className="wd-module">
          <div className="wd-title">Week 1</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">Introduction to the course</li>
                <li className="wd-content-item">
                  Learn what is Web Development
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 2</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn HTML fundamentals: elements, tags, and attributes.
                </li>
                <li className="wd-content-item">
                  Understand the structure of a web page.
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="wd-module">
          <div className="wd-title">Week 3</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">LEARNING OBJECTIVES</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to CSS for styling web pages.
                </li>
                <li className="wd-content-item">
                  Learn about selectors, properties, and values.
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
