import { Heart, ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { money } from "../data/products";
import { useStore } from "../store";
export default function ProductCard({product,index=0}){
 const {wishlist,toggleWishlist,addToBag}=useStore();const saved=wishlist.some(p=>p.id===product.id);const navigate=useNavigate();
 return <article className="product-card" style={{"--delay":`${index*55}ms`}}>
  <div className="product-image-wrap"><Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}><img src={product.image} alt={product.name} loading="lazy"/>{product.tag&&<span className="product-tag">{product.tag}</span>}</Link>
   <button className={`wishlist-toggle ${saved?"saved":""}`} aria-label={saved?"Remove from wishlist":"Add to wishlist"} onClick={()=>toggleWishlist(product)}><Heart size={17} fill={saved?"currentColor":"none"}/></button>
   <div className="product-actions"><button onClick={()=>{addToBag(product);}} className="button button-light">Add to Bag</button><button onClick={()=>{addToBag(product);navigate("/checkout")}} className="button button-dark">Buy Now</button></div>
  </div><div className="product-meta"><div><Link to={`/product/${product.id}`} className="product-name">{product.name}</Link><p>{product.type}</p></div><strong>{money(product.price)}</strong></div>
 </article>
}
