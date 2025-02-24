'use client';
import AnimatedSection from '../shared/AnimatedSection';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function About() {
  return (
    <AnimatedSection id="about" className="mt-16 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/3 flex justify-center items-center">
          <div className="relative w-[300px] h-[300px]">
            <Image
              src="/images/AboutMe.jpg"
              alt="Profile photo"
              fill
              priority
              className="rounded-full object-cover"
              quality={95}
              sizes="(max-width: 768px) 100vw, 300px"
            />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <p className="text-lg mb-4">
            I'm a {calculateAge()}-year-old software developer passionate about building web
            applications, with {calculateYearsOfExperience()} years of experience. I specialize in
            Java/Quarkus for backend development, while also working with frontend technologies like
            Angular and TypeScript. I'm always eager to learn new technologies and take on
            challenging projects.
          </p>
          <p className="text-lg mb-4">
            When I'm not coding, you can find me at the gym or playing basketball.
          </p>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p>Bachelor's Degree in Computer Engineering, Fernando Pessoa University</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://www.linkedin.com/in/rui-gon%C3%A7alves-1087891a2/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin className="h-5 w-5 text-[#0A66C2] hover:text-[#004182]" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a
                href="https://github.com/rpedrosg1?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub className="h-5 w-5 hover:text-gray-700" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

function calculateYearsOfExperience(): string {
  const startDate = new Date('2022-09-01');
  const today = new Date();
  const years = today.getFullYear() - startDate.getFullYear();
  const months = today.getMonth() - startDate.getMonth();

  const totalYears = years + months / 12;
  const wholeYears = Math.floor(totalYears);

  return wholeYears + (totalYears > wholeYears ? '+' : '');
}

function calculateAge(): number {
  const birthDate = new Date('1999-12-27');
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();

  // Ajusta a idade se ainda não chegou o aniversário este ano
  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}
