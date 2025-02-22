import React, { useState } from "react";

const categories = ["HR", "IT", "Sales", "Product", "Marketing"];

const ManagerPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [departments, setDepartments] = useState([
    {
      id: 1,
      departmentName: "Google IT Solutions",
      categoryName: "IT",
      location: "Ahmedabad",
      salary: "75000",
      employees: ["John Doe", "Jane Smith"],
    },
  ]);
  const [newDepartment, setNewDepartment] = useState({
    departmentName: "",
    categoryName: "",
    location: "",
    salary: "",
    employees: [],
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewDepartment((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDepartment = async () => {
    try {
      const response = await fetch("http://localhost:3000/department", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newDepartment),
      });
    } catch (error) {
      console.log(error);
    }
    setDepartments((prev) => [
      ...prev,
      { id: prev.length + 1, ...newDepartment, employees: [] },
    ]);
    setNewDepartment({
      departmentName: "",
      categoryName: "",
      location: "",
      salary: "",
      employees: [],
    });
    setIsModalOpen(false);
  };

  const itemsPerPage = 5;
  const totalPages = Math.ceil(departments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDepartments = departments.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Departments</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Add Department
        </button>
      </div>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Department Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Location</th>
            <th className="border p-2">Salary</th>
            <th className="border p-2">Employees</th>
          </tr>
        </thead>
        <tbody>
          {currentDepartments.map((dept) => (
            <tr key={dept.id} className="text-center">
              <td className="border p-2">{dept.departmentName}</td>
              <td className="border p-2">{dept.categoryName}</td>
              <td className="border p-2">{dept.location}</td>
              <td className="border p-2">${dept.salary}</td>
              <td className="border p-2">{dept.employees.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center space-x-2 mt-4">
        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 border rounded disabled:opacity-50"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50">
          <div className="bg-white p-12 rounded-xl shadow-lg w-[50%]">
            <h2 className="text-xl font-bold mb-4">Add New Department</h2>
            <input
              type="text"
              name="departmentName"
              placeholder="Department Name"
              value={newDepartment.departmentName}
              onChange={handleInputChange}
              className="border p-2 w-full mb-2 rounded-xl"
            />
            <select
              name="categoryName"
              value={newDepartment.categoryName}
              onChange={handleInputChange}
              className="border p-2 w-full mb-2 rounded-xl"
            >
              <option value="">Select Category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={newDepartment.location}
              onChange={handleInputChange}
              className="border p-2 w-full mb-2 rounded-xl"
            />
            <input
              type="number"
              name="salary"
              placeholder="Salary"
              value={newDepartment.salary}
              onChange={handleInputChange}
              className="border p-2 w-full mb-2 rounded-xl"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddDepartment}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagerPage;
