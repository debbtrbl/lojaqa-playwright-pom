
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    workers: 1,

    fullyParallel: true,

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    reporter: 'html',

    use: {
        baseURL:
            'https://alisonmelo.github.io/tioalison-pe-t4-fap26/projetos-base/01-sistema-login/',
        trace: 'on-first-retry',
    },

    projects: [
        {
            name: 'chromium',
            use: {
                ...devices['Desktop Chrome'],
            },
        },
    ],
});
