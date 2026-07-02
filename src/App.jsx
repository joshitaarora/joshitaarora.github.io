import Header from './components/Header';
import Hero from './components/Hero';
import AchievementBanner from './components/AchievementBanner';
import Experience from './components/Experience';
import Research from './components/Research';
import Projects from './components/Projects';
import Skills from './components/Skills';
import EducationAwards from './components/EducationAwards';
import Footer from './components/Footer';
import { useTheme } from './useTheme';
import './App.css';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AchievementBanner />
        <Experience />
        <Research />
        <Projects />
        <Skills />
        <EducationAwards />
      </main>
      <Footer />
    </>
  );
}

export default App;
