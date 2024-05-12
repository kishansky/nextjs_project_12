"use client";
import Link from "next/link";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [sendotp, setSendotp] = useState(false);
  const [uotp, setUotp] = useState('');
  const [otp, setOtp] = useState('');

  const [udata, setUdata] = useState({
    user: "",
    password: "",
    cpassword: "",
  });
  const [err, setErr] = useState("");

  const sendToBackend = () => {
    setErr("Sending OTP...");
    if (udata.user == "" || udata.password == "" || udata.cpassword == "" ) {
      setErr("All field are Required.");
      return;
    } else {
      if (udata.password != udata.cpassword) {
        setErr("Password and Conform password must be same.");
        return;
      } else {
        fetch("http://localhost:3000/varify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(udata),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.massage);
            if (data.error) {
              toast(data.error, { type: "error" });
              setErr("");
            } else if (data.massage == "Code send to you email") {
              // console.log(data.userdata);
              setOtp(data.userdata);
              setErr('');
              setSendotp(true);
              toast(data.massage, { type: "success" });
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  };
  const sendToBackend2 = () => {
    // console.log(otp);
    if (uotp == '') {
      setErr("Please enter OTP.");
      return;
    } else if (uotp == otp) {
      fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(udata),
      }).then(res => res.json()).then(data => {
        // console.log(data);
        if (data.error) {
          toast(data.error, { type: "error" });
        } else if (data.massage == "User Registered Successfully.") {
          toast(data.massage, { type: "success" });
          localStorage.setItem("auth", data.token);
          router.push('/');
        }
      }).catch((error) => {
        console.error(error);
      });
      
    } else if (uotp != otp) {
      setErr("Incorrect OTP.");
      return;
    }
  }

  return (
    <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="bg-white max-w-sm h-auto border-2 rounded-md p-5 md:mt-0 sm:max-w-md xl:p-5">
        <div className="text-xl font-bold text-gray-900">
          Create new account
        </div>
        {sendotp ? <div></div> :<div>
        <div className="py-3">
          <label className="text-gray-900 text-sm font-medium">Email</label>
          <input
            type="email"
            className="bg-gray-50 border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:border-blue-400 rounded-md caret-blue-400 text-blue-400  pt-1  w-full"
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
        <div className="py-3">
          <label className="text-gray-900 text-sm font-medium">
            Conform Password
          </label>
          <input
            type="password"
            className="bg-gray-100 border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:border-blue-400 rounded-md caret-blue-400 text-blue-400 pt-1 w-full"
            placeholder="••••••••"
            onChange={(e) => setUdata({ ...udata, cpassword: e.target.value })}
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
        </div>
          </div>
        }
        {err ? <div className="text-red-500 font-bold">{err}</div> : null}
        {sendotp ? (
          <div>
            <div className="py-3">
              <label className="text-gray-900 text-sm font-medium">OTP</label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:border-blue-400 rounded-md caret-blue-400 text-blue-400  pt-1  w-full"
                onChange={(e) => setUotp(e.target.value)}
                onFocus={() => setErr("")}
              />
            </div>
            <div className="flex py-3 ">
              <button
                className="bg-blue-600 p-2 text-white w-full rounded-md hover:bg-blue-700 hover:mx-1 transition-all"
                onClick={() => {
                  sendToBackend2();
                }}
              >
                Varify OTP
              </button>
            </div>
          </div>
        ) : (
          <div className="flex py-3 ">
            <button
              className="bg-blue-600 p-2 text-white w-full rounded-md hover:bg-blue-700 hover:mx-1 transition-all"
              onClick={() => {
                sendToBackend();
              }}
            >
              Sign up
            </button>
          </div>
        )}
        <div className="py-3 text-center text-sm font-medium text-blue-500 ">
          <Link href="/login" className="hover:text-blue-600">
            Aleady have an account?
          </Link>
        </div>
      </div>
    </main>
  );
}
