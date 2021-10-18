import React, { useEffect, useState, useMemo, useCallback } from "react";
import { render } from "react-dom";

const companyData = [
  {
    id: "1",
    name: "Cisco",
    users: createUsers(420, "Cisco Coproration"),
  },
  {
    id: "2",
    name: "Epam",
    users: createUsers(1420, "Epam Coproration"),
  },
  {
    id: "3",
    name: "Mabbly",
    users: createUsers(14200, "Mabbly Coproration"),
  },
  {
    id: "4",
    name: "Google",
    users: createUsers(2420, "Google Coproration"),
  },
  {
    id: "5",
    name: "Netflix",
    users: createUsers(14300, "Netflix Coproration"),
  },
];

function createUsers(number, name) {
  const arr = [];
  for (let i = 0; i < number; i++) {
    arr[i] = {
      id: i,
      firstName: `first-name-${i}-${name}`,
      lastName: `last-name-${i}-${name}`,
    };
  }
  return arr;
}

function countUsers(organization) {
  let count = 0;
  for (let i = 0; i < organization.users.length; i++) {
    let iteration = 0;
    while (iteration < 1_000_000) {
      iteration += 1;
    }
    count += 1;
    // console.log("Count:", count);
  }
  return count;
}

function createData(data) {
  console.log(
    "++++++++CREATE DATA!!!!!!",
    data,
    "---",
    data && data.length !== 0
  );
  return data && data.length !== 0
    ? data.map((organization) => {
        const counter = countUsers(organization);
        return { counter, name: organization.name };
      })
    : [];
}

function renderData(data) {
  // const newData = useMemo(() => createData(data), [data]);

  // console.log("NEW DATA: ", newData);
  // const result = data();
  // const result = newData(data);

  console.log("NEW DATA: ", data);
  return data.map((organization, idx) => {
    return (
      <div key={idx}>
        <span>{organization.name}</span> ----
        <span>{organization.counter}</span>
      </div>
    );
  });
}

function Todos() {
  const [data, setData] = useState([]);

  const onHandleChecked = (id) => {
    const index = data.findIndex((i) => i.id === id);
    let copyData = [...data];
    copyData[index].completed = !data[index].completed;
    setData(copyData);
  };

  const resetState = () => {
    setData([]);
  }

  // const memoizedCallback =
  // useCallback();
  // (organization) => {
  //   console.log("Organization: ", organization);
  //   return countUsers(organization);
  // },
  // [5]

  console.time("RENDER DATA");

  const newData = useMemo(() => createData(data), [data]);

  console.timeEnd("RENDER DATA");
  return (
    <div className="todos">
      <div className="list-group mt-3 mb-5">
        {console.log("Data: ", data)}

        <button
          className="btn btn-primary"
          type="button"
          onClick={async () => {
            console.log("Was clicked!!!!");
            let timer;
            return new Promise((resolve, reject) => {
              timer = setTimeout(() => {
                console.log("GET DATA!!!!");
                setData(companyData);
                resolve();
              }, 3000);
            }).then(() => {
              console.log("Get Data was finished! Timer: ", timer);
              clearTimeout(timer);
            });
          }}
        >
          Get Data
        </button>
        {data && data.length && renderData(newData)}
        <button onClick={resetState}>
          Reset Data
        </button>
      </div>
      <style jsx>{`
        .list-group-item {
          cursor: pointer;
          user-select: none;
        }
      `}</style>
    </div>
  );
}

export default Todos;
