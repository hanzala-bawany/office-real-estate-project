import { Link } from "react-router-dom";

const NotFoundPage = () => {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <h1 className="text-8xl font-extrabold text-blue-500">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-300 leading-relaxed ">
          Sorry, the page you are looking for doesn't exist or has been moved.
          Please return to the sign up page to continue.
        </p>

        <Link
          to="/signup"
          className="px-4! py-2! inline-flex items-center mt-8 rounded-lg bg-red-500  text-white font-semibold shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
        >
            Go to Sign Up 
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;