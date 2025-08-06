import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";
import { toggle } from "@heroui/theme";

import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const columns = [
  {
    key: "identity",
    label: "Identity"
  },
    {
    key: "yearsOfExperience",
    label: "Experience (years)",
    sortable: true
  },
  {
    key: "languages",
    label: "Language(s)",
  },
  {
    key: "country",
    label: "Country",
  },
  {
    key: "timeZone",
    label: "Time Zone", 
    sortable: true
  },
  {
    key: "location",
    label: "Location",
    sortable: true
  },
  {
    key: "actions",
    label: "Actions",
  }
];

export const FacilitatorGrid = ({ facilitatorList }: { facilitatorList: any }) => {

  const rows = facilitatorList.map((facilitator: any) => ({
    key: facilitator.id,
    firstName: facilitator.firstName,
    lastName: facilitator.lastName,
    yearsOfExperience: facilitator.yearsOfExperience,
    languages: facilitator.languages,
    country: facilitator.country,
    timeZone: facilitator.timeZone,
    location: facilitator.location,
    website: facilitator.website
  }));

  const classNames = React.useMemo(
    () => ({
      wrapper: ["border-1 border-gray-300 bg-gray-100 rounded-xl shadow-lg/25 pt-3 pb-2 w-fit min-w-7/8 mx-auto px-0"],
      th: [ "border-gray-400", "text-sm", "text-left", "text-gray-400", "text-nowrap", "pb-3", "pb-2", "uppercase"],
      tr: [ "border-1 border-gray-100" ]
    }),
    [],
  );
  
  function RenderCell({ item, columnKey }: any) {
    const value = getKeyValue(item, columnKey);
    switch (columnKey) {
      case "identity":
        return (
          <div className="flex flex-row items-center">
            <img
              // src={`https://ui-avatars.com/api/?name=${item.firstName}+${item.lastName}`}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fgeneric-user-icon%2Fgeneric-user-icon-3.jpg&f=1&nofb=1&ipt=a3675a5ca7f584ad893f3b23f735c53fcfffdc09ccdfc3103a423a3bdd07770d"
              alt={`${item.firstName} ${item.lastName}`}
              className="w-8 h-8 rounded-lg mr-2"
            />
            <div>
              <p className=" text-xl text-cool-green solway-medium">{item.firstName} {item.lastName}</p>
              
            </div>
              
          </div>
        );
      case "actions":
        const name = `${item.firstName} ${item.lastName}`
        return (
          <div className="text-center">
            <a href={`../contact?book-facilitator=${name}`} className="no-underline">
              <button
                className="rounded-full bg-cool-green text-white font-bold px-2 py-1 md:px-4 manrope-bold text-sm  hover:cursor-pointer hover:bg-orange-300 hover:text-orange-800 focus:bg-warm-green focus:text-white">Request Booking</button>
            </a>
          </div>
        );
      default:
        return <p className="lg:text-nowrap">{value}</p>;
    }
  }

  return (
    <Table 
    aria-label="Facilitator directory" 
    classNames={classNames}
    id="facilitator-directory-table"
    selectionMode="single"
    >
      <TableHeader columns={columns} >
        {(column) => <TableColumn key={column.key} align={column.key === "yearsOfExperience" ? "center" : "start"}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={"No facilitators found"} >
        {(item) => (

          <TableRow key={item.key} id={`row-${item.key}`} className="border-b-1 border-gray-200 hover:bg-gray-50" >
            {(columnKey) => <TableCell>
              <RenderCell item={item} columnKey={columnKey} />
              </TableCell>}
          </TableRow>
          
        )}

      </TableBody>
    </Table>
  );
};
