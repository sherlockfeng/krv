<template>
	<div class="article">
		<div class="article-content">
			<div class="content-line">
				<Card style="width:320px" v-for="(item, index) in articleOne" :key="index" class="content-item">
					<div style="text-align:center">
						<img :src="item.images[0]">
						<h3>{{item.title}}</h3>
					</div>
				</Card>
			</div>
			<div class="content-line">
				<Card style="width:320px" v-for="(item, index) in articleTwo" :key="index" class="content-item">
					<div style="text-align:center">
						<img :src="item.images[0]">
						<h3>{{item.title}}</h3>
					</div>
				</Card>
			</div>
			<div class="content-line">
				<Card style="width:320px" v-for="(item, index) in articleThree" :key="index" class="content-item">
					<div style="text-align:center">
						<img :src="item.images[0]">
						<h3>{{item.title}}</h3>
					</div>
				</Card>
			</div>
		</div>
  </div>
</template>

<script>
	import { Card } from 'iview'
  export default {
    props: {
			articleList: {
        type: Array,
        required: false,
        default: []
      }
		},
		watch: {
			articleList(newVal, oldVal) {
				const vm = this
				newVal.map((item, index) => {
					if(index % 3 === 0) {
						vm.articleOne.push(item)
					}
					if(index % 3 === 1) {
						vm.articleTwo.push(item)
					}
					if(index % 3 === 2) {
						vm.articleThree.push(item)
					}
					return
				})
			}
		},
		data () {
			return {
				articleOne: [],
				articleTwo: [],
				articleThree: [],
			}
		},
		created () {
      const vm = this

		},
		methods: {

	
		},
		components: {
			Card,
    }
  }
</script>

<style lang="scss">
	.article {
		background-color: #f9f9f9;
		padding-top: 52px;
		.article-content {
			width: 1000px;
			margin: 0 auto;
			display: flex;
			flex-direction: row;
			justify-content: center;
			padding-bottom: 50px;
			.content-line {
				display: flex;
				flex: 1;
				flex-direction: column;
				padding-top: 20px;
				.content-item {
					margin-top: 20px;
				}
			}
		}
	}
</style>
