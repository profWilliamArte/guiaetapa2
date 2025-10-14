
import { Link } from "react-router-dom";
import Modal from "./ModalProd";
import ModalProd from "./ModalProd";
const Cardprod = ({item}) => {
    return (
        <div className="col-md-4 col-xl-3 mb-3" key={item.id}>
            <div className="card h-100">
                <div className="card-header p-0">
                    <img src={item.thumbnail} alt="" className="img-fluid" />
                </div>
                <div className="card-body text-center">
                    <p className="fs-3">{item.title}</p>
                    <p className="fs-5 text-danger fw-bold">Precio: {item.price}$</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary btn-sm me-3" data-bs-toggle="modal" data-bs-target={`#${item.id}`}>Modal</a>
                    <Link to={`/detalle/${item.id}/${item.title}`} href="#" className="btn btn-info btn-sm" >Detalle</Link>
                </div>
            </div>
            <ModalProd item={item}/>


        </div>
    )
}

export default Cardprod