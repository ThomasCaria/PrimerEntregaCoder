import './Categorias.css'

let carreras = [
    {nombre:'Diseño'},
    {nombre:'Data'},
    {nombre:'Programación'},
    {nombre:'Marketing'},
    {nombre:'Producto'},
]

export default function Categorias() {
    return(
        <div className="Categorias">
            {
                carreras.map(elm=>(
                    <div key={elm.nombre} className="categoria-elemento">{ elm.nombre }</div>
                ))
            }
        </div>
    )
}