import { DataTable } from "@/components/ui/data-table";
import { columns } from "@/components/columns";
import { useQuery } from "@tanstack/react-query";
import { Shell, ShieldX } from "lucide-react";

/**
 * Renders a table component that fetches user data and displays it in a DataTable.
 * @param name - The name of the user to search for (optional).
 * @returns The rendered table component.
 */
export default function Table({ name = "" }: { name?: string }) {
  // Fetch user data using the useQuery hook from tanstack/react-query
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["users", name],
    queryFn: async () => {
      // Fetch user data from the dummyjson API
      const response = await fetch(
        `https://dummyjson.com/users/search?limit=100&q=${name}`
      );
      return response.json();
    },
  });

  // Display a loading state while data is being fetched
  if (isPending)
    return (
      <div className="flex gap-1 items-center">
        <Shell className="animate-spin w-6 h-6" />
        <span className="font-bold text-xl">Loading Data</span>
      </div>
    );

  // Display an error message if there was an error fetching the data
  if (isError)
    return (
      <div className="flex gap-1 items-center">
        <ShieldX className="w-6 h-6" />
        <span className="font-bold text-xl">Error: {error.message}</span>
      </div>
    );

  // Map the fetched user data to the required format for the DataTable component
  return (
    <DataTable
      columns={columns}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data={data.users.map((user: any) => ({
        id: user.id,
        name: user.firstName + " " + user.lastName,
        age: user.age,
        gender: user.gender,
        email: user.email,
        phone: user.phone,
        address: user.address.address + " " + user.address.city,
      }))}
    />
  );
}
