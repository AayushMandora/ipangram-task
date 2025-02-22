import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const URL = import.meta.env.VITE_URL;

interface SignupFormInputs {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gender: string;
  hobbies: string[];
  role: string;
}

const hobbiesList = ["Reading", "Sports", "Music", "Gaming", "Cooking"];

const SignupForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, watch, setValue } = useForm<SignupFormInputs>(
    {
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "male",
        hobbies: [],
        role: "employee",
      },
    }
  );

  async function onSubmit(values: SignupFormInputs) {
    setIsLoading(true);
    try {
      const response = await fetch(`${URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Signup failed");
      }

      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Sign Up
        </h2>
        <p className="text-sm text-center text-gray-600 mb-6">
          Create your account to get started
        </p>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 20,
              })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Must be 8-20 characters long with a mix of letters, numbers, and
              special characters.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <select
              {...register("gender", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hobbies
            </label>
            <div className="grid grid-cols-2 gap-2">
              {hobbiesList.map((hobby) => (
                <label key={hobby} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    value={hobby}
                    checked={watch("hobbies").includes(hobby)}
                    onChange={(e) => {
                      const selectedHobbies = watch("hobbies");
                      if (e.target.checked) {
                        setValue("hobbies", [...selectedHobbies, hobby]);
                      } else {
                        setValue(
                          "hobbies",
                          selectedHobbies.filter((h) => h !== hobby)
                        );
                      }
                    }}
                  />
                  <span>{hobby}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              {...register("role", { required: true })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="employee">Employee</option>
              <option value="manager">Manager</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 flex items-center justify-center"
            disabled={isLoading}
          >
            {isLoading && (
              <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            )}
            Sign Up
          </button>

          <p className="text-sm text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <a href="/" className="text-blue-600 hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
