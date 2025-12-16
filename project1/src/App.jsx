import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import UserProvider from "./contexts/userContext";
const queryClient = new QueryClient();
const router = createRouter({ routeTree });
export default function App() {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </UserProvider>
  );
}
