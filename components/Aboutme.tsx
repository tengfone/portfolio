import React from 'react'
import { motion } from 'framer-motion'

export default function AboutMe(props: any): React.ReactElement {
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
              something gets adopted. I like working across the stack and across
              teams, from architecture discussions to hands on engineering.
            </p>
            <p className="mb-6">
              At GovTech Singapore, I led the architecture and rollout of a
              multi tenant, multi cloud MLOps platform on AWS and Azure used by
              growing 450~ users across 90~ teams, supporting governed model
              development and deployment in isolated environments and LLM
              workflows like RAG prototyping. I also built an AI access platform
              on Kubernetes, owning the frontend, Go based orchestration and API
              services, and governance grade observability. I built and scaled
              an enterprise LLM gateway routing millions of monthly requests
              across multiple providers and self hosted inference with vLLM to
              balance cost, latency, and vendor dependency.
            </p>
            <p>
              I enjoy problem solving and building useful things that work
              within real constraints. I like pressure testing new techniques,
              keeping what works, and turning it into patterns that others can
              reuse. I co founded AI Wednesday with a team and previously ran
              technical workshops on applied AI adoption, and this site is where
              I share projects I build in my free time.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="rounded-lg border border-gray-100 bg-white/50 px-8 py-12 shadow-lg backdrop-blur-sm dark:border-gray-700 dark:bg-gray-800/50">
              <h2 className="mb-4 text-2xl font-bold text-gray-800 dark:text-gray-100">
                Technical Skills
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                I work primarily with these technologies:
              </p>

              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                    Programming Languages
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Python',
                      'TypeScript',
                      'JavaScript',
                      'Bash',
                      'Java',
                      'Dart',
                      'Solidity',
                      'Go',
                      '.NET',
                      'c%23',
                      'C++',
                    ].map((lang, i) => (
                      <motion.div
                        key={lang}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          alt={lang}
                          src={`https://img.shields.io/badge/${lang.toLowerCase()}-%2314354C.svg?style=for-the-badge&logo=${lang.toLowerCase()}&logoColor=white`}
                          className="h-7 transition-opacity hover:opacity-80"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Frameworks & Libraries
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'React',
                      'Cypress',
                      'Docker',
                      'Postgres',
                      'MySQL',
                      'Flutter',
                      'Jupyter',
                      'Arduino',
                      'PyTorch',
                      'NumPy',
                      'Pandas',
                      'MongoDB',
                      '.NET',
                    ].map((tech, i) => (
                      <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <img
                          alt={tech}
                          src={`https://img.shields.io/badge/${tech.toLowerCase()}-%2320232a.svg?style=for-the-badge&logo=${tech.toLowerCase()}&logoColor=white`}
                          className="h-7 transition-opacity hover:opacity-80"
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-xl font-semibold text-gray-800 dark:text-gray-200">
                    Cloud & Infrastructure
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Amazon_AWS', 'Microsoft_Azure', 'Terraform'].map(
                      (tool, i) => {
                        let badgeUrl
                        if (tool === 'Amazon_AWS') {
                          badgeUrl =
                            'https://img.shields.io/badge/Amazon_AWS-%23FF9900.svg?style=for-the-badge&logo=amazonaws&logoColor=white'
                        } else if (tool === 'Microsoft_Azure') {
                          badgeUrl =
                            'https://img.shields.io/badge/Microsoft_Azure-%230078D4.svg?style=for-the-badge&logo=microsoftazure&logoColor=white'
                        } else {
                          badgeUrl = `https://img.shields.io/badge/${tool.toLowerCase()}-%235835CC.svg?style=for-the-badge&logo=${tool.toLowerCase()}&logoColor=white`
                        }

                        return (
                          <motion.div
                            key={tool}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <img
                              alt={tool}
                              src={badgeUrl}
                              className="h-7 transition-opacity hover:opacity-80"
                            />
                          </motion.div>
                        )
                      }
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
