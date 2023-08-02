import styles from "./business.module.css"
import Image from "next/image";
import Img from "../assets/imgBusiness.jpg";
// import TextoHome from "@/components/divTextoHome/textoHome";
// import New from "@/components/News/News";
import TextoHome from "../components/divTextoHome/textoHome";
import New from "../components/News/News";

async function getData() {
    try {
      const resp = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0a27aef7945e4cdbac3d9e90542ecaf6",{
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
                <h1 className={styles.title}>LN/Business</h1>
                <div className={styles.borderTexto}></div>
                <p>
                You will be able to access reports and analysis on the global economic landscape, as well as articles on entrepreneurship, leadership, business strategies and business development. We'll keep you up to date with what's new in the financial markets, with updates on stocks, currencies, cryptocurrencies and investment trends.
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
                        text={"Market Updates"} 
                        textP={"the latest market updates, including stock, currency and cryptocurrency prices."}
                    
                        text2={"Financial Education"} 
                        textP2={"Educational content to help our users improve their knowledge about investing, financial planning and business management."} 

                        text3={"Analysis"} 
                        textP3={"Our analytics will help you make informed decisions and better understand the factors that affect the business environment."}
                        ></TextoHome>
                </div>


          <New data={data}></New>

        </div>
    )
}


export default Page