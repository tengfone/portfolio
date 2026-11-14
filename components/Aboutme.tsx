import React from 'react'
import SectionHeading from './SectionHeading'

const SKILL_AREAS = [
  {
    area: 'Application Engineering',
    focus: 'Full-stack applications and APIs shaped around user needs.',
    tools: 'Go · Python · TypeScript · React · REST APIs · PostgreSQL · Redis',
  },
  {
    area: 'AI/ML Platforms',
    focus: 'Reusable AI workflows, model serving and governed ML lifecycles.',
    tools:
      'LLMs · RAG · vLLM · LiteLLM · SageMaker · MLflow · Hugging Face · PySpark',
  },
  {
    area: 'Cloud & Infrastructure',
    focus: 'Repeatable delivery across cloud and restricted environments.',
    tools: 'AWS · Azure · Kubernetes · ECS · Docker · Terraform · CI/CD',
  },
  {
    area: 'Observability & Platform Security',
    focus: 'Reliable services, visible usage and controlled access.',
    tools:
      'OpenTelemetry · Prometheus · Grafana · OIDC/OAuth · RBAC · Secrets management',
  },
]

export default function AboutMe(): React.ReactElement {
  return (
    <section id="aboutme" aria-labelledby="about" className="container-page pt-20 sm:pt-28">
      <SectionHeading id="about" title="About" />

      <div className="mt-6 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <div className="max-w-prose space-y-5 leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            I care about making AI useful beyond a demo. I turn lessons from
            working with teams into reusable RAG reference implementations and
            OpenAI-compatible APIs, so they have a practical starting point.
            Having led the self-hosted platform’s migration into a highly
            restricted environment, I now coordinate newer-model onboarding,
            inference scaling, routing and model lifecycle management.
          </p>
          <p>
            My data engineering roots keep me close to how systems run: their
            reliability, usage, cost and security. I also co-founded AI
            Wednesday and have run applied AI workshops to help teams learn
            from one another. This site is where I share what I build and
            learn along the way.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">What I work with</h3>
          <dl className="mt-3 divide-y divide-gray-200 border-t border-gray-200 dark:divide-white/10 dark:border-white/10">
            {SKILL_AREAS.map((group) => (
              <div key={group.area} className="py-4">
                <dt className="text-sm font-medium text-gray-900 dark:text-gray-100">{group.area}</dt>
                <dd className="mt-1 font-mono text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
                  {group.tools}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
