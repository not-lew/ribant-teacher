
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const phone = "5513991108230";
    const message = "Olá Teacher Gabriel Ribant! Vi seu site e gostaria de conversar sobre as aulas.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      {!isMinimized ? (
        <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-sm border border-gray-200">
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#cc00cc] rounded-full flex items-center justify-center mr-3">
                <MessageCircle className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">Teacher Gabriel Ribant</p>
                <p className="text-xs text-gray-600">Online agora</p>
              </div>
            </div>
            <button 
              onClick={() => setIsMinimized(true)}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          
          <p className="text-sm text-gray-700 mb-4">
            Quer destravar seu inglês? Vamos conversar! 😊
          </p>
          
          <Button 
            onClick={handleWhatsAppClick}
            className="w-full bg-[#cc00cc] hover:bg-[#aa00aa] text-white text-sm py-2 rounded-lg"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Iniciar conversa
          </Button>
        </div>
      ) : (
        <Button 
          onClick={() => setIsMinimized(false)}
          className="bg-[#cc00cc] hover:bg-[#aa00aa] text-white rounded-full w-14 h-14 shadow-2xl animate-pulse"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};
