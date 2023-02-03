import React, {useEffect, useState} from 'react'
import { getDataArgenBtc } from '../../helper/api'
import $ from "jquery";
import parse from 'html-react-parser';
import ReactHtmlParser from 'react-html-parser';


function ArgenBtc () {

  const [data , setData ] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataArgenBtc();
     
      console.log('*******', result.data.bpi);
      setData(result.data.bpi)
      setIsLoading(true)
    };
 
    fetchData();
  }, []);


  return(
    <>
    {!isLoading ? <div>Cargando</div> : (
      <section className="grid">
        <h1>Entidad bancaria: </h1><h3> {data.USD.description}</h3>
    </section>
    ) }
    
    </>
  )
}





export default ArgenBtc