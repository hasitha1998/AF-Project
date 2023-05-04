import React, { useState } from "react";

const AdminLogin = () => {
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  let emailregext =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let passwordregext = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{5,}$/;

  // Email Validation
  const checkEmail = () => {
    let email = document.getElementById("email").value;
    if (emailregext.test(email)) {
      setEmailError("");
    } else {
      setEmailError("Please Enter valid Email");
    }
  };

  // Password Validation
  const checkPassword = () => {
    let password = document.getElementById("password").value;
    if (passwordregext.test(password)) {
      setPasswordError("");
    } else {
      setPasswordError("Plese Enter Valid Password");
    }
  };

  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 px-6">
      <div class="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          class="mx-auto h-20 w-auto"
          src="https://www.svgrepo.com/show/301692/login.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Welcome Back Admin
        </h2>
      </div>

      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form>
            <div>
              <label
                for="email"
                class="block text-sm font-medium leading-5  text-gray-700"
              >
                Email address
              </label>
              <div class="mt-1 relative rounded-md shadow-sm">
                <input
                  id="email"
                  name="email"
                  placeholder="user@example.com"
                  type="email"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={() => {
                    checkEmail();
                  }}
                />
                <span className="text-red-500 text-sm">{emailError}</span>
                <div class="hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg
                    class="h-5 w-5 text-red-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <label
                for="password"
                class="block text-sm font-medium leading-5 text-gray-700"
              >
                Password
              </label>
              <div class="mt-1 rounded-md shadow-sm">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required=""
                  placeholder="***********"
                  class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  onChange={() => {
                    checkPassword();
                  }}
                />
                <span className="text-red-500 text-sm">{passwordError}</span>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember"
                  type="checkbox"
                  value="1"
                  class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                />
                <label
                  for="remember_me"
                  class="ml-2 block text-sm leading-5 text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div class="text-sm leading-5">
                <a
                  href="#"
                  class="font-medium text-blue-500 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div class="mt-6">
              <span class="block w-full rounded-md shadow-sm">
                <button
                  type="submit"
                  class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                >
                  Sign in
                </button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
