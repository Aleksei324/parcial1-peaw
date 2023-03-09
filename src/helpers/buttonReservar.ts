export const buttonReservar = (arr: string[][], fila: number, col: number, nombre: string, success: (x: any) => void, error: (x: any) => void) => {
  const temp = [...arr]

	if (fila in temp) {
		if (col in temp[fila]) {
			temp[fila][col] = nombre.trim()
			success(true)
		}
		else {
			error(true)
		}
	}
	else {
		error(true)
	}
	
	return temp
}
