import banner from '../banner.jpg';
import about from '../about.png';
import Product from './Product';
import { useState } from 'react';

export default function Main(props){

    const [searchTerm, setSearchTerm] = useState('');
    const {cartItems, products, onAdd, onRemove} = props;
    return (
        <>        
        <img id="banner" className='img-fluid' src={banner} alt="banner" />
        <div className='section-about'>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <h2 className='titles' id="about">ABOUT</h2>
                        <hr className='hr-titles' />
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 col-md-6">
                        <img className='img-fluid' src={about} alt="about" />
                    </div>
                    <div className="col-12 col-md-6">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ullamcorper venenatis risus, vitae sollicitudin neque finibus ac. Vivamus consequat hendrerit mi at tincidunt. Vestibulum faucibus euismod convallis. Vestibulum cursus iaculis odio, vitae commodo quam euismod sit amet. Integer dignissim a purus vitae elementum. Curabitur aliquam risus in neque hendrerit malesuada. Vivamus ullamcorper pellentesque erat et vehicula. Suspendisse turpis eros, viverra ut porta eu, commodo vel metus. Phasellus est augue, porta vitae vestibulum ac, venenatis quis est. Praesent vestibulum metus eget porta dictum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h2 className='titles pt-5' id="products">PRODUCTS</h2>
                    <hr className='hr-titles' />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-6">
                    <div className="mb-3">
                      <input 
                        type="text" className="border-dark form-control"
                        aria-describedby="helpId" placeholder="Searching by modelo..."
                        onChange={event => {setSearchTerm(event.target.value)}}/>                      
                    </div>
                </div>
            </div>
            <div className="row products-gallery">
                {products.filter((val) => {
                    if(searchTerm === ""){
                        return val
                    }else if(val.modelo.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                }).map((product, index) => (
                    <Product key={index} onAdd={onAdd} onRemove={onRemove} product={product}
                    item={cartItems.find((x) => x.id === product.id)}
                    />
                ))}
            </div>
        </div>
        </>
    );
}