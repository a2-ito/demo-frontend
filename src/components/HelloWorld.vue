<template>
  <div class="hello">
    <button v-on:click="get_data">GET</button>
		<p></p>
		<v-row v-for="item of items" :key="item">
			<!-- <v-col :class={{ item }}></v-col> -->
			<div :class="item"></div>
		</v-row>
		<!-- <div :class="api1.text"></div> -->
	</div>
</template>

<script>
import axios from 'axios'

var url = 'http://localhost:4321/app'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    api1: String,
  },
	data: function () {
		return {
			items: [
				'red',
				'red',
				'red',
				'red',
				'red',
				'red',
				'red',
				'red',
				'red',
				'red'
			]
		}
  },
	methods: {
		get_data: function () {
			this.items.forEach((value, i) => {
				console.log(i, value)
				//this.items.splice(i, 1, 'blue')
				axios
					.get(url)
					.then(response => {
						this.items.splice(i, 1, response.data.text)
				})
			})
/*
				axios
					.get(url)
					.then(response => {
						this.items[i] = response.data
						this.items.splice();
					})
			}
*/
		}
	},
  mounted () {
		this.api1 = "{'text':''}"
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
    display: flex;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.circle{
  width: 80px;
  height: 80px;
  border-radius: 50%;
	background: blue;
}
.blue {
  width: 50px;
  height: 50px;
	display: inline-block;
	margin: 5px;
	background: blue;
}
.green {
  width: 50px;
  height: 50px;
	display: inline-block;
	margin: 5px;
  background: green;
}
.red {
  width: 50px;
  height: 50px;
	display: inline-block;
	margin: 5px;
  background: red;
}
</style>
