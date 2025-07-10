
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Welton",
      image: "/lovable-uploads/c5f2b63a-ecbf-4c8b-8d21-e9757ab68279.png",
      text: "O teacher Gabriel superou as minhas expectativas. Já havia conhecido outras escolas e professores particulares, mas o jeito dele de ensinar de uma maneira descontraída e leve me ajudou muito a conseguir evoluir o meu nível de inglês. Super recomendo a todos que quiserem aprender inglês de verdade."
    },
    {
      name: "Valeria",
      image: "/lovable-uploads/df4c03ac-2b52-4b45-baa5-9fc9af42d169.png",
      text: "Ótimo professor!!! Sempre disponível para resolver as dúvidas e leciona de uma forma divertida. Me ajudou a desenvolver muito meu inglês."
    },
    {
      name: "Rodrigo",
      image: "/lovable-uploads/d856b9d4-f52b-41d5-9876-955e167462b5.png",
      text: "Gostaria de parabenizar o professor Ribant pelas aulas de inglês. A metodologia utilizada é muito eficiente, dinâmica e envolvente, o que facilita bastante o aprendizado e mantém o interesse durante toda a aula. Sinto que estou evoluindo rapidamente graças à abordagem clara e prática adotada, que consegue equilibrar teoria e prática de forma excelente. Recomendo fortemente as aulas para quem deseja realmente aprimorar o inglês com qualidade."
    },
    {
      name: "Carlos",
      image: "/lovable-uploads/46eff6d4-981d-48ce-bdf1-9a81a2cda333.png",
      text: "Um ótimo professor, pontual, que não está lá só pelo dinheiro, e sim para que você aprenda, não é só seu professor, também é seu amigo que está pra te ajudar no que for possível de várias formas, atividades diversas em prol da melhoria do seu conhecimento. Eu super recomendo, e já tenho aula com ele a mais de 1 ano, e meu inglês evoluiu bastante com passar do tempo. E só tenho a agradecer."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Veja o que os <span className="text-[#cc00cc]">alunos dizem</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Resultados reais de pessoas reais que transformaram suas vidas com o inglês
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
