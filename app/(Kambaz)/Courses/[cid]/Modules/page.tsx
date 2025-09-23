export default function Modules() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select id="wd-select-one-option">
        <option value="Publishall">Publish All</option>
        <option value="publishnone">Publish None</option>
        <option defaultValue="onemodule">Publish One Module</option>
      </select>
      <button>+ Module</button>

      <ul id="wd-modules">
        {/* Module 1 */}
        <li className="wd-module">
          <div className="wd-title">
            Module 1: Introduction to Web Development
          </div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Week 1</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Understand the purpose and scope of web development
                </li>
                <li className="wd-content-item">
                  Overview of tools, browsers, and environments used in web
                  development
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Week 2</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn HTML fundamentals: elements, tags, and attributes
                </li>
                <li className="wd-content-item">
                  Understand the structure of a web page
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Module 2 */}
        <li className="wd-module">
          <div className="wd-title">Module 2: Styling with CSS</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Week 3</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Introduction to CSS: selectors, properties, and values
                </li>
                <li className="wd-content-item">
                  Understand the box model: margin, padding, border
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Week 4</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn layout techniques: flexbox and grid
                </li>
                <li className="wd-content-item">
                  Apply responsive design principles using media queries
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Module 3 */}
        <li className="wd-module">
          <div className="wd-title">Module 3: JavaScript Basics</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Week 5</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Understand variables, data types, and operators in JS
                </li>
                <li className="wd-content-item">
                  Explore functions, conditionals, and loops
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Week 6</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Learn DOM manipulation: selecting and updating elements
                </li>
                <li className="wd-content-item">
                  Handle events and event listeners in JS
                </li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Module 4 */}
        <li className="wd-module">
          <div className="wd-title">Module 4: Advanced JS & Interactivity</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Week 7</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Work with arrays and objects in JavaScript
                </li>
                <li className="wd-content-item">
                  Introduction to JSON and fetching data from APIs
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Week 8</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Create interactive forms and handle user input
                </li>
                <li className="wd-content-item">Form validation using JS</li>
              </ul>
            </li>
          </ul>
        </li>

        {/* Module 5 */}
        <li className="wd-module">
          <div className="wd-title">Module 5: Putting It All Together</div>
          <ul className="wd-lessons">
            <li className="wd-lesson">
              <span className="wd-title">Week 9</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Combine HTML, CSS, and JS to build a small web project
                </li>
                <li className="wd-content-item">
                  Debugging and testing your project
                </li>
              </ul>
            </li>
            <li className="wd-lesson">
              <span className="wd-title">Week 10</span>
              <ul className="wd-content">
                <li className="wd-content-item">
                  Finalize project and prepare a presentation
                </li>
                <li className="wd-content-item">
                  Learn deployment basics for your web application
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}
