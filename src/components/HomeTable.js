import React, { useMemo, useEffect, useState } from "react";
import { useTable, useSortBy } from "react-table";
import { COLUMNS } from "./TableColumns";

export const HomeTable = () => {
  const url =
    "https://be.platform.simplifii.com/api/v1/custom/vaccinatedEmployees";

  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEmployee = async () => {
      const response = await fetch(url);
      const employeeData = await response.json();
      setEmployeeData(employeeData.response.data);
      setLoading(false);
      //console.log(employeeData.response.data);
    };

    if (loading) {
      getEmployee();
    }
  }, []);

  // const columns = useMemo(() => COLUMNS, []);
  const columns = COLUMNS;
  //const data = useMemo(() => employeeData, []);
  const data = employeeData;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,

    rows,
    prepareRow
  } = useTable(
    {
      columns: columns,
      data: data
    },
    useSortBy
  );

  return (
    <>
      <div>
        {loading ? (
          <>
            <center>
              <h2>
                <div className="loadingio-spinner-rolling-qv5czh9syc">
                  <div className="ldio-4vw15fl891q">
                    <div></div>
                  </div>
                </div>
              </h2>
            </center>
          </>
        ) : (
          <>
            <div className="theTable">
              <table {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          {...column.getHeaderProps(
                            column.getSortByToggleProps({ title: undefined })
                          )}
                        >
                          {column.render("Header")}
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " ▼"
                                : " ▲"
                              : ""}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                  {/* <tr>
                    <td></td>
                  </tr> */}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};
