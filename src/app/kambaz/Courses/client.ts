import axios from "axios";
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const axiosWithCredentials = axios.create({withCredentials: true});
const COURSES_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;

export const fetchAllCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${COURSES_API}`);
  return data;
};

export const findMyCourses = async () => {
  const { data } = await axiosWithCredentials.get(`${USERS_API}/current/courses`);
  return data;
};

export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(`${USERS_API}/current/courses`, course);
  return data;
};

export const deleteCourse = async (id: string) => {
  const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${id}`);
  return data;
};

export const updateCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
  return data;
};

export const findModulesForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
  return response.data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/modules`, module);
  return response.data;
};

export const deleteModule = async (moduleId: string) => {
  const response = await axiosWithCredentials.delete(`${COURSES_API}/modules/${moduleId}`);
  return response.data;
};
export const updateModule = async (module: any) => {
  const response = await axiosWithCredentials.put(`${COURSES_API}/modules/${module._id}`, module);
  return response.data;
};
export const findAssignmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
  return response.data;
};
export const createAssignmentForCourse = async (courseId: string, assignment: any) => {
  const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
  return response.data;
};
export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(`${COURSES_API}/assignments/${assignmentId}`);
  return response.data;
};
export const updateAssignment = async (assignment: any) => {
  const response = await axiosWithCredentials.put(`${COURSES_API}/assignments/${assignment._id}`, assignment);
  return response.data;
};
export const enrollInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(`${USERS_API}/current/courses/${courseId}/enroll`);
  return response.data;
};
export const unenrollFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(`${USERS_API}/current/courses/${courseId}/unenroll`);
  return response.data;
};