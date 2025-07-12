
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
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between h-auto sm:h-16 py-2 sm:py-0 gap-2 sm:gap-0">
          <div className="flex items-center">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#cc00cc] text-center sm:text-left">
              Teacher Gabriel Ribant
            </h1>
          </div>
          
          <div className="flex flex-row sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto">
            <Button 
              onClick={handleInstagramClick}
              variant="outline"
              size="sm"
              className="border-[#cc00cc] text-[#cc00cc] hover:bg-[#cc00cc] hover:text-white flex-1 sm:flex-none text-xs sm:text-sm"
            >
              <Instagram className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">Instagram</span>
              <span className="xs:hidden">IG</span>
            </Button>
            
            <Button 
              onClick={handleWhatsAppClick}
              size="sm"
              className="bg-[#cc00cc] hover:bg-[#aa00aa] text-white flex-1 sm:flex-none text-xs sm:text-sm"
            >
              <MessageCircle className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden xs:inline">WhatsApp</span>
              <span className="xs:hidden">WPP</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
