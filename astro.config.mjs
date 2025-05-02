import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

import vercel from '@astrojs/vercel'

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon({
            include: {
                // mdi: ['instagram', 'linkedin', 'github'],
                mdi: ['*'],
                uil: ['*'],
            },
            iconDir: 'public/icons',
        }),
    ],
    adapter: vercel({
        webAnalytics: {
            enabled: true,
        },
    }),
})
