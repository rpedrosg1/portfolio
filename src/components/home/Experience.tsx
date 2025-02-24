'use client';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  period: string;
  description: string;
  skills: string[];
  logo: string;
}

const experiences: Experience[] = [
  {
    title: 'Java Backend Developer',
    company: 'Critical Techworks',
    companyUrl: 'https://www.criticaltechworks.com/',
    period: '2022 - Present',
    description:
      'Started as a Junior Backend Developer working with Java/Quarkus microservices. ' +
      'Expanded responsibilities to include Angular frontend development and CI/CD pipeline management. ' +
      'Following "You build it, you run it" principles, taking full ownership of development and deployment processes.',
    skills: [
      'Java',
      'Quarkus',
      'Angular',
      'CI/CD',
      'GitHub Actions',
      'Azure',
      'Docker',
      'Kubernetes',
    ],
    logo: '/images/companies/critical-techworks.png',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="container py-12">
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card className="group hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.15]">
                <Image
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  fill
                  className="object-contain object-right p-8 blur-[1px]"
                  priority
                />
              </div>
              <CardHeader className="space-y-1.5 relative">
                <div className="flex justify-between items-start flex-wrap gap-3">
                  <div className="space-y-1.5">
                    <CardTitle className="text-2xl font-bold text-primary">{exp.title}</CardTitle>
                    <CardDescription className="text-lg leading-tight pl-0 text-left">
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-primary"
                      >
                        {exp.company}
                        <svg
                          className="w-4 h-4 opacity-70"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="text-sm font-medium px-3 py-1 rounded-full">
                    {exp.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 relative">
                <p className="text-base leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-2.5 py-0.5 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
