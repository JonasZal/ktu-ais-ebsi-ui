<template>
  <div>
    <KTUheader></KTUheader>

    <main>
      <section class="text-center container">
        <div class="row py-lg-5">
          <div class="row dashboard">
            <div class="col-2">
              <a
                href="/"
                class="buttonktu12"
                type="button"
                aria-expanded="false"
                >Dashboard
              </a>
            </div>
            <div class="col-10">
              <h2 class="mainf">Available modules:</h2>
            </div>
          </div>
          <div
            class="my-2 mod"
            id="accordion1"
            v-for="data in modules.data"
            v-bind:key="data.id"
          >
            <div class="row modulis">
              <div class="col-md-7">
                <span class="spanspc">
                  <i class="bi"></i>
                  <b>Module code:</b> {{ data.code }}
                  <br />
                  <i class="bi"></i>
                  <b>Module description:</b> {{ data.description }}
                  <br />
                  <span v-if="data.status === 'Open'">
                  <i class="bi"></i>
                  <b>Status:</b>  {{ openStatus }}
                  </span>
                  <span v-else>
                  <i class="bi"></i>
                  <!--<b v-if="data.status === 'Open'">Status:</b> Open, prerequisites missing--> 
                  <b>Status:</b>  {{ data.status }}
                  </span>
                  <br />
                  <i class="bi"></i>
                  <b style="color:green;" v-if="data.code===modCode">{{ enrollResult }}</b>
                </span>
              </div>
              <div class="col-md-2 button">
                <button
                  v-if="
                    (data.status === 'Open') &
                    (data.code !== enrolledMod.data[0]) &
                    (modCode !== 'ECIU003' )
                  "
                  @click="enrollData(wallets, diplomaSchemaUri)"
                  type="button"
                  class="buttonktu"
                >
                  Apply with credential containing prerequisites
                </button>
                <button
                  v-else-if="
                    (data.status === 'Closed') &
                    (data.code !== enrolledMod.data[0])
                  "
                  type="button"
                  class="buttonktu"
                  disabled
                >
                  Apply
                </button>
                <button
                  v-else-if="data.code === enrolledMod.data[0]"
                  type="button"
                  class="buttonktu"
                  disabled
                >
                  Enrolled
                </button>

                <button
                  v-if="
                    (data.status === 'Open') &
                    (data.code !== enrolledMod.data[0]) &
                    (modCode === 'ECIU003') & verified === 'yes' & check !== 'on'
                  "
                  @click="getIssuerDid(providedCredentials)"
                  type="button"
                  class="buttonktu"
                >
                  Check
                </button>

                <button
                  v-if="
                    (data.status === 'Open') &
                    (data.code !== enrolledMod.data[0]) &
                    (modCode === 'ECIU003') &  check !== 'off'  &  check === 'on' & verified !== 'yes' 
                  "
                  @click="enrollModule(modCode)"
                  type="button"
                  class="buttonktu"
                >
                  Enroll
                </button>

              </div>
            </div>
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
      route: "",
      enrolledMod: "",
      diplomaSchemaUri:
        "https://raw.githubusercontent.com/walt-id/waltid-ssikit-vclib/master/src/test/resources/schemas/Europass.json",
      wallets: "",
      codeID: "",
      result: "",
      didKeyStatus: "",
      providedCredentials:"",
      openStatus: "Open, prerequisites missing",
    };
  },
  /*async asyncDataVerifier({ $axios, route, codeID }) {
    

    return { result, protectedData, codeID };
  },*/

  async asyncData({ $axios, route }) {

    
    let modTitle="";
    let enrollResult="";
    let modules = await $axios.get("/ktu-ais-api/modules/list");
    let modCode = "";
    let modGrade = "";
    let didKeyStatus = "";
    let providedCredentials = "";
    let enrolledMod = await $axios.get("/ktu-ais-api/modules/listUserCourses");
    let check = "";
    let verified="";

    console.log(modules);
    console.log(route);
    console.log(enrolledMod.data[0]);
    console.log(modules.data.length);

    /*if(codeID!=="")
    {
      for(let i=0; i<modules.data.lenght; i++)
      {
        if(codeID === modules.data[i].code)
        {
          modules.data[i].code = codeID;
        }
      }
    }*/
    //console.log(codeID);
    const wallets = await $axios.$get("/verifier-api/wallets/list");
    console.log(wallets);

    if(route.query.check === "success")
    {
      check="on";
      enrollResult="You are accredited ! Now you can enroll in this module. Press 'Enroll' ";
      modCode = "ECIU003";
    }

    if(route.query.check === "failed")
    {
      check = "off";
      enrollResult="You are NOT accredited!";
      modCode = "ECIU003";
    }

    if(route.query.enroll === "success")
    {
      check="on";
      enrollResult="You are enrolled successfully!";
      modCode = "ECIU003";
    }


    if (route.query.access_token != null) {
      providedCredentials = await $axios.get(
        "/verifier-api/auth?access_token=" + route.query.access_token
      );
      console.log(providedCredentials);
      if (route.query.result === "success") {
        
        console.log(didKeyStatus)
        let modTitle =
          providedCredentials.data.vp_token.verifiableCredential[0].credentialSubject
            .achieved[0].specifiedBy[0].title;
        let modGrade =
          providedCredentials.data.vp_token.verifiableCredential[0].credentialSubject
            .achieved[0].wasDerivedFrom[0].grade;
        console.log(modGrade);
        console.log(modTitle);
        modCode = "ECIU003";
        verified = "yes";
        enrollResult="Received micro credentials from Tampere university: " + modTitle + " (Grade: " +modGrade + ") satisfy the prerequisites. Now you need to check if you are accredited to enroll in this module. Press 'Check'";


        
        
        
      } else if (route.query.result === "error") {
        enrollResult="Apply failed";
      }
      console.log(providedCredentials);
    }
    console.log(modTitle);

    return { modules, enrolledMod, wallets, modTitle, enrollResult, modCode, modGrade, providedCredentials, check, verified };
  },

  /*async asyncVerifier({ $axios, route }) {
    console.log(route.query.access_token);
    let result = {};
    let protectedData = {};
    if (route.query.access_token != null) {
      await $axios
        .get("/verifier-api/auth?access_token=" + route.query.access_token)
        .then((response) => {
          result = response.data;

          console.log(response.data);
          console.log(result.vp_token.verifiableCredential[0].type[2]);
          return $axios.get("/verifier-api/protected", {
            headers: {
              Authorization: "Bearer " + result.auth_token,
            },
          });
        })
        .then((dataResponse) => {
          protectedData = dataResponse.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }

    return { result, protectedData };
  },*/

  methods: {
    async enrollData(wallets, vidSchemaUri) {
      window.location =
        "/verifier-api/present/?walletId=" +
        wallets[0].id +
        "&schemaUri=" +
        vidSchemaUri;
    },

    async enrollModule(code) {
      
          let c = await this.$axios.post(
        "/ktu-ais-api/modules/enrol",
        "courseId=" + code);
        window.location = "/modules?enroll=success";
    },

    async getIssuerDid(providedCredentials) {
      console.log(providedCredentials.data.vp_token.verifiableCredential[0].issuer);
      let didKeyStatus = await this.$axios.get(
        "/ktu-ais-api/issuer/checkAccreditation?did=" +  providedCredentials.data.vp_token.verifiableCredential[0].issuer
      );
      console.log(didKeyStatus);

       if(didKeyStatus.data.isAccredited == true)
        {
        window.location = "/modules?check=success";
        }
        else if(didKeyStatus.data.isAccredited == false)
        {
          window.location = "/modules?check=failed";
        }
    },
  },
};
</script>>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/pf-dintext-pro-medium");

