import P from "../components/global/P";
import MetaTags from "../hooks/meta";

function Error() {
  return (
    <>
      <MetaTags 
          title="404 | Page Not Found" 
          description="The page you are looking for does not exist." />
      <main className="h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
        <h1 className="text-xl font-bold mb-4 text-gray-800">404 - Page Not Found</h1>
        <P>The page you're looking for doesn't exist.</P>
        <a href="/" className="bg-gray-800 py-2 px-4 text-white rounded-lg mt-4">Home</a>
      </main>
    </>
  );
}

export default Error
