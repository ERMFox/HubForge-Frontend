<script>
    let projects = ['Project 1', 'Project 2', 'Project 3'];
    let files = ['File 1', 'File 2', 'File 3'];
    let currentProject = 'Project 1';
</script>

<nav>
    {#each projects as project}
        <button on:click={() => currentProject = project}>
            {project}
        </button>
    {/each}
</nav>

<div class="container">
    <aside>
        <h3>Files and Folders</h3>
        <ul>
            {#each files as file}
                <li>{file}</li>
            {/each}
        </ul>
    </aside>
    <section>
        <h2>{currentProject}</h2>
        <p>Collaborative editing space goes here...</p>
    </section>
</div>

<style>
    nav button {
        margin: 5px;
        padding: 10px;
    }
    .container {
        display: flex;
    }
    aside {
        width: 200px;
        background-color: #f0f0f0;
        padding: 10px;
    }
    section {
        flex-grow: 1;
        padding: 10px;
    }
</style>
