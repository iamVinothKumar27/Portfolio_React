import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import AchievementsSection from '../components/AchievementsSection';
import LeetCodeSection from '../components/LeetCodeSection';
import GitHubSection from "../components/GitHubSection";
const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LeetCodeSection />
      <ExperienceSection />
      <ProjectsSection />
      <GitHubSection />
      <AchievementsSection/>
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
