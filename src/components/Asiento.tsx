import { memo } from "react"

interface asientoProps {
	reservacion: string,
	fila: number,
	col: number
}

export const Asiento = memo(({reservacion, fila, col}: asientoProps) => {
	return (
		<div className={reservacion !== ''?'reservado silla':'silla'}>
			<img src='/seat.png' alt='Asiento de cine' width='50' height='50' />
			<p>Asiento {fila+1}-{col+1}</p>
			<p>{reservacion !== ''?<b>{reservacion}</b>:'Sin reservación'}</p>
		</div>
	)
})
