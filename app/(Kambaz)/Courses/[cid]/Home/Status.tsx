export default function CourseStatus() {
  return (
    <div id="wd-course-status">
      <h2>Course Status</h2>
      <button>Unpublish</button> <button>Publish</button>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "8px",
        }}
      >
        <button>Import Exisiting Content</button>
        <button>Import from Commons</button>
        <button>Choose home page</button>
        <button>View Course Stream</button>
        <button>New Announcement</button>
        <button>New Analytics</button>
        <button>View Course Notifications</button>
      </div>
    </div>
  );
}
