const HeroProduct = ({ img, deskripsi }) => {
  return (
    <div className={`py-8`}>
      <div className="mx-auto">
        <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/50 to-purple-50/30 backdrop-blur-sm border border-white/20 hover:shadow-2xl transition-all duration-500">
          
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl opacity-50" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-purple-200/30 to-transparent rounded-full blur-3xl opacity-50" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center p-8 lg:p-16">
            
            <div className="relative order-2 lg:order-1">
              <div className="relative group/img">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform scale-105" />
                
                <div className="relative overflow-hidden rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30">
                  <img 
                    src={`./images/${img}.jpg`} 
                    alt="Product showcase"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
          
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2 space-y-6">
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              
              <div className="space-y-4">
                <p className="text-lg leading-relaxed text-slate-700 font-light">
                  {deskripsi}
                </p>
                
                <div className="flex items-center space-x-4 pt-4">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}} />
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}} />
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-r from-slate-200 to-transparent" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default HeroProduct;