import { ChangeEvent } from "react";

export const onChangeInputX = (evt: ChangeEvent<HTMLInputElement>) => {
  // regex para un caracter numerico o más + caracter x + un caracter numerico o más
	const regex = /^[0-9]+X[0-9]+$/
	const value = evt.target.value.replace(/\s+/g, '').toUpperCase()
	let result: string[] = ['', '']

	if ( regex.test(value) ) {
		result = value.split('X')
	}
	
	return result
}
