
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-3xl p-6 sm:p-8 transition-all duration-300 hover:scale-105 animate-fade-in ${
                plan.popular 
                  ? 'bg-[#cc00cc] text-white shadow-2xl ring-4 ring-[#cc00cc]/20' 
                  : 'bg-white border-2 border-gray-200 hover:border-[#cc00cc]/30 shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center">
                    <Star className="h-4 w-4 mr-1" fill="currentColor" />
                    Mais Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6 sm:mb-8">
                <h3 className={`text-xl sm:text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className={`text-3xl sm:text-4xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-[#cc00cc]'}`}>
                  {plan.price}
                  <span className={`text-base sm:text-lg font-normal ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                    /mês
                  </span>
                </div>
                <p className={`text-sm sm:text-base ${plan.popular ? 'text-white/80' : 'text-gray-600'}`}>
                  {plan.frequency}
                </p>
              </div>

              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-0.5 flex-shrink-0 ${plan.popular ? 'text-white' : 'text-[#cc00cc]'}`} />
                    <span className={`text-sm sm:text-base ${plan.popular ? 'text-white' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => handleWhatsAppClick(plan.name)}
                className={`w-full py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-white text-[#cc00cc] hover:bg-gray-100' 
                    : 'bg-[#cc00cc] text-white hover:bg-[#aa00aa]'
                }`}
              >
                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Escolher este plano
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
