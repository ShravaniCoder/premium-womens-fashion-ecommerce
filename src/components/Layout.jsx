import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { Search, UserRound, Heart, ShoppingBag, Menu, X, ArrowUpRight, ArrowRight } from "lucide-react";
import { useStore } from "../store";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop All" },
  { to: "/collections", label: "Collections" },
  { to: "/jewellery", label: "Jewellery" },
  { to: "/apparel", label: "Apparel" },
  { to: "/about", label: "About" }
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [term, setTerm] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { wishlist, cart } = useStore();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearch(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return <>
    <div className="announcement">A considered wardrobe, delivered with care <span>Complimentary shipping over ₹3,500</span></div>
    <header className={`site-header ${scrolled ? "is-scrolled" : ""} ${open ? "menu-is-open" : ""}`}>
      <button className="icon-button mobile-menu" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className={`menu-glyph ${open ? "is-open" : ""}`}>{open ? <X /> : <Menu />}</span>
      </button>
      <Link className="wordmark" to="/" aria-label="Atelier Lune home">ATELIER <i>LUNE</i><small>MODERN HEIRLOOMS</small></Link>
      <nav className="desktop-nav" aria-label="Main navigation">{navItems.map(n => <NavLink key={n.to} to={n.to} end={n.to === "/"}>{n.label}</NavLink>)}</nav>
      <div className="header-actions">
        <button className={`icon-button ${search ? "action-active" : ""}`} aria-label="Search" aria-expanded={search} onClick={() => { setSearch(!search); setOpen(false); }}><Search /></button>
        <Link className="icon-button" aria-label="Account" to="/account"><UserRound /></Link>
        <Link className="icon-button with-count" aria-label="Wishlist" to="/wishlist"><Heart /><span>{wishlist.length}</span></Link>
        <Link className="icon-button with-count" aria-label="Shopping bag" to="/cart"><ShoppingBag /><span>{cart.reduce((n, x) => n + x.qty, 0)}</span></Link>
      </div>
    </header>

    {search && <form className="search-strip" onSubmit={e => { e.preventDefault(); window.location.href = `/shop?search=${encodeURIComponent(term)}`; }}>
      <Search size={18} /><input autoFocus value={term} onChange={e => setTerm(e.target.value)} placeholder="Search jewellery, apparel, collections…" aria-label="Search products" />
      <button type="submit">Search <ArrowRight size={14}/></button>
      <button type="button" className="search-close" aria-label="Close search" onClick={() => setSearch(false)}><X size={17}/></button>
    </form>}

    <div className={`mobile-menu-backdrop ${open ? "is-visible" : ""}`} onClick={() => setOpen(false)} aria-hidden="true" />
    <nav className={`mobile-nav ${open ? "is-open" : ""}`} aria-label="Mobile navigation" aria-hidden={!open}>
      <div className="mobile-nav-top"><span className="eyebrow">EXPLORE ATELIER LUNE</span><span className="mobile-nav-count">0{navItems.length}</span></div>
      {navItems.map((n, i) => <NavLink onClick={() => setOpen(false)} key={n.to} to={n.to} end={n.to === "/"} style={{ "--nav-index": i }}>
        <span className="mobile-nav-number">0{i + 1}</span><span className="mobile-nav-label">{n.label}</span><ArrowUpRight className="mobile-nav-arrow" size={19}/>
      </NavLink>)}
      <div className="mobile-nav-feature">
        <img src="/images/jewellery-editorial.jpg" alt="" />
        <div><span>THE LATEST EDIT</span><b>Small details. Lasting impressions.</b><Link to="/collections" onClick={() => setOpen(false)}>Discover collections <ArrowRight size={14}/></Link></div>
      </div>
      <div className="mobile-nav-bottom"><span>MODERN HEIRLOOMS</span><Link to="/contact" onClick={() => setOpen(false)}>Need help? Contact us</Link></div>
    </nav>
  </>;
}

export function Footer() {
  return <footer className="footer"><div className="footer-main"><div><Link className="wordmark footer-mark" to="/">ATELIER <i>LUNE</i><small>MODERN HEIRLOOMS</small></Link><p>Pieces to keep. Clothes to live in.<br/>A little more considered, every day.</p></div><div><h4>EXPLORE</h4><Link to="/shop">Shop All</Link><Link to="/collections">Collections</Link><Link to="/jewellery">Jewellery</Link><Link to="/apparel">Apparel</Link></div><div><h4>HELP</h4><Link to="/contact">Contact Us</Link><Link to="/faq">FAQs & Policies</Link><Link to="/account">My Account</Link><Link to="/wishlist">Wishlist</Link></div><div><h4>THE LUNE LETTER</h4><p>New edits, thoughtful styling and first access.</p><form className="newsletter" onSubmit={e=>{e.preventDefault();alert("Thank you for joining The Lune Letter.");e.target.reset()}}><input type="email" required placeholder="Your email address"/><button aria-label="Subscribe">→</button></form></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Atelier Lune</span><span>Made for your own kind of timeless.</span><Link to="/faq">Privacy · Terms</Link></div></footer>
}
export default function Layout() {
  const location = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [location.pathname]);
  return <><Header/><main key={location.pathname}><Outlet/></main><Footer/></>;
}
