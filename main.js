$(document).ready(function(){
    $('#adicionar-tarefa').click(function() {
        $('form').slideDown();
    });

    $('#cancelar').click(function(event){
        event.preventDefault();
        $('form').slideUp();
    });

    $('#enviar').click(function(event){
        event.preventDefault();
        const tarefaTexto = $('#texto').val();
        if (tarefaTexto) {
            $('#lista-tarefas').append(`
                <li>
                    <span class="tarefa-texto">${tarefaTexto}</span>
                    <button class="excluir-tarefa">Excluir</button>
                </li>
            `);
            $('#texto').val('');
        }
    });

    // Excluir a tarefa
    $('#lista-tarefas').on('click', '.excluir-tarefa', function() {
        $(this).parent().remove();
    });

    // Riscar a tarefa
    $('#lista-tarefas').on('click', '.tarefa-texto', function() {
        $(this).toggleClass('completa');
    });
});
