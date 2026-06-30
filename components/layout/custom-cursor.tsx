'use client';

import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 1024) return;
    setMounted(true);

    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [role="button"], input, textarea, select')
      );
    };

    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: position.x,
          top: position.y,
          width: hovering ? '40px' : '20px',
          height: hovering ? '40px' : '20px',
        }}
      />
      <div
        className="custom-cursor-dot"
        style={{ left: position.x, top: position.y }}
      />
    </>
  );
}
