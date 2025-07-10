
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

export const Header = () => {
  const handleWhatsAppClick = () => {
    const phone = "5513991108230";
    const message = "Olá Teacher Gabriel! Gostaria de saber mais sobre as aulas de inglês.";
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/teacher.gabrielribant/', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-3 sm:py-0 gap-4 sm:gap-0">
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-[#cc00cc]">
              Teacher Gabriel
            </h1>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Button 
              onClick={handleInstagramClick}
              variant="outline"
              size="sm"
              className="border-[#cc00cc] text-[#cc00cc] hover:bg-[#cc00cc] hover:text-white w-full sm:w-auto"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </Button>
            
            <Button 
              onClick={handleWhatsAppClick}
              size="sm"
              className="bg-[#cc00cc] hover:bg-[#aa00aa] text-white w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
