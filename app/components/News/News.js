
import Link from 'next/link';
import styles from './News.module.css';




const New = async ({data}) => {

  return ( 
    <div className={styles.divMain}>
    {data?.map((elem, index) => (
      // Verificar si el elemento contiene imagen, título y descripción antes de renderizarlo
      elem.urlToImage && elem.title && elem.description ? (
        <div className={styles.divNew} key={index}>
          <div className={styles.DIVimgNew}>
            <img
              src={elem.urlToImage}
              alt={elem.description}
              layout='responsive'
            />
          </div>
          <div className={styles.DIVinfoNew}>
            <Link href={elem.url} target='_blank'>
              <h2>{elem.title}</h2>
            </Link>
            <p>{elem.description}</p>
          </div>
        </div>
      ) : null
    ))}
  </div>
  );
};

export default New;


