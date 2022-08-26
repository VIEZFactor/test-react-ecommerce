export default function Footer(){
    return (
      <>      
      
        <div id="contact" className="contact container-fluid">
            <div className="row align-items-center">
                <div className="col-12 col-md-6">                    
                    <div>
                        <iframe title="MAPS" width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=es&amp;q=Salvador%20D%C3%ADaz%20Mir%C3%B3n%20108,%20Zona%20Centro,%2089000%20Tampico,%20Tamps.+(Plaza%20de%20Armas%20de%20Tampico)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>                        
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <h2 className="text-center">CONTACT</h2>
                    <h4 className="text-center">Social Networks</h4>
                    <ul className="list-inline text-center">
                        <li className="list-inline-item">
                            <a href="#/">                                
                                <i className="fa-brands fa-square-facebook"></i> Facebook
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#/">                                
                                <i className="fa-brands fa-square-twitter"></i> Twitter
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="#/">                                
                                <i className="fa-brands fa-square-instagram"></i> Instagram
                            </a>
                        </li>
                    </ul>
                    <h4 className="text-center">Adress</h4>
                    <p className="text-center">
                        <i className="fa fa-map-marker"></i> Salvador Díaz Mirón 108, Zona Centro, 89000 Tampico, Tamps.
                    </p>
                </div>
            </div>
        </div>
        <div className='footer py-4 text-white'>
            <div className='container'>
                <div className="row">
                    <div className="col-12">
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="/#">
                                    HOME
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/#about">
                                    ABOUT
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/#products">
                                    PRODUCTS
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/#contact">
                                    CONTACT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      </>  
    );
}