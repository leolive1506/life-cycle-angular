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

# Comunicação entre componentes
Comunicação de filho pra pai e de pai pra filho

## @Output()
- Comunicação de filho para pai

## @Input()
- Comunicação de pai para filho
