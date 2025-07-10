
import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    const phone = "5513988164608";
    const message = "Olá Teacher Gabriel Ribant! Gostaria de saber mais sobre as aulas de inglês.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center pt-20 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Destrave seu inglês{" "}
              <span className="text-[#cc00cc]">comigo!</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              Fluência real, sem enrolação nem fórmula mágica. Aulas 100% personalizadas 
              para brasileiros que querem falar inglês com confiança.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-[#cc00cc] hover:bg-[#aa00aa] text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-xl font-bold"
              >
                <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Quero agendar minha aula!
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-[#cc00cc] text-[#cc00cc] hover:bg-[#cc00cc] hover:text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 font-semibold"
              >
                <Play className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6" />
                Ver como funciona
              </Button>
            </div>
            
            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-sm sm:text-base text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Atendimentos online</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Aulas personalizadas</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>Foco em conversação</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <img 
                src="/lovable-uploads/157e250b-ffdc-422f-b29b-40e1047b163f.png"
                alt="Teacher Gabriel"
                className="w-full max-w-md sm:max-w-lg mx-auto rounded-3xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white rounded-2xl p-3 sm:p-4 shadow-xl">
                <div className="text-2xl sm:text-3xl font-bold text-[#cc00cc]">+10.000</div>
                <div className="text-xs sm:text-sm text-gray-600">Alunos transformados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
