var main = function(){
    $("#button1").hover(
        function() { $("#button1").addClass('moveMous')},
        function() { $("#button1").removeClass('moveMous')}
    );
    
    $('#button1').click(function(){
        
        var sum = $("input[name=number1]").val();
        var vat = $("input[name=number2]").val();
        var nonNds = sum / (1 + vat / 100);
        var nds = sum - nonNds;
        $('.result').prepend("<p>Сумма без НДС "+nonNds.toFixed(2)+"</p>");
        $('.result').prepend("<p>Сумма НДС "+nds.toFixed(2)+"</p>");
        
    });
    $("#button2").hover(
        function() { $("#button2").addClass('moveMous')},
        function() { $("#button2").removeClass('moveMous')}
    );
    $('#button2').click(function(){
        var sum = $("input[name=number1]").val();
        var vat = $("input[name=number2]").val();
        var sumNds = sum * (1 + vat / 100);
        var nds = sumNds - sum;
        $('.result').prepend("<p>Сумма c НДС "+sumNds.toFixed(2)+"</p>");
        $('.result').prepend("<p>Сумма НДС "+nds.toFixed(2)+"</p>");
    });
    
}
$(document).ready(main);