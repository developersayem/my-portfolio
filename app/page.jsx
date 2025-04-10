import React from 'react';
import About from "@/components/about";
import Education from "@/components/education/education";
import Experiences from "@/components/experiences/experiences";
import Header from "@/components/header";
import Skills from "@/components/skills/skills";
import Projects from '@/components/projects/projects';
import Credits from '@/components/credits';
import { promises as fs } from 'fs';
import Reveal from '@/components/Reveal';

export default async function Home() {
  const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
  const data = JSON.parse(file);

  return (
    <main className="flex min-h-screen flex-col items-center py-24 px-6 lg:px-24">
      <div className="z-2 w-full max-w-5xl font-mono text-sm flex flex-col lg:flex-row justify-between">
        <Header data={data.general}></Header>
        <div className='lg:pl-[50%]'>
          <Reveal><About data={data.general} /></Reveal>
          <Reveal delay={0.1}><Experiences data={data.experiences} /></Reveal>
          <Reveal delay={0.2}><Education data={data.courses} /></Reveal>
          <Reveal delay={0.3}><Skills data={data.skills} /></Reveal>
          <Reveal delay={0.4}><Projects data={data.projects} /></Reveal>
          <Reveal delay={0.5}><Credits data={data.general} /></Reveal>
        </div>
      </div>
    </main>
  )
}
