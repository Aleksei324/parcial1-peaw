import { useState } from "react"

export const usePopup = () => {
  const [getSuccess, setSuccess] = useState(false)
  const [getError, setError] = useState(false)

  const setSuccessP = (value: boolean) => {
    setError(false)
    setSuccess(value)
  }

  const setErrorP = (value: boolean) => {
    setSuccess(false)
    setError(value)
  }

  return {
    getSuccess: getSuccess,
    getError: getError,
    setSuccess: setSuccessP,
    setError: setErrorP
  }
}
