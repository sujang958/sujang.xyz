<script lang="ts">
  import { MoveLeft, MoveRight, RotateCcw } from "lucide-svelte"
  import Button from "../Button.svelte"

  const sentences = [
    " I'm a 16 y/o developer,",
    "who loves web development and graphic design.",
    "I'm very keen on building things that can solve small things in everyday life.",
  ]

  let current = 0

  $: if (current >= 3) current = 0
  $: if (current <= 0) current = 0
</script>

<p class="text-5xl font-semibold leading-tight text-balance">
  {#each sentences as sentence, i}
    <span
      class="transition duration-500 {current !== i ? 'text-neutral-600' : ''}"
      >{sentence}&nbsp;</span
    >
  {/each}
</p>

<div
  class="py-12 flex flex-row items-center justify-start self-start gap-x-2.5"
>
  <Button on:click={() => (current -= 1)}>
    <MoveLeft class="h-5 w-5" />
    Read Previous
  </Button>
  <Button on:click={() => (current = 0)} class="p-2">
    <RotateCcw class="h-4 w-4" />
  </Button>
  <Button on:click={() => (current += 1)}>
    Read Next
    <MoveRight class="h-5 w-5" />
  </Button>
  <!-- TODO: implement these buttons -->
</div>
