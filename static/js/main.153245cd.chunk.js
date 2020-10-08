(this["webpackJsonptrivia-app"]=this["webpackJsonptrivia-app"]||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/triviaTimeLogo.44de159f.png"},32:function(e,t,a){e.exports=a(61)},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),s=a.n(o),l=(a(37),a(3)),c=a(4),i=a(6),u=a(5),m=(a(38),a(13)),p=a(1),f=a(28),v=a.n(f),y=function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"headerContainer"},r.a.createElement("img",{src:v.a,className:"logo",alt:"Trivia Time logo"}),r.a.createElement("h1",null,r.a.createElement("span",null,"Fight your friends")," ",r.a.createElement("span",null,"in a battle of wits!")))))},h=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleChange=function(t){e.props.numberOfPlayers(t.target.value)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement("form",null,r.a.createElement("fieldset",{className:"playerForm"},r.a.createElement("label",{className:"playerLabel",htmlFor:"playerForm"},"How many are playing?!"),r.a.createElement("select",{onChange:this.handleChange},r.a.createElement("option",{value:""},"Number of Friends!"),r.a.createElement("option",{value:"1"},"1"),r.a.createElement("option",{value:"2"},"2"),r.a.createElement("option",{value:"3"},"3"),r.a.createElement("option",{value:"4"},"4")))))}}]),a}(n.Component),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).getAvatars=function(){return["https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=blue","https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=red","https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=yellow","https://avatars.dicebear.com/api/bottts/example.svg?options[colors][]=purple"]},e.updateState=function(t,a){if(t.preventDefault(),0!==a){var n=e.createPlayers(a);e.setState({isShowingAvatars:!0,players:n})}},e.createPlayers=function(t){var a=e.getAvatars(),n=[];a=e.shuffleArray(a);for(var r=0;r<t;r++)n.push({id:(r+1).toString(),img:a[r],name:"",score:0,valid:!1});return n},e.shuffleArray=function(e,t){t=t||e.length;for(var a,n,r=e.length;0!==r;)n=Math.floor(Math.random()*r),a=e[r-=1],e[r]=e[n],e[n]=a;return e.slice(0,t)},e.handleChange=function(t){var a=t.target.id-1,n=t.target.value;e.setState((function(e){e.players[a].valid=n&&0!==n.length}))},e.handleFormSubmit=function(t){t.preventDefault();var a=e.validateForm(e.state.players);if(e.props.playerInformation(e.state.players,a),a)for(var n=function(a){var n=t.target[a].id-1,r=t.target[a].value;e.setState((function(e){e.players[n].name=r}))},r=0;r<t.target.length-1;r++)n(r);else alert("Slow your roll! Enter some names first!")},e.validateForm=function(e){for(var t=0;t<e.length;t++)if(!e[t].valid)return!1;return!0},e.generatePlayers=function(){if(e.state.isShowingAvatars){var t=e.state.players;return r.a.createElement("div",{className:"playerSetupContainer"},t.map((function(t){return r.a.createElement("div",{key:t.id,className:"playerInfoInput"},r.a.createElement("img",{src:t.img,alt:""}),r.a.createElement("input",{onChange:e.handleChange,id:t.id}))})))}return r.a.createElement(r.a.Fragment,null)},e.state={players:[],isShowingAvatars:!1},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){document.querySelector(".avatarSection").scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"avatarSection"},r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"numberOfPlayersSubmit"},this.generatePlayers(),this.state.isShowingAvatars?r.a.createElement("button",{type:"submit"},"Let's Battle!"):r.a.createElement("button",{type:"button",onClick:function(t){return e.updateState(t,e.props.numberOfPlayers)}},"Double Check You Have Enough Friends!")))}}]),a}(n.Component),g=a(31),E=a(29),b=a.n(E),S=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}return e},e.questionsSubmit=function(t,a){for(var n=t,r=a,o=0;o<n.length/3;o++){for(var s=0,l=[];s<3;){var c=3*o+s;t[c].allAnswers=[].concat(Object(g.a)(t[c].incorrect_answers),[t[c].correct_answer]),t[c].allAnswers=e.shuffleArray(t[c].allAnswers),l.push(t[c]),s++}r[o].questions=l}e.setState({players:r})},e.state={players:[],category:""},e}return Object(c.a)(a,[{key:"generateQuestions",value:function(e,t){var a=this,n=e.target.value,r=3*t.length;b()({url:"https://opentdb.com/api.php",params:{amount:r,category:n,difficulty:"medium",type:"multiple"}}).then((function(e){var t=e.data.results,n=new DOMParser;t.map((function(e){e.incorrect_answers.forEach((function(t,a){var r=n.parseFromString(t,"text/html").body.textContent;e.incorrect_answers[a]=r}));var t=e.correct_answer,a=n.parseFromString(t,"text/html").body.textContent;e.correct_answer=a})),t.map((function(e){var t=e.question,a=n.parseFromString(t,"text/html").body.textContent;e.question=a})),a.questionsSubmit(t,a.props.playerInfo)}))}},{key:"componentDidMount",value:function(){document.querySelector(".categoryContainer").scrollIntoView({behavior:"smooth"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"categoryContainer"},r.a.createElement("form",{className:"categoryForm",onChange:function(t){e.generateQuestions(t,e.props.playerInfo)}},r.a.createElement("fieldset",{className:"categoryFieldset"},r.a.createElement("label",{className:"categoryLabel",htmlFor:""},"Select Category: "),r.a.createElement("select",null,r.a.createElement("option",{disabled:!0,selected:!0,className:"default"},"Select a Category"),r.a.createElement("option",{value:"9"},"General Knowledge"),r.a.createElement("option",{value:"27"},"Animals"),r.a.createElement("option",{value:"29"},"Comics"),r.a.createElement("option",{value:"11"},"Movies"),r.a.createElement("option",{value:"17"},"Science And Nature"))),0!==this.state.players.length?r.a.createElement("button",{className:"categoryName",onClick:function(t){e.props.getPlayerInformation(t,e.state.players)}},"It's Time For the Showdown!"):null))}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).getNumberOfPlayers=function(t){e.setState({numberOfPlayers:t})},e.getPlayerInformation=function(t,a){e.setState({players:t,goToCategory:a})},e.state={players:[],numberOfPlayers:0,goToCategory:!1,goToPlay:!1},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(h,{numberOfPlayers:this.getNumberOfPlayers}),r.a.createElement(d,{numberOfPlayers:this.state.numberOfPlayers,playerInformation:this.getPlayerInformation}),!0===this.state.goToCategory?r.a.createElement(S,{playerInfo:this.state.players,getPlayerInformation:this.props.getCategory}):null)}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).startQuiz=function(){n.setState({start:!0}),n.myInterval=setInterval((function(){n.setState({timer:n.state.timer-1})}),1e3)},n.state={timer:30,start:!0},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=setInterval((function(){e.setState({timer:e.state.timer-1})}),1e3);this.setState({myInterval:t})}},{key:"componentDidUpdate",value:function(){0===this.state.timer&&(this.setState({timer:30,start:!1}),this.props.stopTime(),clearInterval(this.state.myInterval))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,this.state.start?e.state.timer>=15?r.a.createElement("p",{className:"timer timerOk"},e.state.timer):e.state.timer>=10?r.a.createElement("p",{className:"timer timerWrapUp"},e.state.timer):r.a.createElement("p",{className:"timer timerDanger"},e.state.timer):"Time's Up!"))}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.playerInformation;return e.sort((function(e,t){return t.score-e.score})),r.a.createElement("section",{className:"finalResults"},r.a.createElement("div",{className:"scoreBoard"},r.a.createElement("h2",null,"Results"),r.a.createElement("div",{className:"scoreList"},r.a.createElement("ul",null,e.map((function(e,t){var a=e.name,n=e.score;return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"results"},r.a.createElement("h3",null,a),r.a.createElement("p",null,n)))})))),r.a.createElement("button",{className:"replay",onClick:this.props.handleReset},r.a.createElement(m.b,{to:"/"},"Quiz Your Friends Again!"))))}}]),a}(n.Component),C=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).componentDidMount=function(){e.setState({players:e.props.players}),document.querySelector(".gameScreen").scrollIntoView({behavior:"smooth"})},e.handleNextPlayer=function(){e.setState({cleanTheScreen:!0,currentPlayer:e.state.currentPlayer+1,answeredQuestionTracker:[!1,!1,!1]}),[document.querySelector(".answer1"),document.querySelector(".answer2"),document.querySelector(".answer3")].forEach((function(e){e.classList.toggle("parentHide")})),document.querySelector(".questionDiv").classList.toggle("questionDivHide")},e.onAnswerClicked=function(t,a,n,r){var o=t.target.parentNode;if(!e.state.answeredQuestionTracker[r]){var s=e.props.players[e.state.currentPlayer];if(n===a.correct_answer){s.score++;var l=e.state.answeredQuestionTracker;l[r]=!0,e.setState({answeredQuestionTracker:l})}}o.classList.toggle("parentHide")},e.timerFunction=function(){document.querySelector(".questionDiv").classList.toggle("questionDivHide")},e.showQuestions=function(){if(e.props.players&&e.props.players[0].questions){if(e.state.cleanTheScreen)return e.setState({cleanTheScreen:!1}),r.a.createElement(r.a.Fragment,null);var t=e.props.players[e.state.currentPlayer];return t?r.a.createElement("section",{className:"gameScreen"},r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"questionDiv"},r.a.createElement("div",{className:"turnDetails"},r.a.createElement("p",{className:"playerName"},"Player Up to Bat: ",t.name),r.a.createElement("div",{className:"timerBackground"},r.a.createElement(N,{stopTime:e.timerFunction}))),r.a.createElement("div",{className:"questionContainer"},t.questions.map((function(t,a){return r.a.createElement("div",{className:"questions"},r.a.createElement("p",{className:"questionText",key:a},"Question ".concat(a+1," : ").concat(t.question)),r.a.createElement("div",{className:"answer".concat(a+1)},t.allAnswers.map((function(n){return r.a.createElement("button",{key:a,onClick:function(r){return e.onAnswerClicked(r,t,n,a)}},n)}))))})))),r.a.createElement("div",{className:"nextButton"},r.a.createElement("button",{className:"nextPlayer",onClick:e.handleNextPlayer},"Continue")))):r.a.createElement(O,{playerInformation:e.props.players,handleReset:e.props.reset})}return r.a.createElement(r.a.Fragment,null)},e.state={cleanTheScreen:!1,currentPlayer:0,answeredQuestionTracker:[!1,!1,!1]},e}return Object(c.a)(a,[{key:"render",value:function(){return this.showQuestions()}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).updatedPlayersInformation=function(t,a){t.preventDefault(),e.setState({players:a})},e.handleReset=function(t){t.preventDefault(),e.setState({questions:{},players:[],goToPlay:!1})},e.getCategory=function(t,a){t.preventDefault(),e.setState({players:a,goToPlay:!0})},e.state={questions:{},players:[],goToPlay:!1},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(m.a,{basename:"/trivia-time"},r.a.createElement("div",{className:"App"},r.a.createElement(y,null),this.state.goToPlay?r.a.createElement(p.a,{to:"/play"}):null,r.a.createElement(p.b,{exact:!0,path:"/"},r.a.createElement(w,{getCategory:this.getCategory})),r.a.createElement(p.b,{path:"/play",render:function(t){return r.a.createElement(C,{players:e.state.players,reset:e.handleReset})}}),r.a.createElement(p.b,{render:function(){return r.a.createElement(p.a,{to:{pathname:"/"}})}})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.153245cd.chunk.js.map