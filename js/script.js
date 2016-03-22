$(document).ready(function(){

	$("#ticker-search").submit(function(){
		
		var ticker = $("#symbol").val();
		var url = 'http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20("' +
		 ticker + '")%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json';
		// alert(ticker);
		// console.log(url);
		$.getJSON(url,function(data){
			// console.log(yahooResult.query.results.quote);
		var stockInfo = data.query.results.quote;

		// console.log(stockInfo.Bid);
		var symbol = stockInfo.Symbol;
		var companyName = stockInfo.Name;
		var askPrice = stockInfo.Ask;
		var dailyChange = stockInfo.Change;
		var dayHigh = stockInfo.DaysHigh;

		var newHTML = "<tr><td>" + symbol + "</td>";
		 newHTML += "<td>" + companyName + "</td>";
		 newHTML += "<td>" + askPrice + "</td>";
		 newHTML += "<td>" + dailyChange + "</td>";
		 newHTML += "<td>" + dayHigh + "</td></tr>";

		 $("#ticker-body").html(newHTML);

		});
		event.preventDefault();
	});







});