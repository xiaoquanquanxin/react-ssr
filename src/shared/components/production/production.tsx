import * as React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

function Production() {
  const location = useLocation();
  const data = [
    { name: "pierce", id: 34 },
    { name: "james", id: 23 },
  ];
  return (
    <div>
      {location.pathname === "/production" ? (
        <>
          <h2>Production</h2>
          <button>
            <Link to="add">AddProduction</Link>
          </button>
          <ul>
            {data.map((item) => {
              return (
                <li key={item.id}>
                  {item.name}|{item.id}|<Link to={`edit/${item.id}`}>编辑</Link>
                </li>
              );
            })}
          </ul>
        </>
      ) : (
        <Outlet key={2} />
      )}
    </div>
  );
}

export default Production;
