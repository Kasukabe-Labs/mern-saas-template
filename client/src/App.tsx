import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import { ThemeToggle } from '@/components/theme/theme-toggle';
import Home from './pages/Home';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <div className="min-h-screen bg-background">
          <nav className="bg-background border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center">
                    <span className="text-xl font-bold">MERN SaaS</span>
                  </div>
                  <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      to="/"
                      className="border-transparent text-foreground/60 hover:text-foreground/80 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      to="/about"
                      className="border-transparent text-foreground/60 hover:text-foreground/80 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors"
                    >
                      About
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
        <Toaster position="top-right" richColors closeButton />
      </Router>
    </ThemeProvider>
  );
}

export default App;
