<template>
<div class="city">
		<div class="head">
			<router-link :to='{name:"circlePublish",query:{cityName:city}}' tag="span"  class="back" ></router-link> 
		    <h3>设置地区</h3>
	    </div>
	    <p>当前城市</p><input type="text" name="" v-model='city'>
	<div class="block">
		
		
		<p>全部城市</p>
		<ul>
		  <li v-for='(item,index) in options' @click='getCity(index)'>{{item.label}}</li>
		</ul>
	</div>
	
</div>
</template>
<script type="text/javascript">
export default {
	name:'city',
    data() {
      return {
        options: [],
        id:0,
        city:"沈阳"
  		}
	},
	methods:{
		getCity(index){
			// console.log(this.options[index])
				this.city=this.options[index].label
		}
	},
	created(){
			
			this.$axios.get("../../../static/json/city.json")

			.then(res => {

				var datas = res.data.provinces;
					console.log(datas)
				for(var i in datas){
					for(var j in datas[i].citys){

						var city = datas[i].citys[j];
							
						this.options.push(city)
					}
				}
				// console.log(this.options)

			})
			.catch(error =>{
				// console.log(error);
			})
		}
}
</script>
<style scoped lang='less'>
p{
	font-size: 28/50rem;
	color: #A54BE8;
	width:100%;
	background: #e5e0ed;
	padding-left: 34/50rem;
	box-sizing: border-box;
	line-height: 50/50rem;
	margin-top: -5/50rem;
}
	.city{
		width: 100%;
		margin-top:250/50rem;
		.head{
		width: 100%;
		height: 105/50rem;
		line-height: 105/50rem;
		background:  #A54BE8;
		position:fixed;
		top:0;
		left:0;

		&+p{
			position:fixed;
			top: 105/50rem;
			left:0;
		}
		.back{
			position: absolute;
			top:30/50rem;
			left:40/50rem; 
			display: inline-block;
			width:21/50rem;
			height:37/50rem;
			z-index: 666;
			background:url(http://amber-wzt.oss-cn-beijing.aliyuncs.com/oufen/images/personal-images/f-1.png) no-repeat;
			background-size:21/50rem 37/50rem;
		}
		h3{
			color: #fff;
			font-weight: normal;
			font-size: 36/50rem;
			box-sizing: border-box;
			padding-left: 200/50rem;
			margin-left: 100/50rem;
			
		}
	}
input{
		width: 100%;
		height: 95/50rem;
		outline: none;
		padding-left: 34/50rem;
		font-size: 28/50rem;
	    box-sizing: border-box;
	    border: none;
	    position:fixed;
	    top:149/50rem;
		}
	.block{
		
		
		ul{
			li{
				padding-left: 34/50rem;
				box-sizing: border-box;
				font-size: 30/50rem;
				color: #000;
				height: 95/50rem;
				line-height: 95/50rem;
				border-bottom: 1/50rem  solid #DDD;
			}
		}
	}
}
	
	
	
	
</style>