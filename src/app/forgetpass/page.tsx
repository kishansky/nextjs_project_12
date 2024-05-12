"use client";
import Link from "next/link";
import { useState } from "react";
export default function Forgetpassword() {
  const [next, setNext] = useState(true);
  return (
    <main className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="bg-white max-w-sm h-auto border-2 rounded-md p-5 md:mt-0 sm:max-w-md xl:p-5">
        <div className="text-xl font-bold text-gray-900">
          Create new password
        </div>
        {next ? <Conform /> : <Change />}

        {next ? (
          <div className="flex py-3">
            <div className="flex-1 mx-1">
              <Link href="/login">
                <button className="text-gray-900 p-2 w-full bg-slate-400 rounded-md hover:bg-gray-500 hover:text-white transition-all">
                  Cancel
                </button>
              </Link>
            </div>
            <div className="flex-1 mx-1">
              <button
                className="bg-blue-600 p-2 text-white w-full rounded-md hover:bg-blue-700 "
                onClick={() => setNext(false)}
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="flex py-3">
            <div className="flex-1">
              <Link href="/login">
                <button
                  className="bg-blue-600 p-2 text-white w-full rounded-md hover:bg-blue-700 "
                  onClick={() => setNext(false)}
                >
                  Change Password
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

const Conform = () => {
  return (
    <div>
      <div className="py-3">
        <label className="text-gray-900 text-sm font-medium">
          Email 
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:border-blue-400 rounded-md caret-blue-400 text-blue-400 pt-1  w-full"
        />
      </div>
      <div className="py-3">
        <label className="text-gray-900 text-sm font-medium">Otp</label>
        <input
          type="text"
          className="bg-gray-100 border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:border-blue-400 rounded-md caret-blue-400 text-blue-400 pt-1 w-full"
        />
      </div>
    </div>
  );
};

const Change = () => {
  return (
    <div>
      <div className="py-3">
        <label className="text-gray-900 text-sm font-medium">
          New password
        </label>
        <input
          type="password"
          className="bg-gray-50 border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:border-blue-400 rounded-md caret-blue-400 text-blue-400 pt-1  w-full"
          placeholder="••••••••"
        />
      </div>
      <div className="py-3">
        <label className="text-gray-900 text-sm font-medium">Conform password</label>
        <input
          type="text"
          className="bg-gray-100 border border-gray-400 p-2.5 focus:outline-none focus:ring-1 focus:border-blue-400 rounded-md caret-blue-400 text-blue-400 pt-1 w-full"
          placeholder="••••••••"
        />
      </div>
    </div>
  );
};
