<template>
<header class="lightgreentop">
      <div></div>
      <div class="container">
        <div class="row">
          <div class="col-md-2 midhead">
            <a href="/" class="navbar-brand d-flex">
              <img
                class="me-3"
                src="https://ktu.edu/wp-content/uploads/2016/08/logo_ukrainos_veliava.svg"
                alt=""
                width="110px"
              />
            </a>
          </div>
          <div class="col-md-7 midhead3">
            <h1 class="mainf">ACADEMIC INFORMATION SYSTEM</h1>
          </div>
          <div class="col-md-2">
            <nav>
              <div class="dropdown midhead2">
                <button
                  class="dropdown-toggle buttonktu"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  my KTU
                </button>

                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li
                    class="
                      menu-item
                      menu-item-type-custom
                      menu-item-object-custom
                      menu-item-2131
                      rect-button
                    "
                  >
                    <a
                      class="topmenu mainf"
                      title="MOODLE aplinka"
                      target="_blank"
                      href="https://moodle.ktu.edu/?lang=en"
                      >MOODLE</a
                    >
                  </li>

                  <li class="menu-item">
                    <a
                      class="topmenu mainf"
                      title="akademinÄ— sistema (AIS)"
                      target="_blank"
                      href="https://uais.cr.ktu.lt/ktuis/stp_prisijungimas?p_lang=LTU"
                      >academic IS</a
                    >
                  </li>

                  <li class="menu-item">
                    <a
                      class="topmenu mainf"
                      title="office365 aplinka"
                      target="_blank"
                      href="https://live.ktu.lt"
                      >Office365</a
                    >
                  </li>

                  <li class="menu-item">
                    <a
                      class="topmenu mainf"
                      title="intranetas &#8211; prisijungimas per KTU VPN"
                      target="_blank"
                      href="https://intranet.ktu.lt"
                      ><span
                        class="
                          glyphicon
                          intranetas
                          &#8211;
                          prisijungimas
                          per
                          KTU
                          VPN
                        "
                      ></span
                      >&nbsp;intranet</a
                    >
                  </li>

                  <li class="menu-item">
                    <a
                      class="topmenu mainf"
                      title="darbuotojÅ³ paÅtas"
                      target="_blank"
                      href="https://pastas.ktu.lt"
                      >email for employees</a
                    >
                  </li>
                  <li class="menu-item">
                    <a
                      class="topmenu mainf"
                      title="darbuotojo atmintinÄ—"
                      target="_blank"
                      href="https://en.ktu.edu/employee-guide/"
                      >employee guide</a
                    >
                  </li>
                  <li class="menu-item">
                    <a
                      class="topmenu mainf"
                      title="praneÅk"
                      target="_blank"
                      href="https://pranesk.ktu.edu/en"
                      >report</a
                    >
                  </li>
                  <li class="menu-item">
                    <a
                      class="topmenu mainf"
                      title="pagalba"
                      target="_blank"
                      href="https://help.ktu.edu/?lang=en"
                      >help</a
                    >
                  </li>
                </ul>
              </div>
            </nav>
           
          </div>
        </div>
      </div>
    </header>
</template>
<script>
export default {
  name: "KTUheader",

   methods:{
    logout: async function() {
      await this.$auth.logout();
  },
  },
};
</script>

<style scoped>

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
  padding-bottom: 20px;
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
footer {
  display: block;

  position: fixed;

  right: 0;

  left: 0;

  /*z-index: 1030;*/

  bottom: 0;
}

footer .social-icons img {
  width: 24px;
}
footer .social-icons {
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
}
.mainf {
  font-family: "PF DinText Pro Medium", sans-serif;
  font-weight: normal;
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
  font-family: "pf_dintext_promedium", sans-serif;
  font-size: 36px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 20px;
}
._view-btn {
  background-color: transparent;
  border: none;
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
