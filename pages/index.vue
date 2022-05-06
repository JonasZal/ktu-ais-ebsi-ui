<template>
  <div>
    <KTUheader></KTUheader>

    <section class="text-center login-body container">
      <main class="index-form">
        <h1 class="btn1 mainf">Welcome student {{ name }} {{ familyName }}</h1>
        <div class="row">
          <div class="col-md-6">
            <div v-if="enrolledMod.data[0] !== ''">
              <h3>Enrolled modules:</h3>

              <span class="spanspc">
                <i class="bi"></i>
                <b>Module code:</b> {{ modules.code }}
                <br />
                <i class="bi"></i>
                <b>Module description:</b> {{ modules.description }}
              </span>
              <div class="row">
              <a
                :href="
                  '/verifier-api/present/?walletId=' +
                  wallets[0].id +
                  '&schemaUri=' + diplomaSchemaUri
                "
                class="buttonktu1 mainf btn1"
                >Issue a diploma</a>
              </div>
            </div>
            <div v-else>
              <h3>You don't have any enrolled modules</h3>
            </div>
          </div>
          <div class="col-md-4">
            <a
              :href="'/modules'"
              class="btn btn-success my-2 _btn buttonktu mainf btn1"
              >Available modules to enroll</a
            >
            <div class="row"></div>

            <a
              :href="'/issuer'"
              class="btn btn-success my-2 _btn buttonktu mainf btn1"
              >Issue student ID</a
            >
          </div>
        </div>
      </main>
    </section>

    <KTUfooter></KTUfooter>
  </div>
</template>

<script>
import CredentialEditor from "../components/CredentialEditor.vue";
import KTUheader from "../components/KTUheader.vue";
import KTUfooter from "../components/KTUfooter.vue";
export default {
  data() {
    return {
      name:"",
      familyName:"",
      modules: "",
      enrolledMod:"",
      diplomaSchemaUri:
        "https://raw.githubusercontent.com/walt-id/waltid-ssikit-vclib/master/src/test/resources/schemas/Europass.json",
    };
  },

  async asyncData({ $axios }) {
    let enrolledMod = await $axios.get("/ktu-ais-api/modules/listUserCourses");

    let modulesList = await $axios.get("/ktu-ais-api/modules/list");

    var count = Object.keys(modulesList.data).length;

    for (let i = 0; i < count; i++) {
      if (modulesList.data[i].code == enrolledMod.data[0]) {
        var modules = modulesList.data[i];
      }
    }
    console.log(modules);

    let studentInfo = await $axios.get("/ktu-ais-api/student/getStudentData");
    let name = studentInfo.data.name;
    let familyName = studentInfo.data.familyName

  	const wallets = await $axios.$get("/verifier-api/wallets/list");

    return { modules, name, familyName,  enrolledMod, wallets};
  },

  computed: {},

};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/pf-dintext-pro-medium");

.col-md-6 {
  text-align: left;
}
.index-form {
  min-height: 600px;
}
.btn1 {
  padding-top: 65px;
  padding-bottom: 60px;
  
  display: inline-block
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
  max-height: 62px;

  font-size: 18px !important;
  padding: 8px 20px 8px 19px;
  border: 2px solid #000101;
  text-align: center;
  color: #000101;
  font-family: "PF DinText Pro Medium";
}

.buttonktu1:hover,
.buttonktu1:focus {
  background-color: #000000; /* Green */
  color: white;
  transition-duration: 0.5s;
}
.buttonktu1 {
  position: relative;
  background: transparent;
  float: none !important;
  margin-top: 20px;
  margin-left: 10px;
  bottom: initial;
  right: initial;
  width: 150px;
  min-height: 32px;
  border-radius: 4px;
  max-height: 62px;

  font-size: 16px !important;
  padding: 8px 20px 8px 19px;
  border: 2px solid #000101;
  text-align: center;
  color: #000101;
  font-family: "PF DinText Pro Medium";
}
</style>