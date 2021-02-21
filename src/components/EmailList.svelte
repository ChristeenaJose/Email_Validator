<script>
    import { createEventDispatcher } from 'svelte';
    let dispatch = createEventDispatcher();
    export let emails = [];
    let id;
    //Delete Record
    const mgClick = (e, id) => {
        const mail = {
            id
        }
        dispatch('handleClick', mail);
    };
</script>

<!-- Listing Records-->
<h2>Email List</h2>
<div class='container'>
    <table>
        {#each emails as email (email.id)}
            <tr>
                <td class="td"><h4>{email.email}</h4></td>
                <td class="td"><button on:click={(e) => mgClick(e, email.id)}>delete</button></td>
            </tr>
        {:else}
            <p>There are no records to show...</p>
        {/each}
    </table>
</div>

<style>
	.container {
		table-layout: auto;
  		width: 100%;  
		border-top: 1px solid #333;
		border-bottom: 1px solid #333;
		min-height: 200px;
	}
	.bock {
		display: block;
		padding: 6px 0;
		margin: 6px 0;
		border-color: black;
		background: #f7f7f7;
		table-layout: fixed;
 		width: 100%;  

	}
	.td {
		width: 100%;
	}
</style>