import { useState } from 'react';
import './Work.css';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectDetail from './ProjectDetail';
import ProjectImage from './ProjectImage';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section className="work-section" id="work" aria-labelledby="work-heading">
      <div className="container">
        <div className="work-header">
          <div className="work-intro">
            <p className="work-eyebrow">SELECTED WORK / DIGITAL EXPERIENCES</p>
            <h2 id="work-heading" className="work-title">Work that speaks<br />for <span className="work-title-accent">itself.</span></h2>
          </div>
          <div className="work-summary">
            <p>Distinctive digital experiences for ambitious clients. Thoughtfully designed, purposefully built, and unmistakably their own.</p>
            <span className="work-count">{String(projects.length).padStart(2, '0')} SELECTED PROJECTS</span>
          </div>
        </div>

        <div className="projects-bento-grid">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className={`work-project ui-project ${index === 0 ? 'work-project-featured' : ''} ${project.id === '04' ? 'work-project-inboxzero' : ''}`}
              onClick={(event) => { event.currentTarget.focus({ preventScroll: true }); setSelectedProject(project); }}
              aria-label={`View ${project.title} project details`}
              aria-haspopup="dialog"
            >
              <div className="work-project-image">
                <ProjectImage project={project} className="work-project-photo" loading={index === 0 ? 'eager' : 'lazy'} />
              </div>
              <div className="work-project-caption">
                <div className="work-project-info">
                  <span className="work-project-title" role="heading" aria-level={3}>{project.title}</span>
                  <span className="work-project-category">{project.category}</span>
                </div>
                <div className="work-project-meta">
                  <span className="work-project-year">{project.id}{project.year ? ` / ${project.year}` : ''}</span>
                  <span className="work-project-arrow ui-arrow" aria-hidden="true">&#8599;</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </div>
    </section>
  );
}
