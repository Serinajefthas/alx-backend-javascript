export default function createReportObject(employeesList) {
  const allEmployess = {
    ...employeesList,
  };
  const getNumDepartments = (employees) => { // eslint-disable-line no-unused-vars
    return Object.keys(employees).length;
  };
  return {
    allEmployees, // eslint-disable-line no-unused-vars
    getNumDepartments,
  };
}
