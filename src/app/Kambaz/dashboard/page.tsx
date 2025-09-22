import Link from "next/link";
import Image from "next/image";
export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <h2 id="wd-dashboard-published">Published Courses</h2>
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course1">
                <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link">
                        <Image src="/images/fsd.png" alt="HTML5" width={200} height={150} />
                    <div>
                        <h3>cs101 React JS</h3>
                        <p className="wd-dashboard-course-title">Full Stack Development</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div>
            <div className="wd-dashboard-course2">
                <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link">
                    <Image src="/images/ds.jpeg" alt="HTML5" width={200} height={150} />
                    <div>
                        <h3>ds201 React JS</h3>
                        <p className="wd-dashboard-course-title">Data Science</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div>
            <div className="wd-dashboard-course3">
                <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link">
                    <Image src="/images/cc.jpeg" alt="HTML5" width={200} height={150} />
                    <div>
                        <h3>cc301 React JS</h3>
                        <p className="wd-dashboard-course-title">Cloud Computing</p>
                        <button>Go</button>
                    </div>
                </Link>
            </div>
            <div className="wd-dashboard-course3">
                <Link href="/kambaz/courses/cs101/home" className="wd-dashboard-course-link">
                    <Image src="/images/pdp.jpg" alt="HTML5" width={200} height={150} />
                    <div>
                        <h3>cs401 PDP</h3>
                        <p className="wd-dashboard-course-title">Programming Design Paradigm</p>
                        <button>Go</button>
                    </div>
                  </Link>  
        </div>
        </div>
    </div>
    );
}