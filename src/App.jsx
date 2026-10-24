import {useState} from 'react';
import {ArrowRight,ArrowUpRight,BadgeCheck,Check,ChevronDown,Heart,Home,KeyRound,MapPin,Menu,MessageCircle,Search,ShieldCheck,Sparkles,Users,Wallet,X} from 'lucide-react';

const site='https://www.vassgo.com';
const areas=['Vaishali Nagar','Mansarovar','C-Scheme','Jagatpura','Malviya Nagar','Civil Lines'];
// Sample listings are design placeholders, NOT actual inventory.
const properties=[
 {id:1,name:'The sunlit city apartment',area:'Vaishali Nagar',bhk:'2 BHK',rent:18000,space:'1,120 sq.ft',photo:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1100&q=85',tag:'A bright beginning'},
 {id:2,name:'A little more room to breathe',area:'Mansarovar',bhk:'1 BHK',rent:12500,space:'740 sq.ft',photo:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1100&q=85',tag:'Easy city living'},
 {id:3,name:'Made for your next chapter',area:'Jagatpura',bhk:'3 BHK',rent:28500,space:'1,680 sq.ft',photo:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1100&q=85',tag:'Family favourite'}
];
const faq=[
 ['Does VASSGO charge brokerage?','VASSGO currently promotes a zero-brokerage rental experience with direct owner connections. Confirm the terms of any individual property before proceeding.'],
 ['How are properties verified?','VASSGO describes document, owner, photo and availability checks to help people search with confidence. Details of verification should be checked for each listing.'],
 ['Can I list my property for free?','Yes. The current VASSGO website offers free Jaipur property listing. Use the owner sign-up link to get started.'],
 ['Where in Jaipur can I search?','Popular locations include Vaishali Nagar, Mansarovar, C-Scheme, Jagatpura, Malviya Nagar and Civil Lines, among others.']
];

function Logo({light=false}){
 return <a className={'logo '+(light?'light':'')} href="#top" aria-label="VASSGO homepage">
   {/* For the actual logo, replace the following two spans with:
       <img src="/images/vassgo-logo.png" alt="VASSGO" /> */}
   <span className="logo-symbol"><MapPin size={23}/></span><span>VASSGO<span className="logo-dot">.</span></span>
 </a>
}
function Header(){
 const [open,setOpen]=useState(false);
 return <header className="header" id="top"><div className="container header-inner">
  <Logo/>
  <nav className={'nav '+(open?'open':'')} aria-label="Primary navigation">
   {[['Explore homes','#homes'],['Why VASSGO','#why'],['Locations','#areas'],['How it works','#steps'],['FAQs','#faq']].map(([label,url])=><a href={url} key={label} onClick={()=>setOpen(false)}>{label}</a>)}
  </nav>
  <div className="header-right"><a className="login" href={site+'/login'}>Log in</a><a href={site+'/signup?role=landlord'} className="btn btn-green btn-small">List a property <ArrowUpRight size={16}/></a></div>
  <button className="menu-toggle" aria-label="Toggle menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div></header>
}
function Title({eyebrow,children,description,center=false}){
 return <div className={'section-title '+(center?'center':'')}><div className="eyebrow"><span/> {eyebrow}</div><h2>{children}</h2>{description&&<p>{description}</p>}</div>
}
function Hero({location,setLocation,bhk,setBhk,budget,setBudget,search}){
 return <section className="hero">
  <div className="hero-image"/><div className="hero-overlay"/>
  <div className="container hero-copy"><p className="hero-kicker"><span/> MADE FOR JAIPUR. MADE FOR YOU.</p><h1>Find a place you'll <em>love</em> to call home.</h1><p className="hero-description">Beautiful spaces. Verified owners. Zero brokerage.<br/>A better way to find your next home in Jaipur.</p><div className="hero-tags"><span><Check size={15}/> Verified homes</span><span><Check size={15}/> Direct owners</span><span><Check size={15}/> No brokerage</span></div></div>
  <div className="container search-position"><div className="search-box"><div className="search-caption"><strong><Search size={17}/> Start your home search</strong><span><MapPin size={15}/> Jaipur, Rajasthan</span></div>
   <form onSubmit={e=>{e.preventDefault();search()}} className="search-form">
    <div className="form-control location"><MapPin size={21}/><div><label htmlFor="location">YOUR PREFERRED LOCATION</label><input id="location" list="area-options" placeholder="Search a locality in Jaipur" value={location} onChange={e=>setLocation(e.target.value)}/><datalist id="area-options">{areas.map(a=><option key={a} value={a}/>)}</datalist></div></div>
    <div className="form-control"><Home size={21}/><div><label htmlFor="bhk">PROPERTY TYPE</label><select id="bhk" value={bhk} onChange={e=>setBhk(e.target.value)}><option value="">Any BHK / Room</option><option>Single Room</option><option>1 BHK</option><option>2 BHK</option><option>3 BHK</option></select></div></div>
    <div className="form-control"><Wallet size={21}/><div><label htmlFor="budget">MONTHLY BUDGET</label><select id="budget" value={budget} onChange={e=>setBudget(e.target.value)}><option value="">Any budget</option><option value="10000">Under ₹10,000</option><option value="20000">Under ₹20,000</option><option value="35000">Under ₹35,000</option><option value="60000">Under ₹60,000</option></select></div></div>
    <button className="search-button" type="submit"><Search size={19}/> Find my home</button>
   </form></div></div>
 </section>
}
function TrustBar(){return <div className="trust-bar"><div className="container trust-inner"><span><ShieldCheck/> Thoughtfully verified</span><i/><span><Users/> Connect directly</span><i/><span><Wallet/> Zero brokerage</span><i/><span><MapPin/> Exclusively Jaipur</span></div></div>}
function Listings({items,saved,setSaved,applied,clear}){
 return <section className="section listings" id="homes"><div className="container"><div className="section-row"><Title eyebrow="A SPACE FOR EVERY STORY" description="Discover what a more beautiful home search could look like. Explore VASSGO for real available homes.">Homes that feel <em>like yours.</em></Title><a className="section-link" href={site+'/search'}>Browse actual homes <ArrowUpRight size={18}/></a></div>
 <p className="sample-alert"><Sparkles size={16}/> Design preview only — sample photos, properties and prices, not live listings.</p>
 {items.length?<div className="property-grid">{items.map(p=><article className="property" key={p.id}><div className="property-picture"><img src={p.photo} alt={'Illustrative interior for '+p.name} loading="lazy"/><span className="photo-badge"><Sparkles size={13}/>{p.tag}</span><button className={'save '+(saved.includes(p.id)?'active':'')} onClick={()=>setSaved(s=>s.includes(p.id)?s.filter(x=>x!==p.id):[...s,p.id])} aria-label="Save illustrative home"><Heart size={20} fill={saved.includes(p.id)?'currentColor':'none'}/></button></div><div className="property-details"><p className="property-location"><MapPin size={14}/>{p.area}, Jaipur</p><h3>{p.name}</h3><div className="property-info"><span><Home size={16}/>{p.bhk}</span><span>{p.space}</span></div><div className="property-bottom"><div><strong>₹{p.rent.toLocaleString('en-IN')}</strong><small> / month</small></div><a href={site+'/search'}>Explore <ArrowUpRight size={17}/></a></div></div></article>)}</div>:<div className="empty-state"><Search size={28}/><h3>No matching preview homes</h3><p>Try another location or browse VASSGO's live listings.</p><button className="btn btn-green" onClick={clear}>Clear filters</button></div>}
 {applied&&<div className="result-note">Showing {items.length} illustrative result{items.length===1?'':'s'}. <button onClick={clear}>Reset search</button></div>}
 </div></section>
}
function Areas({choose}){
 const choices=[{name:'Vaishali Nagar',subtitle:'Connected & full of life',photo:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=950&q=85'},{name:'Mansarovar',subtitle:'Comfort in every corner',photo:'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=950&q=85'},{name:'Jagatpura',subtitle:'Space for your next chapter',photo:'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=950&q=85'}];
 return <section className="section area-section" id="areas"><div className="container"><div className="section-row"><Title eyebrow="EXPLORE YOUR CITY" description="Every neighbourhood has its own rhythm. Find the one that feels like yours.">Your kind of <em>neighbourhood.</em></Title><a className="section-link" href={site+'/search'}>Explore all areas <ArrowRight size={18}/></a></div><div className="areas-grid">{choices.map((a,i)=><a href="#homes" key={a.name} className="area-card" onClick={()=>choose(a.name)}><img src={a.photo} alt={'Illustrative property for '+a.name} loading="lazy"/><span className="area-dark"/><span className="area-count">0{i+1} / JAIPUR</span><div className="area-bottom"><div><h3>{a.name}</h3><p>{a.subtitle}</p></div><span><ArrowUpRight/></span></div></a>)}</div><div className="also"><span>Also explore</span>{['C-Scheme','Malviya Nagar','Civil Lines'].map(a=><a key={a} href="#homes" onClick={()=>choose(a)}>{a}<ArrowUpRight size={13}/></a>)}</div></div></section>
}
function Why(){
 const cards=[{icon:ShieldCheck,title:'Verified with care',text:'Property details and owners are checked to support confident decisions.'},{icon:Wallet,title:'Zero brokerage',text:'Connect with owners directly, without middleman commission.'},{icon:MessageCircle,title:'Real conversations',text:'Get the answers you need by speaking directly with property owners.'},{icon:MapPin,title:'Locally focused',text:'A platform designed around Jaipur and the way its people live.'}];
 return <section className="section why" id="why"><div className="container why-layout"><div className="why-left"><Title eyebrow="THE VASSGO DIFFERENCE" description="Home hunting should be exciting, not exhausting. A simpler, more transparent rental experience starts here.">Less searching.<br/><em>More belonging.</em></Title><a href={site+'/how-it-works'} className="btn btn-outline-light">Discover our approach <ArrowUpRight size={17}/></a><div className="key-note"><KeyRound size={33}/><span>Better renting begins<br/>with better trust.</span></div></div><div className="why-grid">{cards.map((c,i)=><div className="why-card" key={c.title}><div className="why-card-head"><c.icon size={27}/><span>0{i+1}</span></div><h3>{c.title}</h3><p>{c.text}</p></div>)}</div></div></section>
}
function Steps(){
 const steps=[{icon:Search,title:'Explore',desc:'Filter homes by locality, property type and monthly budget.'},{icon:BadgeCheck,title:'Connect',desc:'Check the details and start a direct conversation with owners.'},{icon:KeyRound,title:'Settle in',desc:'Find the right fit, arrange the details and make it yours.'}];
 return <section className="section steps" id="steps"><div className="container"><Title center eyebrow="YOUR NEXT CHAPTER STARTS HERE" description="Simple by design. Clear at every step.">Your next home in <em>three steps.</em></Title><div className="steps-grid">{steps.map((s,i)=><div className="step" key={s.title}><span className="step-number">0{i+1}</span><div className="step-circle"><s.icon size={30}/></div><h3>{s.title}</h3><p>{s.desc}</p>{i<2&&<ArrowRight className="step-arrow" size={25}/>}</div>)}</div></div></section>
}
function Owner(){
 return <section className="owner-section"><div className="container"><div className="owner-panel"><div className="owner-copy"><div className="eyebrow"><span/> FOR JAIPUR PROPERTY OWNERS</div><h2>Great homes deserve <em>great tenants.</em></h2><p>Have a place in Jaipur? List it for free, skip unwanted brokerage and connect directly with people looking for a home.</p><a className="btn btn-cream" href={site+'/signup?role=landlord'}>List your property free <ArrowUpRight size={17}/></a><div className="owner-points"><span><Check size={15}/> Free to list</span><span><Check size={15}/> Direct connections</span></div></div><div className="owner-photo" role="img" aria-label="Bright premium rental interior"/></div></div></section>
}
function FAQ(){
 const [open,setOpen]=useState(0);
 return <section className="section faq" id="faq"><div className="container faq-layout"><div><Title eyebrow="GOOD TO KNOW" description="A few things worth knowing before you find your place.">Questions? <em>We've got answers.</em></Title><a className="help-link" href="mailto:support@vassgo.com"><MessageCircle size={18}/> Need help? Contact the Jaipur team <ArrowUpRight size={16}/></a></div><div className="faq-list">{faq.map(([question,answer],i)=><div className={'faq-item '+(open===i?'selected':'')} key={question}><button onClick={()=>setOpen(open===i?-1:i)} aria-expanded={open===i}>{question}{open===i?<X size={18}/>:<ChevronDown size={18}/>}</button>{open===i&&<p>{answer}</p>}</div>)}</div></div></section>
}
function Footer(){
 return <footer className="footer"><div className="container"><div className="footer-top"><div className="footer-brand"><Logo light/><p>Beautiful spaces. Trusted connections. A more thoughtful way to find rental homes in Jaipur.</p><span><MapPin size={16}/> Proudly focused on Jaipur, Rajasthan</span></div><div className="footer-groups"><div><h4>Discover</h4><a href="#homes">Explore homes</a><a href="#areas">Neighbourhoods</a><a href="#why">Why VASSGO</a><a href="#steps">How it works</a></div><div><h4>Useful links</h4><a href={site+'/signup?role=landlord'}>List property</a><a href={site+'/login'}>Log in</a><a href={site+'/app/tenant/shortlist'}>Saved homes</a><a href="#faq">FAQs</a></div><div><h4>Get in touch</h4><a href="mailto:support@vassgo.com">support@vassgo.com</a><span>Jaipur, Rajasthan</span><a href={site+'/how-it-works'}>Verification policy</a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} VASSGO. All rights reserved.</span><div><a href={site+'/privacy'}>Privacy</a><a href={site+'/terms'}>Terms</a></div><span>Find a place to belong.</span></div></div></footer>
}
export default function App(){
 const [location,setLocation]=useState(''),[bhk,setBhk]=useState(''),[budget,setBudget]=useState(''),[filters,setFilters]=useState(null),[saved,setSaved]=useState([]);
 const search=()=>{setFilters({location:location.trim().toLowerCase(),bhk,budget:Number(budget)});document.getElementById('homes')?.scrollIntoView({behavior:'smooth'})};
 const clear=()=>{setFilters(null);setLocation('');setBhk('');setBudget('')};
 const choose=area=>{setLocation(area);setBhk('');setBudget('');setFilters({location:area.toLowerCase(),bhk:'',budget:0})};
 const items=filters?properties.filter(p=>(!filters.location||p.area.toLowerCase().includes(filters.location))&&(!filters.bhk||p.bhk===filters.bhk)&&(!filters.budget||p.rent<=filters.budget)):properties;
 return <><Header/><main><Hero {...{location,setLocation,bhk,setBhk,budget,setBudget,search}}/><TrustBar/><Listings {...{items,saved,setSaved,applied:!!filters,clear}}/><Areas choose={choose}/><Why/><Steps/><Owner/><FAQ/></main><Footer/></>;
}
