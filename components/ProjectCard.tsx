import React from 'react'
import Image from 'next/image'
import { safeExternalUrl } from '../lib/safeExternalUrl'
import { TagList } from './Tag'
import ArrowUpRight from './shared/ArrowUpRight'

export interface ProjectCardProps {
  title: string
  link: string
  image: string
  desc: string
  tech: string[]
  /** Larger image and unclamped description, for the featured row. */
  size?: 'default' | 'large'
}

export default function ProjectCard({
  title,
  link,
  image,
  desc,
  tech,
  size = 'default',
}: ProjectCardProps): React.ReactElement {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={safeExternalUrl(link)}
      className="card-link group flex h-full flex-col overflow-hidden"
    >
      <div
        className={`relative w-full overflow-hidden border-b border-gray-200 bg-gray-100 dark:border-white/10 dark:bg-white/5 ${
          size === 'large' ? 'aspect-[16/9]' : 'aspect-[16/10]'
        }`}
      >
        <Image
          src={image}
          alt=""
          fill
          sizes={size === 'large' ? '(min-width: 1024px) 560px, 100vw' : '(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw'}
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          unoptimized={image.endsWith('.gif')}
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="flex items-center justify-between gap-3 text-base font-semibold text-gray-900 dark:text-gray-100">
          {title}
          <span className="text-gray-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gray-900 dark:text-gray-500 dark:group-hover:text-gray-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </h3>
        <p
          className={`mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400 ${
            size === 'large' ? '' : 'line-clamp-3'
          }`}
        >
          {desc}
        </p>
        <div className="mt-auto pt-4">
          <TagList items={tech} />
        </div>
      </div>
    </a>
  )
}
