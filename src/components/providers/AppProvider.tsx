import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LitteraProvider } from "@assembless/react-littera";
import { Provider as JotaiProvider } from "jotai";

import type { ReactNode } from "react";

import { queryClient } from "business-layer/tactics/rq-config";

type ThemeProvider = {
  children: ReactNode;
};

export function AppProvider({ children }: ThemeProvider) {
  return (
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <LitteraProvider locales={["en_US"]}>
          <FluentProvider theme={webLightTheme}>{children}</FluentProvider>
        </LitteraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </JotaiProvider>
  );
}
