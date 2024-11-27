import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const experiences = [
  {
    title: "Flutter Mobile Application Developer (Android & iOS)",
    company: "Crop Nutrition Laboratories",
    period: "May 2019 - Feb 2023",
    responsibilities: [
      "Led the development of three mobile applications using Flutter to enable the sales & management of laboratory services offered in our laboratories.",
      "Worked alongside project manager, CTO, business stakeholders and developers to design a system architecture that scaled to over 3000 users all over Africa.",
      "Collaborated with designers using Figma & AdobeXD in the design and implementation of the UI & UX to ensure users have an amazing user experience. We also conducted usability testing.",
      "Developed offline capabilities for users working in places with poor or no internet. This increased sales to the company and revenue to the field agents.",
      "Writing tests which enabled CI/CD using GItHub Actions and increased user experience.",
      "Implemented background push notifications to deliver important information on time.",
      "Integrated REST API's & external commercial API's to extra functionality to users of the app.",
    ],
  },
  {
    title: "Freelance Developer",
    company: "Avocado Society of Kenya (ASK)",
    period: "November 2020 - March 2021",
    responsibilities: [
      "Developed a mobile application using Flutter to enable registration of avocado growers. This enabled them to register over 10,000 members over Kenya.",
      "Created the backend to serve the app functionalities (Data Storage, emailing and SMS) to avocado growers using python, docker, Google Cloud and Africa's Talking API.",
      "Implemented a messaging dashboard which enabled stakeholders to send and receive SMS messages to registered members, keep track of users of interest which in turn enabled ASK to sell more of their services to the members.",
      "Writing tests on the backend and mobile app to ensure the system works together as expected.",
    ],
  },
  {
    title: "Freelance Flutter Developer & Consultant",
    company: "InnoStrategies (Singapore/Switzerland) - Remote",
    period: "August 2022 - Present",
    responsibilities: [
      "Design and deploy gRPC and REST web server APIs in Dart on Google Cloud Platform. Utilized Google Buckets for file storage and Cloud Run to deploy the servers.",
      "Develop web applications for Unitech International (https://www.unitech-international.org/) using Flutter.",
      "Build robust and thoroughly tested APIs, leveraging PostgreSQL and Redis as datastores.",
      "Developed custom server-side and client-side authentication & authorization mechanisms using Firebase for seamless social logins.",
    ],
  },
]

export function WorkExperience() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
              <h3 className="font-semibold text-lg">{exp.title}</h3>
              <p className="text-sm text-muted-foreground">{exp.company}</p>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-sm">{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

