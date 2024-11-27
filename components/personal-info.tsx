import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail } from 'lucide-react'
import Image from "next/image"

export function PersonalInfo() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-center">Douglas David Bett</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="https://avatars.githubusercontent.com/u/28408089?v=4&height=192&width=192"
              alt="Douglas David Bett"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="flex flex-col space-y-4 items-center sm:items-start">
            <a href="mailto:bettdoug@gmail.com" className="flex items-center hover:underline">
              <Mail className="mr-2 h-5 w-5" />
              bettdoug@gmail.com
            </a>
            <a href="https://github.com/bettdouglas" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
              <Github className="mr-2 h-5 w-5" />
              github.com/bettdouglas
            </a>
            <a href="https://www.linkedin.com/in/douglas-bett/" target="_blank" rel="noopener noreferrer" className="flex items-center hover:underline">
              <Linkedin className="mr-2 h-5 w-5" />
              linkedin.com/in/douglas-bett
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

