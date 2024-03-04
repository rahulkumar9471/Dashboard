import React from "react";
import Breadcrumb from "../components/Breadcrumb";

const Setting = () => {
  return (
    <div className="w-full">
      <div className="px-8 py-6">
        <Breadcrumb />
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
             Profile
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;
