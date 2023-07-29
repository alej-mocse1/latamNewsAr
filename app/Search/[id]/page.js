import New from "@/app/components/News/News";
import styles from "./Search.module.css"
async function getData(id) {
    try {
      const resp = await fetch(`https://newsapi.org/v2/everything?q=${id}&apiKey=0a27aef7945e4cdbac3d9e90542ecaf6`);
      const { articles } = await resp.json();
  
      return articles;
    } catch (error) {
      console.log(error);
    }
  }


const  Page = async({params}) => {

    const{ id } = params

     const data = await getData(id);


    return(
        <div>
          <div className={styles.divisor}></div>
          <New data={data}></New>
        </div>
    )
}


export default Page