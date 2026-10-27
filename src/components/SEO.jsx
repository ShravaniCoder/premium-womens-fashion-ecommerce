import { Helmet } from "react-helmet-async";
export default function SEO({title,description,canonical}) {
  const site = "https://www.example.com";
  return <Helmet>
    <title>{title ? `${title} | Atelier Lune` : "Atelier Lune — Modern Heirlooms & Considered Wardrobe"}</title>
    <meta name="description" content={description || "Discover considered fashion jewellery and contemporary womenswear at Atelier Lune."}/>
    <meta name="robots" content="index,follow,max-image-preview:large"/>
    <link rel="canonical" href={canonical ? `${site}${canonical}` : site + window.location.pathname}/>
    <meta property="og:site_name" content="Atelier Lune"/>
    <meta property="og:title" content={title || "Atelier Lune — Modern Heirlooms & Considered Wardrobe"}/>
    <meta property="og:description" content={description || "Fashion jewellery and contemporary womenswear, considered."}/>
    <meta property="og:type" content="website"/>
  </Helmet>;
}
