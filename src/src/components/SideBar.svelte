<script>
    import { onMount } from 'svelte';

    // Store the nav items from the backend
    let sideItems = [];
    let selectedItem = ''; // Track the currently active item

    // Simulate fetching data from the backend API
    async function fetchSideItems() {
        // Replace this with your actual API call to the backend
        return new Promise((resolve) => {
            setTimeout(() => {
                // Example structure: some strings, an array, and objects
                resolve([
                    "P1",
                    {
                        "title": "Project 2",
                        "items": ["Subtask 1", "Subtask 2"]
                    },
                    "Grow up",
                    {
                        "title": "Another Project",
                        "items": {
                            "title": "Subtask A",
                            "items": ["Detail 1", "Detail 2"]
                        }
                    },
                    "Cool Project"
                ]);
            }, 1000);
        });
    }

    // Function to set the clicked item as active
    function setActive(item) {
        selectedItem = item;
        console.log(selectedItem);
    }

    // Recursive function to render the nav items
    function renderSideItems(items) {
        let html = '';

        if (Array.isArray(items)) {
            html += '<ul>';
            items.forEach(subItem => {
                html += `<li>${renderSideItems(subItem)}</li>`;
            });
            html += '</ul>';
        } else if (typeof items === 'object' && items !== null) {
            html += `
                <div class="folder">
                    <strong>${items.title}</strong>
                    ${items.items ? renderSideItems(items.items) : ''}
                </div>`;
        } else if (typeof items === 'string') {
            html += `<button class="side-item ${activeItem === items ? 'active' : ''}" onclick="setActive('${items}')">${items}</button>`;
        }

        return html;
    }

    // Load the nav items on component mount
    onMount(async () => {
        sideItems = await fetchSideItems();
    });
</script>

<div class="side-container">
    {#if sideItems.length === 0}
        <div class="side-item">HubForge</div>
    {:else}
        {@html renderSideItems(sideItems)}
    {/if}
</div>

<style>
    .side-container {
        background-color: darkred;
        width: 20%;
        height: 100vh; /* Full height of the viewport */
        overflow-y: auto; /* Enable vertical scrolling */
    }

    .folder {
        margin-left: 20px;
    }

    .nested {
        margin-left: 20px;
    }

    button.side-item {
        display: block;
        width: 100%;
        background: none;
        border: none;
        text-align: left;
        cursor: pointer;
    }

    button.side-item:hover {
        background-color: lightgray;
    }

    .side-item.active {
        font-weight: bold;
        color: blue;
    }

    button, button:focus, button:hover {
        outline: none;
        border: none;
        background-color: darkred;
    }
</style>
