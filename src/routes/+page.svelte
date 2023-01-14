<script lang="ts">
	const text = 'Hello World!';
	const content = 'Hello World!';
</script>

<div class="bg-red-200 flex justify-center items-center h-screen w-screen">
	<h1
		data-content={content}
		class="relative z-10 text-green-400 font-maragsa text-8xl font-bold before:absolute before:top-0 before:content-[attr(data-content)] before:text-red-500 before:h-full before:w-full before:-left-1 before:-z-10"
	>
		{text}
	</h1>
</div>
