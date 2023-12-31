import styles from "./Sports.module.css"
import Image from "next/image";
import img from "../assets/imgSports.jpg"
import TextoHome from "../components/divTextoHome/textoHome";
import New from "../components/News/News";

async function getData() {
    try {
      const resp = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=Sports&apiKey=0a27aef7945e4cdbac3d9e90542ecaf6",{
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
                <h1 className={styles.title}>LN / Sports</h1>
                <div className={styles.borderTexto}></div>
                <p>
                   In LatamNews In addition to the analysis of the matches and events, we will also keep you up to date with the latest transfers and signings, exclusive interviews with prominent athletes, news regarding regulations and sports technology, as well as special coverage of important competitions and championships.
                </p>

            </div>


            <div className={styles.infoPresentacion}>
                    <div className={styles.DIVimgAlternativo}>
                    <Image
                        src={img}
                        alt="My Image"
                        layout="responsive"
                        width={300}
                        height={300}
                        
                    />
                    </div>
                        <TextoHome  
                          text={"Results"} 
                          textP={"Our live results service will keep you connected to the sporting action."}
                      
                          text2={"Statistics"} 
                          textP2={"Stay informed with our comparative performance analysis and detailed statistics."} 

                          text3={"interviews"} 
                          textP3={"The best notes of your favorite athletes minute by minute."}
                        ></TextoHome>
                </div>


          <New data={data}></New>

        </div>
    )
}


export default Page