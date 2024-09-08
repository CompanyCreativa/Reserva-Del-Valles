import React from "react";

function Input({ label, type, name, value, onChange }) {
  return (
    <div className="flex flex-col gap-2 items-start  w-full">
      <label htmlFor="">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded-lg bg-[#72B4A0]/30 w-full py-2 px-2 box-border"
        required
      />
    </div>
  );
}

export default Input;
