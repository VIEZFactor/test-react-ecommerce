export default function Cart(props){
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.qty * c.precio, 0);
    return (

        <div className="modal fade" id="cart" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-header">     
                    <h5 className="modal-title">My cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div>
                        {cartItems.length === 0 && <div>Cart is empty</div>}
                        {cartItems.map((item) => (
                            <div key={item.id}  className="row">
                                <div className="col-4 col-md-4">
                                    <img alt={item.modelo} className="img-cart" src={item.imagen} />
                                </div>
                                <div className="col-8 col-md-8">
                                    <div className="row">
                                        <p>{item.modelo}</p>
                                        <div className="row align-items-center text-center">
                                            <div className="col-2">
                                                <button onClick={() => onRemove(item)} className="btn btn-danger">
                                                    -
                                                </button>
                                            </div>
                                            <div className="col-8">
                                                <p className="quantity-product">{item.qty} x ${item.precio.toFixed(2)}</p>
                                            </div>
                                            <div className="col-2">
                                            <button onClick={() => onAdd(item)} className="btn btn-success">
                                                +
                                            </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}            
                        {cartItems.length !== 0 && (
                            <div>
                                <hr />
                                <div className="row">
                                    <div className="col-12">
                                        <p>Order total: ${itemsPrice.toFixed(2)}</p>
                                        <p><button className="btn btn-success" onClick={() => alert('Finished checkout')}>Checkout</button> </p>
                                    </div>
                                </div>
                            </div>                        
                        )}
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}