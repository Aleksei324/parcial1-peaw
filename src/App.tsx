import { Popup, Formulario, Matriz } from './components'
import { usePopup } from './hooks'
import { useState } from 'react'

function App() {
  const [getMostrarAsientos, setMostrarAsientos] = useState(false)
  const {getSuccess, getError, setSuccess, setError} = usePopup()
  const [getMatriz, setMatriz] = useState([['', '', '', 'Orion', '', ''],
                                          ['Camilo', '', '', '', '', ''],
                                          ['', '', '', '', '', 'Juan']])

  return (
    <div className='flex'>
      <div className="comp">
        <h1>Parcial 1: reservas del cine</h1>
        <h2>Hecho por Camilo Franco Moya</h2>
        <br/>
        <Formulario matriz={getMatriz}
                    setMatriz={setMatriz}
                    mostrarAsientos={(x) => setMostrarAsientos(x)}
                    success={(x) => setSuccess(x)}
                    error={(x) => setError(x)} />

        {
          getError?
            <Popup tipo='Error' closeFunc={() => setError(false)} />
          :
            <div/>
        }
        {
          getSuccess?
            <Popup tipo='Exito' closeFunc={() => setSuccess(false)} />
          :
            <div/>
        }
      </div>
      {
        getMostrarAsientos?
          <Matriz matriz={getMatriz} />
        :
          <div></div>
      }
    </div>
  )
}

export default App
