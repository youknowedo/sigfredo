<script>
	import CL from '$lib/components/cv/CL.svelte';
	import CV from '$lib/components/cv/CV.svelte';
</script>

<CV
	experiences={[
		{
			title: 'Co-founder',
			company: 'Booger UF',
			location: 'Göteborg',
			start: "sep '23",
			end: "maj '24",
			points: ['Ansvarig för skapandet av hemsidan och e-handelsplattformen']
		},
		{
			title: 'Mjukvaruutvecklare Praktikant',
			company: 'Shinner AB',
			location: 'Malmö',
			start: "nov '23",
			end: "dec '23",
			points: [
				'Jobbade både självständigt och kollaborativt med att skapa en ny användarupplevelse för en av deras primära användarflöden',
				'Erfarenhet av att använda React, React Native, NextJS, GraphQL, samt versionshantering i en företagsmiljö'
			]
		},
		{
			title: 'Fullstack webbutvecklare',
			company: 'Freelance',
			location: 'Göteborg/Malmö',
			start: "jun '19",
			end: "dec '23",
			points: [
				'Utvecklade och underhöll webbplatser för småföretagare enligt deras specifikationer och digitala mål',
				'Erfarenhet av att använda olika verktyg beroende på kundens behov, inklusive Wordpress (headless eller med Elementor), Shopify, samt Storyblok',
				'Erfarenhet av att använda olika tekniska verktyg efter projektets behov, inklusive MongoDB, PostgreSQL, SvelteKit, Vercel, GCP samt AWS'
			]
		},
		{
			title: 'Baskettränare',
			company: 'Ale Basket P09',
			location: 'Alafors',
			start: "jan '20",
			end: "jun '23",
			points: [
				'Tog laget från tredje högsta distriktsserien till distriktsfinal genom att teambuilding samt bra kommunikation med spelarna'
			]
		}
	]}
	educations={[
		{
			degree: 'Gymnasieingenjör',
			school: 'Göteborgsregionens Tekniska Gymnasium',
			location: 'Torslanda',
			start: "aug '12",
			end: "jun '25",
			points: [
				'Programmering 1/2 (PRRPRR01/02): Kurs i programmering i C++ samt webbutveckling med PHP och MySQL',
				'Mikrodatortillämpningar (ELEMIK0): Skapade elektriska kretsar och programmerade mikrokontroller i C'
			]
		}
	]}
	skills={[
		{
			title: 'Språk',
			points: ['Svenska', 'Engelska (C1)', 'Tagalog (B1)', 'Spanska (A2)']
		},
		{
			title: 'Kompetenser',
			points: [
				'Webbutveckling',
				'React/Native',
				'Embedded systems (C)',
				'Versionshantering',
				'Agil utveckling',
				'SCRUM',
				'UX/UI-design',
				'Felsökning'
			]
		}
	]}
/>

<CL recipient="Peter Zhu" company="Qopla">
	Hej Peter! <br />
	<br />
</CL>
