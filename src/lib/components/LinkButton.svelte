<button on:click>
  <slot />
</button>

<style>
  button {
    background: none; /* Remove default button background for link-like appearance */
    border: none; /* Remove default button border */
    color: white; /* Match text color to the theme (white on dark background) */
    text-decoration: underline; /* Underline to visually indicate it's a link */
    cursor: pointer; /* Show pointer cursor on hover to indicate interactivity */
    font-size: inherit; /* Inherit font size from parent element */
    font-family: inherit; /* Inherit font family from parent element */
    padding: 0; /* Remove default button padding for seamless inline appearance */
  }

  button:hover {
    opacity: 0.8; /* Subtle opacity reduction on hover for visual feedback */
  }
</style>
