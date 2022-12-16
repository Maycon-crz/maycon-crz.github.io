$(".maisInformacoes").click(()=>{
    const linha = $(this).val();
    $("#"+linha).toggle();
})