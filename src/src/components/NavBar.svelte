<script>
    import { onMount } from 'svelte';

    // Store the nav items from the backend
    let navItems = [];
    let activeItem = ''; // Track the currently active item

    // Simulate fetching data from the backend API
    async function fetchNavItems() {
        // Replace this with your actual API call to the backend
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(["P1", "Project 2", "Grow up", "Another Project", "Cool Project"]);
            }, 1000);
        });
    }

    // Function to set the clicked item as active
    function setActive(item) {
        activeItem = item;
    }

    // Load the nav items on component mount
    onMount(async () => {
        navItems = await fetchNavItems();
    });
</script>

<style>
    .nav-container {
        display: flex;
        overflow-x: auto; /* Make the nav bar scrollable horizontally */
        white-space: nowrap; /* Prevent wrapping */
        background-color: darkred;
        justify-content: center;
        align-items: center;
    }

    .nav-item {
        padding: 1rem;
        cursor: pointer;
        flex-shrink: 0; /* Prevent items from shrinking when scrolling */
        position: relative;
        display: inline-block;
        background-color: darkred;
        outline: none;
    }

    button, button:focus, button:hover {
        outline: none;
        border: none;
    }

    .nav-item::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px; /* Thickness of the underline */
        bottom: 0;
        left: 0;
        background-color: currentColor; /* Uses the color of the text */
        transition: width 0.3s ease;
    }

    .nav-item:hover::after {
        width: 100%;
    }

    .nav-item.active {
        font-weight: bold; /* Highlight active item */
        color: white;
    }

    .nav-item.active::after {
        width: 100%;
    }
</style>

<div class="nav-container">
    {#each navItems as item}
        <button type="button"
                class="nav-item {item === activeItem ? 'active' : ''}"
                on:click={() => setActive(item)}
        >
            {item}
        </button>
    {/each}
</div>
