<script>
	import CL from '$lib/components/cv/CL.svelte';
	import CV from '$lib/components/cv/CV.svelte';
</script>

<CV
	experiences={[
		{
			title: 'Restaurangbiträde',
			company: 'Kåseberga Café & Bistro',
			location: 'Kåseberga',
			start: "jan '20",
			end: "jul '20",
			points: [
				'Erfarenhet av att ge högkvalitativ kundservice och hantera olika kunder.',
				'Erfarenhet av att arbeta under högt tempo och hantera stressiga situationer.'
			]
		},
		{
			title: 'Kafébiträde',
			company: 'Backagården Café',
			location: 'Löderup',
			start: "jul '19",
			points: [
				'Kunskap om att upprätthålla en organiserad och ren arbetsmiljö.',
				'Förmåga att anpassa sig till olika kundpreferenser och ändrade krav.'
			]
		},
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
			points: ['Överskred försäljningsmålet med 33% genom att undersöka efter kundernas behov']
		},
		{
			title: 'Mjukvaruutvecklare Praktikant',
			company: 'Shinner AB',
			location: 'Malmö',
			start: "nov '23",
			end: "dec '23",
			points: [
				'Erfarenhet av att arbeta i högt tempo med deadlines tillsammans med andra medarbetare'
			]
		},
		{
			title: 'Baskettränare',
			company: 'Ale Basket P09',
			location: 'Alafors',
			start: "jan '20",
			end: "jun '23",
			points: [
				'Tog laget från tredje högsta distriktsserien till distriktsfinal genom att teambuilding samt bra kommunikation och ledarskap'
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
			points: ['Kundservice', 'Kassahantering', 'Teamledning', 'Kundrelationer', 'Kommunikation']
		}
	]}
/>
