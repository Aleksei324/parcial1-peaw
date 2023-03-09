import { useState } from "react";

export const useFilaNCol = () => {
	const [getFila, setFila] = useState('1')
  const [getCol, setCol] = useState('1')
	const regex = /^[0-9]+$/

	const setFilaH =  (value: string) => {
		if ( regex.test(value.trim()) && Number(value.trim()) > 0 ) {
			setFila(value.trim())
		}
	}

	const setColH =  (value: string) => {
		if ( regex.test(value.trim()) && Number(value.trim()) > 0 ) {
			setCol(value.trim())
		}
	}

  return {
		fila: getFila,
		col: getCol,
		setFila: setFilaH,
		setCol: setColH
	}
}
