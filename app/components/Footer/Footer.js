"use client";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Link from 'next/link';


const Footer =  () => {
    
    return (   
            <footer className="footer mt-5 text-light text-center py-3">
            <div className="container">
                <span className="text-muted">© 2023 LatamNews. Todos los derechos reservados.</span>
            </div>
            <div className="container">
                <span className="text-muted">Desarrollada por <Link href="https://alejmocse1.netlify.app/" target='_blank'>Alejandro Mocse</Link> </span>
            </div>
            </footer>

    );
  };
  
  export default Footer;
  
  
  