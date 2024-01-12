import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = ()=>{
   const products = useSelector((state)=>state.allProducts.products);
   const renderList = products.map((product)=>{
      const { id , title, image, price, category} = product;
      return(
      <div className="four wide column" key={id}>
         <Link to={`/product/${id}`}>
      <div className="ui link cards" style={{margin:"-7px"}} >
         <div className="card">
            <div className="image">
               <img  style={{height:"300px"}} src={image} alt={title}/>
            </div>
            <div className="content" style={{height:"120px",overflow:"auto",textAlign:'left'}}>
              <div className="header">{title}</div>
              <div className="meta price">${price}</div>
              <div className="meta">{category}</div>
            </div>
         </div>
      </div>
      </Link>
   </div>
   )
   })
   return <>{renderList}</>
}

export default ProductComponent;