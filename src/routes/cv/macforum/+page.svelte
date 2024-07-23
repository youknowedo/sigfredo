<script>
	import CL from '$lib/components/cv/CL.svelte';
	import CV from '$lib/components/cv/CV.svelte';
</script>

<CV
	experiences={[
		{
			title: 'Kioskbiträde',
			company: 'Ale Basket Matchkiosk',
			location: 'Alafors',
			start: "jan '20",
			end: 'nutid',
			points: [
				'Ökade ordervärdet med upp till 20% genom att rekommendera ytterligare relevanta produkter',
				'Erfarenhet av att hantera kassa och kortbetalningar'
			]
		},
		{
			title: 'VD/Säljare',
			company: 'Booger UF',
			location: 'Göteborg',
			start: "sep '23",
			end: "maj '24",
			points: [
				'Erfarenhet av småföretagande och bokföring i detaljhandelsbranschen',
				'Ansvarig för att skapa och upprätthålla relationer med leverantörer',
				'Överskred försäljningsmålet med 33% genom att aktivt leta efter nya kunder'
			]
		},
		{
			title: 'Mjukvaruutvecklare Praktikant',
			company: 'Shinner AB',
			location: 'Malmö',
			start: "nov '23",
			end: "dec '23",
			points: [
				'Erfarenhet av hur småföretag i mjukvaruutvecklingsbranschen fungerar',
				'Erfarenhet av att använda Macs samt XCode i en företagsmiljö'
			]
		},
		{
			title: 'Baskettränare',
			company: 'Ale Basket P09',
			location: 'Alafors',
			start: "jan '20",
			end: "jun '23",
			points: [
				'Tog laget från tredje högsta distriksserien till distriktsfinal genom att teambuilding samt bra kommunikation med spelarna'
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
				'Entreprenörskap (ENTENR0)',
				['Undervisning om sälj och säljtekniker'],
				'Elektronik och mikrodatorteknik (ELEELR0)',
				['Koppling av kretsar', 'Förståelse om lågnivåkomponenter']
			]
		}
	]}
	skills={[
		{
			title: 'Intressen',
			points: ['Teknik', 'Skateboard', 'Basket', 'Programmering']
		},
		{
			title: 'Språk',
			points: ['Svenska', 'Engelska (C2)', 'Tagalog (B1)', 'Spanska (A2)']
		},
		{
			title: 'Kompetenser',
			points: [
				'Kundservice',
				'Kassahantering',
				'Teamledning',
				'Kundrelationer',
				'Kommunikation',
				'Programmering',
				'Elektronik'
			]
		}
	]}
/>

<CL recipient="Oscar Björnlod" company="Macforum" email="oscar.bjornlod@macforum.se">hello</CL>
