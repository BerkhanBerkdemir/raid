(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),s=a(3),l=a.n(s),r=(a(14),a(4)),m=a(5),o=a(7),c=a(6),u=a(8),d=a(1),h=(a(17),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(o.a)(this,Object(c.a)(t).call(this))).state={number_of_disk:"",disk_size:"",raid_type:0},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e}return Object(u.a)(t,e),Object(m.a)(t,[{key:"handleChange",value:function(e){var t={};t[e.target.id]=parseFloat(e.target.value),this.setState(t)}},{key:"handleSubmit",value:function(e){var t=0;if(this.state.number_of_disk>=2)switch(this.state.raid_type){case 0:t=this.state.disk_size*this.state.number_of_disk;break;case 1:t=this.state.disk_size;break;case 5:t=this.number_of_disk>=4?this.state.disk_size*(this.state.number_of_disk-1):"RAID 5 must have at least 4 disks";break;case 6:t=this.number_of_disk>=5?this.state.disk_size*(this.state.number_of_disk-2):"RAID 6 must have at least 5 disks";break;default:t="Error?!"}else t="You must have 2 disks for building an RAID array";window.alert("".concat(this.state.disk_size," GB ").concat(this.state.number_of_disk," disks on RAID ").concat(this.state.raid_type,": ").concat(t," GB")),e.preventDefault()}},{key:"render",value:function(){return n.a.createElement("header",null,n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement("label",{htmlFor:"number_of_disk",className:"siimple-label"},"Number of disk")," ",n.a.createElement("br",null),n.a.createElement("input",{type:"number",id:"number_of_disk",className:"siimple-input siimple-input--fluid",min:"2",value:this.state.number_of_disk,onChange:this.handleChange}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"disk_size",className:"siimple-label"},"Disk size")," ",n.a.createElement("br",null),n.a.createElement("input",{type:"number",id:"disk_size",className:"siimple-input siimple-input--fluid",min:"1",value:this.state.disk_size,onChange:this.handleChange}),n.a.createElement("br",null),n.a.createElement("label",{htmlFor:"number_of_disk",className:"siimple-label"},"Number of disk")," ",n.a.createElement("br",null),n.a.createElement("select",{id:"raid_type",className:"siimple-select siimple-select--fluid",value:this.state.raid_type,onChange:this.handleChange},n.a.createElement("option",{value:"0",selected:!0},"RAID 0"),n.a.createElement("option",{value:"1"},"RAID 1"),n.a.createElement("option",{value:"5"},"RAID 5"),n.a.createElement("option",{value:"6"},"RAID 6"))," ",n.a.createElement("br",null)," ",n.a.createElement("br",null),n.a.createElement("input",{type:"submit",className:"siimple-btn siimple-btn--primary"}),n.a.createElement("input",{type:"reset",className:"siimple-btn"})))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.8c90961f.chunk.js.map