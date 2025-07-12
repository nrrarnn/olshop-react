import { heroSection } from "../constants";
const Hero = () => {

  return (
    <>
      <section id="Home" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20">
        
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-8 lg:px-8 pt-20 lg:pt-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
            
            <div className={`space-y-8`}>
              <div className="space-y-6">
                <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl text-center sm:text-start font-bold text-gray-900 leading-tight">
                  <span className="block">{heroSection.title}</span>
                  <span className="block relative">
                    <span className="text-transparent bg-clip-text bg-blue-600">
                      SarahShop
                    </span>
                  </span>
                </h1>
              </div>

              <div className="max-w-xl">
                <p className="text-sm sm:text-xl text-center sm:text-start text-gray-600 leading-relaxed">
                  {heroSection.deskripsi}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#about"
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gray-900 rounded-2xl hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span>Jelajahi Sekarang</span>
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
                
                <a 
                  href="#products"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-300 hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Lihat Koleksi
                </a>
              </div>

              <div className="flex items-center justify-center sm:justify-normal gap-8 pt-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">5000+ pelanggan senang</span>
                </div>
              </div>
            </div>

              <div className="relative overflow-hidden rounded-2xl mb-3">
                <img 
                  src="./images/shop.jpg" 
                  className=" w-full sm:w-[600px] rounded-tr-[140px] rounded-bl-[140px] object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  alt="Modern Shopping Experience" 
                />
              </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-scroll-dot"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;