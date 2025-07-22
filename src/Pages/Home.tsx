import homeCake from "../assets/images/Homecake.webp";
import designerCake from "../assets/images/Designercake.webp";
import cookiesCake from "../assets/images/Cookiescake.webp";
import hampersCake from "../assets/images/Hamperscake.webp";

function Home() {
  const categories = [
    {
      name: "CLASSIC",
      img: homeCake,
      link: "/cakes",
    },
    {
      name: "DESIGNER",
      img: designerCake,
      link: "/designer-cakes",
    },
    {
      name: "DESSERTS",
      img: cookiesCake,
      link: "/all-desserts",
    },
    {
      name: "COOKIES",
      img: cookiesCake,
      link: "/cookies",
    },
    {
      name: "HAMPERS",
      img: hampersCake,
      link: "/bakery-baskets",
    },
  ];

  return (
    <div className="mx-auto px-4 max-w-6xl">
      <div className="text-center mb-6">
        <h1 className="text-4xl font-bold text-red-900">Menu</h1>
        <p className="text-gray-600 text-lg">What will you wish for?</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((cat) => (
          <a
            key={cat.name}
            href={cat.link}
            className="w-40 sm:w-44 bg-white rounded-lg shadow hover:shadow-lg transition text-center"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-full h-28 object-cover rounded-t-lg"
              loading="lazy"
            />
            <div className="p-2">
              <span className="font-semibold text-sm uppercase tracking-wide text-red-900">
                {cat.name}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
    
  );
}

export default Home;
