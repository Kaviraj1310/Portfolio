import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
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
          setCursorText('OPEN');
        } else if (linkOrButton.tagName.toLowerCase() === 'a' && linkOrButton.getAttribute('href')?.includes('mailto')) {
          setCursorType('text');
          setCursorText('SEND');
        } else if (linkOrButton.closest('.project-card')) {
          setCursorType('text');
          setCursorText('VIEW');
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
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[99999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: cursorType === 'hover' ? 1.5 : cursorType === 'text' ? 2 : cursorType === 'text-beam' ? 0.2 : 1,
          opacity: cursorType === 'text-beam' ? 0 : 1,
          backgroundColor: cursorType === 'default' ? '#fff' : 'transparent',
          border: cursorType === 'default' ? 'none' : '1px solid #fff',
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        {cursorType === 'text' && (
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] font-bold tracking-wider text-white whitespace-nowrap mix-blend-difference">
            {cursorText}
          </span>
        )}
      </motion.div>
      {cursorType === 'text-beam' && (
        <motion.div
          className="fixed top-0 left-0 w-[2px] h-6 bg-white pointer-events-none z-[99999] mix-blend-difference"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
        />
      )}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none z-[99998] blur-3xl opacity-20"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-40%',
          translateY: '-40%',
          backgroundColor: 'rgba(93, 174, 255, 0.4)'
        }}
      />
    </>
  );
};

export default CustomCursor;
