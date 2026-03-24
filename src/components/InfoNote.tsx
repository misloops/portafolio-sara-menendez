import React, { useState, KeyboardEvent } from 'react';
import styles from './InfoNote.module.css';

const InfoNote: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const toggle = () => setExpanded((v) => !v);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
    if (e.key === 'Escape') {
      setExpanded(false);
    }
  };

  return (
    <div className={styles.container} aria-hidden={false}>
      <div
        role="button"
        tabIndex={0}
        className={`${styles.note} ${expanded ? styles.expanded : ''}`}
        onClick={toggle}
        onKeyDown={onKeyDown}
        aria-expanded={expanded}
        aria-controls="info-note-content"
      >
        <span className={styles.icon} aria-hidden>
          ℹ️
        </span>

        <div id="info-note-content" className={styles.content}>
          <p className={styles.text}>
            Este portafolio está en constante evolución. Si ves algún detalle por pulir,
            probablemente ya esté en mi lista de mejoras.
          </p>

          <button
            type="button"
            className={styles.closeBtn}
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(false);
            }}
            aria-label="Cerrar nota"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoNote;
