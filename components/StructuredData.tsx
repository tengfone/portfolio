import React from 'react';
import { userData } from '../constants/user';

export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": userData.name,
        "jobTitle": "AI Platform Engineer",
        "description": "AI Platform Engineer specializing in MLOps, LLM infrastructure, model serving, and developer platforms. Builds and leads production AI platforms serving 450+ users across 90+ teams.",
        "url": "https://tengfone.dev",
        "sameAs": [
            userData.linkedin,
            userData.github,
            userData.medium
        ],
        "knowsAbout": [
            "Python",
            "Go",
            "TypeScript",
            "Kubernetes",
            "AWS",
            "Azure",
            "Terraform",
            "MLOps",
            "LLM Infrastructure",
            "Model Serving",
            "Developer Platforms",
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
