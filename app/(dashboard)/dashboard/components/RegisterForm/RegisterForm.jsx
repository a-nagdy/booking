"use client";

import login_validate from "@/app/utils/validate";
import { useFormik } from "formik";
import { onSubmit } from "../../register/page";

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confPassword: "",
      role: "",
    },
    validate: login_validate,
    onSubmit: onSubmit,
  });

  return (
    <section className="bg-gray-50 dark:bg-gray-900 flex justify-center items-center w-full flex-col gap-10 font-sans">
      <form
        className="flex justify-center items-center flex-col gap-5 bg-slate-300 px-[20rem] py-16 rounded-md"
        onSubmit={formik.handleSubmit}
      >
        <h1>Create An Account </h1>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            className="border border-gray-400 rounded-md px-2 py-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName && (
            <span className="text-red-500">{formik.errors.firstName}</span>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="border border-gray-400 rounded-md px-2 py-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName && (
            <span className="text-red-500">{formik.errors.lastName}</span>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-400 rounded-md px-2 py-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <span className="text-red-500">{formik.errors.email}</span>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="password">password </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-400 rounded-md px-2 py-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <span className="text-red-500 break-words w-[13rem] text-center">
              {formik.errors.password}
            </span>
          )}
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label htmlFor="confPassword">confirm password</label>
          <input
            type="password"
            name="confPassword"
            id="confPassword"
            className="border border-gray-400 rounded-md px-2 py-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confPassword}
          />
          {formik.touched.confPassword && formik.errors.confPassword && (
            <span className="text-red-500">{formik.errors.confPassword}</span>
          )}
        </div>
        <div className="flex justify-center items-center gap-4">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            className="border border-gray-400 rounded-md px-2 py-1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.role}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
          </select>
        </div>
        <button type="submit" disabled={formik.isSubmitting}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
