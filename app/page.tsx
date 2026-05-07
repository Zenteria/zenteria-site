"use client";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 font-sans relative overflow-hidden">
      {/* Arka Plan Parlama Efekti */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600/10 via-transparent to-transparent -z-10" />

      <div className="max-w-4xl w-full text-center space-y-12">
        {/* Sunucu İsmi */}
        <div className="space-y-2">
          <h1 className="text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500 uppercase">
            ZENTERIA
          </h1>
          <div className="h-1 w-32 bg-blue-600 mx-auto rounded-full shadow-[0_0_20px_rgba(37,99,235,0.8)]" />
        </div>
        
        <p className="text-xl text-gray-400 max-w-xl mx-auto font-light tracking-wide">
          Sıradanlığın ötesinde bir <span className="text-white font-medium">Towny</span> ve <span className="text-white font-medium">Roleplay</span> deneyimi. 
          Krallığını kur, ırkını seç ve dünyaya hükmet.
        </p>

        {/* IP Butonu */}
        <div className="flex flex-col items-center gap-6">
          <button 
            onClick={() => {
              navigator.clipboard.writeText("play.zenteria.com");
              alert("IP Adresi Kopyalandı! Sunucuya bekleniyorsun.");
            }}
            className="group relative px-12 py-5 bg-white text-black font-black rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-500 hover:scale-110 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-blue-600/40"
          >
            PLAY.ZENTERIA.COM
            <span className="absolute -top-2 -right-2 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-blue-500 border-2 border-black"></span>
            </span>
          </button>
          <p className="text-xs text-gray-500 uppercase tracking-[0.3em] animate-pulse">Tıkla ve IP'yi Kopyala</p>
        </div>

        {/* Bento Grid Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="group p-8 border border-white/5 rounded-[2rem] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 text-left">
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Towny</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Kasabanı kur, sınırlarını genişlet ve büyük savaşlara hazırlan.</p>
          </div>
          <div className="group p-8 border border-white/5 rounded-[2rem] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 text-left">
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Özel Irklar</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Seçtiğin ırka ait büyüleri ve pasif yetenekleri keşfet.</p>
          </div>
          <div className="group p-8 border border-white/5 rounded-[2rem] bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-500 text-left">
            <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">Ekonomi</h3>
            <p className="text-sm text-gray-500 leading-relaxed">Tamamen oyuncu takasına dayalı adil ve dinamik pazar sistemi.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 text-gray-700 text-xs tracking-widest uppercase">
        © 2026 Zenteria Network • <span className="text-gray-500">Meliodas_Root</span>
      </footer>
    </main>
  );
}
