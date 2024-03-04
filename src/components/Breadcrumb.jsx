import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const page = location.pathname.split("/").at(-1);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <Link to="" className="text-l font-bold">
            {page ? page : "Dashboard"}
          </Link>
        </div>

        <div className="flex justify-start items-center gap-x-1">
          <Link to="" className="text-l font-bold">
            Home
          </Link>
          <span>/</span>
          <Link to="" className="text-l font-bold">
            {page ? page : "Dashboard"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
