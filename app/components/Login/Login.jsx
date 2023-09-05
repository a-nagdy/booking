"use client";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingSpinner from "../Loading/LoadingSpinner";
const Login = ({ sessionRole }) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });
  async function onSubmit(values) {
    setLoading(true);
    const status = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: `/dashboard/${sessionRole}/orders`,
    });
    if (status.error) {
      setError(status.error);
      router.refresh();
      setLoading(false);
      return;
    }
    if (status.ok) {
      setLoading(true);
      router.push(status.url);
    }
  }
  return (
    <>
      {loading && <LoadingSpinner />}
      <div className="flex h-screen w-screen items-center overflow-hidden px-2">
        <div className="relative flex w-96 flex-col space-y-5 rounded-lg border bg-white px-5 py-10 shadow-xl sm:mx-auto">
          <div className="-z-10 absolute top-4 left-1/2 h-full w-5/6 -translate-x-1/2 rounded-lg bg-blue-600 sm:-right-10 sm:top-auto sm:left-auto sm:w-full sm:translate-x-0"></div>
          <div className="mx-auto mb-2 space-y-3">
            <h1 className="text-center text-3xl font-bold text-gray-700">
              Sign in
            </h1>
            <p className="text-gray-500">Sign in to access your account</p>
          </div>

          <form
            onSubmit={formik.handleSubmit}
            className="flex flex-col justify-center gap-4"
          >
            <div className="relative mt-2 w-full">
              <input
                type="text"
                id="email"
                className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder="Your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              <label
                htmlFor="email"
                className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
              >
                {" "}
                Enter Your Email{" "}
              </label>
              {formik.errors.email && formik.touched.email ? (
                <div className="text-rose-500 text-center m-4">
                  {formik.errors.email}
                </div>
              ) : (
                <></>
              )}
            </div>

            <div>
              <div className="relative mt-2 w-full">
                <input
                  type="text"
                  id="password"
                  className="border-1 peer block w-full appearance-none rounded-lg border border-gray-300 bg-transparent px-2.5 pt-4 pb-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <label
                  htmlFor="password"
                  className="origin-[0] peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 absolute left-1 top-2 z-10 -translate-y-4 scale-75 transform cursor-text select-none bg-white px-2 text-sm text-gray-500 duration-300"
                >
                  Enter Your Password
                </label>
                {formik.errors.password && formik.touched.password ? (
                  <div className="text-rose-500 text-center">
                    {formik.errors.password}
                  </div>
                ) : (
                  <></>
                )}
                {error && (
                  <div className="text-rose-500 text-center normal-case my-4 font-sans">
                    {error}
                  </div>
                )}
              </div>
            </div>
            <div className="flex w-full items-center">
              <button
                type="submit"
                className="shrink-0 inline-block w-36 rounded-lg bg-blue-600 py-3 font-bold text-white"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
