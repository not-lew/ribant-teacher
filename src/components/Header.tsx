
import { Button } from "@/components/ui/button";
import { MessageCircle, Instagram } from "lucide-react";

export const Header = () => {
  const handleWhatsAppClick = () => {
    const phone = "551399110-8230";
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
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#cc00cc]">
              Teacher Gabriel
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              onClick={handleInstagramClick}
              variant="outline"
              className="border-[#cc00cc] text-[#cc00cc] hover:bg-[#cc00cc] hover:text-white"
            >
              <Instagram className="mr-2 h-4 w-4" />
              Instagram
            </Button>
            
            <Button 
              onClick={handleWhatsAppClick}
              className="bg-[#cc00cc] hover:bg-[#aa00aa] text-white"
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
