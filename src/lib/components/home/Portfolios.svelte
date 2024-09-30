<script lang="ts">
	import { lang } from '$lib/stores';
</script>

<div class="overflow-hidden py-20">
	<div class="container">
		<div class="flex justify-center">
			<img
				src="/assets/portfolios/portfolios.webp"
				class="mb-12 h-16 object-contain object-bottom"
				alt=""
			/>
		</div>

		<div
			class="relative z-50 flex flex-col items-center justify-center gap-2 md:h-[4.1in] md:flex-row"
		>
			<div class="relative h-[4.2in] w-[3.5in]">
				<div class="absolute -top-6 right-4 z-50 items-center justify-center sm:hidden">
					{#if $lang === 'en'}
						<img
							class="absolute left-[17%] top-[17%] h-[38%] w-[65%] object-cover object-bottom"
							src="/assets/click.webp"
							alt=""
						/>
					{:else}
						<img
							class="absolute left-[13%] top-[19%] h-[41%] w-[75%] object-cover object-top"
							src="/assets/klicka.webp"
							alt=""
						/>
						<img class="h-10" src="/assets/bubble.webp" alt="" />
					{/if}
				</div>

				<img
					class="absolute -right-32 -top-8 hidden h-20 sm:block md:hidden"
					src="/assets/klicka.webp"
					alt=""
				/>
				<img
					class="absolute -left-32 bottom-4 hidden h-20 md:block"
					src="/assets/click.webp"
					alt=""
				/>
				<a
					href="https://sigfredo.design"
					target="_blank"
					class="top-0 flex rotate-3 justify-center drop-shadow-md duration-200 hover:-top-4 hover:rotate-0 hover:pb-6 focus:-top-4 focus:rotate-0 focus:pb-6 md:absolute"
				>
					<span class="hidden">Design Portfolio</span>
					<div class="flex aspect-[3.5/4.2] h-[4.2in] w-[3.5in] flex-col items-center bg-white">
						<img
							class="mx-auto mt-[0.2in] h-[3.1in] w-[3.1in]"
							src="/assets/portfolios/design.webp"
							alt=""
						/>
						<div class="my-auto">
							<img class="h-8" src="/assets/portfolios/design-portfolio.webp" alt="" />
						</div>
					</div>
				</a>
			</div>
			<div class="relative h-[4.2in] w-[3.5in]">
				<img
					class="absolute -left-28 bottom-4 hidden h-20 sm:block md:hidden"
					src="/assets/click.webp"
					alt=""
				/>
				<img
					class="absolute -right-28 -top-14 hidden h-20 md:block"
					src="/assets/klicka.webp"
					alt=""
				/>
				<a
					href="https://sigfredo.dev"
					target="_blank"
					class="-top-1 flex -rotate-2 justify-center drop-shadow-md duration-200 hover:-top-4 hover:rotate-0 hover:pb-6 focus:-top-4 focus:rotate-0 focus:pb-6 md:absolute"
				>
					<span class="hidden">Dev Portfolio</span>
					<div class="flex aspect-[3.5/4.2] h-[4.2in] w-[3.5in] flex-col items-center bg-white">
						<img
							class="mx-auto mt-[0.2in] h-[3.1in] w-[3.1in]"
							src="/assets/portfolios/dev.webp"
							alt=""
						/>
						<div class="my-auto">
							<img class="h-8" src="/assets/portfolios/dev-portfolio.webp" alt="" />
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</div>
