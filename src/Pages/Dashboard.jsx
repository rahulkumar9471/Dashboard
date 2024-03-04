import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Card from "../components/Card"; 

const Dashboard = () => {

  return (
    <>
      <div className="w-full">
        <div className="px-8 py-6">
          <Breadcrumb />
          <div className="mt-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
