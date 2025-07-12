import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="Contact" className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 py-24">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-200/30 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-indigo-100/20 rounded-full blur-3xl" />
      </div>
      
      <div className="absolute top-20 left-20 w-4 h-4 bg-blue-300/40 rounded-full animate-bounce" />
      <div className="absolute top-40 right-32 w-2 h-2 bg-green-400/60 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-blue-400/50 rounded-full animate-ping" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-4xl lg:text-6xl font-bold text-slate-800 mb-6 leading-tight">
          Ingin 
          <span className="relative inline-block mx-3">
            <span className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Memesan?
            </span>
            <div className="absolute bottom-0 left-0 w-full h-4 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full transform -skew-x-12" />
          </span>
          <br />
          Hubungi Kami!
        </h2>
        
        <p className="text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
          Silahkan hubungi kami jika Anda tertarik dan ingin melakukan pemesanan. 
          Kami siap menjawab pertanyaan Anda dan memberikan informasi yang Anda butuhkan.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="https://wa.me/+6289526764087"
            className="group relative inline-flex items-center justify-center"
          >
            <button className="relative overflow-hidden px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl" />
              
              <div className="relative flex items-center space-x-3">
                <BsWhatsapp className="text-xl group-hover:scale-110 transition-transform duration-300" />
                <span>Pesan Sekarang</span>
              </div>
              
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
    </section>
  );
};

export default Contact;