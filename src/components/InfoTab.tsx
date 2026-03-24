import React, { useState, FocusEvent } from 'react';
import styles from './InfoTab.module.css';

const InfoTab: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleMouseEnter = () => setOpen(true);
  const handleMouseLeave = () => setOpen(false);

  const handleFocus = () => setOpen(true);
  const handleBlur = (e: FocusEvent<HTMLDivElement>) => {
    const related = e.relatedTarget as Node | null;
    if (!related || !e.currentTarget.contains(related)) {
      setOpen(false);
    }
  };

  return (
    <div
      className={styles.container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div
        className={styles.tab}
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-controls="infotab-panel"
      >
        ¡Hola! :-)
      </div>

      <div
        id="infotab-panel"
        className={`${styles.panel} ${open ? styles.panelVisible : ''}`}
        role="region"
        aria-hidden={!open}
      >
        <p className={styles.text}>
          Este portafolio está en constante evolución. Si ves algún detalle por pulir,
          probablemente ya esté en mi lista de mejoras.
        </p>
      </div>
    </div>
  );
};

export default InfoTab;
