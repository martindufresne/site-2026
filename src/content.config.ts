import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        isFeatured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        seo: seoSchema.optional(),
        translationSlug: z.string().optional()
    })
});

const pages = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
    schema: z.object({
        title: z.string(),
        seo: seoSchema.optional()
    })
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.coerce.date(),
        isFeatured: z.boolean().default(false),
        seo: seoSchema.optional(),
        translationSlug: z.string().optional()
    })
});

const courses = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/courses' }),
    schema: z.object({
        title: z.string(),
        subtitle: z.string().optional(),
        excerpt: z.string(),
        duration: z.string(),
        format: z.string(),
        difficulty: z.string(),
        priceUnique: z.string(),
        priceInstallments: z.string().optional(),
        stripeUniqueLink: z.string().optional(),
        stripeInstallments6Link: z.string().optional(),
        stripeInstallments12Link: z.string().optional(),
        isFeatured: z.boolean().default(false),
        publishDate: z.coerce.date().optional(),
        seo: seoSchema.optional()
    })
});

export const collections = { blog, pages, projects, courses };
