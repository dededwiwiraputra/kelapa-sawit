"use client";

import React from "react";
import Link from "next/link";

const CustomButton = ({ label, href, onClick }) => {
  return (
    <Link href={href}>
      <div>
        <button
          type="button"
          className="w-full active-button font-bold text-lg text-primary py-2 px-4 rounded-full"
          onClick={onClick}
        >
          {label}
        </button>
      </div>
    </Link>
  );
};

export default CustomButton;
