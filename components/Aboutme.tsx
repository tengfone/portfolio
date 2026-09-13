import React from 'react'
import { motion } from 'framer-motion'

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
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  }

  return (
    <div id="aboutme" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h1>

          <div className="mx-auto max-w-4xl rounded-lg bg-white/10 px-4 py-8 text-left leading-relaxed text-gray-600 dark:bg-black/10 dark:text-gray-300 sm:px-8 sm:py-12">
            <p className="mb-6">
              I’m an AI Platform Engineer at GovTech Singapore. I work with
              users, customer teams and product stakeholders to turn ambiguous
              problems into full-stack AI applications and shared platforms,
              from the first prototype to secure production on AWS and Azure.
            </p>
            <p className="mb-6">
              My role changes with what each project needs: technical owner for
              a multi-tenant MLOps and AI API platform, core full-stack engineer
              for a whole-of-government AI platform, and engineering delivery
              lead for a self-hosted GenAI platform. That means shaping
              architecture, building React interfaces and Go services, and
              aligning people and priorities across enterprise and restricted
              environments.
            </p>
            <p className="mb-6">
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

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-lg border border-gray-100 bg-white/50 px-4 py-8 sm:px-8 sm:py-12 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
                What I work with
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                The tools behind the platforms I build, grouped by the problems
                they solve.
              </p>

              <dl className="mt-6 divide-y divide-gray-200 dark:divide-gray-700">
                {SKILL_AREAS.map((group) => (
                  <div
                    key={group.area}
                    className="grid gap-2 py-5 sm:grid-cols-[13rem_1fr] sm:gap-8"
                  >
                    <dt className="font-semibold text-emerald-700 dark:text-brand-accent">
                      {group.area}
                    </dt>
                    <dd>
                      <p className="text-gray-800 dark:text-gray-200">
                        {group.focus}
                      </p>
                      <p className="mt-2 font-mono text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                        {group.tools}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
