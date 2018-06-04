<template>

	<div class="app">
      <Head :hrefText="hrefText"></Head>

  </div>
</template>

<script>
	import 'iview/dist/styles/iview.css'
	import Head from 'components/head/head.vue'
	import utils from 'utils'
  export default {
		data () {
			return {
				hrefText: 'zhihu'
			}
		},
		created () {
			const vm = this
			utils.get('/gate/frontconfigapi/GetVersion', {
				object_id: 'web_banner_config',
			}, (response) => {
				vm.bannerUrl = response.data.memo.data[0].h5_url;
			})
		},
		methods: {

	
		},
		components: {
			Head,
    }
  }
</script>
