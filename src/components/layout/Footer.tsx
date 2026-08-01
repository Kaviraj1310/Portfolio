import { portfolioData } from '@/data/portfolio';

const Footer = () => {
  return (
    <footer className="relative bg-background pt-24 overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[300px] bg-primary/20 blur-[120px] rounded-full" />
      </div>

      {/* Marquee */}
      <div className="flex overflow-hidden whitespace-nowrap py-12 border-y border-white/5 bg-white/[0.01]">
        <div className="animate-[marquee_20s_linear_infinite] flex items-center gap-8">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-4xl md:text-6xl font-serif italic text-white/20 tracking-wider">
              BUILDING THE FUTURE • ENGINEERING AI • SOLVING REAL PROBLEMS • 
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div className="space-y-4">
            <p className="text-muted max-w-xs">
              {portfolioData.seo.description}
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-medium">Links</h4>
            <a href="/#projects" className="text-muted hover:text-white transition-colors">Projects</a>
            <a href="/#experience" className="text-muted hover:text-white transition-colors">Experience</a>
            <a href="/#skills" className="text-muted hover:text-white transition-colors">Skills</a>
            <a href="/#contact" className="text-muted hover:text-white transition-colors">Contact</a>
          </div>

          <div className="flex flex-col space-y-4">
            <h4 className="text-white font-medium">Socials</h4>
            <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">GitHub</a>
            <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">LinkedIn</a>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${portfolioData.socials.email}`} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">Email</a>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-muted text-sm">
            &copy; {new Date().getFullYear()} {portfolioData.profile.name}. All rights reserved.
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-4 md:mt-0 text-sm text-primary hover:text-white transition-colors"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>

      {/* Marquee Animation in Tailwind config would be needed, I'll use inline styles or add to tailwind */}
    </footer>
  );
};

export default Footer;
