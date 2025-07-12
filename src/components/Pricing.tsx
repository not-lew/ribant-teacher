
import { Button } from "@/components/ui/button";
import { Check, Star, MessageCircle } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Plano Essencial",
      price: "R$ 600",
      frequency: "2 aulas/semana",
      features: [
        "2 aulas por semana (8 aulas/mês)",
        "50 minutos por aula",
        "Material didático incluso",
        "Suporte via WhatsApp",
        "Acesso a recursos extras"
      ],
      popular: false
    },
    {
      name: "Plano Intenso",
      price: "R$ 900",
      frequency: "3 aulas/semana",
      features: [
        "3 aulas por semana (12 aulas/mês)",
        "50 minutos por aula",
        "Material didático incluso",
        "Suporte via WhatsApp",
        "Acesso a recursos extras",
        "Sessões de conversação extras"
      ],
      popular: true
    },
    {
      name: "Plano Imersivo",
      price: "R$ 1.200",
      frequency: "4 aulas/semana",
      features: [
        "4 aulas por semana (16 aulas/mês)",
        "50 minutos por aula",
        "Material didático incluso",
        "Suporte via WhatsApp 24/7",
        "Acesso a recursos extras",
        "Sessões de conversação extras",
        "Feedback semanal detalhado"
      ],
      popular: false
    }
  ];

  const handleWhatsAppClick = (plan: string) => {
    const phone = "5513991108230";
    const message = `Olá Teacher Gabriel! Tenho interesse no ${plan}. Gostaria de mais informações.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Escolha seu <span className="text-[#cc00cc]">plano</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Investimento que transforma sua carreira e abre portas para o mundo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.popular 
                  ? 'bg-[#cc00cc] text-white shadow-2xl ring-2 sm:ring-4 ring-[#cc00cc]/20' 
                  : 'bg-white border border-gray-200 sm:border-2 hover:border-[#cc00cc]/30 shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold flex items-center">
                    <Star className="h-3 w-3 sm:h-4 sm:w-4 mr-1" fill="currentColor" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-4 sm:mb-6 lg:mb-8">
                <h3 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#cc00cc]'}`}>
                  {plan.price}
                  <span className={`text-sm sm:text-base lg:text-lg font-normal ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    /mês
                  </span>
                </div>
                <p className={`text-xs sm:text-sm lg:text-base ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.frequency}
                </p>
              </div>

              <ul className="space-y-2 sm:space-y-3 lg:space-y-4 mb-4 sm:mb-6 lg:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-[#cc00cc]'}`} />
                    <span className={`text-xs sm:text-sm lg:text-base ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handleWhatsAppClick(plan.name)}
                className={`w-full py-3 sm:py-4 lg:py-6 text-sm sm:text-base lg:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-white text-[#cc00cc] hover:bg-gray-100' 
                    : 'bg-[#cc00cc] text-white hover:bg-[#aa00aa]'
                }`}
              >
                <MessageCircle className="mr-2 h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" />
                Escolher este plano
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
