/* =====================================================================
   2. Le illustrazioni: disegnate dal codice, una per proposta
   ===================================================================== */

if(!CanvasRenderingContext2D.prototype.roundRect){
  CanvasRenderingContext2D.prototype.roundRect=function(x,y,w,h,r){
    const a=Array.isArray(r)?r:[r,r,r,r];const m=Math.min(w,h)/2;
    const q=a.map(v=>Math.min(v||0,m));
    this.moveTo(x+q[0],y);this.lineTo(x+w-q[1],y);this.quadraticCurveTo(x+w,y,x+w,y+q[1]);
    this.lineTo(x+w,y+h-q[2]);this.quadraticCurveTo(x+w,y+h,x+w-q[2],y+h);
    this.lineTo(x+q[3],y+h);this.quadraticCurveTo(x,y+h,x,y+h-q[3]);
    this.lineTo(x,y+q[0]);this.quadraticCurveTo(x,y,x+q[0],y);return this;};
}
function seme(s){return function(){s|=0;s=s+0x6D2B79F5|0;let t=Math.imul(s^s>>>15,1|s);
  t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}


/* ---------------------------------------------------------------------
   Nuova identita (01/10/2026): i colori scritti in dati.js sono quelli di
   settembre. Qui si rimappano per ruolo sulla palette del Brand Book:
   cieli blu #293B8E e derivati scuri, soli gialli #F7B807, terre blu notte,
   figure bianche, gialle o verdi. I fatti in dati.js restano intatti.
   --------------------------------------------------------------------- */
const VERDE_FIG="#3BAA6C";           // verde del brand schiarito, per stare sul blu
const RIMAPPA={
  cielo:{"#1B4332":"#293B8E","#0A2016":"#141C45","#14405B":"#34489E","#08202F":"#18225A",
         "#1D5C8A":"#4A63C0","#0A2433":"#1F2D6E","#2A2118":"#1F2D6E","#0F1A14":"#0E1433",
         "#E0A100":"#293B8E","#7A3F18":"#D9A43A","#6B4A18":"#C99A2E"},
  sole:{"#E0A100":"#F7B807","#FFD780":"#FFE07A","#C8443A":"#C0202F","#3FBE7E":VERDE_FIG,"#F2F7F0":"#FFFFFF"},
  terra:{"#071710":"#10173F","#061722":"#0D1335","#062031":"#111A48","#0A1710":"#0E1433",
         "#1B1710":"#141C45","#20180E":"#141C45"},
  onde:{"#2E7FB5":"#7486D6"},
  flussi:{"#4FA3D9":"#9AA8E8"},
  barre:{"#3FBE7E":VERDE_FIG,"#F2F7F0":"#FFFFFF"},
  calore:{"#C8443A":"#C0202F"},
  figura:{"#E0A100":"#F7B807","#3FBE7E":VERDE_FIG,"#F2F7F0":"#FFFFFF"}
};
const FIG_VERDI={albero:1,germoglio:1,terrazze:1};
function luce(hex){const n=parseInt(hex.slice(1),16),r=(n>>16)&255,g=(n>>8)&255,b=n&255;
  return (0.2126*r+0.7152*g+0.0722*b)/255;}
function rimappa(ruolo,col,tipo){
  if(!col)return col;const k=col.toUpperCase(),m=RIMAPPA[ruolo]||{};
  if(m[k])return m[k];
  if(ruolo==="figura")return luce(k)<.3?(FIG_VERDI[tipo]?VERDE_FIG:"#FFFFFF"):k;
  return k;}
// dettagli dentro le figure: scuri sulle figure chiare, chiari su quelle scure
function contro(col,a){return luce(col)>.5?"rgba(20,28,69,"+a+")":"rgba(255,255,255,"+a+")";}

const G = {
  omino(c,x,y,s,col){c.fillStyle=col;const h=54*s;
    c.beginPath();c.arc(x,y-h*.86,h*.15,0,7);c.fill();
    c.beginPath();c.moveTo(x-h*.2,y);c.lineTo(x-h*.14,y-h*.66);c.lineTo(x+h*.14,y-h*.66);
    c.lineTo(x+h*.2,y);c.closePath();c.fill();
    c.fillRect(x-h*.05,y-h*.12,h*.1,h*.12);},
  robot(c,x,y,s,col){c.fillStyle=col;const h=58*s;
    c.fillRect(x-h*.02,y-h*1.18,h*.04,h*.14);
    c.beginPath();c.arc(x,y-h*1.2,h*.05,0,7);c.fill();
    c.fillRect(x-h*.17,y-h*1.06,h*.34,h*.26);
    c.fillRect(x-h*.22,y-h*.74,h*.44,h*.54);
    c.fillRect(x+h*.22,y-h*.7,h*.3,h*.1);
    c.fillRect(x+h*.44,y-h*.68,h*.08,h*.3);
    c.fillRect(x-h*.18,y-h*.2,h*.12,h*.2);c.fillRect(x+h*.06,y-h*.2,h*.12,h*.2);},
  casa(c,x,y,s,col){c.fillStyle=col;const h=46*s;
    c.fillRect(x-h*.4,y-h*.7,h*.8,h*.7);
    c.beginPath();c.moveTo(x-h*.5,y-h*.7);c.lineTo(x,y-h*1.08);c.lineTo(x+h*.5,y-h*.7);c.closePath();c.fill();},
  capannone(c,x,y,s,col){c.fillStyle=col;const h=52*s;
    c.fillRect(x-h*.62,y-h*.62,h*1.24,h*.62);
    for(let i=0;i<4;i++){c.beginPath();c.moveTo(x-h*.62+i*h*.31,y-h*.62);
      c.lineTo(x-h*.62+i*h*.31+h*.155,y-h*.8);c.lineTo(x-h*.62+(i+1)*h*.31,y-h*.62);c.closePath();c.fill();}},
  albero(c,x,y,s,col){c.fillStyle=col;const h=54*s;
    c.fillRect(x-h*.05,y-h*.5,h*.1,h*.5);
    c.beginPath();c.arc(x,y-h*.72,h*.26,0,7);c.fill();
    c.beginPath();c.arc(x-h*.2,y-h*.56,h*.19,0,7);c.fill();
    c.beginPath();c.arc(x+h*.2,y-h*.58,h*.2,0,7);c.fill();},
  germoglio(c,x,y,s,col){c.strokeStyle=col;c.fillStyle=col;const h=50*s;
    c.lineWidth=Math.max(2,h*.055);c.lineCap="round";
    c.beginPath();c.moveTo(x,y);c.lineTo(x,y-h*.72);c.stroke();
    c.beginPath();c.ellipse(x-h*.2,y-h*.6,h*.21,h*.1,-.5,0,7);c.fill();
    c.beginPath();c.ellipse(x+h*.2,y-h*.44,h*.19,h*.09,.5,0,7);c.fill();},
  antenna(c,x,y,s,col){c.fillStyle=col;c.strokeStyle=col;const h=78*s;
    c.lineWidth=Math.max(2,h*.04);
    c.beginPath();c.moveTo(x-h*.16,y);c.lineTo(x-h*.04,y-h);c.lineTo(x+h*.04,y-h);
    c.lineTo(x+h*.16,y);c.closePath();c.fill();
    c.beginPath();c.moveTo(x-h*.12,y-h*.26);c.lineTo(x+h*.12,y-h*.26);
    c.moveTo(x-h*.09,y-h*.52);c.lineTo(x+h*.09,y-h*.52);c.stroke();
    c.beginPath();c.arc(x,y-h*1.06,h*.05,0,7);c.fill();},
  server(c,x,y,s,col){c.fillStyle=col;const h=62*s;
    c.fillRect(x-h*.28,y-h*.96,h*.56,h*.96);
    c.fillStyle=contro(col,.45);
    for(let i=0;i<4;i++)c.fillRect(x-h*.2,y-h*.86+i*h*.22,h*.4,h*.05);},
  schermo(c,x,y,s,col){c.fillStyle=col;const h=58*s;
    c.fillRect(x-h*.46,y-h*.84,h*.92,h*.62);
    c.fillRect(x-h*.07,y-h*.22,h*.14,h*.14);
    c.fillRect(x-h*.26,y-h*.09,h*.52,h*.09);
    c.fillStyle=contro(col,.22);c.fillRect(x-h*.4,y-h*.78,h*.8,h*.5);},
  telefono(c,x,y,s,col){c.fillStyle=col;const h=64*s;
    const w=h*.46;c.beginPath();c.roundRect(x-w/2,y-h*.92,w,h*.92,h*.07);c.fill();
    c.fillStyle=contro(col,.25);
    c.beginPath();c.roundRect(x-w/2+h*.05,y-h*.84,w-h*.1,h*.7,h*.03);c.fill();},
  ingranaggio(c,x,y,s,col){c.fillStyle=col;const r=26*s;
    c.save();c.translate(x,y-r*1.1);
    for(let i=0;i<8;i++){c.rotate(Math.PI/4);c.fillRect(-r*.16,-r*1.32,r*.32,r*.42);}
    c.beginPath();c.arc(0,0,r,0,7);c.fill();
    c.globalCompositeOperation="destination-out";
    c.beginPath();c.arc(0,0,r*.38,0,7);c.fill();c.restore();
    c.globalCompositeOperation="source-over";},
  bilancia(c,x,y,s,col){c.fillStyle=col;c.strokeStyle=col;const h=76*s;
    c.lineWidth=Math.max(2,h*.035);c.lineCap="round";
    c.fillRect(x-h*.04,y-h*.96,h*.08,h*.96);
    c.fillRect(x-h*.26,y,h*.52,h*.06);
    c.beginPath();c.moveTo(x-h*.42,y-h*.9);c.lineTo(x+h*.42,y-h*.9);c.stroke();
    [-1,1].forEach(d=>{c.beginPath();c.moveTo(x+d*h*.42,y-h*.9);c.lineTo(x+d*h*.42,y-h*.72);c.stroke();
      c.beginPath();c.moveTo(x+d*h*.42-h*.16,y-h*.72);c.lineTo(x+d*h*.42+h*.16,y-h*.72);
      c.lineTo(x+d*h*.42,y-h*.54);c.closePath();c.fill();});},
  assemblea(c,x,y,s,col){c.fillStyle=col;const R=64*s;
    for(let r=0;r<3;r++){const rad=R*(.5+r*.26),n=6+r*3;
      for(let i=0;i<n;i++){const a=Math.PI+ (i+.5)*(Math.PI/n);
        const px=x+Math.cos(a)*rad, py=y+Math.sin(a)*rad*.62;
        c.beginPath();c.arc(px,py-R*.06,R*.075,0,7);c.fill();
        c.fillRect(px-R*.07,py+R*.02,R*.14,R*.14);}}
    c.fillRect(x-R*.2,y-R*.06,R*.4,R*.08);},
  terrazze(c,x,y,s,col){c.fillStyle=col;const h=80*s;
    for(let i=0;i<5;i++){const w=h*(1.3-i*.2);
      c.fillRect(x-w/2,y-h*.18*(i+1),w,h*.12);}},
  treno(c,x,y,s,col){c.fillStyle=col;const h=52*s;
    c.beginPath();c.roundRect(x-h*1.1,y-h*.72,h*2.2,h*.6,[h*.3,h*.1,h*.06,h*.06]);c.fill();
    c.fillStyle=contro(col,.4);
    for(let i=0;i<4;i++)c.fillRect(x-h*.82+i*h*.5,y-h*.6,h*.3,h*.22);
    c.fillStyle=col;
    c.fillRect(x-h*1.1,y-h*.12,h*2.2,h*.08);
    [-.7,-.3,.4,.8].forEach(d=>{c.beginPath();c.arc(x+d*h,y-h*.02,h*.1,0,7);c.fill();});},
  scoglio(c,x,y,s,col){c.fillStyle=col;const h=70*s;
    c.beginPath();c.moveTo(x-h*.6,y);c.lineTo(x-h*.2,y-h*.82);c.lineTo(x+h*.08,y-h*.5);
    c.lineTo(x+h*.34,y-h*.98);c.lineTo(x+h*.7,y);c.closePath();c.fill();},
  barca(c,x,y,s,col){c.fillStyle=col;const h=40*s;
    c.beginPath();c.moveTo(x-h*.6,y-h*.1);c.lineTo(x+h*.6,y-h*.1);c.lineTo(x+h*.4,y+h*.14);
    c.lineTo(x-h*.4,y+h*.14);c.closePath();c.fill();
    c.beginPath();c.moveTo(x,y-h*.14);c.lineTo(x,y-h*.9);c.lineTo(x+h*.44,y-h*.2);c.closePath();c.fill();},
  foglio(c,x,y,s,col){c.fillStyle=col;const h=86*s;
    c.fillRect(x-h*.36,y-h*.98,h*.72,h*.98);
    c.fillStyle=contro(col,.5);
    for(let i=0;i<5;i++)c.fillRect(x-h*.26,y-h*.86+i*h*.13,h*(i===0?.5:.42),h*.035);},
  bersaglio(c,x,y,s,col){const R=52*s;c.strokeStyle=col;c.fillStyle=col;
    for(let i=3;i>0;i--){c.lineWidth=Math.max(2,R*.07);
      c.beginPath();c.arc(x,y-R*.9,R*i*.3,0,7);c.stroke();}
    c.beginPath();c.arc(x,y-R*.9,R*.1,0,7);c.fill();}
};

function disegna(cv,a,idx){
  const w=cv.clientWidth||320,h=cv.clientHeight||260;
  if(!w||!h)return;
  const dpr=Math.min(2,window.devicePixelRatio||1);
  cv.width=Math.round(w*dpr);cv.height=Math.round(h*dpr);
  const c=cv.getContext("2d");c.setTransform(dpr,0,0,dpr,0,0);
  const rnd=seme(idx*9871+17);
  // carta alta a tutto schermo: l'orizzonte resta nella metà alta,
  // sotto ci passa la sfumatura col testo
  const oy=h*(.30+(a.oriz||.78)*.42);

  const g=c.createLinearGradient(0,0,0,h);
  g.addColorStop(0,rimappa("cielo",a.cielo[0]));g.addColorStop(1,rimappa("cielo",a.cielo[1]));
  c.fillStyle=g;c.fillRect(0,0,w,h);

  if(a.trama==="punti"){c.fillStyle="rgba(255,255,255,.18)";
    for(let i=0;i<150;i++){const px=rnd()*w,py=rnd()*oy,r=rnd()*1.5+.4;
      c.globalAlpha=.06+rnd()*.3;c.beginPath();c.arc(px,py,r,0,7);c.fill();}
    c.globalAlpha=1;}
  if(a.trama==="righe"){c.strokeStyle="rgba(255,255,255,.12)";c.lineWidth=1;
    for(let yy=6;yy<oy;yy+=9){c.beginPath();c.moveTo(0,yy);c.lineTo(w,yy);c.stroke();}}

  if(a.sole){const[col,fx,fy,fr]=a.sole;
    c.fillStyle=rimappa("sole",col);c.globalAlpha=.94;
    c.beginPath();c.arc(w*fx,h*fy,Math.min(w,h)*fr,0,7);c.fill();c.globalAlpha=1;}

  if(a.calore){c.strokeStyle=rimappa("calore",a.calore);c.lineWidth=2.2;c.globalAlpha=.55;
    for(let i=0;i<3;i++){const bx=w*.28+(i-1)*13;c.beginPath();
      for(let t=0;t<=1;t+=.1)c.lineTo(bx+Math.sin(t*7+i)*7,oy-h*.34-t*h*.3);
      c.stroke();}c.globalAlpha=1;}

  if(a.flussi){c.strokeStyle=rimappa("flussi",a.flussi);c.globalAlpha=.5;c.lineWidth=1.6;
    for(let i=0;i<9;i++){const y0=oy-6-i*(oy*.09);c.beginPath();
      for(let x=0;x<=w;x+=14)c.lineTo(x,y0+Math.sin((x/w)*6+i*1.3)*5);
      c.stroke();}c.globalAlpha=1;}

  if(a.barre){c.fillStyle=rimappa("barre",a.barre);c.globalAlpha=.75;
    const n=7,bw=w*.055;
    for(let i=0;i<n;i++){const bh=h*(.06+Math.abs(Math.sin(i*1.7+idx))*.2);
      c.fillRect(w*.14+i*(bw*1.7),oy-bh-h*.02,bw,bh);}
    c.globalAlpha=1;}

  c.fillStyle=rimappa("terra",a.terra);
  c.beginPath();c.moveTo(0,h);c.lineTo(0,oy+4);
  c.quadraticCurveTo(w*.5,oy-7,w,oy+3);c.lineTo(w,h);c.closePath();c.fill();

  if(a.onde){c.strokeStyle=rimappa("onde",a.onde);c.lineWidth=2;c.globalAlpha=.7;
    for(let i=0;i<7;i++){const yy=oy+10+i*((h-oy)/7);c.beginPath();
      for(let x=0;x<=w;x+=10)c.lineTo(x,yy+Math.sin((x/w)*9+i)*3.2);
      c.stroke();}c.globalAlpha=1;}

  (a.figure||[]).forEach(([tipo,fx,sc,col])=>{
    const f=G[tipo];if(!f)return;
    const s=sc*(Math.min(w,h*.62)/210);
    c.save();f(c,w*fx,oy+2,s,rimappa("figura",col,tipo));c.restore();});

  c.fillStyle="rgba(14,20,56,.5)";
  for(let i=0;i<260;i++){const px=rnd()*w,py=rnd()*h;
    c.globalAlpha=rnd()*.07;c.fillRect(px,py,1.3,1.3);}
  c.globalAlpha=1;
}
