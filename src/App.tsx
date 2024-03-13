import { Countries } from "./components/countries";
import { Header } from "./components/header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Countries />
    </QueryClientProvider>
  );
}

export default App;
