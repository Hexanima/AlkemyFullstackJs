export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export function isError(err: any) {
  return err instanceof Error;
}
