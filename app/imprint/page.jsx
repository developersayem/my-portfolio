import React from 'react';
import { promises as fs } from 'fs';

export default async function Imprint() {
    const file = await fs.readFile(process.cwd() + '/public/translations/en.json', 'utf-8');
    const data = JSON.parse(file);

    return (
        <main className="flex min-h-screen font-mono text-sm flex-col p-24">
            <div className='flex flex-col'>
                <a href="/" className='mr-4 transition-all flex flex-row mb-6 hover:text-primary-500'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>{data.general.name} / Home</span>
                </a>
                <h2 className='mb-8 text-2xl font-medium tracking-widest'>Imprint</h2>
            </div>

            <div className='text-surface-600 space-y-6'>
                <h3 className="text-lg font-semibold">Owner & Responsibility</h3>
                <p>
                    <span className="font-medium">Name:</span> {data.general.name} <br />
                    <span className="font-medium">Email:</span> <a href={`mailto:${data.general.socials.email}`} className="text-primary-500 hover:underline">{data.general.socials.email}</a> <br />
                    <span className="font-medium">GitHub:</span> <a href={data.general.socials.github} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">{data.general.socials.github}</a> <br />
                    <span className="font-medium">LinkedIn:</span> <a href={data.general.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:underline">{data.general.socials.linkedin}</a>
                </p>

                <h3 className="text-lg font-semibold">Disclaimer</h3>
                <p>
                    The content on this website is created with great care. However, I do not assume any liability for the accuracy, completeness, or timeliness of the content. Any external links provided on this site are for informational purposes only, and I am not responsible for their content.
                </p>

                <h3 className="text-lg font-semibold">Copyright & Usage</h3>
                <p>
                    All content, including text, images, and code, is protected by copyright law. You are not permitted to use, modify, or distribute any content without explicit permission.
                </p>

                <h3 className="text-lg font-semibold">Contact</h3>
                <p>
                    If you have any questions or concerns, feel free to reach out via email at <a href={`mailto:${data.general.socials.email}`} className="text-primary-500 hover:underline">{data.general.socials.email}</a>.
                </p>
            </div>
        </main>
    );
}
