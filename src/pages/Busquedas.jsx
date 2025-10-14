import { useEffect, useState } from "react";
const API='https://dummyjson.com/products/search?q=';
import Cardprod from "../components/Cardprod";
import { useLocation } from 'react-router-dom';
const Busquedas = () => {
    const [datos, setDatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const txtBuscar = location.state;
    const URI=API+txtBuscar;

    const getDatos = async () => {
        try {
            const response = await fetch(URI);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setDatos(data.products);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        getDatos();
    }, [txtBuscar]);
    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando Personajes...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Error al cargar los Personajes</h4>
                <p>{error}</p>
            </div>
        );
    }
    return (
        <div className="container">
            <h4 className="text-center py-4">Moviles</h4>
            <div className="row">
                {datos.map((item) => (
                    <Cardprod item={item} key={item.id}/>
                ))}

            </div>
        </div>


    )
}

export default Busquedas