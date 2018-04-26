webpackJsonp([1],{"+SaI":function(t,e,a){"use strict";e.a={name:"experiment-view"}},"+V+B":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.SignUpModal",modifiers:{SignUpModal:!0}}],staticClass:"btn btn-outline-success mr-2"},[t._v("\n    Join\n  ")]),t._v(" "),a("b-modal",{attrs:{id:"SignUpModal",title:"Join Biogit","hide-footer":!0}},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"sign-up-input-email"}},[t._v("Username")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"text",id:"sign-up-input-username",placeholder:"Enter username"},domProps:{value:t.userName},on:{change:t.updateUserName}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"sign-up-input-email"}},[t._v("Email address")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"email",id:"sign-up-input-email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{change:t.updateMail}}),t._v(" "),a("small",{staticClass:"form-text text-muted",attrs:{id:"emailHelp"}},[t._v("We'll never share your email with anyone else.")])]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"exampleInputPassword1"}},[t._v("Password")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"password",id:"exampleInputPassword1",placeholder:"Password"},domProps:{value:t.password},on:{change:t.updatePass}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",attrs:{"data-dismiss":"modal"},on:{click:t.signUp}},[t._v("Submit")])])])],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},"/GYD":function(t,e,a){"use strict";function n(t){a("3VJ2")}var s=a("P+xj"),i=a("zNpx"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-26e8f741",null);e.a=o.exports},"0M9u":function(t,e,a){"use strict";function n(t){a("xJjl")}var s=a("AzCD"),i=a("RgEY"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-bf21b9de",null);e.a=o.exports},"0jWI":function(t,e){},"1/oy":function(t,e){},"1F8z":function(t,e){},"1awQ":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{"no-body":""}},[a("b-tabs",{attrs:{card:""}},[a("b-tab",{attrs:{title:"Your Feed",active:""}},[t._v("\n      people you follow/your own repos\n    ")]),t._v(" "),a("b-tab",{attrs:{title:"World Feed"}},[t._v("\n      Items Published around the world\n    ")])],1)],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},"3VJ2":function(t,e){},"8Itm":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-flex flex-wrap"},[a("div",{staticClass:"p-4 mr-auto"},[a("UserHomePanel")],1),t._v(" "),a("div",{staticClass:"p-4"},[a("UserRepos")],1)])},s=[],i={render:n,staticRenderFns:s};e.a=i},"9B+I":function(t,e,a){"use strict";var n=a("Dd8w"),s=a.n(n),i=a("llOA"),r=a("EZHi"),c=a("NYxO");e.a={components:{UserRepos:i.a,UserHomePanel:r.a},computed:s()({},Object(c.b)({user:function(t){return t.auth.user}})),name:"HomeView",mounted:function(){console.log("HomeView mounted"),this.$store.dispatch("getUserItems",this.user.id)}}},"9M+g":function(t,e){},"9imt":function(t,e,a){"use strict";function n(t){a("gCKj")}var s=a("ddA5"),i=a("IBBX"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-c5e3172e",null);e.a=o.exports},AqYs:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgdmlld0JveD0iMCAwIDgzNC41NzYwMiA5NjMuNjM0MzQiCiAgIGhlaWdodD0iOTYzLjYzNDM0IgogICB3aWR0aD0iODM0LjU3NTk5IgogICBpZD0ic3ZnMiIKICAgdmVyc2lvbj0iMS4xIj4KICA8bWV0YWRhdGEKICAgICBpZD0ibWV0YWRhdGE4Ij4KICAgIDxyZGY6UkRGPgogICAgICA8Y2M6V29yawogICAgICAgICByZGY6YWJvdXQ9IiI+CiAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICAgICAgPGRjOnR5cGUKICAgICAgICAgICByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIiAvPgogICAgICAgIDxkYzp0aXRsZT48L2RjOnRpdGxlPgogICAgICA8L2NjOldvcms+CiAgICA8L3JkZjpSREY+CiAgPC9tZXRhZGF0YT4KICA8ZGVmcwogICAgIGlkPSJkZWZzNiIgLz4KICA8ZwogICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTguMjQzMTIsLTg4LjY2NjQ3NSkiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8cGF0aAogICAgICAgZD0ibSA1MzUuNTc1MzIsMTA1Mi4zMDA4IC00MTcuMjg4LC0yNDAuODcwMyAtMC4wNDQyLC00ODEuODE3MTcgNDE3LjI0MzgxLC0yNDAuOTQ2ODU1IDQxNy4yODgwMSwyNDAuODcwMzA1IDAuMDQ0Miw0ODEuODE3MTcgeiIKICAgICAgIGlkPSJwYXRoODM0IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM2MGIwZjQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuODkxMTA0NTI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDxwYXRoCiAgICAgICBkPSJtIDExNzcuOTkyMSwxMDkuOTgxNTcgYyAwLjYwMzQsLTEuMzU3NyAtMTUuOTc3NywxMC43MDU4MiAtMTQuNTAwMiwxMC41NDk1NSAxLjQ3NzUsLTAuMTU2MjggLTE3LjI2MDQsLTguNDg0MjMgLTE2LjM4NjMsLTcuMjgyOCAwLjg3NDEsMS4yMDE0MyAtMS4yODI2LC0xOS4xOTAwMzggLTEuODg2MSwtMTcuODMyMzM5IC0wLjYwMzQsMS4zNTc2OTkgMTUuOTc3OCwtMTAuNzA1ODE1IDE0LjUwMDMsLTEwLjU0OTU0NCAtMS40Nzc1LDAuMTU2MjcxIDE3LjI2MDQsOC40ODQyMjMgMTYuMzg2Myw3LjI4Mjc5NSAtMC44NzQxLC0xLjIwMTQyOSAxLjI4MjYsMTkuMTkwMDM4IDEuODg2LDE3LjgzMjMzOCB6IgogICAgICAgaWQ9InBhdGgxNTU5IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MDtmaWxsOiM2MGIwZjQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMzc3OTUyNzU7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDxyZWN0CiAgICAgICB5PSIzMzkuMzg5NjIiCiAgICAgICB4PSI2NDAuODg1OTMiCiAgICAgICBoZWlnaHQ9IjIxNi42NjMxNSIKICAgICAgIHdpZHRoPSI2My43MjQ0NTMiCiAgICAgICBpZD0icmVjdDE1NjMiCiAgICAgICBzdHlsZT0ib3BhY2l0eTowO2ZpbGw6IzQwZThmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4zNzc5NTI3NTtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgPHJlY3QKICAgICAgIHk9IjQ3Ny43NjI3MyIKICAgICAgIHg9IjEwOTYuMDYwNSIKICAgICAgIGhlaWdodD0iMTQzLjgzNTE5IgogICAgICAgd2lkdGg9IjEyNy40NDg5MSIKICAgICAgIGlkPSJyZWN0MTU2NyIKICAgICAgIHN0eWxlPSJvcGFjaXR5OjA7ZmlsbDojNDBlOGZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjM3Nzk1Mjc1O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+CiAgPC9nPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTExOC4yNDMxMiwtODguNjY2NDc1KSIKICAgICBpZD0ibGF5ZXIyIj4KICAgIDxwYXRoCiAgICAgICBpZD0icGF0aDgyMSIKICAgICAgIGQ9Ik0gNTQ1Ljc5NzE4LDYyNS45NjkzOSBDIDUzMy41NTkyOSw2MTEuODY2NDcgNDQwLjMwNTMxLDU5OC44NjcgMzkwLjE0NTUsNTc4LjEyMzU3IDM1NS45MTQwNCw1NjMuOTY3MjYgMzE1LjY0Mjk0LDU0My4wMjU1IDI5MS44ODU4Niw1MjYuMjEyMjIgYyA5LjQ3NjksMjQuNTk0MTcgNDEuMjQ4NDEsNTQuOTUzNjQgNjYuNzAyMjUsNzcuNjk1MzggNTAuNjkyNTMsNDUuMjkxMjUgMjExLjU1ODAzLDU5LjQ5ODMgMTY4LjY2MDYsMTE0LjY0MjM2IEMgNDE0LjE0MjEsODYzLjk0Njk5IDI4MC44ODc4Myw4MTAuMjIyOTQgMjI1LjA0MzMzLDczNy43MDc0OSAxMjIuMjAxNTEsNjA0LjE2NDg3IDIwMi41ODgwNiw0NDAuMzQ4MTIgMTUyLjA1NTExLDMyMy44NDg5NiAyNjguNTQ0MzIsNDY1LjQ4NjIzIDU0Ny4xMTUwNywzNDYuNzk5NDQgNTQ1Ljc5NzE4LDYyNS45NjkzOSBaIgogICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM4MWU0MTg7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMzg2MDUwOTc7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4KICAgIDxnCiAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzcuMzM1NDM5LC0yMS44ODYyODIpIgogICAgICAgaWQ9ImcxNTkxIj4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM0MGU4ZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiNmZmZmZmY7c3Ryb2tlLXdpZHRoOjQzLjk5NTAxNDE5O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgIGQ9Im0gNjQwLjg4NTkzLDI4Mi4wMzc1OSAtMTBlLTYsNTQ4LjAzMDI4IHoiCiAgICAgICAgIGlkPSJyZWN0MTU3MSIgLz4KICAgICAgPHBhdGgKICAgICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I2ZmZmZmZjtzdHJva2Utd2lkdGg6Mzk7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgZD0ibSA2NDAuODg1OTIsODMwLjA2Nzg3IGMgMCwwIC0xOS43NDAyMiwtMjE4LjA5Nzg4IDEwMS4zNzQxMiwtMjQ2Ljk4MDQ5IDEyMS4xMTQzNCwtMjguODgyNjEgMTM0Ljk1MDc1LC0xNzcuMzA2OTYgMTM0Ljk1MDc1LC0xNzcuMzA2OTYiCiAgICAgICAgIGlkPSJwYXRoMTU3NiIgLz4KICAgICAgPGcKICAgICAgICAgaWQ9ImcxNDkyIgogICAgICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAuMDI3NzEzLC0yOC4yMjA4NjMpIj4KICAgICAgICA8cGF0aAogICAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojZmZmZmZmO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjM1MTU4Mzk2O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgICAgZD0ibSA3MzMuNzQxNTgsMzEwLjI1ODQ1IGMgMCw0MC4yMjE3NiAtMzguNDk2NTIsNzIuODI3OTUgLTcyLjgyNzk0LDcyLjgyNzk1IC0zNC4zMzE0MiwwIC03Mi44Mjc5NSwtMzIuNjA2MTggLTcyLjgyNzk1LC03Mi44Mjc5NSAwLC00MC4yMjE3NyAzMi42MDYxOCwtNzIuODI3OTUgNzIuODI3OTUsLTcyLjgyNzk1IDQwLjIyMTc2LDFlLTUgNzIuODI3OTQsMzIuNjA2MTkgNzIuODI3OTQsNzIuODI3OTUgeiIKICAgICAgICAgICBpZD0icGF0aDE0MTMtMy03IiAvPgogICAgICAgIDxjaXJjbGUKICAgICAgICAgICBjeT0iMzEwLjI1ODQ1IgogICAgICAgICAgIGN4PSI2NjAuOTEzNjQiCiAgICAgICAgICAgaWQ9InBhdGgxNDEzLTMtNy0zIgogICAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojNjBiMGY0O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI2MzY1MTM0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgICAgcj0iNDYuNDI3ODE4IiAvPgogICAgICA8L2c+CiAgICAgIDxnCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIxNi4yOTcxNSw5NS41MjE5NjgpIgogICAgICAgICBpZD0iZzE0OTItNiI+CiAgICAgICAgPGNpcmNsZQogICAgICAgICAgIGN5PSIzMTAuMjU4NDUiCiAgICAgICAgICAgY3g9IjY2MC45MTM2NCIKICAgICAgICAgICBpZD0icGF0aDE0MTMtMy03LTIiCiAgICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiNmZmZmZmY7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMzUxNTgzOTY7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgICByPSI3Mi44Mjc5NSIgLz4KICAgICAgICA8Y2lyY2xlCiAgICAgICAgICAgY3k9IjMxMC4yNTg0NSIKICAgICAgICAgICBjeD0iNjYwLjkxMzY0IgogICAgICAgICAgIGlkPSJwYXRoMTQxMy0zLTctMy05IgogICAgICAgICAgIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojNjBiMGY0O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI2MzY1MTM0O3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICAgICAgcj0iNDYuNDI3ODE4IiAvPgogICAgICA8L2c+CiAgICAgIDxnCiAgICAgICAgIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMC4wMjc3MTMsNTE5LjgwOTQyKSIKICAgICAgICAgaWQ9ImcxNDkyLTEiPgogICAgICAgIDxjaXJjbGUKICAgICAgICAgICByPSI3Mi44Mjc5NSIKICAgICAgICAgICBjeT0iMzEwLjI1ODQ1IgogICAgICAgICAgIGN4PSI2NjAuOTEzNjQiCiAgICAgICAgICAgaWQ9InBhdGgxNDEzLTMtNy0yNyIKICAgICAgICAgICBzdHlsZT0ib3BhY2l0eToxO2ZpbGw6I2ZmZmZmZjtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6bm9uZTtzdHJva2Utd2lkdGg6MC4zNTE1ODM5NjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPgogICAgICAgIDxjaXJjbGUKICAgICAgICAgICBjeT0iMzEwLjI1ODQ1IgogICAgICAgICAgIGN4PSI2NjAuOTEzNjQiCiAgICAgICAgICAgaWQ9InBhdGgxNDEzLTMtNy0zLTAiCiAgICAgICAgICAgc3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM2MGIwZjQ7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuMjYzNjUxMzQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgICAgICByPSI0Ni40Mjc4MTgiIC8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo="},AzCD:function(t,e,a){"use strict";e.a={name:"NoUserView"}},B6as:function(t,e){},"D+VX":function(t,e,a){"use strict";var n,s=a("bOdI"),i=a.n(s),r=a("Xxa5"),c=a.n(r),o=a("Dd8w"),u=a.n(o),l=a("exGp"),g=a.n(l),I=a("Maat"),m=a("Du/2"),d={isLoggedin:!1,user:null,email:null,password:null,userName:null},C={},p={auth:function(t){var e=this,a=t.commit,n=t.state;return g()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:try{I.a.authUser(n.email,n.password).then(function(t){if(t.authenticateUser){var e=u()({},t.authenticateUser);a(m.a,{user:e})}else console.log(new Error("Sorry, it looks like those were the wrong credentials!"))})}catch(t){console.log(new Error(t))}case 1:case"end":return t.stop()}},t,e)}))()},createUser:function(t){var e=this,a=(t.commit,t.state);return g()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,I.a.signUpUser(a.kuserName,a.email,a.password).then(function(t){return console.log(t)}),t.next=7;break;case 4:return t.prev=4,t.t0=t.catch(0),t.abrupt("return",new Error(t.t0.toString()));case 7:case"end":return t.stop()}},t,e,[[0,4]])}))()},login:function(t){var e=this,a=t.dispatch;return g()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("auth");case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return",new Error(t.t0.toString()));case 8:case"end":return t.stop()}},t,e,[[0,5]])}))()},signUp:function(t){var e=this,a=t.dispatch;return g()(c.a.mark(function t(){return c.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("createUser");case 3:t.next=8;break;case 5:return t.prev=5,t.t0=t.catch(0),t.abrupt("return",new Error(t.t0.toString()));case 8:case"end":return t.stop()}},t,e,[[0,5]])}))()}},v=(n={},i()(n,m.c,function(t,e){t.email=e}),i()(n,m.f,function(t,e){t.password=e}),i()(n,m.g,function(t,e){t.userName=e}),i()(n,m.h,function(){console.log("mutated sign up")}),i()(n,m.a,function(t,e){var a=e.user;t.isLoggedin=!0,t.user=a,console.log("auth Success")}),n);e.a={state:d,getters:C,actions:p,mutations:v}},"Du/2":function(t,e,a){"use strict";a.d(e,"h",function(){return n}),a.d(e,"a",function(){return s}),a.d(e,"c",function(){return i}),a.d(e,"f",function(){return r}),a.d(e,"g",function(){return c}),a.d(e,"d",function(){return o}),a.d(e,"b",function(){return u}),a.d(e,"e",function(){return l});var n="SIGN_UP",s="AUTH_SUCCESS",i="SET_EMAIL",r="SET_PASSWORD",c="SET_USERNAME",o="SET_ITEMS",u="FOCUS_ITEM",l="SET_ITEM_DATA"},EZ9N:function(t,e,a){"use strict";function n(t){a("rFff")}var s=a("tjvO"),i=a("iEzQ"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-54c8a40b",null);e.a=o.exports},EZHi:function(t,e,a){"use strict";function n(t){a("ccde")}var s=a("ja+z"),i=a("1awQ"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-28442064",null);e.a=o.exports},Hq31:function(t,e,a){"use strict";function n(t){a("Ww3M")}var s=a("+SaI"),i=a("jJF0"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-bd8232d6",null);e.a=o.exports},IBBX:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.signInModal",modifiers:{signInModal:!0}}],staticClass:"btn btn-outline-primary mr-2"},[t._v("\n    Sign in\n  ")]),t._v(" "),a("b-modal",{attrs:{id:"signInModal",title:"Sign in","hide-footer":!0}},[a("form",[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"log-in-input-email"}},[t._v("Email address")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"email",id:"log-in-input-email","aria-describedby":"emailHelp",placeholder:"Enter email"},domProps:{value:t.email},on:{change:t.updateMail}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"loginPass"}},[t._v("Password")]),t._v(" "),a("input",{staticClass:"form-control",attrs:{type:"password",id:"loginPass",placeholder:"Password"},domProps:{value:t.password},on:{change:t.updatePass}})]),t._v(" "),a("button",{staticClass:"btn btn-primary",on:{click:function(e){e.preventDefault(),t.login(e)}}},[t._v("Submit")])])])],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},IcnI:function(t,e,a){"use strict";var n=a("Dd8w"),s=a.n(n),i=a("7+uW"),r=a("NYxO"),c=a("D+VX"),o=a("vmJK"),u=a("1F8z"),l=a.n(u);i.a.use(r.a),e.a=new r.a.Store(s()({strict:!0},l.a,{modules:{auth:c.a,items:o.a}}))},Id91:function(t,e){},Jmt5:function(t,e){},LyZ8:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"navbar-wrapper"}},[n("nav",{staticClass:"navbar navbar-expand-md navbar-light bg-light"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("img",{attrs:{src:a("AqYs"),width:"30",alt:"logo"}})]),t._v(" "),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[t._v("\n      Biogit\n    ")]),t._v(" "),t._m(0),t._v(" "),t.loginStatus?t._e():n("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarSupportedContent"}},[n("login-modal"),t._v(" "),n("sign-up-modal")],1),t._v(" "),t.loginStatus?n("div",{staticClass:"collapse navbar-collapse"},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[n("span",{staticClass:"sr-only"},[t._v("Home")])])],1)])]):t._e()],1)])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],i={render:n,staticRenderFns:s};e.a=i},M93x:function(t,e,a){"use strict";function n(t){a("B6as")}var s=a("xJD8"),i=a("nXzr"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,null,null);e.a=o.exports},Maat:function(t,e,a){"use strict";function n(t,e){return r.request("\n    mutation authenticateUser($email: String!, $password: String!) {\n      authenticateUser(email: $email, password: $password) {\n        id\n        token\n      }\n    }\n  ",{email:t,password:e})}function s(t,e,a){return r.request("\n  mutation signUpUser($userName: String!, $email: String!, $password: String!){\n    signupUser(userName: $userName, email: $email, password: $password){\n      id\n    }\n  }\n  ",{userName:t,email:e,password:a})}var i=a("Liek"),r=(a.n(i),new i.GraphQLClient("https://api.graph.cool/simple/v1/cja29wrui3kek01571mxxfexh",{headers:{Authorization:"Bearer YOUR_AUTH_TOKEN"}})),c={authUser:n,signUpUser:s};e.a=c},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s=a("M93x"),i=a("YaEn"),r=a("e6fC"),c=a("Jmt5"),o=(a.n(c),a("9M+g")),u=(a.n(o),a("IcnI"));n.a.use(r.a),n.a.config.productionTip=!1,new n.a({el:"#app",store:u.a,router:i.a,render:function(t){return t(s.a)}})},"P+xj":function(t,e,a){"use strict";var n=a("Dd8w"),s=a.n(n),i=a("NYxO");e.a={name:"NewItemButton",computed:s()({},Object(i.b)({userID:function(t){return t.auth.user.userID}})),methods:{newItem:function(){console.log(this.newItemName)}}}},R7ZG:function(t,e,a){"use strict";function n(t){a("0jWI")}var s=a("vpWq"),i=a("q2zD"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-235720ae",null);e.a=o.exports},RgEY:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center"},[n("div",{staticClass:"d-flex justify-content-center flex-wrap"},[n("img",{staticClass:"p-4",attrs:{src:a("AqYs"),width:"300",height:"300",alt:"biogit logo"}}),t._v(" "),n("h1",{staticClass:"align-self-center display-4 p-4"},[t._v("Scientific publishing for the internet age")])])])}],i={render:n,staticRenderFns:s};e.a=i},UOO0:function(t,e,a){"use strict";var n=a("Dd8w"),s=a.n(n),i=a("NYxO"),r=a("bZZi"),c=a("0M9u");e.a={components:{HomeView:r.a,NoUserView:c.a},name:"landing-page",computed:s()({},Object(i.b)({isLoggedin:function(t){return t.auth.isLoggedin}}))}},Ww3M:function(t,e){},YaEn:function(t,e,a){"use strict";var n=a("7+uW"),s=a("/ocq"),i=a("i7Yv"),r=a("Hq31"),c=a("R7ZG"),o=a("EZ9N");n.a.use(s.a);var u=new s.a({mode:"history",routes:[{path:"/",Name:"landing",component:i.a},{path:"/experiment-view",name:"experiment-view",component:r.a,props:!0},{path:"/system-view",name:"system-view",component:c.a,props:!0},{path:"/protocol-view",name:"protocol-view",component:o.a,props:!0}]});e.a=u},"Zm+u":function(t,e){},bZZi:function(t,e,a){"use strict";function n(t){a("fhdo")}var s=a("9B+I"),i=a("8Itm"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-75316b8a",null);e.a=o.exports},bgYg:function(t,e){},ccde:function(t,e){},ddA5:function(t,e,a){"use strict";var n=a("Xxa5"),s=a.n(n),i=a("exGp"),r=a.n(i),c=a("Dd8w"),o=a.n(c),u=a("NYxO");e.a={computed:o()({},Object(u.b)({email:function(t){return t.auth.email},password:function(t){return t.auth.password}})),methods:{login:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("login");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:t.$router.push({path:""});case 9:case"end":return e.stop()}},e,t,[[0,5]])}))()},updateMail:function(t){this.$store.commit("SET_EMAIL",t.target.value)},updatePass:function(t){this.$store.commit("SET_PASSWORD",t.target.value)}}}},ejpA:function(t,e,a){"use strict";function n(t){return o.request("\n  query Item($id: ID!) {\n    Item(id: $id){\n      name\n      createdAt\n      updatedAt\n      class\n      author {\n        userName\n      }\n    }\n  }\n  ",{id:t})}function s(t){return o.request("\n    query requestUserItems($id: ID!){\n        User(id: $id) {\n        items{\n          name\n          class\n          id\n        }\n      }\n    }\n  ",{id:t})}function i(t,e,a,n){return o.request("\n   mutation createItem($name: String!, $class: String!, $authorID: ID!, $data: Data!) {\n    createItem(\n      data: $data,\n      name:$name,\n      class: $class,\n      authorId: $authorID)\n    {\n      id\n      name\n      author{\n        userName\n      }\n    }\n  }\n ",{name:t,class:e,authorID:a,data:n})}function r(t){return o.request("\n  \n ",{itemID:t})}var c=a("Liek"),o=(a.n(c),new c.GraphQLClient("https://api.graph.cool/simple/v1/cja29wrui3kek01571mxxfexh",{headers:{Authorization:"Bearer YOUR_AUTH_TOKEN"}})),u={getUserItems:s,getItem:n,addItem:i,getItemData:r};e.a=u},fhdo:function(t,e){},gCKj:function(t,e){},hApw:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card text-center",staticStyle:{width:"12rem"}},[a("div",{staticClass:"card-header"},[t._v("\n    Your Items\n  ")]),t._v(" "),a("ul",{staticClass:"list-group list-group-flush"},[0===t.items.length?a("li",{staticClass:"list-group-item"},[a("p",[t._v("You don't have any items yet, click to add some!")])]):t._e(),t._v(" "),t._l(t.items,function(e){return"system"===e.class?a("li",{key:e.name,staticClass:"list-group-item"},[a("router-link",{staticClass:"card-link system",attrs:{to:{name:"system-view",params:{itemID:e.id}}}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1):"experiment"===e.class?a("li",{staticClass:"list-group-item"},[a("router-link",{staticClass:"card-link experiment",attrs:{to:{name:"experiment-view",params:{itemID:e.id}}}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1):t._e()}),t._v(" "),a("li",{staticClass:"list-group-item"},[a("new-item-button")],1)],2)])},s=[],i={render:n,staticRenderFns:s};e.a=i},i7Yv:function(t,e,a){"use strict";function n(t){a("bgYg")}var s=a("UOO0"),i=a("p+wd"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-6fd88583",null);e.a=o.exports},iEzQ:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("h1",[t._v("Protocol editor")])])}],i={render:n,staticRenderFns:s};e.a=i},jJF0:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container-fluid"},[a("h1",[t._v("Experiment editor")])])}],i={render:n,staticRenderFns:s};e.a=i},"ja+z":function(t,e,a){"use strict";e.a={components:{},name:"UserHomePanel"}},jwv8:function(t,e,a){"use strict";function n(t){a("Zm+u")}var s=a("r6G4"),i=a("+V+B"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-5e0182b7",null);e.a=o.exports},lEE5:function(t,e,a){"use strict";var n=a("Dd8w"),s=a.n(n),i=a("NYxO"),r=a("/GYD");e.a={name:"UserRepos",components:{NewItemButton:r.a},computed:s()({},Object(i.b)({items:function(t){return t.items.items}}))}},llOA:function(t,e,a){"use strict";function n(t){a("rZW/")}var s=a("lEE5"),i=a("hApw"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-8efc283c",null);e.a=o.exports},nXzr:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav-bar"),t._v(" "),a("router-view")],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},"p+wd":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a(!1===t.isLoggedin?"no-user-view":"home-view")],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},pAEU:function(t,e,a){"use strict";function n(t){a("xzjM")}var s=a("r0KO"),i=a("LyZ8"),r=a("VU/8"),c=n,o=r(s.a,i.a,!1,c,"data-v-0ea7a670",null);e.a=o.exports},q2zD:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.item?a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row bg-light pt-3 px-5"},[a("div",{staticClass:"row col-12"},[a("h3",{staticClass:"display-6"},[t._v("\n        "+t._s(t.item.author.userName)+" / "+t._s(t.item.name)+"\n      ")])]),t._v(" "),t._m(0)]),t._v(" "),t._m(1)]):t._e()},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row pt-3"},[a("nav",{staticClass:"nav nav-tabs",attrs:{id:"myTab",role:"tablist"}},[a("a",{staticClass:"nav-item nav-link active",attrs:{"data-toggle":"tab",href:"#item-view",role:"tab","aria-controls":"nav-home","aria-selected":"true"}},[t._v("\n          View\n        ")]),t._v(" "),a("a",{staticClass:"nav-item nav-link",attrs:{"data-toggle":"tab",href:"#item-issues",role:"tab","aria-controls":"nav-profile","aria-selected":"false"}},[t._v("\n          Issues\n        ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row pt-3 px-3"},[a("div",{staticClass:"tab-content",attrs:{id:"nav-tabContent"}},[a("div",{staticClass:"col col-sm-12 tab-pane fade show active",attrs:{id:"item-view",role:"tabpanel"}},[t._v("\n        Main View\n      ")]),t._v(" "),a("div",{staticClass:"col col-sm-12 tab-pane fade",attrs:{id:"item-issues",role:"tabpanel"}},[t._v("\n        Issues\n      ")])])])}],i={render:n,staticRenderFns:s};e.a=i},r0KO:function(t,e,a){"use strict";var n=a("Dd8w"),s=a.n(n),i=a("9imt"),r=a("jwv8"),c=a("NYxO");e.a={components:{LoginModal:i.a,SignUpModal:r.a},computed:s()({},Object(c.b)({user:function(t){return t.auth.user},loginStatus:function(t){return t.auth.isLoggedin}}))}},r6G4:function(t,e,a){"use strict";var n=a("Xxa5"),s=a.n(n),i=a("exGp"),r=a.n(i),c=a("Dd8w"),o=a.n(c),u=a("NYxO");e.a={name:"SignUpModal",computed:o()({},Object(u.b)({userName:function(t){return t.auth.userName},email:function(t){return t.auth.email},password:function(t){return t.auth.password}})),methods:{signUp:function(){var t=this;return r()(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("signUp");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:t.$router.push({path:""});case 9:case"end":return e.stop()}},e,t,[[0,5]])}))()},updateMail:function(t){this.$store.commit("SET_EMAIL",t.target.value)},updatePass:function(t){this.$store.commit("SET_PASSWORD",t.target.value)},updateUserName:function(t){this.$store.commit("SET_USERNAME",t.target.value)}}}},rFff:function(t,e){},"rZW/":function(t,e){},tjvO:function(t,e,a){"use strict";e.a={name:"protocol-view"}},vmJK:function(t,e,a){"use strict";var n,s=a("bOdI"),i=a.n(s),r=a("Gu7T"),c=a.n(r),o=a("ejpA"),u=a("Du/2"),l={items:[],currentItem:null},g={},I={getUserItems:function(t,e){var a=t.commit;t.state;console.log(e);try{o.a.getUserItems(e).then(function(t){console.log(t),a(u.d,{items:t.User.items})})}catch(t){console.log(new Error(t.toString()))}},newItem:function(t,e){t.state,t.commit;console.log("new Item"),o.a.addItem(e.newItemName,e.newItemClass,e.userID,e.data).then(function(t){return console.log(t)})},getItem:function(t,e){var a=t.commit;try{o.a.getItem(e.itemID).then(function(t){console.log(t),a("FOCUS_ITEM",t.Item)})}catch(t){return new Error(t)}},focusItem:function(t,e){(0,t.commit)("FOCUS_ITEM",e.item)},getItemData:function(t,e){var a=t.commit;try{o.a.getSystemData(e.ID).then(function(t){return a("SET_ITEM_DATA",t.data)})}catch(t){return new Error(t)}}},m=(n={},i()(n,u.d,function(t,e){t.items=[].concat(c()(e.items))}),i()(n,u.b,function(t,e){t.currentItem=e}),i()(n,u.e,function(t,e){t.currentItem.data=e.data}),n);e.a={state:l,getters:g,actions:I,mutations:m}},vpWq:function(t,e,a){"use strict";var n=a("Dd8w"),s=a.n(n),i=a("NYxO");e.a={name:"system-view",computed:s()({},Object(i.b)({item:function(t){return t.items.currentItem}})),mounted:function(){console.log(this.itemID);try{this.$store.dispatch("getItem",{itemID:this.itemID}),this.$store.dispatch("getItemData",{itemID:this.itemID})}catch(t){console.log(new Error(t.toString()))}}}},xJD8:function(t,e,a){"use strict";var n=a("pAEU");e.a={components:{NavBar:n.a},name:"app"}},xJjl:function(t,e){},xzjM:function(t,e){},zNpx:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.SignUpModal",modifiers:{SignUpModal:!0}}],staticClass:"btn btn-outline-primary"},[t._v("\n    ~+~\n  ")]),t._v(" "),a("b-modal",{attrs:{id:"NewItemModal",title:"New Item","hide-footer":!0}},[a("form",[a("div",{staticClass:"form-group"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Enter item name"}})]),t._v(" "),a("div",{staticClass:"form-group"},[a("div",{staticClass:"btn-group",attrs:{"data-toggle":"buttons"}},[a("label",{staticClass:"dropdown"},[a("select",{staticClass:"custom-select"},[a("option",{attrs:{disabled:"",value:""}},[t._v("Please select your item type")]),t._v(" "),a("option",{attrs:{value:"system"}},[t._v("System")]),t._v(" "),a("option",{attrs:{value:"protocol"}},[t._v("Protocol")]),t._v(" "),a("option",{attrs:{value:"experiment"}},[t._v("Experiment")])])])])]),t._v(" "),a("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){e.preventDefault(),t.newItem(e)}}},[t._v("\n        ~+~\n      ")])])])],1)},s=[],i={render:n,staticRenderFns:s};e.a=i},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.57322e13929b60250754.js.map