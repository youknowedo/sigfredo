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
			points: ['Ansvarig för skapandet av hemsidan & e-handelsplattformen']
		},
		{
			title: 'Mjukvaruutvecklare Praktikant',
			company: 'Shinner AB',
			location: 'Malmö',
			start: "nov '23",
			end: "dec '23",
			points: [
				'Jobbade både självständigt & kollaborativt med att skapa en ny användarupplevelse för en av deras primära användarflöden',
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

<CL recipient="Sahir Ahmed" company="Qopla">
	Hej Sahir!
	<br /> <br />
	Enligt de flesta av mina kamrater är alla praktikplatser inom mjukvaruutvecklingsbranschen likadana.
	Dock har jag en annan uppfattning. De flesta tar därför det största företaget de kan hitta och blir
	fast med en plats där de klockar in och jobbar på något alla vet aldrig kommer lämna datorn de utvecklar
	på. Jag däremot, vill utvecklas, lära mig så mycket som möjligt, och skapa något som gör skillnad.
	Därför söker jag en plats hos er på Qopla. Jag tror att faktumet att ni har ett såpass litet utvecklarteam
	gör att jag kan få en bredare förståelse för hela utvecklingsprocessen och att jag kan vara med och
	påverka produkten på ett sätt som jag inte hade kunnat göra på ett större företag. Dessutom har jag
	under min frilanstid utvecklat webbplatser åt restauranger och jag tror att en praktikplats hos er
	skulle ge mig en möjlighet att bädda in mig djupare i just den branschen.
	<br /> <br />
	Jag tror heller inte att det endast är jag som kan dra nytta av en praktikplats hos er. Under min tid
	som frilansare använde jag ofta Elementor för att skapa webbplatser vilket jag såg att ni har gjort
	på er hemsida. Dessutom såg jag på både Luke och Anastasiias LinkedIn-profiler att de använder React,
	GraphQL, NoSQL (MongoDB) och Jest på eran arbetsplats vilket jag har erfarenhet av från min tid hos
	Shinner AB. Där arbetade jag även med att ge input från ett tonårsperspektiv på användarupplevelsen
	vilket jag tror kan vara till stor hjälp för er då jag kan ge er en insikt i hur er produkt uppfattas
	av en yngre målgrupp.
	<br /> <br />
	Under min praktikperiod förra året fick jag äran att vara en av de få som fått en praktikplats hos
	Shinner AB i Malmö. De är ett litet startup-företag som hade begränsad tid och resurser för att utbilda
	och guida mig vilket gjorde att de först var skeptiska till att ta in en mig som praktikant. Dock visade
	jag snabbt mina tidigare kompetenser och erfarenheter som gjorde att de snabbt insåg att jag kunde
	vara till stor hjälp för dem. Därefter fick kunde jag jobba både självständigt med användarflödet jag
	blivit tilldelad att men också kollaborativt med resten av teamet för att säkerställa att jag förstod
	deras kodstruktur, design- och arbetsmetoder.
	<br /> <br />
	Jag välkomnar möjligheten att prata med er om du känner att jag skulle vara en passande som praktikant
	hos er. Jag är övertygad om att jag kan vara en tillgång för er och att jag kan lära mig mycket under
	min tid hos er. Vill ni träffas fysiskt är jag tillgänglig för en intervju hos er i Stockholm september
	12-13 då jag är där under en studieresa.
	<br /> <br />

	Vänliga hälsningar,
	<br />
	Sigfrid Wade Filip Mårtensson
</CL>
