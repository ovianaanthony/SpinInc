import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Vitoria Bentes",
    text: "Churrasqueira elétrica, barraca, inalador, resido em Guarulhos e me interesso bastante em hospedar alguns utensílios na plataforma.",
    img: "https://img.freepik.com/fotos-gratis/vista-da-mulher-3d_23-2150709984.jpg",
  },
  {
    id: 2,
    name: "Marcelo Henri",
    text: "Era disso que eu estava precisando, tenho diversas coisas paradas em casa que podem encontrar um novo destino. Entre elas: Videogame, Bicicleta, Liquidificador, Cafeteira, Churrasqueira ecológica, barraca, colchão inflável, bola de vôlei, aspirador de pó.",
    img: "https://w7.pngwing.com/pngs/758/890/png-transparent-afro-avatar-male-man-avatars-xmas-giveaway-icon.png",
  },
  {
    id: 3,
    name: "Bison",
    text: "Sinceramente, eu tenho mais interesse em alugar o item de outra pessoa do que colocar um item meu para aluguel.",
    img: "https://images.vexels.com/content/145908/preview/male-avatar-maker-2a7919.png",
  },
  {
    id: 5,
    name: "Derek",
    text: "Diria que estou disposto colocar para aluguel de tudo um pouco, desde livros, ferramentas como multímero, alicate crimpador de dedos, à impressora 3D.",
    img: "https://img.freepik.com/psd-gratuitas/ilustracao-3d-de-avatar-ou-perfil-humano_23-2150671122.jpg",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Depoimentos
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id} 
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-green_soft/25 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
