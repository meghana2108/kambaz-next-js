import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "react-bootstrap";
import { FaCircle, FaPlus } from "react-icons/fa";
import { RxCircleBackslash } from "react-icons/rx";
import GreenCheckmark from "./GreenCheckmark";
export default function ModulesControls () {
    return (
        <div id="wd-modules-controls" className="text-nowrap">
            <Button variant="danger" size="sm" className="me-1 float-end" id="wd-add-module-btn">
       <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
       Module
     </Button>
     <Dropdown className="float-end me-2">
       <DropdownToggle variant="secondary" size="sm" id="wd-publish-all-btn">
         <GreenCheckmark /> Publish All
       </DropdownToggle>
       <DropdownMenu>
         <DropdownItem id="wd-publish-all">
           <GreenCheckmark /> Publish All
         </DropdownItem>
         <DropdownItem id="wd-publish-all-modules-and-items">
           <GreenCheckmark /> Publish all modules and items
         </DropdownItem>
         <DropdownItem id="wd-publish-modules-only">
           <GreenCheckmark /> Publish modules only
         </DropdownItem>

                <DropdownItem id="wd-unpublish-all-modules-only">
                    <RxCircleBackslash /> Unpublish All Modules and Items
                </DropdownItem>
                <DropdownItem id="wd-upublish-modules-only">
                    <RxCircleBackslash /> Unpublish Modules Only
                </DropdownItem>
            </DropdownMenu>
            </Dropdown>
            <Button id="wd-view-progress" size="sm" className="me-2 float-end" variant="secondary">View Progress</Button>
            <Button id="wd-collapse-all" size="sm" className="me-2 float-end" variant="secondary">Collapse All</Button>
        </div>
    );
}