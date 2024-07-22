export interface IResponseSuccess {
  data: any[] | any,
  message: string,
  status: number,
  ok: boolean
}

export interface IResponseError {
  message: string,
  status: number,
  ok: boolean
}

// export RMessage = Record
export type TSuccessMessage = Record<'get' | 'post' | 'update' | 'delete', (title: string) => string>