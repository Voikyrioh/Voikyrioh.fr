import { z } from 'zod'

export const ProjectSchema = z.object({
  slug: z.string(),
  titleKey: z.string(),
  summaryKey: z.string(),
  descriptionKey: z.string(),
  liveUrl: z.string().url().nullable(),
  repoUrl: z.string().url().nullable(),
  stack: z.array(z.string()),
  status: z.enum(['live', 'in-progress', 'published', 'learning']),
  featured: z.boolean(),
  imageUrl: z.string().nullable().optional(),
})

export const ProjectsSchema = z.array(ProjectSchema)

export type Project = z.infer<typeof ProjectSchema>
