interface popupProps {
	tipo: string,
	closeFunc: () => void
}

export const Popup = ({tipo, closeFunc}: popupProps) => {
  return (
		<div className={tipo === 'Exito'?'success popup':'error popup'}>
			<span>
				{tipo === 'Exito'?'Reserva exitosa':'Reserva no completada'}
			</span>
			<button type="button" onClick={closeFunc}>x</button>
			
		</div>
	)
}
