import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { buttonReservar, onChangeInputX } from "../helpers";
import { useFilaNCol } from "../hooks";

interface formProps {
	matriz: string[][],
	setMatriz: Dispatch<SetStateAction<string[][]>>,
	mostrarAsientos: (x: any) => void,
	success: (x: any) => void,
	error: (x: any) => void
}

export const Formulario = ({matriz, setMatriz, mostrarAsientos, success, error}: formProps) => {
	const {fila, col, setFila, setCol} = useFilaNCol();
	const [nombre, setNom] = useState('')

	const inputX = (evt: ChangeEvent<HTMLInputElement>) => {
		const [f, c] = onChangeInputX(evt)
		setFila(f)
		setCol(c)
	}

	const reserva = () => {
		setMatriz( [...buttonReservar(matriz,
																	Number(fila)-1,
																	Number(col)-1,
																	nombre,
																	success,
																	error)] )

		mostrarAsientos(false)
	}

  return (
		<div>
			<label htmlFor='inputx'>Fila x columna: </label>
			<input className="i1" type='text' id="inputx" value={`${fila}x${col}`} onChange={(evento) => inputX(evento)} placeholder="Fila x Columna..." />
			<br/>

			<label htmlFor='inputfila'>Fila: </label>
			<input className="i2" type='number' id="inputfila" min='1' step='1' value={fila} onChange={(evento) => setFila(evento.target.value)} />
			<br/>

			<label htmlFor='inputcol'> Columna: </label>
      <input className="i3" type='number' id="inputcol" min='1' step='1' value={col} onChange={(evento) => setCol(evento.target.value)} />
			<br/>

			<label htmlFor='inputnom'> Nombre de quién reserva: </label>
      <input className="i4" type='text' id="inputnom" value={nombre} onChange={(evento) => setNom(evento.target.value)} placeholder="Deje en blanco para remover reservación..." />
			<br/>

			<button type="button" onClick={() => reserva()} >Reservar</button>
			<button type="button" onClick={() => mostrarAsientos((x: boolean) => !(x))} >Mostrar asientos</button>
		</div>
	)
}
