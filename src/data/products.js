const photo = (id, w=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
export const products = [
  {id:"ear-01",name:"Gold Teardrop Earrings",category:"Jewellery",type:"Earrings",price:2499,oldPrice:2999,tag:"Bestseller",image:photo("photo-1535632066927-ab7c9ab60908"),description:"A sculptural everyday statement in polished gold-tone finish.",colors:["Gold"],stock:true},
  {id:"neck-01",name:"Pearl Line Necklace",category:"Jewellery",type:"Necklace",price:3299,tag:"New in",image:photo("photo-1611591437281-460bfbe1220a"),description:"Softly luminous pearls meet a delicate gold-tone chain.",colors:["Gold"],stock:true},
  {id:"ring-01",name:"Sculpted Signet Ring",category:"Jewellery",type:"Rings",price:1899,image:photo("photo-1605100804763-247f67b3557e"),description:"A modern heirloom with a fluid, organic silhouette.",sizes:["6","7","8","9"],stock:true},
  {id:"brace-01",name:"Organic Link Bracelet",category:"Jewellery",type:"Bracelet",price:2199,image:photo("photo-1611652022419-a9419f74343d"),description:"A tactile bracelet designed to layer beautifully.",stock:true},
  {id:"top-01",name:"The Linen Shirt",category:"Apparel",type:"Tops",price:2799,image:photo("photo-1598554747436-c9293d6a588f"),description:"A relaxed linen-blend shirt with a clean, considered finish.",sizes:["XS","S","M","L","XL"],colors:["Ivory","Sand"],stock:true},
  {id:"dress-01",name:"Sculpted Midi Dress",category:"Apparel",type:"Dresses",price:4499,tag:"Limited edit",image:photo("photo-1595777457583-95e059d581b8"),description:"An effortless midi dress made for day-to-evening dressing.",sizes:["XS","S","M","L"],colors:["Black","Ivory"],stock:true},
  {id:"bottom-01",name:"Wide-Leg Tailored Trouser",category:"Apparel",type:"Bottoms",price:3499,image:photo("photo-1506629905607-d9b1b2e3d1e2"),description:"Fluid tailoring with a high waist and beautifully clean lines.",sizes:["XS","S","M","L","XL"],colors:["Stone"],stock:true},
  {id:"corset-01",name:"The Modern Corset Top",category:"Apparel",type:"Corsets",price:3199,tag:"New in",image:photo("photo-1551163943-3f6a855d1153"),description:"A refined structured top with a contemporary silhouette.",sizes:["XS","S","M","L"],colors:["Ivory"],stock:true},
  {id:"ear-02",name:"Pearl Drop Earrings",category:"Jewellery",type:"Earrings",price:2299,image:photo("photo-1630019852942-f89202989a59"),description:"Pearl drops with a graceful movement and a soft sheen.",stock:true},
  {id:"ring-02",name:"Everyday Gold Band",category:"Jewellery",type:"Rings",price:1599,image:photo("photo-1603561596112-0a132b757442"),description:"A minimal band that works alone or stacked.",sizes:["6","7","8","9"],stock:true},
  {id:"top-02",name:"Draped Evening Top",category:"Apparel",type:"Tops",price:2999,image:photo("photo-1566206091558-7f218b696731"),description:"Soft draping and subtle structure for elevated everyday wear.",sizes:["XS","S","M","L"],stock:true},
  {id:"brace-02",name:"Fine Chain Bracelet",category:"Jewellery",type:"Bracelet",price:1799,image:photo("photo-1573408301185-9146fe634ad0"),description:"A delicate chain with just the right amount of shine.",stock:true}
];
export const collections = [
  {slug:"the-everyday-edit",title:"The Everyday Edit",eyebrow:"01 / EVERYDAY ICONS",copy:"Thoughtful pieces for the rituals that make a day yours.",image:"/images/jewellery-editorial.jpg",ids:["ear-01","neck-01","ring-02","top-01"]},
  {slug:"modern-minimal",title:"Modern Minimal",eyebrow:"02 / LESS, CONSIDERED",copy:"Clean lines, quiet confidence and pieces that work harder.",image:"/images/apparel-editorial.jpg",ids:["ring-01","top-01","bottom-01","brace-02"]},
  {slug:"festive-glam",title:"Festive Glam",eyebrow:"03 / THE OCCASION",copy:"A little light, a little drama, a lot of personality.",image:"/images/details-editorial.jpg",ids:["ear-02","dress-01","neck-01","corset-01"]},
  {slug:"soft-structure",title:"Soft Structure",eyebrow:"04 / FORM & FEEL",copy:"Modern silhouettes and tactile details, made to be worn.",image:"/images/hero-editorial.jpg",ids:["corset-01","dress-01","bottom-01","ring-01"]}
];
export const money = n => new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(n);
