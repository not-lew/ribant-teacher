import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

export const CTASection = () => {
  const handleWhatsAppClick = () => {
    const phone = "5513988164608";
    const message = "Olá Teacher Gabriel Ribant! Estou pronto para destravar meu inglês. Vamos começar?";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#cc00cc] to-purple-700 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Pronto pra destravar seu inglês?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed">
            Não deixe o idioma ser uma barreira para seus sonhos. 
            Sua jornada para a fluência começa com uma conversa.
          </p>
          
          <div className="space-y-4">
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-white text-[#cc00cc] hover:bg-gray-100 text-xl px-12 py-8 rounded-full transition-all duration-300 hover:scale-110 shadow-2xl font-bold"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Fale comigo no WhatsApp
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <p className="text-sm text-white/80">
              Resposta em até 2 horas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
