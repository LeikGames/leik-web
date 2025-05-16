import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

import vercel from '@astrojs/vercel'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    site: 'https://leik.games/',
    integrations: [
        icon({
            include: {
                // mdi: ['instagram', 'linkedin', 'github'],
                mdi: ['*'],
                uil: ['*'],
            },
            iconDir: 'public/icons',
        }),
        sitemap({
            filter: (page) =>
                page !== 'https://leik.games/blog/' &&
                page !== 'https://leik.games/posts/post-1/' &&
                page !== 'https://leik.games/posts/post-2/' &&
                page !== 'https://leik.games/posts/post-3/' &&
                page !== 'https://leik.games/posts/post-4/',
        }),
    ],
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
})

