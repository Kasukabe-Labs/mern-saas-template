export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">About This App</h1>
        <p className="text-gray-700 mb-4">
          This is a modern React application built with TypeScript, React Router, and Zustand for state management.
        </p>
        <p className="text-gray-700 mb-4">
          Features include:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li>Client-side routing with React Router</li>
          <li>State management with Zustand</li>
          <li>Responsive design with Tailwind CSS</li>
          <li>Type-safe components with TypeScript</li>
        </ul>
        <div className="text-center">
          <a 
            href="https://reactrouter.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mr-4"
          >
            React Router Docs
          </a>
          <a 
            href="https://github.com/pmndrs/zustand" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Zustand GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
