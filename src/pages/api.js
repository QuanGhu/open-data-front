var $ = require('jquery');
require('datatables.net');
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

    loadDataTable(component, columns, columnDefs, api, table='#table-data'){
		$.fn.dataTable.ext.errMode = 'none';
	  	var dt = $(table).on( 'error.dt', function ( e, settings, techNote, message ) {
				console.log( 'An error has been reported by DataTables: ', message );
			}).DataTable({
	  		columnDefs: columnDefs,
	  		destroy: true,
		    ajax: {
		        url: api_base_url+api,
		        type: 'GET',
                dataType: 'json',
		        beforeSend: function(xhr){
		            xhr.setRequestHeader("Authorization", localStorage.token);
		        }
		    },
		    fixedHeader: {
	            header: true,
	            footer: true
	        },
			"columns": columns
		});
		$(table+' tbody').on( 'click', 'td button', function () {
			var parent = $(this).parent().get( 0 );
			var parent1 = $(parent).parent().get( 0 );
			var row = dt.row(parent1);

		    if($(this).hasClass('delete')) {
				component.delete(row.data());
			}else if($(this).hasClass('edit')) {
				component.edit(row.data());
			}

		});
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
