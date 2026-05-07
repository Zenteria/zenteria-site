"use client";

import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  
  // Sistemdeki Ranklar: 'OYUNCU', 'MODERATÖR', 'ADMIN', 'DEVELOPER', 'KURUCU'
  const [userRank, setUserRank] = useState('KURUCU'); 
  
  // Test amaçlı örnek destek talepleri
  const [tickets, setTickets] = useState([
    { id: 1, user: "Meliodas", msg: "VIP+ üyeliğim aktif edilmedi, kontrol edebilir misiniz?", status: "Bekliyor" },
    { id: 2, user: "Zenterian_99", msg: "Lobi haritasında bir blok açığı buldum, sınırsız düşülüyor.", status: "Bekliyor" }
  ]);

  // Yeni destek talebi oluşturma input durumları
  const [ticketSubject, setTicketSubject] = useState('');
  const [ticketMessage, setTicketMessage] = useState('');

  // Destek talebini listeye ekleyen fonksiyon
  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticketSubject || !ticketMessage) return alert("Lütfen tüm alanları doldurun!");
    
    const newTicket = {
      id: Date.now(),
      user: "Sen (" + userRank + ")",
      msg: `${ticketSubject}: ${ticketMessage}`,
      status: "Bekliyor"
    };
    
    setTickets([newTicket, ...tickets]);
    setTicketSubject('');
    setTicketMessage('');
    alert("Destek talebiniz başarıyla oluşturuldu!");
  };

  // Yetkilinin talebi cevaplamasını/çözmesini sağlayan fonksiyon
  const handleResolveTicket = (id: number) => {
    setTickets(tickets.filter(t => t.id !== id));
    alert("Talep başarıyla yanıtlandı ve kapatıldı.");
  };

  // Ranklara göre dinamik renk veren yardımcı fonksiyon
  const getRankBadgeColor = (rank: string) => {
    switch (rank) {
      case 'KURUCU': return 'bg-red-600 text-white border-red-500';
      case 'DEVELOPER': return 'bg-purple-600 text-white border-purple-500';
      case 'ADMIN': return 'bg-amber-600 text-white border-amber-500';
      case 'MODERATÖR': return 'bg-blue-600 text-white border-blue-500';
      default: return 'bg-gray-600 text-gray-200 border-gray-500';
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'market':
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            {[
              { t: "VIP Üyelik", p: "₺100", d: "Özel yetenekler, kitler ve Discord kozmetikleri." },
              { t: "Kasa Anahtarı", p: "₺25", d: "Efsanevi rütbe, eşya ve kozmetik şansı." },
              { t: "Coin Paketi", p: "₺50", d: "Zenteria marketinde harcayabileceğin 10.000 Coin." }
            ].map((i, k) => (
              <div key={k} className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-all text-center group backdrop-blur-md">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform text-2xl">💎</div>
                <h3 className="font-bold text-xl text-white">{i.t}</h3>
                <p className="text-gray-400 text-sm my-4">{i.d}</p>
                <div className="text-blue-400 font-black text-2xl mb-4">{i.p}</div>
                <button className="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold text-white transition-all">SATIN AL</button>
              </div>
            ))}
          </div>
        );

      case 'wiki':
        return (
          <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-500 text-left">
            <h2 className="text-4xl font-black italic uppercase text-white mb-8 border-l-4 border-blue-600 pl-4">Zenteria Bilgi Merkezi (Wiki)</h2>
            {[
              { t: "🏡 Kasaba Nasıl Kurulur?", d: "/towny create [kasaba-adı] komutunu kullanarak ilk kasabanı kurabilirsin. Arkadaşlarını davet etmek için /towny invite [oyuncu] yazabilirsin." },
              { t: "🎭 Irk ve Yetenek Sistemi", d: "Zenteria dünyasında her ırkın kendine has pasif ve aktif büyüleri vardır. Sunucuya katıldığında karşına çıkan menüden veya /ırk komutuyla seçimini yapabilirsin." },
              { t: "💰 Ticaret ve Pazar Sistemi", d: "Oyuncularla güvenli ticaret yapmak için pazar sistemini kullanabilirsin. Eşyanı satışa çıkarmak için elindeyken /ah sell [fiyat] komutunu girmen yeterlidir." },
              { t: "⚔️ Kurallar ve Düzen", d: "Hile kullanımı, sohbet saygısızlığı ve diğer oyuncuların oyun deneyimini baltalayacak her türlü davranış kesinlikle yasaktır. İhlal durumunda yetkililerle iletişime geçin." }
            ].map((item, i) => (
              <div key={i} className="bg-white/5 p-8 rounded-3xl border border-white/5 hover:bg-white/10 transition-all">
                <h3 className="text-xl font-bold text-blue-400 mb-3">{item.t}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.d}</p>
              </div>
            ))}
          </div>
        );

      case 'destek':
        // Yetki kontrolü (Kurucu, Dev, Admin ve Mod yetkili sayılır)
        const isStaff = ['KURUCU', 'DEVELOPER', 'ADMIN', 'MODERATÖR'].includes(userRank);

        return (
          <div className="max-w-3xl mx-auto space-y-8 animate-in zoom-in duration-500">
            {/* Destek Formu */}
            <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-xl text-left">
              <h2 className="text-3xl font-black mb-2 uppercase italic text-white">Destek Talebi Gönder</h2>
              <p className="text-xs text-gray-400 mb-8">Zenteria ekibi en kısa sürede talebinizi inceleyip cevaplayacaktır.</p>
              
              <form onSubmit={handleCreateTicket} className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Sorun Başlığı / Konu" 
                  value={ticketSubject}
                  onChange={(e) => setTicketSubject(e.target.value)}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-blue-600 text-white transition-all" 
                />
                <textarea 
                  rows={4} 
                  placeholder="Sorununuzu detaylıca yazın..." 
                  value={ticketMessage}
                  onChange={(e) => setTicketMessage(e.target.value)}
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-xl outline-none focus:border-blue-600 text-white transition-all"
                ></textarea>
                <button type="submit" className="w-full py-4 bg-blue-600 font-black rounded-xl hover:bg-blue-700 text-white transition-all shadow-lg shadow-blue-600/20">TALEP OLUŞTUR</button>
              </form>
            </div>

            {/* Admin/Yetkili Paneli */}
            {isStaff ? (
              <div className="bg-blue-600/10 border border-blue-500/30 p-10 rounded-[2.5rem] backdrop-blur-xl text-left">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-black uppercase italic text-blue-400">YETKİLİ DESTEK PANELİ</h2>
                    <p className="text-xs text-gray-400">Rankın ({userRank}) gereği gelen talepleri görüyorsun.</p>
                  </div>
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-black rounded-full">YETKİLİ ERİŞİMİ</span>
                </div>
                
                <div className="space-y-4">
                  {tickets.length === 0 ? (
                    <p className="text-gray-400 text-sm text-center py-6">Aktif bekleyen destek talebi bulunmuyor.</p>
                  ) : (
                    tickets.map(t => (
                      <div key={t.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-black/50 rounded-2xl border border-white/5 gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-blue-400">{t.user}</span>
                            <span className="text-[9px] px-2 py-0.5 bg-yellow-600/20 text-yellow-400 rounded-md border border-yellow-600/30 font-bold">{t.status}</span>
                          </div>
                          <p className="text-sm text-gray-200 leading-relaxed">{t.msg}</p>
                        </div>
                        <button 
                          onClick={() => handleResolveTicket(t.id)} 
                          className="w-full md:w-auto px-6 py-3 bg-green-600 text-white text-xs font-black rounded-xl hover:bg-green-500 transition-all whitespace-nowrap"
                        >
                          CEVAPLA VE KAPAT
                        </button>
                      </div>
                    ))
                  )}
                </div>
              </div>
            ) : (
              <div className="p-6 bg-yellow-600/10 border border-yellow-500/20 rounded-2xl text-center text-yellow-400 text-xs font-bold">
                🔒 Yetkili panelini görüntülemek için MODERATÖR, ADMIN, DEVELOPER veya KURUCU rankına sahip olmalısınız.
              </div>
            )}
          </div>
        );

      case 'profil':
        return (
          <div className="max-w-md mx-auto p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/20 to-black/80 border border-white/10 backdrop-blur-2xl animate-in zoom-in duration-500 text-center">
            <div className="relative w-24 h-24 mx-auto mb-6">
               <div className="absolute inset-0 bg-blue-500 blur-2xl opacity-50 animate-pulse"></div>
               <div className="relative w-full h-full bg-white text-black rounded-full flex items-center justify-center text-4xl font-black">M</div>
            </div>
            <h2 className="text-3xl font-black tracking-tighter uppercase text-white">MELIODAS_ROOT</h2>
            <div className="inline-block mt-2 mb-8">
              <span className={`px-4 py-1.5 rounded-full text-xs font-black border uppercase tracking-widest ${getRankBadgeColor(userRank)}`}>
                {userRank}
              </span>
            </div>
            
            {/* Rank Test Etme Paneli (Sadece geliştiricimiz test edebilsin diye) */}
            <div className="bg-black/60 p-4 rounded-2xl border border-white/5 mb-6 text-left">
              <span className="text-[10px] text-gray-400 font-bold tracking-widest uppercase block mb-3">Rank Test Aracı (Sadece Tasarım Aşamasında)</span>
              <div className="grid grid-cols-2 gap-2">
                {['OYUNCU', 'MODERATÖR', 'ADMIN', 'DEVELOPER', 'KURUCU'].map((r) => (
                  <button 
                    key={r}
                    onClick={() => setUserRank(r)}
                    className={`px-3 py-2 rounded-lg text-[9px] font-black transition-all ${
                      userRank === r ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/10'
                    }`}
                  >
                    {r} YAP
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Sunucu Seviyesi</span>
                  <span className="text-2xl font-black text-white">99</span>
               </div>
               <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                  <span className="block text-[10px] text-gray-500 uppercase tracking-widest mb-1">Kredi Bakiyesi</span>
                  <span className="text-2xl font-black text-white">₺1,250</span>
               </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-16 animate-in fade-in duration-1000">
            <div className="relative inline-block">
                <div className="absolute -inset-8 bg-blue-600/30 blur-3xl rounded-full animate-pulse"></div>
                <h1 className="relative text-7xl md:text-9xl font-black tracking-tighter italic text-white drop-shadow-2xl uppercase">ZENTERIA</h1>
                <p className="mt-4 text-blue-400 font-bold tracking-[0.5em] text-sm md:text-base uppercase">TOWNY & ROLEPLAY DENEYİMİ</p>
            </div>

            <div className="max-w-xl mx-auto bg-black/60 border border-white/10 p-3 rounded-2xl flex items-center justify-between group hover:border-blue-500/50 transition-all shadow-2xl">
                <div className="px-6 py-3 font-mono font-bold text-white">PLAY.ZENTERIA.COM</div>
                <button 
                  onClick={() => { navigator.clipboard.writeText("play.zenteria.com"); alert("IP Adresi Kopyalandı!"); }} 
                  className="bg-white text-black hover:bg-blue-600 hover:text-white px-10 py-4 rounded-xl font-black text-xs transition-all"
                >
                  KOPYALA
                </button>
            </div>

            {/* Melonya Stili Özellik Kartları */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Kasaba Sistemi", icon: "🏰", desc: "Kendi medeniyetini kur, sınırlarını genişlet ve büyük ittifaklara katıl." },
                { title: "Özel Irklar", icon: "⚔️", desc: "Seçtiğin efsanevi ırka ait büyüleri ve pasif yetenekleri keşfederek üstünlük sağla." },
                { title: "Ekonomi", icon: "⚖️", desc: "Oyuncuların belirlediği dinamik ve tamamen adil ticaret döngüsüne katıl." }
              ].map((box, i) => (
                <div key={i} className="bg-gradient-to-b from-white/10 to-transparent p-10 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all text-left backdrop-blur-sm group">
                  <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{box.icon}</div>
                  <h3 className="text-2xl font-black mb-3 italic uppercase tracking-tight">{box.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{box.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center bg-black">
      {/* ARKA PLAN - INLINE CSS ILE GARANTIYE ALINDI */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center transition-opacity duration-1000 animate-pulse"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=2000')",
          opacity: 0.4
        }}
      ></div>
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-black/40 via-transparent to-black"></div>

      {/* Navigasyon */}
      <nav className="w-full max-w-5xl mt-10 px-8 py-5 flex items-center justify-between bg-black/40 backdrop-blur-xl border border-white/10 rounded-[2rem] z-50">
        <div className="font-black text-2xl tracking-tighter italic text-white cursor-pointer" onClick={() => setActiveTab('home')}>ZENTERIA</div>
        <div className="hidden md:flex gap-10">
          {['home', 'market', 'wiki', 'destek'].map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`text-[11px] font-black tracking-[0.2em] transition-all uppercase ${activeTab === tab ? 'text-blue-500 scale-110' : 'text-gray-400 hover:text-white'}`}>
              {tab === 'home' ? 'ANA SAYFA' : tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-4">
           <span className={`text-[9px] font-black px-3 py-1 rounded-full border ${getRankBadgeColor(userRank)}`}>
             {userRank}
           </span>
           <button onClick={() => setActiveTab('profil')} className="bg-white text-black px-8 py-3 rounded-xl font-black text-[11px] hover:bg-blue-600 hover:text-white transition-all shadow-lg shadow-blue-600/30">
             PROFİL
           </button>
        </div>
      </nav>

      <div className="w-full max-w-6xl px-6 mt-24 mb-24 relative z-10">{renderContent()}</div>

      <footer className="w-full py-12 border-t border-white/5 bg-black/60 text-center">
        <p className="text-gray-600 text-[10px] tracking-[0.5em] font-bold uppercase">© 2026 Zenteria Network • Meliodas_Root</p>
      </footer>
    </main>
  );
}