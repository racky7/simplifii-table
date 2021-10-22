import { format } from "date-fns";

export const COLUMNS = [
  // {
  //   Header: "Id",
 
  //   accessor: "id",
  
  // },
  {
    Header: "Name",
    accessor: "emp_name",
    
  },
  {
    Header: "Mobile",
    
    accessor: "mobile",
    
  },
  {
    Header: "City",
    
    accessor: "city",
    
  },
  {
    Header: "State",
    Footer: "State",
    accessor: "region",
    
  },
  {
    Header: "First Dose",
    Footer: "First Dose",
    accessor: "first_vaccination_date",
    Cell: ({ value }) => {
      return format(new Date(value), "d MMM yyyy");
    },
    sticky: "left"
  },
  {
    Header: "Second Dose",
    Footer: "Second Dose",
    accessor: "second_vaccination_date",
    Cell: ({ value }) => {
      return format(new Date(value), "d MMM yyyy");
    },
    sticky: "left"
  }
];
