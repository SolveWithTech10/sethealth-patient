import React, { ReactNode } from "react";

export function PrimaryButton({children, className, ...props}:{children:ReactNode, className?:string}) {
    const styles = `px-5 py-2 bg-indigo-900 hover:bg-indigo-950 text-white rounded-full ${className}`
  return (
    <button type="button" className={styles} {...props}>
      {children}
    </button>
  );
}
