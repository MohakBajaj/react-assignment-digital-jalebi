import Header from "@/components/header";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Table from "@/components/table";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import { useState } from "react";

function App() {
  // Create a new instance of QueryClient
  // from tanstack query
  const queryClient = new QueryClient();

  // Define a state variable called 'name' and a function to update it called 'setName'
  const [name, setName] = useState("");

  // Function to handle the search button click event
  // Will work without it as well
  function handleSearch() {
    // Get the value of the input field with id 'name'
    const name = document.getElementById("name") as HTMLInputElement;
    // Update the 'name' state variable with the input field value
    setName(name.value);
  }

  return (
    <div className="h-screen flex flex-col items-center p-2 dark">
      {/* Render the Header component */}
      <Header />
      {/* Provide the QueryClient instance to the QueryClientProvider */}
      {/* from tanstack query */}
      <QueryClientProvider client={queryClient}>
        <div className="relative z-10 w-[50%] flex gap-2 p-2 m-2">
          {/* Render the Input component */}
          <Input
            type="text"
            placeholder="Search Users by Name or Email"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Render the Button component with the handleSearch function as the onClick event handler */}
          {/* Will work without it as well */}
          <Button onClick={handleSearch}>Search</Button>
        </div>
        {/* Render the Table component with the 'name' state variable as a prop */}
        <Table name={name} />
      </QueryClientProvider>
      {/* that background you saw */}
      <BackgroundBeams />
    </div>
  );
}

export default App;
