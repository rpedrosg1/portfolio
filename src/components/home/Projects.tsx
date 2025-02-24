import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

const projects = [
  {
    title: 'AI4RealAg',
    description:
      'This project was made in collaboration with the company Siscog and consists of the development of a mobile application for smart agriculture.' +
      'What is being developed by siscog has a limitation which is the proximity to the farmer and that is where this mobile application comes in',
    technologies: [
      'Dart',
      'Flutter',
      'SQLite',
      'FastAPI',
      'PostgreSQL',
      'Heroku',
      'S3 Bucket',
      'React',
    ],
    link: '/documents/AI4RealAg.pdf',
  },
  {
    title: 'Stand Online',
    description:
      'Project build in Laravel.The Purpose of the project is to creat a website similar to StandVirtual with multiple features' +
      ' like register,login,send email,search vehicle,buy vehicle etc .',
    technologies: ['PHP', 'Laravel', 'SQL'],
    link: 'https://www.youtube.com/watch?v=HuC3e26D3Oc',
  },
  {
    title: 'Travel Agency',
    description:
      'Project build in C.The Purpose of the project was to creat a Travel Agency program similar to the airbnb.' +
      'This project helped me to better understand this low-level language and also how to manipulate dynamic memory.',
    technologies: ['C'],
    link: '#',
  },
  {
    title: 'Geo Caching App',
    description:
      'The objective of this project was to create an app similar to a treasure hunt and entertain players by searching and hiding' +
      ' caches around the world.In this project we use algorithms like dikjstra to find the best and shortest way to reach a certain goal.',
    technologies: ['Java', 'JavaFX'],
    link: '#',
  },
  {
    title: 'FroggerGame',
    description:
      'The objective of this project was to simulate a distributed system of a game.' +
      'This game had to allow several players to play at the same time without information interference.' +
      'This distributed system consisted of a front-server that forwards the players to one of the backend ' +
      'servers in Round Robin and if one of these servers fails the player connected to that server is forwarded' +
      ' to another server that has an updated replica of the game.If any server went down, after recovering from a crash,' +
      ' it would ask the front server for current information on the other servers in order to synchronize its status and be able to get back up and running.',
    technologies: ['Java', 'RMI', 'RabbitMQ'],
    link: '#',
  },
];

export default function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <Badge
                  key={techIndex}
                  variant="secondary"
                  className="px-2.5 py-0.5 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
                >
                  {tech}
                </Badge>
              ))}
            </div>
            <Link href={project.link} className="text-primary hover:underline">
              View Project
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
