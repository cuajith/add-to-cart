import React, {useState} from 'react'
import './style.css'

const Itemcard = (props) => {
    const [count, addCount] =  useState(0)
    
    return (
                    <div class="col-12 col-md-6 col-lg-4 mx-0 mb-4">
                        <div class="card p-0 overflow-hidden  h-80 shadow mb-4" >
                            
                            <img src={props.img} class="card-img-top " alt="..." />
                            <div class="card-body text-center">
                                <h5 class="card-title">{props.title}</h5>
                                <h5 class="card-text">Rs.{props.price}</h5>
                                <p class="card-text">{props.desc}</p>
                                <button class="btn btn-success" onClick={()=>addCount(count+1)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                    
    )
}
export default Itemcard