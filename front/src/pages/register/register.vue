<template>
	<div class="form-signin bg-dark p-3 rounded-3 calculator-signin-text">
		<form class="needs-validation">
			<!-- <img src="/imgs/3ec6c27ae9042441165d5a330ac0c536.svg" alt="logo" class="calculator-navbar-logo"> -->
			<h1 class="h3 mb-3 fw-normal">
				Registration form
			</h1>

			<div v-bind:value="username" v-on:change="username_input" class="form-floating">
				<input type="text" class="form-control rounded-0 rounded-top" id="user_name_input" placeholder="username">
				<label  for="user_name_input" class="text-dark">
					First name
				</label>
			</div>


			<div v-bind:value="birthdate" v-on:change="birthdate_input" class="form-floating">
				<input type="date" class="form-control rounded-0" id="birth_date_input">
				<label for="floatingInput" class="text-dark">
					Birth date
				</label>
			</div>

			<div class="form-floating">
				<select v-bind:value="sex" v-model="sex" class="form-control rounded-0" id="sex_input">
					<option>Unknown</option>
					<option>Male</option>
					<option>Female</option>
				</select>
				<label for="sex_input" class="text-dark">Sex</label>
			</div>

			<div v-bind:value="email" v-on:change="email_input" class="form-floating">
				<input type="email" class="form-control rounded-0" id="email_input" placeholder="name@example.com">
				<label for="floatingInput" class="text-dark">
					Email address
				</label>
			</div>

			<div class="form-floating">
				<input v-bind:value="password" v-on:change="password_input" type="password" class="form-control rounded-0 mb-0" id="password_input" placeholder="Password">
				<label for="password_input" class="text-dark">
					Password
				</label>
			</div>

			<div class="form-floating mt-0">
				<input v-bind:value="repeat_password" v-on:change="repeat_password_input" type="password" class="form-control mt-0" id="password_repeat_input" placeholder="Password">
				<label for="password_repeat_input" class="text-dark">
					Repeat password
				</label>
			</div>

			<button @click="register" type="button" id="register_button" class="btn btn-warning calculator-navbar-text w-100 ">
				Register
			</button>
		</form>

		<a href="/signin.html">
			<button class="w-100 btn btn-outline-light btn-lg mt-2" type="submit">
				Sign in
			</button>
		</a>

		<span class="text-secondary register-termsofservice-text" style="font-size: calc(50% + 0.001vw + 0.001vh);">
			*by clicking button "Register" you agree with the <a href="#"> terms of use </a>
		</span>
	</div>
</template>

<script>
	import axios from "axios"
	export default {
		name: 'register',
		//template: "<div>NAME {{ name }}</div>",
		// props: {
		// 	email: String,
		// 	password: String,
		// 	remember_me:Boolean,
		// },
		data() {
			return {
				username: "",
				birthdate: "",
				sex: "",
				email: "",
				password: "",
				repeat_password: "",
			}
		},
		methods: {
			username_input(event) {
				this.username = event.target.value;
			},
			birthdate_input(event) {
				this.birthdate = event.target.value;
			},
			sex_input(event) {
				this.birthdate = event.target.value;
			},
			email_input(event) {
				this.email = event.target.value;
			},
			password_input(event) {
				this.password = event.target.value;
			},
			repeat_password_input(event) {
				this.repeat_password = event.target.value;
			},
			signin() {
				
			},
			register() {
				axios
				.post("http://localhost:3070/api/register", {
					data: JSON.parse(JSON.stringify(this))
				}).then(response => {
					console.log(response.data)
					//this.results = response.data[1];
					//console.log(this.results);
					window.location.href = "/aboutme.html?username=" + this.username + "&" + "password=" + this.password;
				}).catch(err => {
					throw err;
				});
				/*fetch("http://localhost:3070/api/register", {
						method: "POST",
						body: JSON.stringify(this),
						headers: {
						"Content-Type": "application/json",
					},
				}).then().catch();*/
				
			},
		},
		mounted() {
			
		},
	}
</script>

<style>
	
</style>
