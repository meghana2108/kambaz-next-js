export default function modules() {
    return (
        <div id="wd-modules" >
            <div style={{ display: "flex", alignItems: "flex-start" }}>
                <button>Collapse All</button>
                <button>View Progress</button>
                <button>Publish All</button>
                <button>+ Module</button>
            </div>
            <ul>
                <li className="wd-module">
                    <div className="wd-title"> Week 1: Lecture 1 - Building React User Interfaces with HTML, Assignment 1, Setting Up the Development Environment, Introduction to HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson"> Learning Objectives</li>
                        <ul className="wd-content">
                            <li className="wd-content-item"> Introduction to course</li>
                            <li className="wd-content-item"> What is Web Development?</li>
                            <li className="wd-content-item"> Setting up the Development environment</li>
                            <li className="wd-content-item"> Creating react web applications</li>
                            <li className="wd-content-item"> Getting Started with Assignment 1</li>
                        </ul>
                    </ul>
                    <ul className="wd-reading"> 
                        <li className="wd-reading-title">Reading</li>
                        <ul className="wd-reading-list">
                            <li className="wd-reading-item">Full Stack Developer - Chapter 1 - Introduction</li>
                            <li className="wd-reading-item">Full Stack Developer - Chapter 2 - Creating a user</li>
                        </ul>
                    </ul>
                    <ul className="wd-slides"> 
                        <li className="wd-slides-title">Slides</li>
                        <ul className="wd-slides-list">
                            <li className="wd-slides-item">Introduction to Web Development</li>
                            <li className="wd-slides-item">Creating an HTTP server with Node.js</li>
                            <li className="wd-slides-item">Creating React Applications</li>
                        </ul>
                    </ul>
                </li>
            </ul>
            <ul>
                <li className="module">
                    <div className="wd-title"> Week 2:  Lecture 2 - Prototyping the React Kambaz User Interface with HTML</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson"> Learning Objectives</li>
                        <ul className="wd-content">
                            <li className="wd-content-item"> Learn how to create user interface with HTML</li>
                            <li className="wd-content-item"> Keep working on the assignment</li>
                            <li className="wd-content-item"> Deploy the assignment to Netlify</li>
                         </ul>
                        <li className="wd-lesson"> Slides</li>
                        <ul className="wd-content">
                            <li className="wd-slide-item"> Introduction to HTML and DOM</li>
                            <li className="wd-slide-item"> Formatting Web content with Headings and Paragraphs</li>
                            <li className="wd-slide-item"> Formatting content with Lists and Tables</li>
                         </ul>
                    </ul>
                </li>    
            </ul> 
            <ul>
                <li className="module">
                    <div className="wd-title"> Week 3:  Lecture 3 - Styling Web Pages with CSS and Bootstrap, Assignment 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson"> Learning Objectives</li>
                        <ul className="wd-content">
                            <li className="wd-content-item">Introduction to CSS</li>
                            <li className="wd-content-item">Selectors by tag ID, classes, and document structure</li>
                            <li className="wd-content-item">Styling color and Background color</li>
                            <li className="wd-content-item">Styling dimensions and positions</li>
                            <li className="wd-content-item">The box model - styling margins, borders, and paddings</li>
                        </ul>
                    </ul>
                </li>
            </ul>
        </div>
    );
}
