<script>
	let count = 0;
	$: {
		if (count > 10) {
			console.log('I am the winner');
		}
	}
</script>

<h1 class="text-white">Click me {count}</h1>
<button
	on:click={() => {
		count++;
	}}
>
	Increment
</button>
