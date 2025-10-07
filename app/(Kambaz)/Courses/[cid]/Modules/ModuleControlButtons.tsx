import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      <GreenCheckmark />
      <span className="mx-1">+</span> {/* This adds the plus between */}
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
