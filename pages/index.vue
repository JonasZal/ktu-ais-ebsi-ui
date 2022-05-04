<template>
  <div>
   
<KTUheader></KTUheader>

     <section class="text-center login-body container">
    <main class="index-form">
     <h1 class="btn1 mainf">Welcome student {{email}}</h1>
    
      <a
                :href="
                  '/modules'
                "
                class="btn btn-success my-2 _btn buttonktu mainf btn1"
                >Your modules</a>
      <div class="row"></div>
     
<a
                :href="
                  '/issuer'
                "
                class="btn btn-success my-2 _btn buttonktu mainf btn1"
                >Issue student ID</a>
    
    </main>
     </section>
    
  <KTUfooter></KTUfooter>
  </div>
</template>

<script>
import CredentialEditor from "../components/CredentialEditor.vue";
import KTUheader from '../components/KTUheader.vue'
import KTUfooter from '../components/KTUfooter.vue'
export default {

  
  data() {
    return {
     email:""
    };
  },
  computed: {
  
  },
  beforeMount(){
    this.email=this.$store.state.auth.user.email
  }
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/pf-dintext-pro-medium");

.index-form{
  min-height: 600px;
   text-align: center;
}
.btn1{
  padding-top: 100px;
  padding-bottom: 100px;;
}

.mainf {
  font-family: "PF DinText Pro Medium", sans-serif;
  font-weight: normal;
}
.buttonktu:hover,
.buttonktu:focus {
  background-color: #000000; /* Green */
  color: white;
  transition-duration: 0.5s;
}
.buttonktu {
  position: relative;
  background: transparent;
  float: none !important;
  margin: 20px;
  bottom: initial;
  right: initial;
  min-width: 250px;
  min-height: 32px;
  border-radius: 4px;

  font-size: 18px !important;
  padding: 8px 20px 8px 19px;
  border: 2px solid #000101;
  text-align: center;
  color: #000101;
  font-family: "PF DinText Pro Medium";
}
/* label{
  font-size: 20px;
  margin-top: -3px;
  font-weight: 600;
}
button._view-btn{
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
  font-weight: 600;
}
.left-inner-addon {
    position: relative;
}
.left-inner-addon input {
    padding-left: 35px !important;
}
.left-inner-addon i {
    position: absolute;
    padding: 17px 15px;
    pointer-events: none;
}
.right-inner-addon {
    position: relative;
}
.right-inner-addon input {
    padding-right: 35px !important;
}
.right-inner-addon i {
    position: absolute;
    right: 0px;
    padding: 17px 15px;
    pointer-events: none;
}
.left-and-right-inner-addon {
    position: relative;
}
.left-and-right-inner-addon input {
    padding-right: 35px !important;
    padding-left: 35px !important;
}
.left-and-right-inner-addon i.right {
    position: absolute;
    right: 0px;
    padding: 17px 15px;
    pointer-events: none;
}
.right-inner-addon-b {
    position: relative;
}
.right-inner-addon-b input {
    padding-right: 35px !important;
}
.right-inner-addon-b i {
    position: absolute;
    right: 0px;
    padding: 17px 15px;
    pointer-events: none;
}
._forms input {
    width: 100%;
		padding: 1em !important;
		margin: 0em !important;
		box-sizing: border-box;
}
._edit-btn button{
  background-color: transparent;
  border: none;
}
._cbtn{
  width: 165px;
  height: 45px
}
._cbtn img{
  margin-top: -3px
}
@media only screen and (max-width: 600px) {
  label{
  font-size: 14px;
  margin-top: -3px;
  font-weight: 600;
}
button._view-btn{
  background-color: transparent;
  border: none;
  padding: 0;
  margin: 0;
  font-size: 13px;
  font-weight: 600;
}
} */
</style>