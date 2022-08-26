import logo from '../logo.png';
import { useState } from 'react';

export default function Header(props){
    const { countCartItems } = props;

    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [username, setUsername] = useState(false);
    
  // Login usuarios
    const database = [
        {
            username: "usuario1",
            password: "pass1"
        },
        {
            username: "usuario2",
            password: "pass2"
        }
    ];

    const errors = {
      uname: "Usuario invalido",
      pass: "Pass invalida"
    };

    const handleSubmit = (event) => {
      event.preventDefault();  
      var { uname, pass } = document.forms[0];  
      // Find user login info
      const userData = database.find((user) => user.username === uname.value);
  
      // Compare user info
      if (userData) {
        if (userData.password !== pass.value) {
          // Invalid password
          setErrorMessages({ name: "pass", message: errors.pass });
        } else {
            console.log(userData);
            localStorage.setItem('username', userData.username);
            setIsSubmitted(true);
            setUsername(userData.username);
        }
      } else {
        // Username not found
        setErrorMessages({ name: "uname", message: errors.uname });
      }
    };

    
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );

    const renderForm = (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input className="form-control me-2" type="text" name="uname" placeholder='Your user' required />
            {renderErrorMessage("uname")}
          </div>
          <div className="form-group">
            <input className="form-control me-2" type="password" name="pass" placeholder='Your password' required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input className="btn btn-success" type="submit" />
          </div>
        </form>
      </div>
    );

    return (
      <>      
        <nav id="menu" className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a id="logo" className="navbar-brand" href="#/">
                    <img className='logo' src={logo} alt="Logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto flex-nowrap">
                        <li className="nav-item">
                            <a href="#/" className="nav-link m-2 menu-item nav-active">HOME</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#about" className="nav-link m-2 menu-item nav-active">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#products" className="nav-link m-2 menu-item nav-active">PRODUCTS</a>
                        </li>
                        <li className="nav-item">
                            <a href="/#contact" className="nav-link m-2 menu-item nav-active">CONTACT</a>
                        </li>
                        { isSubmitted? (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle m-2" href="/#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-user"></i> { username }
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">                                                                    
                                    <a href="/#contact" className="nav-link m-2 menu-item nav-active">LOG OUT</a>                             
                                </ul>
                            </li>
                        ) : (
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle m-2" href="/#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fa-solid fa-right-to-bracket"></i> LOG IN
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">                                
                                    { renderForm }                                
                                </ul>
                            </li>
                        )}
                        <li className="nav-item">
                            
                            <a href="/#" className="nav-link m-2 menu-item" type="button" data-bs-toggle="modal" data-bs-target="#cart">
                                CART 
                                <i className="fa-solid fa-cart-shopping"></i>
                                { countCartItems? (
                                    <span> {countCartItems} </span>
                                ) : (
                                    <span></span>
                                )}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </>  
    );
}