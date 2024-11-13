import { MapPin, Search } from "lucide-react";
import React from "react";
import { PrimaryButton } from "./common/PrimaryButton";

export default function MultiSearchBar() {
  return (
    <div className="rounded-full px-3 py-2 bg-white max-w-[35rem] w-full mx-auto mt-8 flex items-center">
      <div className="w-2/5 flex items-center gap-1 ml-2">
        <MapPin className="h-4 w-4" />
        <input type="text" className="w-full outline-none" />
      </div>
      <div className="h-6 w-[2px] bg-slate-300 mx-3"></div>
      <div className="flex-1 flex items-center gap-1 mr-2">
        <Search className="h-4 w-4" />
        <input type="text" className="w-full outline-none" />
      </div>
      <PrimaryButton>Search</PrimaryButton>
    </div>
  );
}
