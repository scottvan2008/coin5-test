import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (

    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">


      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Simple Page!
      </h1>


      <p className="text-lg text-gray-700">
        The language is currently se to <strong>English</strong>
      </p>


      <select>
        <option value="en">English</option>
        <option value="es">中文</option>
      </select>

      
    </div>
  );
};

export default Home;