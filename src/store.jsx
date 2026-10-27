import { createContext, useContext, useEffect, useMemo, useState } from "react";
const StoreContext=createContext(null);
const read=(key,fallback)=>{try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}};
export function StoreProvider({children}){
 const [cart,setCart]=useState(()=>read("lune-cart",[]));
 const [wishlist,setWishlist]=useState(()=>read("lune-wishlist",[]));
 const [orders,setOrders]=useState(()=>read("lune-orders",[]));
 useEffect(()=>localStorage.setItem("lune-cart",JSON.stringify(cart)),[cart]);
 useEffect(()=>localStorage.setItem("lune-wishlist",JSON.stringify(wishlist)),[wishlist]);
 useEffect(()=>localStorage.setItem("lune-orders",JSON.stringify(orders)),[orders]);
 const addToBag=(product,qty=1,variant="")=>setCart(old=>{const key=product.id+variant;const found=old.find(x=>x.key===key);return found?old.map(x=>x.key===key?{...x,qty:x.qty+qty}:{...x}):[...old,{...product,key,qty,variant}]});
 const updateQty=(key,qty)=>setCart(old=>qty<1?old.filter(x=>x.key!==key):old.map(x=>x.key===key?{...x,qty}:x));
 const toggleWishlist=p=>setWishlist(old=>old.some(x=>x.id===p.id)?old.filter(x=>x.id!==p.id):[...old,p]);
 const value=useMemo(()=>({cart,wishlist,orders,addToBag,updateQty,setCart,toggleWishlist,setOrders}),[cart,wishlist,orders]);
 return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}
export const useStore=()=>useContext(StoreContext);
