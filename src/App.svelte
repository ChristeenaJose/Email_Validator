<script>
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import EmailList from './components/EmailList.svelte';
	import { emailValidator, requiredValidator } from './validation/validators.js'
  	import { createFieldValidator } from './validation/validation.js'

	let email;
	let emailArr;
	let emails = [];

	//Email validation
  	const [ validity, validate ] = createFieldValidator(requiredValidator(), emailValidator())

	//Delete Record
	const handleClick = (e) => {
		emails = emails.filter(email => email.id != e.detail.id);
	};

	//Form Submition, add new record
	const handleSubmit = () => {
		const emailArr = {
			email, 
			id: Math.random() 
		};
		emails = [emailArr, ...emails];
	};
</script>

<Header />
	<main>
		
		<!-- Mail address form-->
		<form on:submit|preventDefault={handleSubmit} class="content">
			<input class="input"
				type="text"
				bind:value={email}
				placeholder="Your Email"
						class:field-danger={!$validity.valid}
						class:field-success={$validity.valid}
				use:validate={email}
			/>
			<button disabled={!$validity.valid}>Save</button>

			{#if $validity.dirty && !$validity.valid}
				<div>
					<span class="validation-hint">
						INVALID - {$validity.message} {$validity.dirty}
					</span>
				</div>
			{/if}
		<form>

		<!-- List of Records-->
		<EmailList  emails={emails}  on:handleClick={handleClick}/>

	</main>

<Footer />
<style>
	main{
		max-width: 960px;
		margin: 40px auto;
	}
	:global(body) {
		display: flex;
		flex-direction: column;
	}

	input {
		outline: none;
		border-width: 2px;
	}

	.validation-hint {
		color: red;
		padding: 6px 0;
	}

	.field-danger {
		border-color: red;
	}

	.field-success {
		border-color: green;
	}
</style>