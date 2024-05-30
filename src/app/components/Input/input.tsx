'use client'
import React from "react";

interface InputProps {
  placeholder?: string;
  onValueChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string; 
  id?: string;
  className? : string;
  name: string;
}

const Input: React.FC<InputProps> = ({ placeholder, onValueChange, type = "text", id, className, name }) => {
  return (
    <>
    <div className="w-full">
      <p className="text-xs mb-1 pl-3">
        {name}
      </p>
      <input
        className={`bg-main-bg border-[1px] focus-visible:border-[1px] p-2 px-4 rounded-full border-black ${className? className : ''}`}
        onChange={(e) => onValueChange(e)} 
        placeholder={placeholder}
        type={type}
        id={id}
      />
    </div>
      
    </>
    
  );
};

export default Input;