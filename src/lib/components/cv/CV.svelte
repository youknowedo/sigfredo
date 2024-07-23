<script lang="ts">
	import type { BulletPoint } from '../../../app';
	import Page from './Page.svelte';
	import Point from './Point.svelte';

	type Experience = {
		title: string;
		company: string;
		location: string;
		start: string;
		end: string;
		points: BulletPoint;
	};
	type Education = {
		degree: string;
		school: string;
		location: string;
		start: string;
		end: string;
		points: BulletPoint;
	};
	type Skill = {
		title: string;
		points: BulletPoint;
	};

	const defaults: {
		experiences: Experience[];
		educations: Education[];
		skills: Skill[];
	} = {
		experiences: [
			{
				title: 'Senior Consultant',
				company: 'Ernst & Young',
				location: 'NYC',
				start: "Jun '14",
				end: "Jun '16",
				points: [
					'Finance transformation and operational restructuring for “Big Four” global advertising company',
					'Supply chain analytics and process improvement for multinational confectionery, food and beverage conglomerate'
				]
			},
			{
				title: 'Summer Associate (Consultant)',
				company: 'KPMG',
				location: 'Hong Kong',
				start: "Jun '14",
				end: "Jun '16",
				points: [
					'Assisted with project governance and coordination of resources for a Swiss financial services client; helped allocate 580,000USD among application fees, initial capital investment in Hong Kong, and business continuity plan. Client successfully opened one Local Representative Branch (LRO) in summer of 2013 with a projection of two more in 2014',
					'Placed first in Hong Kong Consulting Competition (out of 8 finalist teams); analyzed and presented on a Harvard Business Review Case Study concerning a high-growth international travel agency'
				]
			},
			{
				title: 'Treasury Analyst;',
				company: 'Global Payments',
				location: 'Atlanta',
				start: "Jun '14",
				end: "Jun '16",
				points: [
					'Analyzed cost cutting strategies with Director of Treasury and discarded banks with irregular or relatively high banking fees; analysis saved an annual amount of 150,000 USD after ending partnerships with three banks in the European region',
					'Consolidated Excel functions into a single macro for accurate forecasting of bank fees; macro pulled from historical data, factored in projected variance, and separated output into individual worksheets'
				]
			}
		],
		educations: [
			{
				degree: 'Bachelor of Business Administration (BBA)',
				school: 'Emory University, Goizueta Business School',
				location: 'Atlanta (U.S)',
				start: "Jun '14",
				end: "Jun '16",
				points: [
					'Concentrations: Finance, Strategy & Management Consulting; Minor in Economics | GPA: 3.8 / 4.0',
					[
						'Emory Admissions Fellow; assisted Dean of Admissions with student applications and Emory’s marketing strategy in the roll out of the university’s new website'
					]
				]
			}
		],
		skills: [
			{
				title: 'Interests',
				points: 'Golf, Tennis, Basketball'
			},
			{
				title: 'Skills',
				points: 'Financial Analysis, Business Strategy, Management Consulting'
			},
			{
				title: 'Languages',
				points: 'English (Native), Swedish (Fluent), Spanish (Intermediate)'
			}
		]
	};

	export let lang: 'sv' | 'en' = 'sv';
	export let photo: string | null = '/cv/basket.jpg';
	export let experiences: Experience[] = defaults.experiences;
	export let educations: Education[] = defaults.educations;
	export let skills: Skill[] = defaults.skills;
</script>

<Page {photo}>
	<div>
		<h4>
			{#if lang === 'sv'}
				Professionell erfarenhet
			{:else}
				Professional experience
			{/if}
		</h4>

		{#each experiences as experience}
			<div class="mb-4 text-sm">
				<div class="flex justify-between">
					<h5 class="font-bold">
						{experience.title} <br />
					</h5>
					<h6 class="italic text-nowrap">{experience.start} - {experience.end}</h6>
				</div>
				<h6 class="font-bold">
					{experience.company} | {experience.location}
				</h6>

				<div class="">
					{#if typeof experience.points === 'string'}
						<p>{experience.points}</p>
					{:else}
						<ul class="pl-5 list-disc list-outside [&_ul]:list-[revert]">
							{#each experience.points as point}
								<Point {point} />
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		{/each}

		<h4>
			{#if lang === 'sv'}
				Utbildning
			{:else}
				Education
			{/if}
		</h4>

		{#each educations as education}
			<div class="mb-4 text-sm">
				<div class="flex justify-between">
					<h5 class="font-bold">
						{education.degree} <br />
					</h5>
					<h6 class="italic text-nowrap">{education.start} - {education.end}</h6>
				</div>
				<h6 class="font-bold">
					{education.school} | {education.location}
				</h6>

				<div class="">
					{#if typeof education.points === 'string'}
						<p>{education.points}</p>
					{:else}
						<ul class="pl-5 list-disc list-outside [&_ul]:list-[revert]">
							{#each education.points as point}
								<Point {point} />
							{/each}
						</ul>
					{/if}
				</div>
			</div>
		{/each}

		<h4>
			{#if lang === 'sv'}
				Kompetenser & Intressen
			{:else}
				Skills & Interests
			{/if}
		</h4>

		{#each skills as skill}
			<p class="text-sm">
				<span class="font-bold">{skill.title}:</span>
				{#if typeof skill.points === 'string'}
					{skill.points}
				{:else}
					{#each skill.points as point}
						{point}{'; '}
					{/each}
				{/if}
			</p>
		{/each}
	</div>
</Page>

<style>
	h4 {
		@apply text-[1.25rem] text-edo;
	}
</style>
