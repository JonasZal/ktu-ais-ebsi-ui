<template>
  <div>
   
  
    <KTUheader></KTUheader>

    <main class="container">
      <section class="py-5 text-center container mainf">
        <div class="row py-lg-5">
          
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-normal">
              Issue student ID:
            </h1>
              <form class="">
                
                  <div class="form-check col-md-9 col-sm-12 mb-3" v-for="issuable in issuables.credentials" :key="issuable.type">
                    <div v-if="issuable.type === 'VerifiableId'">
                    
                   <!-- <h2 class="mainf">{{$t(issuable.type)}} </h2>-->
                    <!--<button type="button" data-bs-toggle="modal" :data-bs-target="'#credentilModal'+issuable.type" class="text-primary _view-btn mb-2"><i class="bi bi-box-arrow-up-right p-1"></i></button>-->
                    <!--Credendtial Modal -->
                    <!--<div class="" :id="'credentilModal' + issuable.type" tabindex="-1" :aria-labelledby="'credentilModal'+issuable.type">-->
                          <credential-editor :issuable="issuable" :enableEditor="enableCredentialEditor" class="modal-body" />                     
                    <!--</div>-->
                    </div>
                  </div>
            
              </form>
              <button @click="goToWallet(wallets[0].id)" class="btn btn-primary py-2 px-5 _cbtn buttonktu" ><img v-if="btnLoading" src="loader.gif" width="20px"/><span v-else>{{$t('CONFIRM')}}</span></button>
          </div>
        </div>
      </section>
    </main>
    <div>
    <KTUfooter></KTUfooter>
    </div>
  </div>
</template>

<script>
import CredentialEditor from '../components/CredentialEditor.vue'
import KTUheader from '../components/KTUheader.vue'
import KTUfooter from '../components/KTUfooter.vue'

export default {
  components: { CredentialEditor },
  data () {
    return {
      checkedCredentials: [],
      enableCredentialEditor: false,
      btnLoading: false
    }
  },
  computed: {
    availableLocales () {
      console.log("locales", this.$i18n.locales)
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    },
    sessionId() {
      console.log("SESSION ID", this.$route.query)
      return this.$route.query.sessionId
    }
  },
  async asyncData ({ $axios, query }) {
    const wallets = await $axios.$get('/issuer-api/wallets/list')
    const issuables = await $axios.$get('/issuer-api/credentials/listIssuables', { params: query })
    console.log("cia issuables:")
    console.log(issuables)
    console.log(issuables.credentials[0].type)

    return { wallets, issuables }
  },
  methods: {
    reset(){
      this.enableCredentialEditor=false
      console.log(this.issuables[0])
    },
    enableInput(){
      this.enableCredentialEditor=true;
      this.btnDisabled=false;
    },
    disableInput(){
      this.enableCredentialEditor=false;
      this.btnDisabled=true;
    },
    
    async goToWallet (walletId) {
      this.btnLoading = true;

      console.log("pasirinkom ID")

      console.log("checked credentials:")
      console.log(this.checkedCredentials)
      console.log("checked credentials:", this.checkedCredentials)
      console.log(this.checkedCredentials)
      console.log("wallet id :")
      console.log(walletId)
      console.log(this.issuables.credentials.VerifiableId)
      let arrayIssuables = Array.from(this.issuables.credentials)
      console.log("array issuables:")
      console.log(arrayIssuables)

      let arr = []

      if(this.issuables.credentials.VerifiableId){
          arr.push(this.issuables.credentials.VerifiableId)
      }
      if(this.issuables.credentials.VerifiableDiploma){
          arr.push(this.issuables.credentials.VerifiableDiploma)
      }
      console.log("arr :")
      console.log(arr)



      
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
      console.log("type: " + this.issuables.credentials['VerifiableId'])
      //newMap.set(this.issuables.credentials['VerifiableId'].type,this.issuables.credentials['VerifiableId']);
      console.log("newMap: ");
      console.log(newMap);

      for (var m in this.issuables.credentials){
        newMap.set(this.issuables.credentials[m].type,this.issuables.credentials[m]);
        dict[m] = this.issuables.credentials[m];
        
        
        
      }
     // let filtered = new Map([...arr].filter(([k, v]) => this.checkedCredentials.findIndex(cc => cc=v.type)))

      //let filtered = new Map([...this.issuables.credentials])

      let o = Array.from(this.issuables.credentials)
      console.log(o)
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

      console.log("dict :")
      console.log(dict)
      
      let cred = this.issuables.credentials;
      let tarkim = Object.keys(cred).filter((key) => key.includes('VerifiableId')).reduce((cur, key) => { return Object.assign(cur, { [key]: cred[key] })}, {})

      console.log("tarkim: ")
      console.log(tarkim)
      console.log(cred)
  //     let selectedIssuables = {
  //       credentials: Object.keys(cred).
  // filter((c) => this.checkedCredentials.findIndex(cc => cc==c) >= 0).
  // reduce((cur, key) => { return Object.assign(cur, { [key]: cred[key] })}, {})
  //     }
      

      // let selectedIssuables = {
      //   credentials: this.checkedCredentials.filter(c => this.checkedCredentials.findIndex(cc => cc == c.type) >= 0)
      // }
      let selectedIssuables = {
        credentials: this.issuables.credentials.filter(c => 'VerifiableId' == c.type)
      }
    
      console.log("credentials:")
      console.log(selectedIssuables.credentials)
      console.log("Selected issuables:", selectedIssuables)
      console.log("sessionid : " + this.sessionId)
      console.log(this.sessionId)
      
      const params = this.sessionId != null ? { "sessionId": this.sessionId } : { "walletId": walletId }
      const walletUrl = await this.$axios.$post('/issuer-api/credentials/issuance/request', selectedIssuables, { params: params })
      console.log(walletUrl)
      setTimeout(()=>{window.location = walletUrl}, 2000)
    },
    tester(){
      console.warn(this.issuables.credentials)
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/pf-dintext-pro-medium');

h1{
  margin-bottom: 30px;
}
form{
  height: 400px;
  width: 600px;
}
.mainf{
  font-family: "PF DinText Pro Medium", sans-serif;
  font-weight: normal;
  text-align: center;
}
.buttonktu:hover, .buttonktu:focus {
  background-color: #000000; /* Green */
  color: white;
  transition-duration: 0.5s;
}
.buttonktu{
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

</style>