import { TSuccessMessage } from "../types/response"

export const successMessage: TSuccessMessage = {
  get: (title: string, data: any) => ({
    message: `${title.toUpperCase()} retrieved succesfully`,
    status: 200,
    ok: true,
    data
  }),
  post: (title: string, data: any) => ({
    message: `${title.toUpperCase()} created succesfully`,
    status: 201,
    ok: true,
    data
  }),
  delete: (title: string, data: any) => ({
    message: `${title.toUpperCase()} deleted succesfully`,
    status: 204,
    ok: true,
    data
  }),
  update: (title: string, data: any) => ({
    message: `${title.toUpperCase()} updated succesfully`,
    status: 201,
    ok: true,
    data
  }),
}

export const errorMessage = (message: string) => ({
  message: `ERROR: ${message}`,
  status: 400,
  ok: false
})