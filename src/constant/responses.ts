import { TSuccessMessage } from "../types/response"

export const successMessage: TSuccessMessage = {
  get: (title: string) => `${title.toUpperCase()} retrieved succesfully`,
  post: (title: string) => `${title.toUpperCase()} created succesfully`,
  delete: (title: string) => `${title.toUpperCase()} created succesfully`,
  update: (title: string) => `${title.toUpperCase()} updated succesfully`
}

export const errorMessage = (message: string) => `ERROR: ${message}`