import MetaTags from "../hooks/hooks";

function ErrorPage() {
  return (
    <>
      <MetaTags 
          title="404 | Page Not Found" 
          description="The page you are looking for does not exist." />
      <main className="h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <h1 className="text-xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-base mb-6">The page you're looking for doesn't exist.</p>
        <a href="/" className="bg-gray-800 py-2 px-4 text-white rounded-lg">Home</a>
      </main>
    </>
  );
}

export default ErrorPage
