 "use client"

import styles from "./textoHome.module.css";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const TextoHome = (props) => {

        useEffect( () => { 
          AOS.init(); 
        }, []);
  
    return(
          <div className={styles.divNew}>
            
            <div className={styles.DIVtextoAlternativo} >  

                    <div className={styles.divP} data-aos="zoom-out-right"  data-aos-duration="2000" >
                       <h4>{props.text}</h4>
                       <p>{props.textP}</p>
                    </div>

                    <div className={styles.divP} data-aos="zoom-out-right"  data-aos-duration="2000" >
                       <h4>{props.text2}</h4>
                       <p>{props.textP2}</p>
                    </div>

                    <div className={styles.divP} data-aos="zoom-out-right"    data-aos-duration="2000" >
                       <h4>{props.text3}</h4>
                       <p>{props.textP3}</p>
                    </div>


            </div> 
            
          </div>
    )
}

export default TextoHome