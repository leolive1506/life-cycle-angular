# [LifeCycle](https://angular.io/guide/lifecycle-hooks)
- O que é ciclo de vida
- angular instancia componente e mostra ele
  - a vida acontece durante o uso
  - morre quando a instancia é destruida
  - em cada um desses momentos é chamado algun metodo
    - chamado **hooks**

# 1) onChanges
- **quando há entrada de dados**
- quando tem propriedade de entrada, prepara as informações para serem renderizadas e assim que for renderizada chama OnInit
- chamado sempre que houver mudanças nas propriedades de entrada de dados
```tsx
export class ItemComponent implements OnInit, OnChanges {
  constructor() { }
  ngOnInit(): void { }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
}
```

# 2) onInit
- chamado quando componente está com suas **propriedades carregadas** e pouco depois de ser exibido em tela.
- chamado apenas uma vez

# 3) DoCheck
- semelhante onChange
  - porém onChange detecta somente alterações no componente de entrada
- verifica qualquer alteração no componente
  - propriedade alterada, chamada função, alterações componente filho
- prejudica o uso -> quantidade de vezes chamada
  - pode prejudicar performace

# 4) OnDestoy
- cancelar assinatura de inscrições do Observable para liberar memória.
```ts
ngOnDestroy() {
 if (this.userSub) {
   this.userSub.unsubscribe();
 }
 this.authService.logout();
}
```
- chamado quando remove um componetne da tela
- varios observables podem estar sendo observados, se não cancelar o angular ficara escutando e consumindo recursos de memória
  - Chamado **Memory leaky**
## Memory leaky
- vazamento causado pelo mal gerenciamento de memória
  - não é limpa quando não é mais necessária
- pode causar mal funcionamento, lentidão e encerramento do app
- dificil de depurar e detectar

### Como resolver
Sempre que um componente realizar um Observable, quando este componente for retirado do DOM ele realize a desinscrição deste Observable

# Comunicação entre componentes
Comunicação de filho pra pai e de pai pra filho

## @Output()
- Comunicação de filho para pai

## @Input()
- Comunicação de pai para filho

# Outros hooks
## AfterViewInit
- Acionado após a visualização do componente ser totalmente inicializada
- Util quanto a ações relacionadas a visualiação
  - manipular DOM ou integrações com bibliotecas externas
## AfterViewChecked
- Acionado após cada verificação de visualização do componente, permitindo ações adicionais nesse momento do ciclo de vida
## AfterContentInit
- Excetado após a inicialização do conteudo do componente
- util quando operações dependem do conteúdo projetado no componente
## AfterContentChecked
- Ativado após a verificação do conteudo do componente
