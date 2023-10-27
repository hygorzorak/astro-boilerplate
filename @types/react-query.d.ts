// QUERIES
declare type ApiQuerySignature<TParams = any, TResponse = any> = {
  queryFn: (params?: TParams) => Promise<TResponse>;
  queryKey: QueryKey;
  params?: TParams;
};

declare type QueryProps = {
  apiSignature: ApiQuerySignature;
  initialData?: unknown;
  staleTime?: number;
  enabled?: boolean;
  select: ((data: any) => any) | undefined;
  retry?: boolean;
  onSuccess: ((data: any) => void) | undefined;
  onError: ((err: any) => void) | undefined;
  onSettled: ((data: any, error: unknown) => void) | undefined;
};

declare type UseQueryResult<TData = unknown, TError = unknown> = UseBaseQueryResult<TData, TError>;

// MUTATIONS
declare type MutationProps<TParams = any, TResponse = any> = {
  mutationFn: (params?: TParams) => Promise<TResponse>;
  mutationKey: MutationKey;
  onMutate?: ((variables: unknown) => unknown) | undefined;
  onSuccess?: ((data: any, variables: any, context: unknown) => unknown) | undefined;
  onError?: ((error: unknown, variables: any, context: unknown) => unknown) | undefined;
  onSettled?:
    | ((data: any, error: unknown, variables: any, context: unknown) => unknown)
    | undefined;
  retry?: number;
  cacheTime?: number;
  retryDelay?: number;
};

declare type UseMutationResult<
  TData = unknown,
  TError = unknown,
  TVariables = unknown,
  TContext = unknown,
> = UseBaseMutationResult<TData, TError, TVariables, TContext>;
