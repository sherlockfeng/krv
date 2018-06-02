<template>

	<div class="app">
      <header class="head">
        <div class="head-inner">

        </div>
      </header>
  </div>
</template>

<script>
	import 'iview/dist/styles/iview.css';
	import { Button, Table } from 'iview';
  export default {
		data () {
			return {
	
			}
		},
		created () {


		},
		methods: {

	
		}
  }
</script>

<style lang="scss">
  .head {
    position: relative;
    z-index: 100;
    min-width: 1032px;
    overflow: hidden;
    background: #fff;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    background-clip: content-box;
    .head-inner{
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      width: 1000px;
      height: 52px;
      padding: 0 16px;
      margin: 0 auto;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      transition: -webkit-transform .3s;
      transition: transform .3s;
      transition: transform .3s,-webkit-transform .3s;
    }
  }
</style>
