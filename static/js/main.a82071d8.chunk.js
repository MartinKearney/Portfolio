(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],{31:function(e,a,t){e.exports=t.p+"static/media/logger.7b3e9f73.png"},32:function(e,a,t){e.exports=t.p+"static/media/weather1.8455a022.png"},33:function(e,a,t){e.exports=t.p+"static/media/url-shortener.a8697b19.png"},35:function(e,a,t){e.exports=t(92)},65:function(e,a,t){},66:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},89:function(e,a,t){},91:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(8),l=t.n(c),s=t(4),i=t(2),o=t(30),m=t.n(o),d=(t(65),function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1];Object(n.useEffect)((function(){document.addEventListener("scroll",l)}),[]);var l=function(){window.scrollY>0?c(!0):c(!1)},o=function(e){s.scroller.scrollTo(e,{duration:1e3,delay:200,smooth:!0})},d=function(e){e.preventDefault()};return r.a.createElement("div",{className:"NavBar-Container ".concat(t?"":"no-background")},r.a.createElement("ul",{className:"NavBar-List"},r.a.createElement(m.a,{items:["Home-Section","Projects-Section","About-Section","Contact-Section"],currentClassName:"underline",offset:-500},r.a.createElement("li",{className:"NavBar-List__item",id:"Home",onClick:function(e){o("home")}},r.a.createElement("a",{href:"#Home-Section",onClick:function(e){return d(e)}},"Home")),r.a.createElement("li",{className:"NavBar-List__item",id:"Projects",onClick:function(e){o("projects")}},r.a.createElement("a",{href:"#Projects-Section",onClick:function(e){return d(e)}},"Projects")),r.a.createElement("li",{className:"NavBar-List__item",id:"About",onClick:function(e){o("about")}},r.a.createElement("a",{href:"#About-Section",onClick:function(e){return d(e)}},"About")),r.a.createElement("li",{className:"NavBar-List__item",id:"Contact",onClick:function(e){o("contact")}},r.a.createElement("a",{href:"#Contacts-Section",onClick:function(e){return d(e)}},"Contact")))))}),u=t(3),E=(t(66),function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)(!1),o=Object(i.a)(s,2),m=o[0],d=o[1];Object(n.useEffect)((function(){var e=setTimeout((function(){l(!0),d(!0)}),1e3);return function(){return clearTimeout(e)}}),[]);return r.a.createElement("section",{id:"main",className:"Main-Container"},r.a.createElement(u.Zoom,{delay:500,duration:1200,triggerOnce:!0,direction:"bottom"},r.a.createElement("div",{className:"Text-Container ".concat(c?"show-text":"")},e.children)),r.a.createElement("div",{className:"Main-Container__pointer ".concat(m?"show":"")},r.a.createElement(u.Fade,{delay:2500,triggerOnce:!0},r.a.createElement("p",{style:{marginBottom:"0"}},"Find out more about what I do"),r.a.createElement("p",{style:{textAlign:"center"}},r.a.createElement("i",{className:"material-icons arrow"},"arrow_circle_down")))))}),f=t(31),p=t.n(f),g=t(32),h=t.n(g),v=t(33),N=t.n(v),b=(t(70),{border:"8px solid #ccc",borderRadius:"12px"}),y={marginRight:"0"},k={textAlign:"justify",fontSize:"1.2rem"},w={textAlign:"justify",fontSize:"0.7rem"},S=function(){return r.a.createElement("section",{id:"projects",className:"Projects-Section"},r.a.createElement("h3",{id:"Projects-Section__header"},"\xa0My Projects\xa0"),r.a.createElement("div",{className:"row"},r.a.createElement(u.Fade,{delay:100,triggerOnce:!0},r.a.createElement("div",{className:"col s12 m6 l4 offset-l2"},r.a.createElement("div",{className:"card sticky-action",style:b},r.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{className:"activator",src:p.a,alt:"Maintenance Logger Screenshot"})),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},"Maintenance Logger",r.a.createElement("i",{className:"material-icons right"},"more_vert")),r.a.createElement("p",{style:w},"Tech used: React, Redux, Node/Express & MongoDB")),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Maintenance Logger",r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("p",{style:k},"Record and update information regarding an organisation's maintenance tasks."),r.a.createElement("p",{style:k},"This project allows the user to create records of maintenance tasks and associate their initiation with an employee. The details of a task can then be updated and its full history can be viewed. It is also possible to create and delete employees from the employee list."),r.a.createElement("p",{style:k},"Developed using: React, Redux, MaterializeCSS, Node/Express & MongoDB")),r.a.createElement("div",{className:"card-action Projects-Section__links"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://flannel-parliament-04846.herokuapp.com/",target:"_blank",rel:"noopener noreferrer",style:y},r.a.createElement("i",{className:"fas fa-link"}),"\xa0View Live Site\xa0")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/MartinKearney/Maintenance-Logger",target:"_blank",rel:"noopener noreferrer",style:y},r.a.createElement("i",{className:"fab fa-github"}),"\xa0View Code on GitHub\xa0")))))),r.a.createElement(u.Fade,{delay:500,triggerOnce:!0},r.a.createElement("div",{className:"col s12 m6 l4"},r.a.createElement("div",{className:"card sticky-action",style:b},r.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{className:"activator",src:h.a,alt:"Weather App Screenshot"})),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},"Weather App",r.a.createElement("i",{className:"material-icons right"},"more_vert")),r.a.createElement("p",{style:w},"Tech used: React, Node/Express & OpenWeatherMap API")),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title grey-text text-darken-4"},"Weather App",r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("p",{style:k},"Get the current weather and a 5-day forecast for locations across the globe."),r.a.createElement("p",{style:k},"This project utilises the Open Weather Map API for weather data and a reverse-geocoding API to resolve location name conflicts both between and within countries."),r.a.createElement("p",{style:k},"Developed using: React, Node/Express, OpenWeatherMap & HERE Developer APIs")),r.a.createElement("div",{className:"card-action Projects-Section__links"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://upper-bunnyhug-64871.herokuapp.com",target:"_blank",rel:"noopener noreferrer",style:y},r.a.createElement("i",{className:"fas fa-link"}),"\xa0View Live Site\xa0")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/MartinKearney/Weather-App",target:"_blank",rel:"noopener noreferrer",style:y},r.a.createElement("i",{className:"fab fa-github"}),"\xa0View Code on GitHub\xa0"))))))),r.a.createElement("div",{className:"row"},r.a.createElement(u.Fade,{delay:900,triggerOnce:!0},r.a.createElement("div",{className:"col s12 m6 offset-m3 l4 offset-l4"},r.a.createElement("div",{className:"card sticky-action",style:b},r.a.createElement("div",{className:"card-image waves-effect waves-block waves-light"},r.a.createElement("img",{className:"activator",src:N.a,alt:"URL Shortener Screenshot"})),r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title activator grey-text text-darken-4"},"URL Shortener",r.a.createElement("i",{className:"material-icons right"},"more_vert")),r.a.createElement("p",{style:w},"Tech used: React, Node/Express & MongoDB")),r.a.createElement("div",{className:"card-reveal"},r.a.createElement("span",{className:"card-title grey-text text-darken-4"},"URL Shortener",r.a.createElement("i",{className:"material-icons right"},"close")),r.a.createElement("p",{style:k},"Translate a long URL into an abbreviated alternative."),r.a.createElement("p",{style:k},"Once created, the shortened link is stored in a database along with the original URL. The server listens for incoming requests and will redirect the user of a shortened URL if a record of it is found in the database."),r.a.createElement("p",{style:k},"Developed using: React, Node/Express & MongoDB")),r.a.createElement("div",{className:"card-action Projects-Section__links"},r.a.createElement("p",null,r.a.createElement("a",{href:"https://intense-wildwood-80264.herokuapp.com",target:"_blank",rel:"noopener noreferrer",style:y},r.a.createElement("i",{className:"fas fa-link"}),"\xa0View Live Site\xa0")),r.a.createElement("p",null,r.a.createElement("a",{href:"https://github.com/MartinKearney/URL-Shortener",target:"_blank",rel:"noopener noreferrer",style:y},r.a.createElement("i",{className:"fab fa-github"}),"\xa0View Code on GitHub\xa0"))))))))},x=(t(71),function(){return r.a.createElement("section",{id:"about",className:"About-Container"},r.a.createElement("h3",null,"\xa0About Me\xa0"),r.a.createElement("div",{className:"about-text"},r.a.createElement(r.a.Fragment,null,"I love to build websites and I have a passion for programming, problem solving and learning."),r.a.createElement("p",{style:{marginTop:"4rem",marginBottom:"1rem"}},"My key skills are in:"),r.a.createElement("p",{style:{marginTop:"0"}},"HTML5, CSS3, JavaScript, React, Redux, Node/Express, Java & MongoDB.")))}),j=t(34),C=t.n(j),_=(t(89),t(13)),O=t.n(_),M=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2),o=s[0],m=s[1],d=Object(n.useState)(""),E=Object(i.a)(d,2),f=E[0],p=E[1],g=Object(n.useState)(!1),h=Object(i.a)(g,2),v=h[0],N=h[1],b=Object(n.useState)(!1),y=Object(i.a)(b,2),k=y[0],w=y[1],S=function(){return t.trim().length>50},x=function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o.trim())},j=function(){return(t||o)&&f},_=function(){if(j()&&!S()&&(o&&x()||!o)){N(!0);var e={name:t,email:o,message:f};C()({method:"post",url:"https://agile-cove-00243.herokuapp.com/send",data:e}).then((function(e){"success"===e.data.status?O.a.toast({html:"Thanks - your message has been sent!",classes:"toast-style"}):"fail"===e.data.status&&O.a.toast({html:"Sorry, something went wrong - please try again later",classes:"toast-style"})})),N(!1),M()}else console.log("invalid form")},M=function(){c(""),m(""),p(""),w(!1)};return r.a.createElement("section",{className:"container Contact-Container"},r.a.createElement(u.HeadShake,{delay:800,duration:1200,triggerOnce:!0},r.a.createElement("h3",{className:"Contact-header"},"\xa0Contact Me\xa0")),r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12 Form-Container",style:{borderRadius:"12px"}},r.a.createElement("div",{className:"sendingMsgText ".concat(v?"":"hidden")},"Sending message..."),r.a.createElement("div",{className:"row",style:{marginBottom:"0"}},r.a.createElement("div",{className:"input-field col s12 m10 offset-m1 l6 offset-l3"},r.a.createElement("i",{className:"material-icons prefix"},"emoji_people"),r.a.createElement("input",{id:"name",type:"text",onChange:function(e){c(e.target.value)},value:t}),r.a.createElement("label",{htmlFor:"name"},"Your Name..."),r.a.createElement("small",{className:"name-error ".concat(S()?"":"hidden")},"Name is too long!"))),r.a.createElement("div",{className:"row",style:{marginBottom:"0"}},r.a.createElement("div",{className:"input-field col s12 m10 offset-m1 l6 offset-l3"},r.a.createElement("i",{className:"material-icons prefix"},"email"),r.a.createElement("input",{id:"email",type:"email",onChange:function(e){m(e.target.value)},value:o}),r.a.createElement("label",{htmlFor:"email"},"Your Email Address..."),r.a.createElement("small",{className:"email-error ".concat(!x()&&o?"":"hidden")},"Please enter a valid email address"))),r.a.createElement("div",{className:"row",style:{marginBottom:"0"}},r.a.createElement("div",{className:"input-field col s12 m10 offset-m1 l6 offset-l3"},r.a.createElement("i",{className:"material-icons prefix"},"mode_edit"),r.a.createElement("textarea",{id:"icon_prefix2",className:"materialize-textarea",onChange:function(e){p(e.target.value)},value:f}),r.a.createElement("label",{htmlFor:"icon_prefix2"},"Message..."))),r.a.createElement("div",{className:"feedback"},r.a.createElement("small",{className:"main-error ".concat(!j()&&k?"":"hidden")},"Please enter your name and/or your email ",r.a.createElement("br",null),"and include a message")),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12",style:{textAlign:"center"}},r.a.createElement("button",{className:"btn waves-effect waves-light grey darken-1",style:{width:"20%"},onClick:function(e){e.preventDefault(),k||w(!0),_()}},"Send Message",r.a.createElement("i",{className:"material-icons right"},"send")))))))},A=(t(90),t(91),function(){return r.a.createElement(n.Fragment,null,r.a.createElement(d,null),r.a.createElement("section",{id:"Home-Section"},r.a.createElement(s.Element,{name:"home"},r.a.createElement(E,null,r.a.createElement("p",null,"Hi, I'm Martin"),r.a.createElement("p",null,"A Web Developer")))),r.a.createElement("div",{className:"contanier"},r.a.createElement("section",{id:"Projects-Section"},r.a.createElement(s.Element,{name:"projects"},r.a.createElement(S,null))),r.a.createElement("section",{id:"About-Section"},r.a.createElement(s.Element,{name:"about"},r.a.createElement(x,null))),r.a.createElement("section",{id:"Contact-Section"},r.a.createElement(s.Element,{name:"contact"},r.a.createElement(M,null)))))});l.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.a82071d8.chunk.js.map