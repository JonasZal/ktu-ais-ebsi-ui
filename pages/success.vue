<template>
  <div>
    <KTUheader></KTUheader>

    <main class="_home d-flex justify-content-centr">
      <section class="container">
        <div class="row first">
          <div v-if="result.vp_token.verifiableCredential[0].type[2]==='VerifiableId'" class="text-center col-lg-4 col-md-6 mx-auto mainf">
            <h2 class="fw-bold mb-2 pad">Welcome</h2>

            <form
              form
              action=""
              id="register-form"
              class="my-4 padding-form"
              @submit.prevent="registerUser"
            >
              <ErrorMessage
                :message-content="errorMessage"
                :is-active="error"
              />
              <div class="form-floating pad">
                <input
                  type="email"
                  id="floatingInput"
                  class="form-control"
                  autocomplete="off"
                  name="email"
                  v-model="email"
                  :disabled="true"
                />
                <label for="floatingInput">{{ $t("EMAIL_ADDRESS") }}</label>
              </div>

              <div class="form-floating pad">
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  :placeholder="$t('PASSWORD')"
                  name="password"
                  autocomplete="off"
                  v-model="password"
                />
                <label for="floatingPassword">{{ $t("PASSWORD") }}</label>
                <br />
              </div>
              <button
                class="
                  mb-3
                  w-100
                  btn btn-lg btn-primary
                  _animation-fade
                  buttonktu
                "
                button
                type="submit"
                name="submit"
              >
                {{ $t("REGISTER") }}
              </button>
            </form>

           
           
          
          </div>
          <div v-else-if="result.vp_token.verifiableCredential[0].type[2]==='Europass'" class="col-lg-4 col-md-6 mx-auto mainf">
            <!--<p>{{result.vp_token.verifiableCredential[0]}}</p>-->
            <p>success</p>
          </div>
        </div>
        <div class="row">
           <div class="success-table mx-auto mainf">
              <span v-html="enrollResult">
              {{enrollResult}}
              </span>
            </div>
        </div>
      </section>
    </main>
    <KTUfooter></KTUfooter>

    <!-- <main class="_home d-flex justify-content-centr align-items-center">
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-4 col-md-6 mx-auto">
            <img src="/favicon.png"/>
            <h2 class="fw-normal">
              Thanks, you just
            </h2>
            <h2 class="fw-bold mb-2">
              presented credentials.
            </h2>
            <div class="accordion my-2" id="accordion1" v-for="data in result.vp_token.verifiableCredential" v-bind:key="data.id">
              <div class="accordion-item">
                <h2 class="accordion-header" :id="'heading'+result.vp_token.verifiableCredential.indexOf(data)">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse'+result.vp_token.verifiableCredential.indexOf(data)" aria-expanded="false" :aria-controls="'collapse'+result.vp_token.verifiableCredential.indexOf(data)">
                     <i class="bi bi-check-circle-fill text-primary me-2"></i>
                    {{data.type[data.type.length-1]}}
                  </button>
                </h2>
                <div :id="'collapse'+result.vp_token.verifiableCredential.indexOf(data)" class="accordion-collapse collapse" :aria-labelledby="'heading'+result.vp_token.verifiableCredential.indexOf(data)" data-bs-parent="#accordionExample">
                  <div class="accordion-body text-start">
                   VerifiableId 
                    <div v-if="data.type[data.type.length-1] == 'VerifiableId'">
                      <span>
                        <i class="bi bi-check"></i>
                        Family Name: {{data.credentialSubject.familyName}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                        First Name: {{data.credentialSubject.firstName}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                         Date Of Birth: {{data.credentialSubject.dateOfBirth}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                        Personal Identifier: {{data.credentialSubject.personalIdentifier}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                        Name At Birth: {{data.credentialSubject.nameAndFamilyNameAtBirth}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                        Place Of Birth: {{data.credentialSubject.placeOfBirth}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                        Current Address: {{data.credentialSubject.currentAddress}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                        Gender: {{data.credentialSubject.gender}}
                      </span>
                    </div>

                     EuropeanBankIdentity 
                    <div v-if="data.type[data.type.length-1] == 'EuropeanBankIdentity'">
                      <span>
                        <i class="bi bi-check"></i>
                        ID: {{data.credentialSubject.id}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                        Family name: {{data.credentialSubject.familyName}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                         Given names: {{data.credentialSubject.givenName}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                        Date of birth: {{data.credentialSubject.birthDate}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                        Country of birth: {{data.credentialSubject.placeOfBirth.country}}
                      </span>
                      <br>
                      <span>
                        <i class="bi bi-check"></i>
                        Locality of birth: {{data.credentialSubject.placeOfBirth.locality}}
                      </span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div v-if="result.verification_result.valid" class="alert alert-success mt-4" role="alert">
              <strong>The verification was successful</strong>
              <br>
              Verification Policies
              <br>
              {{JSON.stringify(result.verification_result.policyResults, undefined, 2)}}
            </div>
            <div v-else class="alert alert-danger mt-4" role="alert">
              <strong>The verification failed</strong>
              <br>
              Verification Policies
              <br>
              {{JSON.stringify(result.verification_result.policyResults, undefined, 2)}}
            </div>
            <div v-if="result.verification_result.valid" class="alert alert-secondary mt-4" role="alert">
              Authenticated session established
              <br>
              <span>
                <i class="bi bi-dot"></i>
                <a href="#" v-if="authenticatedDID === 'View authenticated DID'" class="text-dark" @click="viewAuthenticatedDID">View authenticated DID</a>
                <a href="#" v-else class="text-dark" @click="viewAuthenticatedDID">{{authenticatedDID.slice(0,30)}}...</a>
              </span>
              <br>
              <span>
                <i class="bi bi-dot"></i>
                <a href="#" v-if="access_token === 'View session token'" class="text-dark" @click="viewSessionToken">View session token</a>
                <a href="#" v-else class="text-dark" @click="viewSessionToken">{{access_token.slice(0,30)}}...</a>
              </span>
            </div>
            <div v-else class="alert alert-secondary mt-4" role="alert">
              No authenticated session established!
              <br>
              <span>
                <i class="bi bi-dot"></i>
                <a href="#" class="text-dark" @click="viewAuthenticatedDID">No authenticated DID</a>
              </span>
              <br>
              <span>
                <i class="bi bi-dot"></i>
                <a href="#" class="text-dark" @click="viewSessionToken">No session token</a>
              </span>
            </div>
            <p class="text-muted fw-bold mt-5">© 2022 walt.id</p>
          </div>
        </div>
      </section>
    </main> -->
  </div>
</template>


<script>
if (window.opener != null) {
  window.opener.location = window.location;
  window.close();
}
import KTUheader from "../components/KTUheaderNoLogout.vue";
import ErrorMessage from "@/components/ErrorMessage.vue";
export default {
  auth: false,
  name: "success.vue",
  data() {
    return {
      access_token: "View session token",
      authenticatedDID: "View authenticated DID",
      customResult: "Error",
      password: "",
      email: "",
      name: "",
      familyName: "",
      error: false,
      errorMessage: "",
    };
  },

  async asyncData({ $axios, route }) {
    let enrollResult="";
    console.log(route.query.access_token);
    let result = {};
    let protectedData = {};
    let link = "";
    let policyCheck="";
    let challengePolicy ="";
    let signaturePolicy ="";
    let vpTokenClaimPolicy ="";

    if (route.query.access_token != null) {
      await $axios
        .get(
          "/verifier-api/auth?access_token=" +
            route.query.access_token
        )
        .then((response) => {
          result = response.data;
          console.log(result);

         
        })
        .then((dataResponse) => {
          protectedData = dataResponse.data;

          return $axios.get("/verifier-api/protected", {
            headers: {
              Authorization: "Bearer " + result.auth_token,
            },
          });

        })
        .catch((error) => {
          console.log(error);
        });
    }

          console.log(result.vp_token.verifiableCredential[0].type[2]);


           let didKeyStatus = await $axios.get(
        "/ktu-ais-api/issuer/checkAccreditation?did=" +  result.vp_token.verifiableCredential[0].issuer
      );


      
      console.log(didKeyStatus);

       if(didKeyStatus.data.accreditationInformationLocation!=="")
  {
    link= "<b style='color:green;'>Check completed successfully. Accreditation information can be found here: <a href='"+ didKeyStatus.data.accreditationInformationLocation +"'>"+ didKeyStatus.data.accreditationInformationLocation  +"</a></b></br></br>";
  }
  else
  {
    link="</br></br>";
  }

          challengePolicy = result.verification_result.policyResults.ChallengePolicy;
          signaturePolicy = result.verification_result.policyResults.SignaturePolicy;
          vpTokenClaimPolicy = result.verification_result.policyResults.VpTokenClaimPolicy;
          console.log(challengePolicy);
          console.log(signaturePolicy);
          console.log(vpTokenClaimPolicy);

          if(challengePolicy===true & signaturePolicy===true & vpTokenClaimPolicy===true)
          {
            policyCheck='Passed'
          }
          else{
            policyCheck='Failed'
          }

       if(didKeyStatus.data.isAccredited == true)
        { 
          
       
            enrollResult="</br><div class='text-center'><span style='color:green;'>Received Student ID: "+ result.vp_token.verifiableCredential[0].credentialSubject.personalIdentifier +"</span>"+
           "</br></br>"+
           "<b style='color:green;'>Congratulations "+ result.vp_token.verifiableCredential[0].credentialSubject
            .firstName +" " + result.vp_token.verifiableCredential[0].credentialSubject.familyName +"! Welcome to KTU AIS system. Now you need to register. </br>Type password and Press 'Register'</b>"+
           "</div></br></br>"+
           "<div class='alert alert-success mt-4 table1'><span>Verifiable credentials EBSI verification policy check: <b style='color:green;'>"+ policyCheck +" </b></br></br>"+
           "EBSI trusted issuers registry check: </br>"+
           "<ul "+ `style="list-style: '✓    ';"`+ ">"+
           "<li>Issuer "+ didKeyStatus.data.organizationName  +" DID is registered in the <b style='color:green;'>EBSI TIR</b></li>"+
            "<li>Issuer Accreditation data is present in <b style='color:green;'>EBSI TIR</b></li>"+
            "<li>Issuer Accreditation data is provided by <b style='color:green;'>EBSI TIR EBSI Trusted Accreditation organization "+ didKeyStatus.data.accreditedBy +"</b></li>"+
           "</ul>"+
           link+"</span></div>";
           console.log(enrollResult);

        }
        else if(didKeyStatus.data.isAccredited == false)
        {
           enrollResult="Received micro credentials from Tampere university: " + modTitle + " (Grade: " +modGrade + ") satisfy the prerequisites. Issuer name "+ didKeyStatus.data.organizationName +" accreditation check failed. Congratulations! </br>Now you can enroll to the selected module. </br>Press 'Enroll'";
        }

    return { result, protectedData, enrollResult };
  },

  methods: {
    async registerUser() {
      if (this.password.length > 0) {
        try {
          const registerResponse = await this.$axios.post(
            "/ktu-ais-api/student/onboardRequest",
            "userId=" +
              this.email +
              "&userPassword=" +
              this.password +
              "&userName=" +
              this.name +
              "&userFamilyName=" +
              this.familyName
          );
          console.log(registerResponse);
          this.$router.push("/login?success=true");
        } catch (e) {
          this.error = e.response.data.message;
        }
      } else if (this.password.length === 0) {
        this.error = true;
        this.errorMessage = "Please fill your password!";
      }
    },

    async enrollData(code) {

      /*let c = await this.$axios.post(
        "/ktu-ais-api/modules/enrol",
        "courseId=" + code
      );*/
    },
    
    viewSessionToken() {
      this.access_token = this.result.auth_token;
    },
    viewAuthenticatedDID() {
      this.authenticatedDID = this.result.subject;
    },
    getEmail() {
      let size = Object.keys(this.result.vp_token.verifiableCredential).length;
      if (size > 0) {
        var name =
          this.result.vp_token.verifiableCredential[0].credentialSubject
            .firstName;
        let surname =
          this.result.vp_token.verifiableCredential[0].credentialSubject
            .familyName;
        this.customResult =
          name.toLowerCase() + "." + surname.toLowerCase() + "@ktu.edu";
      } else {
        this.customResult = "Error";
      }
    },

    getNameAndFamilyName() {
      let size = Object.keys(this.result.vp_token.verifiableCredential).length;
      if (size > 0) {
        this.name =
          this.result.vp_token.verifiableCredential[0].credentialSubject.firstName;
        this.familyName =
          this.result.vp_token.verifiableCredential[0].credentialSubject.familyName;
      } else {
        this.name = "Jane";
        this.familyName = "Doe";
      }
    },
  },
  beforeMount() {
    this.getEmail();
    this.email = this.customResult;

    this.getNameAndFamilyName();
  },
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/pf-dintext-pro-medium");

.first{
  padding-top: 48px;
}
.success-table{
  width: 500px;
  text-align: left;
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
  padding-bottom: 10px;
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
