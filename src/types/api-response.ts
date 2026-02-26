export interface TingeeApiResponse<T = any> {
  code: string
  message: string
  data?: T
}

export function isSuccessResponse(response: TingeeApiResponse): boolean {
  return response.code === '00'
}


export function isErrorResponse(response: TingeeApiResponse): boolean {
  return response.code !== '00'
}
