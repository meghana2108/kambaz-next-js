export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <label htmlFor="wd-name">Description</label>
      <br />
      <textarea
        id="wd-description"
        defaultValue="Submit a link to the landing page of your Web application running on
        Vercel. The landing page should be the Kambaz application with a link to
        the Lab exercises. Lab 1 should be the landing page of the Lab exercises
        and should include the following: Your full name and section Links to
        each of the lab assignments Link to the Kambaz application Links to all
        relevant source code repositories The Kambaz application should include
        a link to navigate back to the landing page. "
      ></textarea>
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-select-one-option">Assignment Group:</label>
            </td>
            <td>
              <select id="wd-select-one-option">
                <option value="ASSIGNMENTS">Assignments</option>
                <option value="MODULES">Modules</option>
                <option value="FILES">Files</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-select-one-option">Display Grade as:</label>
            </td>
            <td>
              <select id="wd-select-one-option">
                <option value="PERCENTAGE">Percentage</option>
                <option value="GRADE">Grade</option>
                <option value="POINTS">Points</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-select-one-option">Submission Type:</label>
            </td>
            <td>
              <select id="wd-select-one-option">
                <option value="ONLINE">Online</option>
                <option value="OFFLINE">Offline</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd=select-one-option">
                {" "}
                Online entry options:
              </label>
              <br />
            </td>

            <td colSpan={2}>
              <input type="checkbox" id="wd-chkbox-comedy" />
              <label htmlFor="wd-chkbox-comedy">Text Entry</label>
              <br />
              <input type="checkbox" id="wd-chkbox-drama" />
              <label htmlFor="wd-chkbox-drama">Website URL</label>
              <br />
              <input type="checkbox" id="wd-chkbox-scifi" />
              <label htmlFor="wd-chkbox-scifi">Media Recordings</label>
              <br />
              <input type="checkbox" id="wd-chkbox-fantasy" />
              <label htmlFor="wd-chkbox-fantasy">Student Annotations</label>
              <br />
              <input type="checkbox" id="wd-chkbox-fantasy" />
              <label htmlFor="wd-chkbox-fantasy">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Assign to</label>
            </td>
            <td>
              <input id="wd-points" defaultValue="Everyone" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-text-fields-due">Due</label>
            </td>
            <td>
              <input id="wd-points" type="date" defaultValue="2025-09-21" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-text-fields-due">Available from</label>
            </td>
            <td>
              <input id="wd-points" type="date" defaultValue="2025-09-10" />
            </td>
          </tr>

          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-text-fields-due">Until</label>
            </td>
            <td>
              <input id="wd-points" type="date" defaultValue="2025-10-10" />
            </td>
          </tr>
        </tbody>
      </table>
      <button>Cancel</button>
      <button>Save</button>
    </div>
  );
}
