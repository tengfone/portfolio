import React from 'react';
import { userData } from '../constants/user';

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": userData.name,
        "jobTitle": "Data Engineer",
        "description": "Data Engineer specializing in MLOps, AIOps, and cloud infrastructure. Led AI innovation across 30 government agencies serving 450+ users.",
        "url": "https://tengfone-portfolio.vercel.app",
        "sameAs": [
            userData.linkedin,
            userData.github,
            userData.medium
        ],
        "knowsAbout": [
            "Python",
            "TypeScript",
            "AWS",
            "Azure",
            "Terraform",
            "MLOps",
            "AIOps",
            "Data Engineering",
            "Machine Learning",
            "Cloud Infrastructure"
        ],
        "alumniOf": {
            "@type": "Organization",
            "name": "Singapore University of Technology and Design"
        },
        "worksFor": {
            "@type": "Organization",
            "name": "GovTech Singapore"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
    );
}
