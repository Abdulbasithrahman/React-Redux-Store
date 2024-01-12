import React, { useEffect } from "react";
import axios from "axios";
import { useParams,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts,removeSelectedProducts } from "../redux/actions/productActions";

const ProductDetail = ()=>{
   const product = useSelector((state)=>state.product)
   const {productId} = useParams();
   const {id,image,title,price,category,description}=product;
   const dispatch = useDispatch()

   const fetchProductsDetail = async ()=>{
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err)=>{console.log(err)})
      dispatch(selectedProducts((response.data)));
   }

   useEffect(()=>{
      if(productId && productId!==""){
         fetchProductsDetail()
      }
      return()=>{
         dispatch(removeSelectedProducts())
      }
   },[productId])

   return(
      <div className="ui grid container" >
      {Object.keys(product).length === 0 ? (
        <h1>...Loading</h1>
      ) : (
        <div className="ui placeholder segment" style={{marginTop:"100px",height:"550px"}}>
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" style={{width:'400px',height:"480px", margin:'0 auto'}} src={image} />
              </div>
              <div className="column rp" style={{textAlign:"left",padding:"25px"}}>
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label" style={{fontSize:"22px"}}>${price}</a>
                </h2>
                <h3 className="ui brown header">{category}</h3>
                <p style={{letterSpacing:"0.5px",textAlign:'justify'}}>{description}</p>
                <div style={{marginRight:"70%",marginTop:"5%",backgroundColor:"red",color:"white"}} className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
                <Link to={'/'}>
                <div style={{marginTop:'20%',background:"lightgreen"}} className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="home icon"></i>
                  </div>
                  <div className="visible content">Go to Home</div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
   )
}

export default ProductDetail;