.buttonktu12:hover,
.buttonktu12:focus {
  background-color: #000000; /* Green */
  color: white;
  transition-duration: 0.5s;
}
.buttonktu12 {
  position: relative;
  background: transparent;
  float: none !important;
  margin: 20px;
  bottom: initial;
  right: initial;
  min-width: 90px;
  min-height: 32px;
  border-radius: 4px;

  font-size: 16px !important;
  padding: 8px 20px 8px 19px;
  border: 2px solid #000101;
  text-align: center;
  color: #000101;
  font-family: "PF DinText Pro Medium";
}

.mod {
  text-align: left;
}
.container {
  padding-bottom: 35px;
}
.dashboard {
  padding-bottom: 50px;
}
.col-10 {
  padding-top: 15px;
  text-align: left;
}
h2 {
  padding-left: 200px;
}
form {
  height: 400px;
  width: 800px;
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
  min-width: 90px;
  min-height: 32px;
  border-radius: 4px;

  font-size: 16px !important;
  padding: 8px 20px 8px 19px;
  border: 2px solid #000101;
  text-align: center;
  color: #000101;
  font-family: "PF DinText Pro Medium";
}

.button {
  padding-top: 0px;
  top: 0;
}
.modulis {
  padding-left: 180px;
}
.accordion {
  padding-top: 50px;
}
.spanspc {
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
.buttonktu:disabled {
  background-color: #cccccc;
  color: #666666;
  border: 1px solid #999999;
}
.buttonktu {
  position: center;
  background: transparent;
  float: none !important;

  width: 200px;
  height: auto;
  border-radius: 4px;

  font-size: 14px !important;
  border: 2px solid #000101;
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
.accordion {
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
