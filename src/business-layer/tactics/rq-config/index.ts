import { QueryClient } from "@tanstack/react-query";

const defaultQueryClientOptions = {
  queries: {
    staleTime: 30 * 1000, // 30 seconds
    retry: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  },
};

export const queryClient = new QueryClient({
  defaultOptions: defaultQueryClientOptions,
});
