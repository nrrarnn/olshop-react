import { about } from "../constants";

const About = () => {
  return (
    <section id="About" className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 py-24">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/10 to-purple-100/10 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/50 backdrop-blur-sm border border-white/20 shadow-sm">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-2" />
                <span className="text-sm font-medium text-slate-700">Tentang Kami</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                Temukan
                <span className="relative inline-block ml-3">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text text-transparent">
                    Gaya Hidup
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full transform -skew-x-12" />
                </span>
                <br />
                Yang Sempurna
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                Temukan Gaya Fashion & Aksesoris Terbaru, Makanan Lezat Yang Bikin Lidah Meleleh, 
                Serta Cetak Foto yang Berkualitas Hanya di SarahShop!
              </p>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">100+</div>
                <div className="text-sm text-slate-600">Produk Terpilih</div>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div className="text-center">
                <div className="text-2xl font-bold text-slate-900">99%</div>
                <div className="text-sm text-slate-600">Kepuasan Pelanggan</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {about.map((ab, index) => (
              <div 
                key={ab.id} 
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative flex items-start space-x-4 p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-lg hover:bg-white/80 transition-all duration-300">
                  
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
                      <img 
                        src={`./images/${ab.img}.png`} 
                        alt={ab.title}
                        className="w-8 h-8 object-contain relative z-10 transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    
                    {index < about.length - 1 && (
                      <div className="absolute top-16 left-8 w-px h-6 bg-gradient-to-b from-slate-200 to-transparent" />
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-slate-800 transition-colors duration-300">
                      {ab.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {ab.deskripsi}
                    </p>
                  </div>
                  
                  <div className="absolute right-6 top-6 w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;