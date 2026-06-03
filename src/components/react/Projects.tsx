import { ProjectCard } from './ProjectCard';
import { GridLayout } from './GridLayout';
import type { ProjectMeta } from './types';

export const Projects = ({ projects }: { projects: ProjectMeta[] }) => {
  return (
    <GridLayout title={'Projects'}>
      {projects.map((project) => (
        <ProjectCard key={project.title} frontmatter={project} />
      ))}
    </GridLayout>
  );
};
