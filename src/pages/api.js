var $ = require('jquery');
var api_base_url = 'http://185.201.8.164:3001/v1/';
// var api_base_url = 'https://private.kintis.id/api/v1/';
const jquery = window.$;

module.exports = {

	postNoAuth(url, data) {
		var ajax = fetch(api_base_url+url,{
			headers: {
		        "Content-Type": "application/json",
		    },
			method: 'POST',
			body: data
		})

		return ajax
	},

	get(url) {
		var ajax = fetch(api_base_url+url,{
			headers: {
		        "Accept": "application/json",
		        "Authorization": localStorage.token 
		    },
			method: 'GET'
		})

		return ajax
    },
    
	getNoAuth(url) {
		var ajax = fetch(api_base_url+url,{
			headers: {
		        "Accept": "application/json"
		    },
			method: 'GET'
		})

		return ajax
	},

	post(url, data) {
		var ajax = fetch(api_base_url+url,{
			headers: {
		        "Accept": "application/json",
		        "Content-Type": "application/json",
		        "Authorization": localStorage.token 
		    },
			method: 'POST',
			body: data
		})

		return ajax
	},

	delete(url, data) {
		var ajax = fetch(api_base_url+url,{
			headers: {
		        "Accept": "application/json",
		        "Content-Type": "application/json",
		        "Authorization": localStorage.token 
		    },
			method: 'DELETE',
			body: data
		})

		return ajax
	},

	put(url, data) {
		var ajax = fetch(api_base_url+url,{
			headers: {
		        "Accept": "application/json",
		        "Content-Type": "application/json",
		        "Authorization": localStorage.token 
		    },
			method: 'PUT',
			body: data
		})

		return ajax
    },
    
	notifMessage(message,type){
		jquery.notify({
			// options
			message: message
		},{
			// settings
			type: type,
			animate: {
				enter: 'animated fadeInDown',
				exit: 'animated fadeOutUp'
			}
		});
	}
}
