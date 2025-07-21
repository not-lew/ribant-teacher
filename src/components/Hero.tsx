
import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    const phone = "5513991108230";
    const message = "Olá Teacher Gabriel Ribant! Gostaria de saber mais sobre as aulas de inglês.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 flex items-center pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          <div className="animate-fade-in order-2 lg:order-1">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 leading-tight">
              Destrave seu inglês{" "}
              <span className="text-[#cc00cc]">comigo!</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
              <strong>Fluência real</strong>, sem enrolação nem fórmula mágica. Aulas 100% <strong>personalizadas</strong> 
              para brasileiros que querem falar inglês com <strong>confiança</strong>.
            </p>
            
            <div className="flex flex-col gap-3 sm:gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-[#cc00cc] hover:bg-[#aa00aa] text-white text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-xl font-bold w-full sm:w-auto"
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                Quero agendar minha aula!
              </Button>
              
            </div>
            
            <div className="mt-6 sm:mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm lg:text-base text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                <span>Atendimentos online</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                <span>Aulas personalizadas</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                <span>Foco em conversação</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
            <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
              <img 
                src="/lovable-uploads/157e250b-ffdc-422f-b29b-40e1047b163f.png"
                alt="Teacher Gabriel"
                className="w-full rounded-2xl sm:rounded-3xl shadow-2xl"
                loading="eager"
              />
              <div className="absolute -bottom-2 sm:-bottom-4 lg:-bottom-6 -right-2 sm:-right-4 lg:-right-6 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 lg:p-4 shadow-xl">
                <div className="text-lg sm:text-2xl lg:text-3xl font-bold text-[#cc00cc]">+10.000</div>
                <div className="text-xs sm:text-xs lg:text-sm text-gray-600">Alunos transformados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
