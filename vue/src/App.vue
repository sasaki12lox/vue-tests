<template>
	<div class="main">
		<div class="variative">
			<List :values="['Сделка', 'Контакт', 'Компания']" @cinput="e => selectedId = e"/>
			<Cbutton v-if="!loading" @click="() => sendApiRequest()" :active="!(selectedId == null)"/>
			<Loader v-else/>
		</div>
		<Info :responses="ids"/>
	</div>
</template>

<script>
	import Cbutton from './components/Cbutton.vue';
	import Loader from './components/Loader.vue';
	import List from './components/List.vue';
	import Info from './components/Info.vue';

	export default {
		components: {
			Cbutton,
			Loader,
			List,
			Info
		},
		data: () => ({
			console,
			loading: false,
			/**@type {{id: string}[]} */
			ids: [],
			selectedId: null
		}),
		methods: {
			/**
			 * 
			 * @param {String} method 
			 * @param {String} name 
			 */
			async api(method, name) {
				return await fetch(`http://localhost:3000/create/${method}?name=${name}`).then(e => e.json());
			},
			async sendApiRequest() {
				this.loading = true;

				let data;
				switch (this.selectedId) {
					case '0':
						data = await this.api('lead', 'coolName');
						break;
					case '1':
						data = await this.api('contact', 'coolName');
						break;
					case '2':
						data = await this.api('company', 'coolName');
						break;
					default:
						console.log('[ALARM]',this.selectedId);
				}

				this.ids.push(data);

				this.loading = false;
			}
		}
	}
</script>

<style scoped>
	.main {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: space-around;
    	align-items: flex-start;
		height: 100%;
		padding: 20px;
	}
	.variative {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
	}
</style>