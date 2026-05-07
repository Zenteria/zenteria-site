"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showProfile, setShowProfile] = useState(false);
  const [isAdminPanelOpen, setIsAdminPanelOpen] = useState(false);
  
  // Kullanıcı Verisi
  const [user, setUser] = useState({
    username: "MELIODAS_ROOT",
    rank: "KURUCU",
    balance: 7500.00,
    cart: 2
  });

  // Destek Talepleri State
  const [tickets, setTickets] = useState([
    { id: 1, user: "Player_Z", msg: "Kasaba claim hatası alıyorum.", status: "Bekliyor" },
    { id: 2, user: "DarkKnight", msg: "VIP rütbem gelmedi.", status: "İnceleniyor" }
  ]);

  // Admin Kontrolü
  const isOwner = user.username === "MELIODAS_ROOT";

  const renderContent = () => {
    // ADMIN PANELİ (SADECE MELIODAS_ROOT)
    if (isAdminPanelOpen && isOwner) {
      return (
        <div className="max-w-5xl mx-auto space-y-8 animate-in zoom-in duration-500 text-left">
           <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <h2 className="text-4xl font-black italic uppercase text-red-600 tracking-tighter">ZENTERIA YÖNETİM MERKEZİ</h2>
              <button onClick={() => setIsAdminPanelOpen(false)} className="px-6 py-2 bg-white/10 rounded-xl text-[10px] font-black uppercase">KAPAT</button>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* OYUNCU YETKİLENDİRME BÖLÜMÜ */}
              <div className="bg-[#0c121d] p-8 rounded-[2.5rem] border border-white/5">
                 <h4 className="text-xl font-black text-white uppercase italic mb-6">Oyuncu Rol Yönetimi</h4>
                 <div className="space-y-4">
                    <input type="text" placeholder="Oyuncu Adı..." className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none focus:border-blue-500" />
                    <select className="w-full p-4 bg-white/5 border border-white/10 rounded-xl text-white outline-none">
                       <option className="bg-[#0c121d]">OYUNCU</option>
                       <option className="bg-[#0c121d]">REHBER</option>
                       <option className="bg-[#0c121d]">MODERATÖR</option>
                       <option className="bg-[#0c121d]">ADMIN</option>
                    </select>
                    <button className="w-full py-4 bg-blue-600 font-black rounded-xl uppercase text-xs hover:bg-blue-700 transition-all">YETKİ TANIMLA</button>
                 </div>
              </div>

              {/* SUNUCU DURUMU */}
              <div className="bg-[#0c121d] p-8 rounded-[2.5rem] border border-white/5">
                 <h4 className="text-xl font-black text-white uppercase italic mb-6">Sunucu Konsol Özeti</h4>
                 <div className="space-y-2 font-mono text-[10px]">
                    <p className="text-green-500">[14:20] Towny Sistemi Aktif.</p>
                    <p className="text-blue-500">[14:22] Veritabanı bağlantısı başarılı.</p>
                    <p className="text-yellow-500">[14:25] 12 oyuncu giriş yaptı.</p>
                    <p className="text-red-500">[14:30] Yedekleme tamamlandı.</p>
                 </div>
              </div>
           </div>
        </div>
      );
    }

    switch (activeTab) {
      case 'market':
        return (
          <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-500 text-left">
            <h2 className="text-4xl font-black italic uppercase text-white tracking-tighter border-l-4 border-blue-600 pl-6">GELİŞMİŞ PAZAR</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { n: "Sponsor VIP", p: "₺150", d: "En yüksek Towny yetkileri.", i: "👑", c: "from-blue-600" },
                { n: "Özel Büyü", p: "₺45", d: "Eşyaya rastgele büyü basar.", i: "📖", c: "from-purple-600" },
                { n: "Kasaba Kalkanı", p: "₺60", d: "7 gün yağmalanamaz kasaba.", i: "🛡️", c: "from-green-600" },
                { n: "Mistik Kasa", p: "₺30", d: "İçinden efsanevi item çıkar.", i: "📦", c: "from-yellow-600" }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#0c121d] rounded-[2.5rem] border border-white/5 overflow-hidden group hover:border-blue-600/50 transition-all">
                   <div className={`h-32 bg-gradient-to-br ${item.c} to-black flex items-center justify-center text-4xl group-hover:scale-110 transition-transform`}>{item.i}</div>
                   <div className="p-6">
                      <h3 className="text-lg font-black text-white uppercase italic">{item.n}</h3>
                      <p className="text-gray-500 text-[10px] my-3">{item.d}</p>
                      <div className="flex items-center justify-between mt-4">
                         <span className="text-xl font-black text-white">{item.p}</span>
                         <button className="bg-white text-black p-2 rounded-lg font-black text-[10px] hover:bg-blue-600 hover:text-white transition-all">EKLE</button>
                      </div>
                   </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'destek':
        return (
          <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-8 duration-500 text-left">
            <div className="bg-black/60 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl">
              <h2 className="text-3xl font-black mb-6 uppercase italic text-white tracking-tighter">Destek Sistemi</h2>
              <textarea placeholder="Sorununuz nedir?" className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none text-white mb-4 h-32"></textarea>
              <button className="w-full py-4 bg-blue-600 font-black rounded-xl hover:bg-blue-700 text-white transition-all uppercase tracking-widest">TALEP OLUŞTUR</button>
            </div>

            {/* Yetkiliye Gözüken Destek Yönetimi */}
            {isOwner && (
              <div className="bg-blue-600/5 border border-blue-500/20 p-10 rounded-[3rem] backdrop-blur-2xl">
                <h2 className="text-xl font-black uppercase text-blue-400 mb-8 italic">Aktif Talepler (Yönetici)</h2>
                {tickets.map(t => (
                  <div key={t.id} className="p-6 bg-black/80 rounded-3xl border border-white/5 mb-4 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div>
                        <p className="text-xs font-black text-white uppercase">{t.user} <span className="text-blue-500 ml-2">[{t.status}]</span></p>
                        <p className="text-sm text-gray-400 mt-1">{t.msg}</p>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <button onClick={() => setTickets(tickets.filter(x => x.id !== t.id))} className="px-6 py-2 bg-green-600 text-[10px] font-black rounded-xl uppercase">Çözüldü</button>
                        <button className="px-6 py-2 bg-white/10 text-[10px] font-black rounded-xl uppercase">Cevapla</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="space-y-12 animate-in fade-in duration-1000">
             <div className="space-y-4">
                <h1 className="text-8xl md:text-[150px] font-black tracking-tighter italic text-white uppercase leading-none">ZENTERIA</h1>
                <p className="text-blue-500 font-bold tracking-[0.5em] text-[10px] md:text-xs uppercase bg-black/40 backdrop-blur-sm py-2 px-8 rounded-full inline-block italic">Profesyonel Towny Deneyimi</p>
             </div>
             <div className="max-w-xl mx-auto bg-black/40 border border-white/10 p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl">
                <div className="px-8 py-3 font-mono font-bold text-white text-sm tracking-widest italic">PLAY.ZENTERIA.COM</div>
                <button onClick={() => alert("IP Kopyalandı!")} className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-[10px] uppercase transition-all">KOPYALA</button>
             </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-[#050505] overflow-x-hidden selection:bg-blue-600 selection:text-white">
      <div className="fixed inset-0 -z-10 bg-cover bg-center opacity-20 scale-110" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')" }}></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black via-transparent to-black"></div>

      <nav className="w-full max-w-5xl mt-8 px-8 py-4 flex items-center justify-between bg-black/40 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] z-40">
        <div className="font-black text-2xl italic text-white uppercase">ZEN<span className="text-blue-600">TERIA</span></div>
        <div className="hidden lg:flex gap-8">
          {['home', 'market', 'destek'].map((tab) => (
            <button key={tab} onClick={() => {setActiveTab(tab); setIsAdminPanelOpen(false);}} className={`text-[10px] font-black tracking-[0.3em] uppercase transition-all ${activeTab === tab && !isAdminPanelOpen ? 'text-blue-500 border-b-2 border-blue-500 pb-1' : 'text-gray-400 hover:text-white'}`}>{tab === 'home' ? 'ANA SAYFA' : tab}</button>
          ))}
        </div>
        <div onClick={() => setShowProfile(!showProfile)} className="flex items-center gap-3 cursor-pointer group">
           <div className="text-right hidden sm:block">
              <p className="text-[11px] font-black text-white italic group-hover:text-blue-400 transition-colors uppercase">{user.username}</p>
              <p className="text-[8px] font-bold text-blue-500 uppercase">{user.rank}</p>
           </div>
           <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-black font-black">M</div>
        </div>
      </nav>

      {/* MELONYA STYLE PROFILE SIDEBAR */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-[#0a0f18] border-l border-white/5 z-50 transition-transform duration-500 transform shadow-2xl ${showProfile ? 'translate-x-0' : 'translate-x-full'}`}>
         <div className="p-8 h-full flex flex-col">
            <button onClick={() => setShowProfile(false)} className="text-gray-500 hover:text-white mb-8 text-left font-black text-[10px] uppercase">✕ KAPAT</button>
            
            <div className="flex items-center gap-4 mb-10 border-b border-white/5 pb-8 text-left">
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-black font-black text-2xl">M</div>
               <div>
                  <p className="text-md font-black text-white italic uppercase leading-tight">{user.username}</p>
                  <p className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{user.rank}</p>
               </div>
            </div>
            
            <div className="space-y-2 text-left flex-1">
               {isOwner && (
                  <button onClick={() => {setIsAdminPanelOpen(true); setShowProfile(false);}} className="w-full flex items-center gap-4 p-4 rounded-2xl bg-red-600/10 border border-red-500/20 group hover:bg-red-600/20 transition-all">
                     <span className="text-lg">⚙️</span>
                     <p className="text-[11px] font-black text-red-500 uppercase tracking-widest">Yönetim Merkezi</p>
                  </button>
               )}

               <div className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl text-gray-400">
                  <span className="text-lg text-yellow-500">💰</span>
                  <p className="text-[11px] font-black uppercase tracking-widest">Bakiye: {user.balance} ₺</p>
               </div>

               <div className="w-full flex items-center gap-4 p-4 hover:bg-white/5 rounded-2xl text-gray-400">
                  <span className="text-lg text-yellow-500">🛒</span>
                  <p className="text-[11px] font-black uppercase tracking-widest">Sepet: {user.cart}</p>
               </div>
               
               <button className="w-full flex items-center gap-4 p-4 text-red-500 hover:bg-red-500/5 rounded-2xl mt-auto">
                  <span className="text-lg">↪️</span>
                  <p className="text-[11px] font-black uppercase">Çıkış Yap</p>
               </button>
            </div>
         </div>
      </div>

      <div className="w-full max-w-6xl px-6 mt-28 mb-28 relative z-10">{renderContent()}</div>
      <footer className="w-full py-10 border-t border-white/5 text-center text-gray-700 text-[9px] font-black uppercase italic tracking-[0.5em]">© 2026 ZENTERIA • DEVELOPED BY MELIODAS_ROOT</footer>
    </main>
  );
  }