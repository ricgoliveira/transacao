function ControleTransacaoController($scope) {
    $scope.transacao = [];
    $scope.form = '';
    $scope.form = [ {
        posicao: ''
    }];
    $scope.transacao.list = [
        {id: '0',sinal:'-', tipoTransacao: "0",valor:100,nomeMercadoria:'Guarda roupa'},
        {id: '1',sinal:'+', tipoTransacao: "1",valor:300,nomeMercadoria:'Fogão'},
        {id: '2',sinal:'-', tipoTransacao: "0",valor:400,nomeMercadoria:'Máquina de Lavar'}       
    ];     
   
    $scope.getValorTotal = () => {
        let total = parseFloat(0);
        $scope.transacao.list.forEach( (item) => {           
            if(item.tipoTransacao == "0"){
                total += parseFloat(item.valor);
            }else{
                total -= parseFloat(item.valor);
            }
        });
            
        if(total >= 0){
            $scope.form.posicao =  'LUCRO';  
        }else{
            $scope.form.posicao =  'PREJUIZO';  
        }
      
        return total;
    };
    $scope.getValorTotal();
    $scope.salvar = () => {
        let sinal = ($scope.transacao.tipoTransacao == 0) ? '-' : '+';
        let transacao = {          
            sinal:           sinal
            , tipoTransacao: $scope.form.transacao.tipoTransacao
            ,valor:          $scope.form.transacao.valor
            ,nomeMercadoria: $scope.form.transacao.nomeMercadoria
        };
        $scope.transacao.list.unshift(transacao);
        $scope.getValorTotal();     
        $scope.form.transacao = [];
        alert("Transação incluida com sucesso");
    };

}

function isEmpty(obj) {
    for(var prop in obj) {
      if(obj.hasOwnProperty(prop))
      return false;
    }
    return true;
}



