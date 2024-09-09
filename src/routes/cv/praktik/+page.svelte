<script>
	import CL from '$lib/components/cv/CL.svelte';
	import CV from '$lib/components/cv/CV.svelte';
</script>

<CV
	experiences={[
		{
			title: 'Mjukvaruutvecklare Praktikant',
			company: 'Shinner AB',
			location: 'Malmö',
			start: "nov '23",
			end: "dec '23",
			points: [
				'Jobbade både självständigt & kollaborativt med att skapa en ny användarupplevelse för en av deras primära användarflöden',
				'Var drivande med att skapa en ny design för deras hemsida samt optimerade layouten för att öka konverteringsgraden',
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
				'Utvecklade & underhöll webbplatser för småföretagare enligt deras specifikationer & digitala mål',
				'Erfarenhet av att använda olika verktyg beroende på kundens behov, inklusive Wordpress (headless eller med Elementor), Shopify, samt Storyblok',
				'Erfarenhet av att använda olika tekniska verktyg efter projektets behov, inklusive MongoDB, PostgreSQL, SvelteKit, Vercel, GCP samt AWS'
			]
		},
		{
			title: 'Basketdomare',
			company: 'WBDF',
			location: 'Göteborgsområdet',
			start: "aug '19",
			end: "jun '24",
			points: [
				'Hantera och göra snabba, tuffa och svåra beslut i en under press som kan påverka matchens utgång och spelupplevelse'
			]
		}
	]}
	educations={[
		{
			degree: 'Gymnasie- & gymnasieingenjörsexamen',
			school: 'Göteborgsregionens Tekniska Gymnasium',
			location: 'Torslanda',
			start: "aug '12",
			end: "jun '25",
			points: [
				'Tävlade i IYTP (fysiktävling) samt Programmeringsolympiaden',
				'Studerade ett utökat program (2500 + 1200 poäng)',
				[
					'Programmering 1/2: Kurs i programmering i Java & C++ samt webbutveckling med PHP & MySQL',
					'Mikrodatortillämpningar: Skapade elektriska kretsar & programmerade mikrokontroller i C'
				]
			]
		}
	]}
	skills={[
		{
			title: 'Intressen',
			points: ['Teknik', 'Skateboard', 'Basket', 'Programmering', 'Spelutveckling']
		},
		{
			title: 'Språk',
			points: ['Svenska', 'Engelska (C1)', 'Tagalog (B1)', 'Spanska (A2)']
		},
		{
			title: 'Kompetenser',
			points: [
				'Webbutveckling',
				'Spelutveckling',
				'React/Native',
				'Embedded systems (mikroC & Arduino)',
				'Versionshantering',
				'Agil utveckling',
				'SCRUM',
				'UX/UI-design',
				'Felsökning'
			]
		}
	]}
/>
