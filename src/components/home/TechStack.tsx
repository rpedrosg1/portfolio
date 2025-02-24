'use client';

import { cn } from '@/lib/utils';
import { SiJest, SiJunit5 } from 'react-icons/si';

import { FaDocker, FaGithub, FaJava } from 'react-icons/fa';
import {
  SiGithubactions,
  SiGrafana,
  SiHelm,
  SiJson,
  SiKubernetes,
  SiPostgresql,
  SiPrometheus,
  SiQuarkus,
} from 'react-icons/si';
import { VscAzure } from 'react-icons/vsc';

interface Technology {
  name: string;
  icon: React.ElementType;
  color: string;
}

const technologies: Technology[] = [
  { name: 'Java', icon: FaJava, color: '#007396' },
  { name: 'Quarkus', icon: SiQuarkus, color: '#4695EB' },
  { name: 'GitHub', icon: FaGithub, color: '#181717' },
  { name: 'GitHub Actions', icon: SiGithubactions, color: '#2088FF' },
  { name: 'Azure', icon: VscAzure, color: '#0089D6' },
  { name: 'Docker', icon: FaDocker, color: '#2496ED' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
  { name: 'OpenAPI', icon: SiJson, color: '#85EA2D' },
  { name: 'Helm', icon: SiHelm, color: '#277A9F' },
  { name: 'Prometheus', icon: SiPrometheus, color: '#E6522C' },
  { name: 'Grafana', icon: SiGrafana, color: '#F46800' },
  { name: 'JUnit', icon: SiJunit5, color: '#25A162' },
  { name: 'Jest', icon: SiJest, color: '#C21325' },
];

export default function TechStack() {
  return (
    <section className="w-full py-12 bg-background/50 backdrop-blur-sm">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-6 mb-6">
            {technologies.slice(0, 5).map((tech) => (
              <div
                key={tech.name}
                className={cn(
                  'group flex flex-col items-center justify-center p-4 rounded-full',
                  'bg-card/40 hover:bg-card/80',
                  'border border-border/50',
                  'transition-all duration-300 ease-out',
                  'hover:scale-105 hover:shadow-lg',
                  'h-24 w-32'
                )}
                style={{
                  borderRadius: '30%',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <tech.icon
                  className="text-3xl transition-colors duration-300"
                  style={{ color: tech.color }}
                />
                <span className="mt-2 text-sm font-medium text-muted-foreground/70 group-hover:text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6 mb-6">
            {technologies.slice(5, 9).map((tech) => (
              <div
                key={tech.name}
                className={cn(
                  'group flex flex-col items-center justify-center p-4 rounded-full',
                  'bg-card/40 hover:bg-card/80',
                  'border border-border/50',
                  'transition-all duration-300 ease-out',
                  'hover:scale-105 hover:shadow-lg',
                  'h-24 w-32'
                )}
                style={{
                  borderRadius: '30%',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <tech.icon
                  className="text-3xl transition-colors duration-300"
                  style={{ color: tech.color }}
                />
                <span className="mt-2 text-sm font-medium text-muted-foreground/70 group-hover:text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-6">
            {technologies.slice(9).map((tech) => (
              <div
                key={tech.name}
                className={cn(
                  'group flex flex-col items-center justify-center p-4 rounded-full',
                  'bg-card/40 hover:bg-card/80',
                  'border border-border/50',
                  'transition-all duration-300 ease-out',
                  'hover:scale-105 hover:shadow-lg',
                  'h-24 w-32'
                )}
                style={{
                  borderRadius: '30%',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                }}
              >
                <tech.icon
                  className="text-3xl transition-colors duration-300"
                  style={{ color: tech.color }}
                />
                <span className="mt-2 text-sm font-medium text-muted-foreground/70 group-hover:text-foreground">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
