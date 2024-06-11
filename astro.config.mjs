import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'VS-HTWG',
			social: {
				matrix: 'https://htwg-konstanz.de',
			},
			sidebar: [
				{
					label: 'Übersicht',
					autogenerate: { directory: 'vs' },
				},
				{
					label: 'Asta',
					autogenerate: { directory: 'asta' },

				},
				{
					label: 'Fachschaften',
					autogenerate: { directory: 'fachschaften' },
				},
				{
					label: 'VS',
					autogenerate: { directory: 'vs' },
				},

			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
