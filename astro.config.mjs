import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'AStA-Doc',
			editLink: {
				baseUrl: 'https://github.com/hannesbrugger/HTWasGeht/tree/main',
			},
			sidebar: [
				{
					label: 'Asta',
					autogenerate: { directory: 'asta' },
				},
				{
					label: 'Referate',
					autogenerate: { directory: 'referate' },
				},
				{
					label: 'Projekte',
					autogenerate: { directory: 'projekte' },
				},
				{
					label: 'Veranstaltungen',
					autogenerate: { directory: 'veranstaltungen' },
				},

			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
