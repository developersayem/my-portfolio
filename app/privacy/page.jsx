import React from 'react';
import { promises as fs } from 'fs';

export default async function PrivacyStatement() {
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
                <h2 className='mb-8 text-2xl font-medium tracking-widest'>Privacy Statement</h2>
            </div>

            <div className='text-surface-600 space-y-6'>
                <h3 className="text-lg font-semibold">1. Introduction</h3>
                <p>
                    Your privacy is important to me. This Privacy Statement explains what personal data I collect, how I use it, and your rights regarding your information.
                </p>

                <h3 className="text-lg font-semibold">2. Data Collection</h3>
                <p>
                    I may collect limited personal information when you interact with this site, such as:
                    <ul className="list-disc ml-6">
                        <li>Contact details if you reach out via email.</li>
                        <li>Basic analytics data (e.g., visitor count) for site improvement.</li>
                    </ul>
                </p>

                <h3 className="text-lg font-semibold">3. How I Use Your Data</h3>
                <p>
                    Any collected data is used solely for:
                    <ul className="list-disc ml-6">
                        <li>Improving website performance.</li>
                        <li>Responding to inquiries or messages.</li>
                    </ul>
                    I do not sell or share your data with third parties.
                </p>

                <h3 className="text-lg font-semibold">4. Data Security</h3>
                <p>
                    I take reasonable steps to protect your personal information from unauthorized access, disclosure, or misuse.
                </p>

                <h3 className="text-lg font-semibold">5. Your Rights</h3>
                <p>
                    You have the right to:
                    <ul className="list-disc ml-6">
                        <li>Request information about the data collected.</li>
                        <li>Request deletion of any personal data (if applicable).</li>
                    </ul>
                    To exercise these rights, contact me at <a href={`mailto:${data.general.socials.email}`} className="text-primary-500 hover:underline">{data.general.socials.email}</a>.
                </p>

                <h3 className="text-lg font-semibold">6. Changes to This Statement</h3>
                <p>
                    I may update this Privacy Statement as needed. Any changes will be reflected on this page.
                </p>

                <h3 className="text-lg font-semibold">7. Contact</h3>
                <p>
                    If you have any questions about this Privacy Statement, please reach out at <a href={`mailto:${data.general.socials.email}`} className="text-primary-500 hover:underline">{data.general.socials.email}</a>.
                </p>
            </div>
        </main>
    );
}
