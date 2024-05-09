import { ColumnDef } from "@tanstack/react-table";

// Type definition for User Data
export type UserData = {
  id: number;
  name: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
};

// Column definition for User Table
// for more information on ColumnDef refer to https://tanstack.com/table/latest/docs/guide/column-defs
export const columns: ColumnDef<UserData>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "age",
    header: "Age",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone No.",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
];
