<template>

	<div class="article-detail">
		<Head :hrefText="hrefText"></Head>
  </div>
</template>

<script>
	import Head from 'components/head/head.vue'
	import utils from 'utils'
  export default {
		data () {
			return {
				hrefText: 'zhihu',
			}
		},
		created () {
			const vm = this
		},
		methods: {

	
		},
		components: {
			Head,
    }
  }
</script>
