<script>
	import CV from '$lib/components/cv/CV.svelte';
</script>

<CV
	lang="en"
	experiences={[
		{
			title: 'Software Developer Intern',
			company: 'Shinner AB',
			location: 'Malmö',
			start: "nov '23",
			end: "dec '23",
			points: [
				"Redesign their website according to the company's needs and optimized the layout to increase the conversion rate",
				'Redesigned and updated one of their primary user flows to increase user-friendliness'
			]
		},
		{
			title: 'Fullstack web developer',
			company: 'Freelance',
			location: 'Göteborg/Malmö',
			start: "jun '19",
			end: "dec '23",
			points: [
				'Developed and maintained websites for small business owners according to their specifications and digital goals',
				"Used different CMS' including Storyblok, Ghost, WordPress, and Shopify to make the websites easy to manage for the clients"
			]
		},
		{
			title: 'CTO/Co-founder',
			company: 'Booger UF',
			location: 'Göteborg',
			start: "sep '23",
			end: "maj '24",
			points: [
				'Experience in small business management and accounting in the retail industry',
				"Created a SEO optimized landing page and e-commerce site to increase the company's online presence"
			]
		},
		{
			title: 'Head Basketball Coach',
			company: 'Ale Basket P09',
			location: 'Alafors',
			start: "jan '20",
			end: "jun '23",
			points: [
				'Led a youth team from the third highest district series to the district final through teambuilding and good communication with the players'
			]
		}
	]}
	educations={[
		{
			degree: 'High School Engineer',
			school: 'Göteborgsregionens Tekniska Gymnasium',
			location: 'Göteborg/Torslanda',
			start: "aug '22",
			end: "jun '25",
			points: [
				'Entreprenörskap (ENTENR0)',
				['Learned SEO and the basics of costumer behavior and acquisition'],
				'Programmering 2 (PRRPRR02)',
				['Web development (HTML, CSS, JavaScript, PHP)', 'Object-oriented programming (Java, C++)']
			]
		}
	]}
	skills={[
		{
			title: 'Intrests',
			points: ['Tech', 'Skateboarding', 'Basketball', 'Programming']
		},
		{
			title: 'Languages',
			points: ['Swedish', 'English (C2)', 'Tagalog (B1)', 'Spanish (A2)']
		},
		{
			title: 'Skills',
			points: ['React', 'Storyblok', 'SEO', 'Web development', 'Team leadership', 'Communication']
		}
	]}
/>
