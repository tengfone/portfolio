import React from 'react'
import { motion } from 'framer-motion'

const SKILL_AREAS = [
  {
    area: 'AI Platform',
    focus: 'Model access, inference and governed ML workflows, including RAG.',
    tools: 'vLLM · SageMaker · MLflow · HuggingFace · LangGraph · LLM APIs',
  },
  {
    area: 'Backend',
    focus: 'APIs and services that turn models into shared capabilities.',
    tools: 'Python · Qdrant · FastAPI · Go · PostgreSQL · Redis',
  },
  {
    area: 'Cloud & Infrastructure',
    focus: 'Repeatable delivery across cloud and restricted environments.',
    tools: 'AWS · Azure · Kubernetes · Terraform · Docker · GitLab CI/CD · ArgoCD',
  },
  {
    area: 'Observability',
    focus: 'Understanding reliability, usage and platform adoption.',
    tools: 'OpenTelemetry · Prometheus · Grafana · Loki · Tempo · CloudWatch',
  },
  {
    area: 'Product Engineering',
    focus: 'Interfaces and developer tools that make platforms usable.',
    tools: 'React · TypeScript · Next.js',
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

          <div className="mx-auto max-w-4xl rounded-lg bg-white/10 px-8 py-12 text-justify leading-relaxed text-gray-600 dark:bg-black/10 dark:text-gray-300">
            <p className="mb-6">
              I build AI platforms and MLOps systems from idea to production,
              especially in enterprise and restricted environments where
              integration, security, and operational readiness decide whether
              something gets adopted. Across the platforms I work on, I operate
              in three modes: technical owner when a platform needs someone
              accountable for its architecture, hands on engineer when it needs
              someone to write the thing, and engineering delivery lead when it
              needs someone to align priorities and keep a team moving in the
              same direction.
            </p>
            <p className="mb-6">
              At GovTech Singapore, I led the architecture and rollout of a
              multi tenant, multi cloud MLOps platform on AWS and Azure used by
              growing 450~ users across 90~ teams, supporting governed model
              development and deployment in isolated environments and LLM
              workflows like RAG/Agentic. I also built an AI access platform
              on Kubernetes, owning the frontend, the Go microservices behind
              its APIs, and governance grade observability. I built and scaled
              an enterprise LLM gateway routing tens of millions of monthly requests
              across multiple providers and self hosted inference with vLLM to
              balance cost, latency, and vendor dependency.
            </p>
            <p className="mb-6">
              I started out as a Data Engineer, but I have always been a bit of
              a do everything engineer. That has meant picking up whatever the
              problem needed at the time, from Go microservices and Kubernetes
              to frontends, and it is why platform work suits me.
            </p>
            <p>
              I enjoy problem solving and building useful things that work
              within real constraints, and I like that the constraints here come
              with a public good payoff. I pressure test new techniques, keep
              what works, and turn it into patterns that others can reuse. I co
              founded AI Wednesday with a team and previously ran technical
              workshops on applied AI adoption, and this site is where I share
              projects I build in my free time.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-lg border border-gray-100 bg-white/50 px-8 py-12 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50">
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
