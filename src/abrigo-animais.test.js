import { AbrigoAnimais } from './abrigo-animais.js';

describe('AbrigoAnimais', () => {
  const abrigo = new AbrigoAnimais();

  it('Deve retornar adoção válida com Rex para pessoa 1 e Fofo no abrigo', () => {
    const resultado = abrigo.encontraPessoas('RATO,BOLA', 'RATO,NOVELO', 'Rex,Fofo');
    expect(resultado).toEqual({
      lista: ['Fofo - abrigo', 'Rex - pessoa 1']
    });
  });

  it('Deve retornar erro para animal inválido', () => {
    const resultado = abrigo.encontraPessoas('CAIXA,RATO', 'RATO,BOLA', 'Lulu');
    expect(resultado).toEqual({
      erro: 'Animal inválido'
    });
  });

  it('Deve retornar erro para brinquedo inválido', () => {
    const resultado = abrigo.encontraPessoas('FOICE,BOLA', 'LASER,RATO', 'Mimi');
    expect(resultado).toEqual({
      erro: 'Brinquedo inválido'
    });
  });

  it('Deve respeitar limite de 3 animais por pessoa', () => {
    const resultado = abrigo.encontraPessoas(
      'RATO,BOLA,LASER,CAIXA,NOVELO,SKATE',
      'RATO,BOLA,LASER,CAIXA,NOVELO,SKATE',
      'Rex,Mimi,Fofo,Zero,Bola,Bebe,Loco'
    );
    expect(resultado).toEqual({
      lista: [
        'Bebe - pessoa 2',
        'Bola - pessoa 1',
        'Fofo - abrigo',
        'Loco - abrigo',
        'Mimi - pessoa 1',
        'Rex - pessoa 1',
        'Zero - pessoa 2'
      ]
    });
  });

  it('Loco só pode ser adotado se outro animal for adotado', () => {
    const resultado = abrigo.encontraPessoas('SKATE,RATO', 'SKATE,RATO', 'Loco');
    expect(resultado).toEqual({
      lista: ['Loco - abrigo']
    });
  });

  it('Loco pode ser adotado por qualquer um se outro animal já foi adotado', () => {
    const resultado = abrigo.encontraPessoas(
      'RATO,BOLA,SKATE',
      'RATO,BOLA,SKATE',
      'Rex,Loco'
    );
    expect(resultado).toEqual({
      lista: ['Loco - pessoa 2', 'Rex - pessoa 1']
    });
  });
});
