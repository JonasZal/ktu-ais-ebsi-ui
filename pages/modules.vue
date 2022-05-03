<template>
  <div>
    <KTUheader></KTUheader>

    <main>
      <section class="text-center container">
        <div class="row py-lg-5">
          <h2>Modules:</h2>

          <div
            class="accordion my-2"
            id="accordion1"
            v-for="data in modules.data"
            v-bind:key="data.id"
          >
            <span class="spanspc">
              <i class="bi"></i>
              <b>Module code:</b> {{ data.code}}
            <br/>
              <i class="bi"></i>
               <b>Module description:</b> {{ data.description}}
            </span>

          </div>
        </div>
      </section>
    </main>

    <KTUfooter></KTUfooter>
  </div>
</template>

<script>
import KTUheader from "../components/KTUheader.vue";
import KTUfooter from "../components/KTUfooter.vue";

export default {
  name: "modules.vue",
  data() {
    return {
      modules: "",
      route:"",
    };
  },
  async asyncData({ $axios, route }) {
    const modules = await $axios.get(
      "http://localhost:8080/ktu-ais-api/getModules/list"
    );

    
    console.log(modules);
    console.log(route);

    return { modules };
  },
};
</script>>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/pf-dintext-pro-medium");
.accordion{
  padding-top: 50px;
}
.spanspc
{
    padding-bottom: 10px;
}
main {
  padding-bottom: 10px;
}
.dropdown-menu {
  margin: 0px;
  padding: 0px;
  border: 0px;
  background-color: rgb(243, 242, 238);

  box-shadow: 0px 0px 0px 0px;
  border-radius: 0px;
}
.downmenu {
  padding: 10px 15px 10px 15px;
  display: block;
  color: black;
  background-color: transparent;
  transition: all 0.25s ease-in-out;
}
.footerli {
  width: 100%;
  padding: 0 20px;
  font-family: "PF DinText Pro Medium", sans-serif;
  color: black;
  font-size: 16px;
  line-height: 35px;
  display: block;
  background-color: #f3f2ee;
}
.footerli:hover {
  background-color: rgb(252, 251, 248);
}
#buttonfooter1 {
  margin-left: 100px;
  background-color: #f3f2ee;
  border-radius: 3px;
  border-color: #f3f2ee;
  color: black;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  text-decoration: none;
  display: block;
  font-family: "PF DinText Pro Medium", sans-serif;
  width: 205px;
}
#buttonfooter2 {
  margin-left: 100px;
  background-color: #f3f2ee;
  border-radius: 3px;
  border-color: #f3f2ee;
  color: black;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  text-decoration: none;
  display: block;
  font-family: "PF DinText Pro Medium", sans-serif;
  width: 100%;
}
#icons {
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
}
footer {
  padding: 0;
  padding-bottom: 10px;
  width: 100%;
  float: left;
  display: block;
}
.container {
  width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  min-height: 600px;
}
.social-icons img {
  width: 24px;
}
.social-icons {
  position: absolute;
  top: 30px;
  right: 0;
  transform: translate(80%, 0);
  z-index: 20;
}
.social-icons {
  display: block;
  height: auto;
  max-width: 100%;
  border: 0;
}
.social-icons:hover {
  display: block;
  height: auto;
  max-width: 100%;
  border: 0;
}

.dropdown-menu {
  background: transparent;
  border: none;
}
.topmenu:hover {
  background-color: #000000; /* Green */
  color: white;
  transition-duration: 0.5s;
  text-decoration: none;
}
.topmenu {
  border-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  margin-top: 1px;

  padding: 10px 15px 10px 15px;
  display: block;
  color: black;
  background: #fff;
  border: 1px solid;
  white-space: initial;
  clear: both;
  font-weight: normal;
  line-height: 1.42857143;
  text-decoration: none;
}
.mainf {
  font-family: "PF DinText Pro Medium", sans-serif;
  font-weight: normal;
  letter-spacing: 0.5px;
}
.labelfon {
  font-weight: 10;
}
.buttonktu:hover,
.buttonktu:focus {
  background-color: #000000; /* Green */
  color: white;
  transition-duration: 0.5s;
}
.buttonktuLogin {
  position: center;
  background: transparent;
  float: none !important;

  bottom: initial;
  right: initial;
  width: 80px;
  height: 50px;
  border-radius: 4px;

  margin-top: 20px;
  font-size: 16px !important;
  padding: 8px 20px 8px 19px;
  border: 2px solid #000101;
  text-align: center;
  color: #000101;
  letter-spacing: 0.5px;
  box-shadow: none;
  font-family: "PF DinText Pro Medium";
}
.buttonktu {
  position: relative;
  background: transparent;
  float: none !important;

  bottom: initial;
  right: initial;
  width: 120px;
  height: 50px;
  border-radius: 4px;

  font-size: 16px !important;
  padding: 8px 20px 8px 19px;
  border: 2px solid #000101;
  text-align: center;
  color: #000101;
  letter-spacing: 0.5px;
  box-shadow: none;
  font-family: "PF DinText Pro Medium";
}
.email {
  font-size: 30px;
  font-family: "PF DinText Pro Medium", sans-serif;
  font-weight: normal;
  letter-spacing: 0.5px;
}
.lightgreentop {
  background: #e1f1ec;
}
.midhead {
  display: flex;
  justify-content: center;
  align-items: center;
}
.midhead2 {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.midhead3 {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.mainktufont {
  color: #000101;
  font-family: "PF DinText Pro Medium";
  font-size: 36px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 20px;
}
label {
  font-size: 20px;
  margin-top: -3px;
  font-weight: 600;
}

.accordion-button:not(.collapsed) {
  color: #000000;
  background-color: #ffffff;
}
.accordion{
    text-align: left;
}
.table1 {
  background: #e1f1ec;
}
.border1:hover {
  background-color: #000000; /* Green */
  color: white;
  transition-duration: 0.5s;
}
.border1 {
  border-radius: 4px;
  border: 2px solid black;
  box-shadow: none;
}
.border2 {
  border-radius: 4px;
  border: 2px solid black;
  box-shadow: none;
  border-top: none;
}
.pad {
  padding-bottom: 20px;
}
.padding-form {
  padding-bottom: 80px;
}
._home {
  padding-top: 50px;
  padding-bottom: 110px;
}
._btn {
  font-size: 18px;
  padding: 10px 55px;
}
._btnVerif {
  font-size: 18px;
  padding: 5px 55px;
  width: 360px;
  height: 60px;
}
</style>
