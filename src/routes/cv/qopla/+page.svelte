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
	<br />
	Jag heter Filip Mårtensson och söker en praktikplats. Min pappa, Francis Mårtensson, rekommenderade
	att jag skulle kontakta er. Han har berättat mycket positivt om er, och jag tycker personligen att
	ni har ett intressant utbud av produkter.
	<br /> <br />
	Det har gått nästan 10 år sedan McDonald's började sin omfattande användning av självbetjäningskiosker,
	och efter att själv ha känt på hur smidigt det är, tycker jag att det är underligt att inte fler restauranger
	har börjat använda sig av liknande teknik. Jag tror att era produkter verkligen sticker ut på marknaden,
	och även om min praktik bara är två månader, skulle det vara en ära att få vara en del av er resa.
	<br /> <br />
	Under min praktikperiod förra året hade jag förmånen att vara en av de få som fick en praktikplats
	hos Shinner AB i Malmö, ett litet men dynamiskt startup-företag.
	<br /> <br />
	Trots begränsad tid och resurser för att utbilda och vägleda nya praktikanter, valde de att ge mig
	en chans. På kort tid kunde jag visa att mina färdigheter och tidigare erfarenheter verkligen var en
	tillgång för företaget. Jag tog snabbt ansvar för det användarflöde jag tilldelats och arbetade både
	självständigt och i nära samarbete med resten av teamet för att säkerställa att jag fullt ut förstod
	deras kodstruktur, designprocesser och arbetsmetoder. När min tid hos dem var över, fick jag det stora
	berömmet att vara en av de mest självgående praktikanterna de haft, och kunde arbeta nästintill helt
	självständigt.
	<br /> <br />
	Under min tid som frilansare använde jag ofta Elementor för att skapa webbplatser, något jag såg att
	ni också har använt på er hemsida. Dessutom såg jag att ni använder React, GraphQL, NoSQL (MongoDB)
	och Jest på er arbetsplats, vilket jag har erfarenhet av från min tid hos Shinner. Där arbetade jag
	även med att ge input från ett tonårsperspektiv på användarupplevelsen, vilket jag tror kan vara till
	hjälp för er då jag kan ge er en insikt i hur er produkt uppfattas av en yngre målgrupp.
	<br /> <br />
	Jag välkomnar möjligheten att prata med er om ni känner att jag skulle vara passande som praktikant
	hos er. Jag är övertygad om att jag kan vara en tillgång för er och att jag kan lära mig mycket under
	min tid hos er. Om ni önskar ett personligt möte, är jag tillgänglig för en intervju i Stockholm den
	12-13 september, då jag är där under en studieresa.
	<br /> <br />
	Praktikperioden är från vecka 39-47.
	<br /> <br />
	Vänliga hälsningar,
	<br />
	Sigfrid Wade Filip Mårtensson
</CL>
