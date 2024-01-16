# LifeCycle
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
- chamado quando remove um componetne da tela
- varios observables podem estar sendo observados, se não cancelar o angular ficara escutando e consumindo recursos de memória
  - Chamado **Memory leaky**
# Comunicação entre componentes
Comunicação de filho pra pai e de pai pra filho

## @Output()
- Comunicação de filho para pai

## @Input()
- Comunicação de pai para filho
