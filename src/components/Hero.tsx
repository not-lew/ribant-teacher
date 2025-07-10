
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export const Hero = () => {
  const handleWhatsAppClick = () => {
    const phone = "5511999999999"; // Replace with actual phone number
    const message = "Olá Teacher Gabriel! Gostaria de saber mais sobre as aulas de inglês.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#cc00cc]/5 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in">
            Teacher <span className="text-[#cc00cc]">Gabriel Ribant</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
              Destrave seu inglês com o Teacher Gabriel — 
              <span className="text-[#cc00cc]"> Fluência real, sem enrolação.</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Aulas particulares 100% personalizadas para brasileiros que querem falar inglês com confiança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleWhatsAppClick}
                className="bg-[#cc00cc] hover:bg-[#aa00aa] text-white text-lg px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Quero fazer minha aula!
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img 
                src="/lovable-uploads/c5f2b63a-ecbf-4c8b-8d21-e9757ab68279.png"
                alt="Teacher Gabriel Ribant"
                className="w-full h-[600px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#cc00cc]/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-bounce">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-gray-800">Disponível agora!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
