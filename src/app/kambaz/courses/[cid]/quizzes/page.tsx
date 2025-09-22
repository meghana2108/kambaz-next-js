import Link from "next/link";
export default function Quizzes() {
    return (
        <div>
            <h1>Quizzes</h1>
            <h3 id="wd-quiz-title"> Quizzes   <button>+</button></h3>
            <div id="wd-quiz">
                <ul>
                        <li className="wd-quiz-list-item">
                        <Link href="/kambaz/courses/cs101/assignments/1" className="wd-quiz-link">Q1</Link>
                        <p>Not available until 22 Sep at 0:00 | Due 29 Sep at 23:59 | -/29 pts</p>
                    </li>
                    <li className="wd-quiz-list-item">
                        <Link href="/kambaz/courses/cs101/assignments/2" className="wd-quiz-link">Q2</Link>
                        <p>Not available until 29 Sep at 0:00 | Due 06 Oct at 23:59 | -/29 pts</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}
