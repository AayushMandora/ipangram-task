import { useLocation } from "react-router-dom";
interface EmployeeData {
  firstName: string;
  lastName: string;
  email: string;
  department: {
    departmentName: string;
    categoryName: string;
    location: string;
    salary: string;
  };
}

const EmployeeDashboard = () => {
  const location = useLocation();
  // In a real application, this would be fetched from an API
  const employeeData: EmployeeData = location.state.user;

  return (
    <div className="container mx-auto py-10 px-6">
      <h1 className="text-2xl font-bold mb-6">
        Welcome, {employeeData.firstName}!
      </h1>

      <div className="grid gap-6">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Your Profile</h2>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">Name</dt>
              <dd className="text-lg">
                {employeeData.firstName} {employeeData.lastName}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="text-lg">{employeeData.email}</dd>
            </div>
          </dl>
        </div>

        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Department Information</h2>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-sm font-medium text-gray-500">
                Department Name
              </dt>
              <dd className="text-lg">
                {employeeData.department.departmentName}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Category</dt>
              <dd className="text-lg">
                {employeeData.department.categoryName}
              </dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Location</dt>
              <dd className="text-lg">{employeeData.department.location}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Salary</dt>
              <dd className="text-lg">${employeeData.department.salary}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
