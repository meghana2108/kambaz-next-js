export default function AssignmentsPage() {
    return (
        <div id="wd-assignments">
            <input type="text" placeholder="Search assignments" />
            <button id="wd-assignments-group"> + Group</button>
            <button id="wd-assignments-assignment"> + Assignment</button>
            <h3 id="wd-assignments-title"> Assignments (40% of Total)  <button>+</button></h3>
            <div id="wd-assignments-list">
                <ul>
                    <li className="wd-assignment-list-item">
                        <a href="/courses/cs101/assignments/1" className="wd-assignment-link">A1 - ENV+HTML</a>
                        <p>Due 22 Sep at 23:59 | -/100 pts</p>
                    </li>
                    <li className="wd-assignment-list-item">
                        <a href="/courses/cs101/assignments/1" className="wd-assignment-link">A2 - CSS+BOOTSTRAP</a>
                        <p>Due 06 Oct at 23:59 | -/100 pts</p>
                    </li>
                    <li className="wd-assignment-list-item">
                        <a href="/courses/cs101/assignments/1" className="wd-assignment-link">A3 - JS+REACT</a>
                        <p>Due 20 Oct at 23:59 | -/100 pts</p>
                    </li>
                </ul>
            </div>
            <h3 id="wd-quiz-title"> Quizzes   <button>+</button></h3>
            <div id="wd-quiz">
                <ul>
                        <li className="wd-quiz-list-item">
                        <a href="/courses/cs101/assignments/1" className="wd-quiz-link">Q1</a>
                        <p>Not available until 22 Sep at 0:00 | Due 29 Sep at 23:59 | -/29 pts</p>
                    </li>
                    <li className="wd-quiz-list-item">
                        <a href="/courses/cs101/assignments/1" className="wd-quiz-link">Q2</a>
                        <p>Not available until 29 Sep at 0:00 | Due 06 Oct at 23:59 | -/29 pts</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
