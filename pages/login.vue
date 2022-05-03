<template>
  <section class="text-center login-body">
    <main class="form-signin">
      <h2 class="registerTrue" v-if="this.$route.query.success === 'true'">Your student account was created successfully!</h2>

     <form form action="" id="login-form" class="my-4" @submit.prevent="login">
      <img class="mb-4" src="https://ktu.edu/wp-content/uploads/2016/08/logo_ukrainos_veliava.svg" alt="" width="150">
      <h1 class="h3 mb-3 fw-normal">Please sign in to the <b>KTU AIS system</b></h1>
      <br />
      <div class="form-floating">
        <input
          type="email"
          id="floatingInput"
          class="form-control"
          autocomplete="off"
          name="email"
          v-model="email"
          :placeholder="$t('EMAIL_ADDRESS')"/>
        <label for="floatingInput">{{$t('EMAIL_ADDRESS')}}</label>
      </div>
      <div class="form-floating">
        <input
         type="password"
         class="form-control"
         id="floatingPassword"
         :placeholder="$t('PASSWORD')"
         name="password"
         autocomplete="off"
         v-model="password"/>
        <label for="floatingPassword">{{$t('PASSWORD')}}</label>
      </div>
      <div class="checkbox mb-3">
       <label>
         <input type="checkbox" value="remember-me"> {{$t('REMEMBER_ME')}}
       </label>
      </div>
      <button class="mb-3 w-100 btn btn-lg btn-primary _animation-fade buttonktu" button type="submit" name="submit">{{$t('SIGN_IN')}}</button>
     </form>
    
              <a
                :href="
                  '/verifier-api/present/?walletId=' +
                  wallets[0].id +
                  '&schemaUri=' + vidSchemaUri
                "
                class="btn btn-success my-2 _btn buttonktu mainf _btnVerif"
                >Register</a
              >
    </main>
  </section>
</template>

<script>
export default {
  name: "login",
  data () {
    return {
      email: "",
      password: "",
      error: null,
      vidSchemaUri:
        "https://api.preprod.ebsi.eu/trusted-schemas-registry/v1/schemas/0xb77f8516a965631b4f197ad54c65a9e2f9936ebfb76bae4906d33744dbcc60ba",
      vdiplomaSchemaUri:
        "https://api.preprod.ebsi.eu/trusted-schemas-registry/v1/schemas/0xbf78fc08a7a9f28f5479f58dea269d3657f54f13ca37d380cd4e92237fb691dd",
      bidSchemaUri:
        "https://raw.githubusercontent.com/walt-id/waltid-ssikit-vclib/master/src/test/resources/schemas/EuropeanBankIdentity.json",
    
    };
  },
  
   async asyncData({ $axios }) {
    const wallets = await $axios.$get("http://localhost:8080/verifier-api/wallets/list");
    console.log(wallets);
    return { wallets };
  },
  computed: {
    availableLocales () {
      console.log("locales", this.$i18n.locales)
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  },
  methods: {
    async login () {
      try {
        const loginResponse = await this.$auth.loginWith("local", {
          data: {
            id : this.email,
            //email: this.email,
            password: this.password
          }
        })
        console.log(loginResponse)
        this.$auth.setUser(loginResponse.data)
       this.$router.push("/dashboard")
      } catch (e) {
        this.error = e.response.data.message
      }
    }
  },
  beforeMount(){
    console.log(this.$route.query.success);
  }
}


</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/pf-dintext-pro-medium');

.registerTrue{
  font-size: 20px;
  padding-bottom: 40px;
  color: red;
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
    width: 100%;
    
}
  .login-body {
    height: 100vh;
    display: flex;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
    background-color: white;

  }
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin .checkbox {
    font-weight: 400;
  }
  .form-signin .form-floating:focus-within {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
  }
  @media (min-width: 768px) {
    .bd-placeholder-img-lg {
      font-size: 3.5rem;
    }
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
    width: 100%;
   
}
</style>
