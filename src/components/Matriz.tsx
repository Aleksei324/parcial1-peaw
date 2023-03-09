import { Asiento } from "./"

interface matrizProps {
	matriz: string[][]
}

export const Matriz = ({matriz}: matrizProps) => {
	return (
		<div>
			{matriz.map((columna, keyfila) => {
				return (
					<div className='flex' key={keyfila}>
						{columna.map((reservacion, keycol) => {
							return <Asiento key={keycol} reservacion={reservacion} fila={keyfila} col={keycol} />
						})}
					</div>
				)
			})}
		</div>
	)
}
