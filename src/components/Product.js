export default function Product(props){
    const { item, product, onAdd, onRemove } = props;

    return (
        <>
            <div className="col-12 col-sm-6 col-md-4">
                <a href="/#" type="button" data-bs-toggle="modal" data-bs-target={"#productModal"+product.id}>
                    <img className="img-product" alt={product.modelo} src={product.imagen} />
                </a>
                <h6>{product.marca}</h6>
                <h2>{product.modelo}</h2>
                <h4>${product.precio}</h4>
                
                { item ? <div className="row align-items-center text-center">
                    <div className="col-2">
                        <button onClick={() => onRemove(item)} className="btn btn-danger">
                            -
                        </button>
                    </div>
                    <div className="col-8">
                    <p className="quantity-product">{item.qty}</p>
                    </div>
                    <div className="col-2">
                    <button onClick={() => onAdd(item)} className="btn btn-success">
                        +
                    </button>
                    </div>
                </div> : 
                    <button onClick={() => onAdd(product)} className="btn btn-primary btn-block btn-large">Add to cart</button>
                }

                <div className="modal fade" id={"productModal"+product.id} tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        <div className="modal-header">                            
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <img className="img-product" alt={product.modelo} src={product.imagen} />
                            <h6>{product.marca}</h6>
                            <h2>{product.modelo}</h2>
                            <h4>${product.precio}</h4>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}