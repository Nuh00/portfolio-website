import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className=" group   bg-gray-950 text-white h-[3rem] w-[8rem] rounded-lg flex items-center justify-center gap-2
          outline-none transition-all 
          focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
          disabled:opacity-50 disabled:cursor-not-allowed
          "
          disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all
            group-hover:opacity-100
            group-hover:translate-x-1
            group-hover:-translate-y-1
          "
          />{" "}
        </>
      )}
    </button>
  );
}

export default SubmitBtn;
