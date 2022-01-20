import React from 'react';
import Itemcard from './Itemcard';
import data from './data';

const Home =()=>
{
    return(
        <>
             
             <section className="py- container">
             <h2 className="text-center text-danger mt-3">Welcome to Shopping </h2> 
             <hr></hr>
                 <div className="row justify-content-center">
                        {data.productData.map((item,index)=>{
                         return(
                             
                            <Itemcard img={item.img} 
                            title={item.title} 
                            desc={item.desc} 
                            price={item.price} 
                            key={index}/>
                         )
                     })}
                 </div>
             </section>
             
        </>
    )
}
export default Home;