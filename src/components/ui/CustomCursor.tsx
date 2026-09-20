import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      const linkOrButton = target.closest('a, button');
      if (linkOrButton) {
        if (linkOrButton.tagName.toLowerCase() === 'a' && linkOrButton.getAttribute('href')?.includes('github')) {
          setCursorType('text');
          setCursorText('GIT');
        } else if (linkOrButton.tagName.toLowerCase() === 'a' && linkOrButton.getAttribute('href')?.includes('mailto')) {
          setCursorType('text');
          setCursorText('SMTP');
        } else if (linkOrButton.closest('.terminal-panel')) {
          setCursorType('text');
          setCursorText('EXEC');
        } else {
          setCursorType('hover');
          setCursorText('');
        }
        return;
      }

      const isText = window.getSelection()?.toString().length || ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN'].includes(target.tagName);
      if (isText && !target.closest('a, button')) {
        setCursorType('text-beam');
        setCursorText('');
        return;
      }

      setCursorType('default');
      setCursorText('');
    };

    window.addEventListener('mouseover', handleElementHover);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleElementHover);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          width: cursorType === 'text-beam' ? 2 : cursorType === 'text' ? 40 : 20,
          height: cursorType === 'text' ? 20 : 20,
          opacity: 1,
          backgroundColor: cursorType === 'default' ? '#00FF41' : 'transparent',
          border: cursorType === 'default' ? 'none' : '2px solid #00FF41',
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {cursorType === 'text' && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold font-mono tracking-wider text-primary whitespace-nowrap">
            {cursorText}
          </span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
