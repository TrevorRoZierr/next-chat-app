"use client";

import { useRef } from "react";
import { postData } from "../action";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      action={async (formData) => {
        await postData(formData);
        formRef.current?.reset();
      }}
      ref={formRef}
      className="p-6 fixed bottom-0 left-0 w-full bg-yellow-100"
    >
      <div className="flex">
        <input
          type="text"
          name="message"
          placeholder="Type your manifestation..."
          className="flex-grow py-2 px-4 outline-none bg-yellow-100 placeholder-black"
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-green-900 hover:bg-green-500 hover:text-black duration-100 font-semibold text-yellow-100 py-2 px-4 rounded-full"
        >
          Send
        </button>
      </div>
    </form>
  );
}
