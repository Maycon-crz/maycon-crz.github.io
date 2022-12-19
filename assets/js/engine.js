$(".maisInformacoes").click(function (){    
    const linha = $(this).val();    
    $("#"+linha).toggle();
});