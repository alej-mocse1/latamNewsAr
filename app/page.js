import Image from 'next/image';
import styles from './page.module.css';
// import ImgPrinc from "./assets/imgNews.jpg"
import Image2da from './assets/img2TextoAlternativo.jpg';
import New from './components/News/News';
import TextoHome from './components/divTextoHome/textoHome';
import Link from 'next/link';


async function getData() {
  try {
    const resp = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=0a27aef7945e4cdbac3d9e90542ecaf6");
    const { articles } = await resp.json();

    return articles;
  } catch (error) {
    console.log(error);
  }
}


const Home = async() => {

  const data = await getData();

  return (
    <main>    


      <div className={styles.divTitle}>
        <h1 className={styles.title}>LatamNews</h1>
        <div className={styles.borderTexto}></div>
        <p>
        Welcome to LatamNews! Your trusted source for the latest local and international news. Stay informed with us and discover the world through our impartial and objective perspective. The news is one click away!
        </p>
      </div>


      <div className={styles.infoPresentacion}>
        <div className={styles.DIVimgAlternativo}>
          <Image
            src={Image2da}
            alt="My Image"
            layout="responsive"
            width={300}
            height={300}
            
          />
        </div>
            <TextoHome  
              text={"Sports"} 
              textP={"Explore the most comprehensive coverage of sporting events, breaking news, and in-depth analysis."}
            
              text2={"technology"} 
              textP2={"You will find the latest innovations, devices, applications and technological trends."} 

              text3={"business"} 
              textP3={"Explore in-depth articles on economic trends, investment advice, and market analysis.."}
            ></TextoHome>
      </div>

      
      <div className={styles.divNewPrincipal}>
        <div className={styles.divNew}>
           <Link href={data[0].url} target="_blank">
              <h3>{data[0].title}</h3>
           </Link>
           <p>{data[0].description}</p>

           <h6>{data[0].publishedAt.slice(0, 10)}</h6>

        </div>

         <div className={styles.divimg}>
           <img src={data[0].urlToImage}/>
        </div>
      </div>

      <div className={styles.divDivisor}></div>
      <New data={data}/>
    </main>
  );
}



export default Home