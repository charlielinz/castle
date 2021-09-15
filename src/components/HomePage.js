const HomePage = () => {
  return (
    <header className="space-y-20 h-screen bg-gray-50 font-san text-gray-900">
      <div className="relative z-10 max-w-screen-lg mx-auto px-4 mb-12">
        <div className="border-b border-gray-200 py-3 mb-16 mx-8 flex justify-start">
          <button className="ml-2 mr-8 px-8 py-2 bg-gray-100 rounded-lg">
            Home
          </button>
          <button className="ml-2 mr-8 px-8 py-2 bg-gray-100 rounded-lg">
            Experience
          </button>
          <button className="ml-2 mr-8 px-8 py-2 bg-gray-100 rounded-lg">
            Skills
          </button>
          <button className="ml-2 mr-8 px-8 py-2 bg-gray-100 rounded-lg">
            Profolio
          </button>
        </div>
        <div className="mx-8 mt-12 mb-4">
          <h1 className="text-2xl">Art & Tech</h1>
          <h1 className="text-2xl">Emotional & Rational</h1>
          <h1 className="text-6xl py-4">Charlie Lin</h1>
          <p className="flex">
            <span className="material-icons mr-2">location_on</span>
            <span>Taipei, Taiwan</span>
          </p>
          <p className="flex">
            <span className="material-icons mr-2">business</span>
            <span>citiesocial</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default HomePage;
