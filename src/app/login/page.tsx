"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { setCookie } from 'cookies-next';

export default function Login() {
  const router = useRouter();

  const [udata, setUdata] = useState({
    user: "",
    password: "",
  });
  const [err, setErr] = useState("");

  const sendToBackend = () => {
    if (udata.user == "" || udata.password == "") {
      setErr("All field are Required.");
      return;
    } else {
      fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(udata),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data)
          if (data.error) {
            toast(data.error, { type: "error" });
          } else {
            toast("Login Successfully", { type: "success" });
            setCookie("auth", true);
            
            router.push("/");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="bg-white max-w-sm h-auto border-2 rounded-md p-5 md:mt-0 sm:max-w-md xl:p-5">
        <div className="text-xl font-bold text-gray-900">
          Sign in to your account
        </div>
        <div className="py-3">
          <label className="text-gray-900 text-sm font-medium">Email</label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:border-blue-400 rounded-md caret-blue-400 text-blue-400 pt-1  w-full"
            onChange={(e) => setUdata({ ...udata, user: e.target.value })}
            onFocus={() => setErr("")}
          />
        </div>
        <div className="py-3">
          <label className="text-gray-900 text-sm font-medium">Password</label>
          <input
            type="password"
            className="bg-gray-100 border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:border-blue-400 rounded-md caret-blue-400 text-blue-400 pt-1 w-full"
            placeholder="••••••••"
            onChange={(e) => setUdata({ ...udata, password: e.target.value })}
            onFocus={() => setErr("")}
          />
        </div>
        <div className="flex py-3 items-center justify-between">
          <div className="flex items-center h-5">
            <input type="checkbox" />
            <label className="text-gray-600 ml-3 text-sm font-medium">
              Remember password
            </label>
          </div>
          <div className="flex">
            <p className="text-blue-500 ps-2 text-sm font-medium hover:text-blue-600">
              <Link href="/forgetpass">Forget password?</Link>
            </p>
          </div>
        </div>
        {err ? <div className="text-red-500">{err}</div> : null}
        <div className="flex py-3 ">
          <button
            className="bg-blue-600 p-2 text-white w-full rounded-md hover:bg-blue-700 hover:mx-1 transition-all"
            onClick={() => {
              sendToBackend();
            }}
          >
            Login to your account
          </button>
        </div>
        <div className="py-3 text-center text-sm font-medium text-blue-500 ">
          <Link href="/signup" className="hover:text-blue-600">
            Dont have an account?
          </Link>
        </div>
      </div>
    </main>
  );
}
