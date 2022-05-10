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
                 @click="goToWallet(wallets[0].id)"
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

  async asyncData({ $axios, query }) {
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
      const issuables = await $axios.$get(
      "/issuer-api/credentials/listIssuables",
      { params: query }
    );
    console.log("cia issuables:");
    console.log(issuables);
    console.log(issuables.credentials[1].type);
    

    return { modules, name, familyName,  enrolledMod, wallets, issuables};
  },

  methods:{
    async goToWallet(walletId) {
      this.btnLoading = true;

      console.log("pasirinkom ID");

      console.log("checked credentials:");
      console.log(this.checkedCredentials);
      console.log("checked credentials:", this.checkedCredentials);
      console.log(this.checkedCredentials);
      console.log("wallet id :");
      console.log(walletId);
      console.log(this.issuables.credentials.VerifiableId);
      let arrayIssuables = Array.from(this.issuables.credentials);
      console.log("array issuables:");
      console.log(arrayIssuables);

      let arr = [];

      if (this.issuables.credentials.VerifiableId) {
        arr.push(this.issuables.credentials.VerifiableId);
      }
      if (this.issuables.credentials.VerifiableDiploma) {
        arr.push(this.issuables.credentials.VerifiableDiploma);
      }
      console.log("arr :");
      console.log(arr);

      console.log("legth :  ", Array.isArray(this.issuables.credentials));
      console.log("checked: ", Array.isArray(this.checkedCredentials));


      // for (let i = 0; i < issuables.credentials; i++) {
      //     text += cars[i] + "<br>";
      // }

      // this.issuables.credentials.forEach(elem => console.log(elem))
      // let isssus =
      // let selectedIssuables = {
      //   credentials: this.issuables.credentials.filter(c => this.checkedCredentials.findIndex(cc => cc == c.type) >= 0)
      // }
      let newMap = new Map();
      let dict = {};
      console.log("type: " + this.issuables.credentials["VerifiableId"]);
      //newMap.set(this.issuables.credentials['VerifiableId'].type,this.issuables.credentials['VerifiableId']);
      console.log("newMap: ");
      console.log(newMap);

      for (var m in this.issuables.credentials) {
        newMap.set(
          this.issuables.credentials[m].type,
          this.issuables.credentials[m]
        );
        dict[m] = this.issuables.credentials[m];
      }

      // let filtered = new Map([...arr].filter(([k, v]) => this.checkedCredentials.findIndex(cc => cc=v.type)))

      //let filtered = new Map([...this.issuables.credentials])

      let o = Array.from(this.issuables.credentials);
      console.log(o);
      //let filtered = new Map(arr.map(s => [s.]))
      // console.log("filtered")
      // console.log(filtered)

      //console.log(this.issuables.credentials["VerifiableId"])

      // let selectedIssuables = {
      //   credentials: arr.filter(c => this.checkedCredentials.findIndex(cc => cc == c.type) >= 0)
      // }

      // let selectedIssuables = {
      //   credentials: newMap.filter(c => this.checkedCredentials.findIndex(cc => cc==c.type) >= 0 )
      // }
     
      console.log("dict :");
      console.log(dict);

      let cred = this.issuables.credentials;
      let tarkim = Object.keys(cred)
        .filter((key) => key.includes("Europass"))
        .reduce((cur, key) => {
          return Object.assign(cur, { [key]: cred[key] });
        }, {});

      console.log("tarkim: ");
      console.log(tarkim);
      console.log(cred);
      //     let selectedIssuables = {
      //       credentials: Object.keys(cred).
      // filter((c) => this.checkedCredentials.findIndex(cc => cc==c) >= 0).
      // reduce((cur, key) => { return Object.assign(cur, { [key]: cred[key] })}, {})
      //     }

      // let selectedIssuables = {
      //   credentials: this.checkedCredentials.filter(c => this.checkedCredentials.findIndex(cc => cc == c.type) >= 0)
      // }
      let selectedIssuables = {
        credentials: this.issuables.credentials.filter(
          (c) => "Europass" == c.type
        ),
      };
 
      console.log("credentials:");
      console.log(selectedIssuables.credentials);
      console.log("Selected issuables:", selectedIssuables);
      console.log("sessionid : " + this.sessionId);
      console.log(this.sessionId);
die();
      const params =
        this.sessionId != null
          ? { sessionId: this.sessionId }
          : { walletId: walletId };
      const walletUrl = await this.$axios.$post(
        "/issuer-api/credentials/issuance/request",
        selectedIssuables,
        { params: params }
      );
      console.log(walletUrl);
      setTimeout(() => {
        window.location = walletUrl;
      }, 2000);
    },
    tester() {
      console.warn(this.issuables.credentials);
    },
  },

  computed: {

    sessionId() {
      console.log("SESSION ID", this.$route.query);
      return this.$route.query.sessionId;
    },
  },

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