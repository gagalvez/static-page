const properties = [
  {
    id: 1,
    title: "Casa en Parque Los Avellanos II",
    img: "https://www.socovesa.cl/wp-content/uploads/2022/04/parque_los_avellanos-casa110.jpg",
  },
  {
    id: 2,
    title: "Departamento en Santiago Centro",
    img: "https://constructorarupanco.com/wp-content/uploads/2021/12/cozy-living-room-interior-with-panoramic-window-1.jpg",
  },
  {
    id: 3,
    title: "Casa en la florida",
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_720415-MLC83283751673_032025-F-cumbres-de-la-vina-la-florida.webp",
  },
  {
    id: 4,
    title: "Casa en la reina",
    img: "https://cf.chilepropiedades.cl/imagenes/publicacion/venta/casa/la-reina/2/6daa0bd6b839457d9d531d41e7d293a9.jpeg",
  },
  {
    id: 1,
    title: "Casa en Parque Los Avellanos II",
    img: "https://www.socovesa.cl/wp-content/uploads/2022/04/parque_los_avellanos-casa110.jpg",
  },
  {
    id: 2,
    title: "Departamento en Santiago Centro",
    img: "https://constructorarupanco.com/wp-content/uploads/2021/12/cozy-living-room-interior-with-panoramic-window-1.jpg",
  },
  
];

const Cards = () => {
  return (
    <section className="px-6 md:px-20 lg:px-40 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-4">Exclusive Listings</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore our handpicked collection of premium properties in the best locations</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <div key={`${property.id}-${index}`} className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="relative overflow-hidden">
              <img
                src={property.img}
                alt={property.title}
                className="h-[280px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-emerald-900 transition-colors duration-300">
                {property.title}
              </h4>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Premium property featuring modern design, prime location, and world-class amenities.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-900 text-white font-semibold rounded-xl hover:bg-emerald-800 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                More info
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default Cards;
