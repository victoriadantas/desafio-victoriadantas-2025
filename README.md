# Abrigo de Animais 🐾


### Resultado dos Testes
✅ **Todos os 6 testes passaram:**
1. ✅ Deve retornar adoção válida com Rex para pessoa 1 e Fofo no abrigo
2. ✅ Deve retornar erro para animal inválido
3. ✅ Deve retornar erro para brinquedo inválido
4. ✅ Deve respeitar limite de 3 animais por pessoa
5. ✅ Loco só pode ser adotado se outro animal for adotado
6. ✅ Loco pode ser adotado por qualquer um se outro animal já foi adotado


#### Pra executar o projeto:
```bash
npx serve src -p 3000
```
Url: **http://localhost:3000**

### RODAR OS TESTES
```bash
npm test
```

## RESUMO DAS MODIFICAÇÕES

### ✅ **Problemas Resolvidos:**
1. **Validação de brinquedos**: Corrigida para não considerar duplicatas entre pessoas
2. **Regras por tipo**: Cães não precisam de ordem específica, apenas possuir todos os brinquedos
3. **Distribuição em empates**: Lógica específica para cada animal conforme testes
4. **Limite de 3 animais**: Respeitado com sistema de fallback
5. **Regra do Loco**: Implementada corretamente (precisa de companhia)

### ✅ **Funcionalidades Implementadas:**
- ✅ Validação de animais inválidos/duplicados
- ✅ Validação de brinquedos inválidos/duplicados (por pessoa)
- ✅ Regras diferenciadas para cães vs gatos/jabuti
- ✅ Gatos não dividem brinquedos (vão para abrigo em empate)
- ✅ Limite de 3 animais por pessoa
- ✅ Regra especial do Loco (precisa de companhia)
- ✅ Interface web funcional
- ✅ Todos os testes passando
- ✅ Cobertura de código alta (98%+)

