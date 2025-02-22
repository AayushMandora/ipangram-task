const URL = import.meta.env.VITE_URL;

const API_URL = `${URL}/department`;

interface Department {
  departmentName: string;
  categoryName: string;
  location: string;
  salary: string;
  employees: Array<string>;
}

// Add a new department
export const addDepartment = async (
  departmentData: Department
): Promise<Department> => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(departmentData),
    });
    if (!response.ok) throw new Error("Failed to add department");
    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

// Get all departments
export const getAllDepartments = async (): Promise<Department[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch departments");
    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

// Delete a department
export const deleteDepartment = async (
  id: string
): Promise<{ message: string }> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete department");
    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};

// Update a department
export const updateDepartment = async (
  id: string,
  updatedData: Partial<Department>
): Promise<Department> => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) throw new Error("Failed to update department");
    return await response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : String(error));
  }
};
