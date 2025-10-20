import { FaEllipsisV } from "react-icons/fa";
import GreenCheckmark from "./GreenCheckmark";
export default function LessonControlButtons () {
    return (
        <div className="float-end">
            <GreenCheckmark/>
            <FaEllipsisV className="fs-4"/>
        </div>
    );
}