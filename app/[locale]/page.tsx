export default function Home() {
  return (
    <main style={{minHeight:"100vh",background:"#0d0d0d",color:"#fff"}}>
      <section style={{padding:"48px 24px",maxWidth:960,margin:"0 auto"}}>
        <h1 style={{fontSize:36,color:"#c7a249",marginBottom:12}}>Prime Legal & Consulting</h1>
        <p style={{opacity:.85,marginBottom:24}}>
          Hüquq, maliyyə, HR və tədbir idarəçiliyi üzrə peşəkar konsaltinq.
        </p>

        <div style={{display:"grid",gap:16,gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))"}}>
          <img src="/images/hero.jpg" alt="Hero" style={{width:"100%",height:180,objectFit:"cover",borderRadius:12}}/>
          <img src="/images/legal.jpg" alt="Legal" style={{width:"100%",height:180,objectFit:"cover",borderRadius:12}}/>
          <img src="/images/finance.jpg" alt="Finance" style={{width:"100%",height:180,objectFit:"cover",borderRadius:12}}/>
          <img src="/images/hr.jpg" alt="HR" style={{width:"100%",height:180,objectFit:"cover",borderRadius:12}}/>
          <img src="/images/event.jpg" alt="Event" style={{width:"100%",height:180,objectFit:"cover",borderRadius:12}}/>
        </div>
      </section>
    </main>
  );
}
