const CardItemCategory = ({ card }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 max-w-[15rem] cursor-pointer"
      data-aos="zoom-in-down"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10 p-8 flex flex-col items-center text-center space-y-4">
        <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <img 
            src={`./images/${card.icon}`} 
            alt={card.title}
            className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        <h3 className="font-semibold text-lg text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
          {card.title}
        </h3>
        
        <p className="text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
          {card.deskripsi}
        </p>
      </div>
      
      <div className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-br from-blue-200/50 to-purple-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
    </div>
  );
};

export default CardItemCategory;