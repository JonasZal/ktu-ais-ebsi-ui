<template>
 <footer >
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div class="footer-border"></div>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-5" id="icons">
               <p><strong>Kaunas University of Technology</strong> įm. k. 111950581<br />
               company code 111950581, VAT code LT119505811<br />
address K. Donelaičio St. 73, 44249 Kaunas, Lithuania<br />
+370 (37) 300 000, 300 421, fax +370 (37) 324 144<br />
email <a href="mailto:ktu@ktu.lt">ktu@ktu.lt</a></p>
                      <div class="social-icons">
                      <a href="https://www.facebook.com/ktu.lt" target="_blank"><img src="https://ktu.edu/wp-content/themes/ktu/images/social/Social_media-facebook.svg" alt="Facebook" title="Facebook"></a>
                      <a href="https://www.linkedin.com/company/ktu" target="_blank"><img src="https://ktu.edu/wp-content/themes/ktu/images/social/Social_media-linkedin.svg" alt="Linkedin" title="Linkedin"></a>
                      <a href="https://www.youtube.com/user/ktuvideo" target="_blank"><img src="https://ktu.edu/wp-content/themes/ktu/images/social/Social_media-youtube.svg" alt="YouTube" title="YouTube"></a>
                      <a href="https://www.instagram.com/ktuspace/" target="_blank"><img src="https://ktu.edu/wp-content/themes/ktu/images/social/Social_media-instagram.svg" alt="Instagram" title="Instagram"></a>
                    </div>
              </div>
        
            <div class="col-md-2">
              <div class="menufooter">


                <div class="dropdown">
  <a class="dropdown-toggle buttonktu" id="buttonfooter2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Quick Links
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li class="footerli"><a class="downmenu mainf" title="COVID-19" href="https://en.ktu.edu/covid-19/">COVID-19</a></li>
	                    <li class="footerli"><a class="downmenu mainf" title="Bendrabučiai" target="_blank" href="https://dormitory.ktu.edu">Dormitories</a></li>

                      <li class="footerli"><a class="downmenu mainf" title="Akademiniai mainai" href="https://en.ktu.edu/erasmus/">Academic exchange</a></li>
	                    <li class="footerli"><a class="downmenu mainf" title="Darbas KTU" href="https://en.ktu.edu/work-at-ktu/">Work at KTU</a></li>
	                    <li class="footerli"><a class="downmenu mainf" title="Dokumentai" href="https://en.ktu.edu/documents/">Documents</a></li>
	                    <li class="footerli"><a class="downmenu mainf" title="Kontaktai" href="https://en.ktu.edu/contacts/">Contacts</a></li>
	                    <li class="footerli"><a class="downmenu mainf" title="KTU virtualus turas" target="_blank" href="https://tour.ktu.edu/#EN">Virtual KTU tour</a></li>
  </ul>
  </div></div>
      
</div>
<div class="col-md-2">
  <a class="dropdown-toggle buttonktu" id="buttonfooter2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
   Privacy
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li class="footerli"><a class="downmenu mainf" title="Privacy" href="https://en.ktu.edu/privacy/">Privacy</a></li>
    <li class="footerli"><a class="downmenu mainf" title="Cookies" href="https://en.ktu.edu/privacy/cookies/">Cookies</a></li>
  </ul>
    </div>
<div class="col-md-3">
  <a class="buttonktu" id="buttonfooter2" href="https://en.ktu.edu/media-enquiries/" role="button" aria-expanded="false">
   For media enquiries
  </a>
</div>
        </div>
</div>
             


    
</footer>
</template>
<script>
export default {
  name: "KTUfooter"
}
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/pf-dintext-pro-medium");
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
