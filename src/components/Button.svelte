<script>
  import { twMerge } from "tailwind-merge"
</script>

<button
  type="button"
  on:click
  class={twMerge(
    "flex flex-row items-center justify-center px-3 py-1.5 rounded-lg bg-neutral-900 text-sm text-white gap-x-2 transition duration-200 hover:bg-neutral-800",
    $$props.class,
  )}
>
  <slot /></button
>
