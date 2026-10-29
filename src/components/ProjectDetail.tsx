
import { useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import ProjectImage from './ProjectImage';
import type { Project } from '../data/projects';
import './ProjectDetail.css';
import { getProjectUrl } from '../data/projectUrl';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const scrollRegionRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const background = Array.from(document.querySelectorAll<HTMLElement>('body > *')).filter(element => !element.contains(dialogRef.current));
    const previousInert = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      background.forEach((element, index) => { element.inert = previousInert[index]; });
      trigger?.focus({ preventScroll: true });
    };
  }, []);

  useEffect(() => {
    scrollRegionRef.current?.scrollTo({ top: 0 });
  }, [project.id]);
  useEffect(() => {
    const lenis = window.studioLenis;
    lenis?.stop();
    const htmlEl = document.documentElement;
    const bodyEl = document.body;
    const prevHtmlOverflow = htmlEl.style.overflow;
    const prevBodyOverflow = bodyEl.style.overflow;
    const prevHtmlHeight = htmlEl.style.height;

    htmlEl.style.overflow = 'hidden';
    bodyEl.style.overflow = 'hidden';
    htmlEl.style.height = '100%';

    return () => {
      htmlEl.style.overflow = prevHtmlOverflow;
      bodyEl.style.overflow = prevBodyOverflow;
      htmlEl.style.height = prevHtmlHeight;
      lenis?.start();
    };
  }, []);
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') { e.preventDefault(); onClose(); }
      if (e.key === 'Tab') {
        const controls = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex="0"]');
        if (!controls?.length) return;
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    },
    [onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
  const stopPropagation = (e: React.WheelEvent | React.TouchEvent) => {
    e.stopPropagation();
  };
  const projectUrl = getProjectUrl(project.projectUrl);
  const caseStudyUrl = getProjectUrl(project.caseStudyUrl || '');
  const services = project.services.length ? project.services : ['To be added'];
  const technologies = project.techStack.length ? project.techStack : ['To be added'];

  return createPortal(
      <div className="pd-overlay">
        <div className="pd-backdrop" onClick={onClose} />
        <div
          className="pd-card"
          data-project-id={project.id}
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
        >
          <button
            ref={closeRef}
            className="pd-close-icon"
            type="button"
            onClick={onClose}
            aria-label="Close project detail"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true" focusable="false">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
          <div
            className="pd-scroll-region"
            ref={scrollRegionRef}
            onWheel={stopPropagation}
            onTouchMove={stopPropagation}
          >
            <div className="pd-card-grid">
              <div className="pd-left">
                <div className="pd-image-wrapper">
                  <ProjectImage project={project} className="pd-image" variant="detail" loading="eager" />
                </div>
                <div className="pd-meta-strip">
                  <div className="pd-meta-cell">
                    <span className="pd-meta-label">NO.</span>
                    <span className="pd-meta-value">{project.id}</span>
                  </div>
                  <div className="pd-meta-cell">
                    <span className="pd-meta-label">CATEGORY</span>
                    <span className="pd-meta-value">{project.category}</span>
                  </div>
                  <div className="pd-meta-cell">
                    <span className="pd-meta-label">YEAR</span>
                    <span className="pd-meta-value">{project.year}</span>
                  </div>
                </div>

              </div>
              <div className="pd-right">
                <div className="pd-title-block">
                  <h2 className="pd-title">{project.title}</h2>
                  <p className="pd-description">{project.overview}</p>
                </div>
                <div className="pd-section">
                  <div className="pd-info-heading">
                    <span className="pd-info-label">Services</span>
                  </div>
                  <div className="pd-tag-list">
                    {services.map((service) => (
                      <span key={service} className="pd-tag">
                        {service}
                      </span>
                    ))}

                  </div>
                </div>
                <div className="pd-section">
                  <div className="pd-info-heading">
                    <span className="pd-info-label">Technologies</span>
                  </div>
                  <div className="pd-tag-list">
                    {technologies.map((tech) => (
                      <span key={tech} className="pd-tag">
                        {tech}
                      </span>
                    ))}

                  </div>
                </div>
                <div className="pd-detail-grid">
                  <div className="pd-detail-block">
                    <span className="pd-info-label">Client</span>
                    <span className="pd-info-value">{project.client}</span>
                  </div>
                  <div className="pd-detail-block">
                    <span className="pd-info-label">Industry</span>
                    <span className="pd-info-value">{project.industry}</span>
                  </div>
                </div>
                <hr className="pd-divider" />

                <div className="pd-actions">
                  {projectUrl ? <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pd-action-btn pd-action-primary ui-button"
                  >
                    <span className="pd-action-text">Visit Project</span><span className="pd-action-arrow ui-arrow" aria-hidden="true">&#8599;</span>
                  </a> : <button type="button" className="pd-action-btn pd-action-primary ui-button" disabled title="A live project URL has not been configured">
                    <span className="pd-action-text">Visit Project</span>
                  </button>}
                  {caseStudyUrl ? <a
                    className="pd-action-btn pd-action-secondary ui-button"
                    href={caseStudyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="pd-action-text">View Case Study</span>
                  </a> : <button
                    className="pd-action-btn pd-action-secondary ui-button"
                    type="button"
                    disabled
                    title="A case study URL has not been configured"
                  >
                    <span className="pd-action-text">View Case Study</span>
                  </button>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>,
      document.body,
  );
}
