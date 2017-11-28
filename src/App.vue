<template>
  <div id="app">
    
    <router-view/>
    
  </div>
</template>

<script>
// import FooterIndex from './components/footer.vue'
// import './assets/font/iconfont.css'
export default {
  name: 'app',
  data(){
  	return{
  		
  	}
  },
   
  components:{
  	// FooterIndex
  }
}
</script>

<style>
body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, form, fieldset, legend, input, textarea, button, p, blockquote, th, td
{margin: 0;padding: 0;}
ul,ol,li{ list-style: none;}
a{text-decoration: none;}
img{border: none;}
#app{
	height:100%;
}

</style>
