import styles from './technology.module.css'
import Image from 'next/image';
import Img from "../assets/img2TextoAlternativo.jpg";
import TextoHome from '../components/divTextoHome/textoHome';
import New from '../components/News/News';

async function getData() {
    try {
      const resp = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=0a27aef7945e4cdbac3d9e90542ecaf6',{
        next:{
          revalidate: 300 
        }
      });
      const { articles } = await resp.json();
  
      return articles;
    } catch (error) {
    console.log(error);
    }
  }


const  Page = async() => {


     const data = await getData();


    return(
        <div>
            <div className={styles.divTitle}>
                <h1 className={styles.title}>Technology</h1>
                <div className={styles.borderTexto}></div>
                <p>
                Welcome to our website dedicated to technology, where you will find the latest innovations, devices, applications and technological trends. We offer in-depth analysis, reviews and informative articles so you're always up to date and able to explore the cutting edge of the digital age. Join us on this exciting journey through the world of technology!
                </p>

            </div>


            <div className={styles.infoPresentacion}>
                    <div className={styles.DIVimgAlternativo}>
                    <Image
                        src={Img}
                        alt="My Image"
                        layout="responsive"
                        width={300}
                        height={300}
                        
                    />
                    </div>
                        <TextoHome  
                        text={'Technological advances'} 
                        textP={'the latest technological advances in different fields, such as artificial intelligence, robotics, biotechnology.'}
                    
                        text2={'Applications'} 
                        textP2={'analysis of the most popular mobile applications and the newest gadgets on the market.'} 

                        text3={'Programming'} 
                        textP3={'Explore current trends in the world of programming, such as new programming languages, frameworks, development tools, and agile development approaches.'}
                        ></TextoHome>
                </div>


          <New data={data}></New>

        </div>
    )
}


export default Page