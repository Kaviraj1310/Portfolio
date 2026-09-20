import { portfolioData } from '@/data/portfolio';
import { Terminal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-primary/30 pt-16 pb-8">
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          <div>
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-lg mb-4">
              <Terminal size={20} />
              SYSTEM_HALTED
              <span className="animate-blink">_</span>
            </div>
            <p className="text-muted-foreground font-mono text-sm max-w-sm">
              "{portfolioData.seo.description}"
            </p>
          </div>

          <div className="flex flex-col md:items-end gap-2 text-sm font-mono text-secondary uppercase">
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">{'>'} GITHUB_REPO</a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">{'>'} LINKEDIN_NODE</a>
            <a href={`mailto:${portfolioData.socials.email}`} className="hover:text-primary transition-colors">{'>'} ESTABLISH_SMTP</a>
          </div>

        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-muted uppercase">
          <p>
            (C) {new Date().getFullYear()} {portfolioData.profile.name}. ALL_RIGHTS_RESERVED.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 md:mt-0 text-primary hover:text-white transition-colors"
          >
            EXECUTE_SCROLL_TOP()
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
