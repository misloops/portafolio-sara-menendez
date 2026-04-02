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
    <div
      className={`${styles.container} ${expanded ? styles.expanded : ''}`}
      aria-hidden={false}
    >
      <div
        role="button"
        aria-label="Información del portafolio"
        tabIndex={0}
        className={styles.note}
        onClick={toggle}
        onKeyDown={onKeyDown}
        aria-expanded={expanded}
        aria-controls="info-note-content"
      >
        <span className={styles.icon} aria-hidden>
          <span className={styles.iconText}>i</span>
        </span>
      </div>

      <div
        id="info-note-content"
        className={styles.popup}
        role="dialog"
        aria-hidden={!expanded}
        onClick={(e) => e.stopPropagation()}
      >
        <p className={styles.text}>
          ¡Bienvenid@s a mi portafolio!
          <br />
          Este espacio está en constante evolución. Como diseñadora, me gusta revisar,
          mejorar y actualizar mis proyectos para que reflejen lo que voy aprendiendo y
          cómo voy creciendo profesionalmente.
          <br />
          Si encuentras algún detalle por pulir, es muy probable que ya esté en mi lista de
          mejoras.
          <br />
          Mi objetivo es mostrar mi trabajo con transparencia y cuidado, tal y como lo vivo:
          un proceso continuo de creatividad, aprendizaje y evolución.
        </p>
      </div>
    </div>
  );
};

export default InfoNote;
