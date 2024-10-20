import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="min-h-screen">
  
 


<div className="grid min-h-screen place-items-center bg-opacity-5 bg-white px-6 py-24 sm:py-32 lg:px-8">
  <div className="text-center">
    <img className="object-contain w-96 rounded-3xl" src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="" />
    <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">Page not found</h1>
    <p className="mt-6 text-base leading-7 text-gray-400">Sorry, we couldn’t find the page you’re looking for.</p>
    <div className="mt-10 flex items-center justify-center gap-x-6">
      <Link to='/' className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go back home</Link>
      <Link href="#" className="text-sm font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></Link>
    </div>
  </div>
</div>

        </div>
    );
};

export default ErrorPage;