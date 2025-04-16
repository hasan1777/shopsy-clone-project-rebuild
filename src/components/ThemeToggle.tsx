
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const { toast } = useToast();

  // Check system preference and localStorage on mount
  useEffect(() => {
    // Check if theme is stored in localStorage first
    const storedTheme = localStorage.getItem("theme");
    
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (storedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Fall back to system preference if no stored theme
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem("theme", "light");
      toast({
        title: "Light mode activated",
        description: "Your preference will be saved for future visits",
      });
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
      toast({
        title: "Dark mode activated",
        description: "Your preference will be saved for future visits",
      });
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button 
      variant="ghost" 
      size="icon"
      onClick={toggleDarkMode}
      className="text-shopsy-dark hover:text-shopsy-primary dark:text-white dark:hover:text-shopsy-primary transition-colors"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  );
};

export default ThemeToggle;
