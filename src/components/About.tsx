
export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Sobre o <span className="text-[#cc00cc]">Teacher Gabriel</span>
            </h2>
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-6">
              <p className="text-xl">
                Olá! Sou o <strong>Gabriel Ribant</strong>, professor particular de inglês especializado em ajudar brasileiros a se comunicarem com clareza, confiança e naturalidade.
              </p>
              <p>
                Minhas aulas são <strong>100% personalizadas</strong> e focadas no que realmente importa: falar com fluência, entender nativos e se expressar com autonomia.
              </p>
              <p>
                Já ajudei <strong>milhares de alunos</strong> no Brasil e no exterior a saírem do básico, destravarem na conversação e atingirem suas metas com o inglês.
              </p>
              <p className="text-[#cc00cc] font-semibold text-xl">
                Vai ser um prazer te acompanhar nessa jornada! 🚀
              </p>
            </div>
          </div>

          <div className="animate-scale-in">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="/lovable-uploads/d1a25e00-baad-442e-b456-575c09ecbd57.png"
                  alt="Teacher Gabriel Ribant"
                  className="w-full h-[600px] object-cover object-center"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#cc00cc]/10 to-transparent"></div>
              </div>
              
              <div className="absolute -top-6 -left-6 bg-[#cc00cc] text-white rounded-2xl p-4 shadow-xl animate-bounce">
                <div className="text-center">
                  <div className="text-2xl font-bold">500+</div>
                  <div className="text-sm">Alunos transformados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
