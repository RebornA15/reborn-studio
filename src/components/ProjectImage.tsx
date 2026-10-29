import { useState } from 'react';
import type { Project } from '../data/projects';

export default function ProjectImage({ project, className, variant = 'preview', loading = 'lazy' }: {
  project: Project;
  className: string;
  variant?: 'preview' | 'detail';
  loading?: 'eager' | 'lazy';
}) {
  const source = variant === 'detail' ? project.detailImage || project.image : project.image;
  const objectPosition = variant === 'detail' ? project.detailImagePosition : project.imagePosition;
  const [failedSource, setFailedSource] = useState<string | null>(null);
  if (!source || failedSource === source) {
    return <div className={`${className} project-image-fallback`} role="img" aria-label={`${project.title}: image unavailable`}><span>{project.title}</span><small>Project image unavailable</small></div>;
  }
  return <img key={source} src={source} alt={project.title} className={className} style={{ objectPosition, objectFit: variant === 'detail' ? project.detailImageFit : undefined, transform: variant === 'detail' && project.detailImageScale ? `scale(${project.detailImageScale})` : undefined }} loading={loading} decoding="async" onError={() => setFailedSource(source)} />;
}
