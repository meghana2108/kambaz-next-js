export default function Assignmenteditor() {
    return (
        <div id="wd-assignment-editor">
            <h3>Assignment Title</h3>
            <input id="wd-assignment-name" value="A1 - ENV+HTML" /><br/> <br/>
            <textarea id="wd-description" rows={10} cols={50} >
                The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.            
            </textarea><br/> <br/>
            <div id="wd-assignment-editors" >
            <div id="wd-assignment-points" >
                <label htmlFor="wd-points">Points : </label>
                <input type="number" id="wd-points" defaultValue={100} />
            </div>
            <br />
            <div id="wd-assignment-groups" >
                Group : <select defaultValue="Assignments"> 
                    <option value="Assignments">Assignments</option>
                    <option value="Quizzes">Quizzes</option>
                    <option value="Exams">Exams</option>
                    <option value="Projects">Projects</option>
                </select>
            </div>
            <br />
            <div id="wd-assignment-display-grade-as" >
                Display Grade As : <select defaultValue="Percentage"> 
                    <option value="Percentage">Percentage</option>
                    <option value="Points">Points</option>
                </select>
            </div>
            <br />
            <div id="wd-assignment-submission-type">
                Submission Type : <select defaultValue="Online">
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                </select>
            </div>
            <br />
            <div id="wd-assignment-online-entry-options" style={{ display: "flex", flexDirection: "column" }}>
                <h3>Online Entry Options</h3>
                <label>
                    <input type="checkbox" id="wd-assignment-text-entry" />
                    <label htmlFor="wd-assignment-text-entry">Text Entry</label>
                </label>
                <label>
                    <input type="checkbox" id="wd-assignment-website-url" />
                    <label htmlFor="wd-assignment-website-url">Website URL</label>
                </label>
                <label>
                    <input type="checkbox" id="wd-assignment-media-recording" />
                    <label htmlFor="wd-assignment-media-recording">Media Recording</label>
                </label>
                <label>
                    <input type="checkbox" id="wd-assignment-student-annotation" />
                    <label htmlFor="wd-assignment-student-annotation">Student Annotations</label>
                </label>
                <label>
                    <input type="checkbox" id="wd-assignment-file-upload" />
                    <label htmlFor="wd-assignment-file-upload">File Upload</label>
                </label>
            </div>
            <br />
            <div id="wd-assignment-assign-to">
                Assign to : <input type="text" id="wd-assignment-assign-to" placeholder="Everyone" />
            </div>
            <br />
            <div id="wd-assignment-due-date">
                Due Date : <input type="date" id="wd-assignment-due-date" defaultValue={"2025-09-22"}/>
            </div>
            <br />
            <div id="wd-assignment-available-from">
                Available From : <input type="date" id="wd-assignment-available-from" defaultValue={"2025-09-08"}/>
            </div>
            <br />
            <div id="wd-assignment-available-until">
                Available Until : <input type="date" id="wd-assignment-available-until" defaultValue={"2025-09-22"}/>
            </div>
            <br />
            <button id="wd-assignment-save">Save</button>
            <button id="wd-assignment-cancel">Cancel</button>    
        </div>
        </div>
    );
}
