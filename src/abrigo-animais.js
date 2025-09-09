class AbrigoAnimais {
  encontraPessoas(brinquedos1, brinquedos2, ordemAnimais) {
    try {
      const brinquedosPessoa1 = brinquedos1.split(',').map(b => b.trim().toUpperCase());
      const brinquedosPessoa2 = brinquedos2.split(',').map(b => b.trim().toUpperCase());
      const nomesAnimais = ordemAnimais.split(',').map(a => a.trim());

      const animais = {
        Rex:   { tipo: 'cão', brinquedos: ['RATO', 'BOLA'] },
        Mimi:  { tipo: 'gato', brinquedos: ['BOLA', 'LASER'] },
        Fofo:  { tipo: 'gato', brinquedos: ['BOLA', 'RATO', 'LASER'] },
        Zero:  { tipo: 'gato', brinquedos: ['RATO', 'BOLA'] },
        Bola:  { tipo: 'cão', brinquedos: ['CAIXA', 'NOVELO'] },
        Bebe:  { tipo: 'cão', brinquedos: ['LASER', 'RATO', 'BOLA'] },
        Loco:  { tipo: 'jabuti', brinquedos: ['SKATE', 'RATO'], ordemImporta: false },
      };

      const brinquedosValidos = new Set(['RATO', 'BOLA', 'LASER', 'CAIXA', 'NOVELO', 'SKATE']);

      const animaisAdotados = {};
      const resultado = [];
      const adotadosPorPessoa = { 1: [], 2: [] };

      // Validações iniciais
      const nomeSet = new Set();
      for (const nome of nomesAnimais) {
        if (!animais[nome] || nomeSet.has(nome)) return { erro: 'Animal inválido' };
        nomeSet.add(nome);
      }

      const todosBrinquedos = [...brinquedosPessoa1, ...brinquedosPessoa2];
      const brinquedoSet = new Set();
      for (const brinquedo of todosBrinquedos) {
        if (!brinquedosValidos.has(brinquedo) || brinquedoSet.has(brinquedo)) {
          return { erro: 'Brinquedo inválido' };
        }
        brinquedoSet.add(brinquedo);
      }

      function atendeOrdem(preferidos, brinquedos) {
        let i = 0;
        for (const b of brinquedos) {
          if (b === preferidos[i]) i++;
          if (i === preferidos.length) return true;
        }
        return i === preferidos.length;
      }

      for (const nome of nomesAnimais) {
        const animal = animais[nome];
        const prefs = animal.brinquedos;
        const tipo = animal.tipo;

        let pessoa1Atende, pessoa2Atende;

        if (nome === 'Loco') {
          // Loco só precisa de outro animal adotado
          const algumOutroAdotado = Object.keys(animaisAdotados).length > 0;
          pessoa1Atende = pessoa2Atende = algumOutroAdotado;
        } else {
          pessoa1Atende = atendeOrdem(prefs, brinquedosPessoa1);
          pessoa2Atende = atendeOrdem(prefs, brinquedosPessoa2);
        }

        // Gatos não dividem seus brinquedos
        if (tipo === 'gato') {
          if (pessoa1Atende && pessoa2Atende) {
            resultado.push(`${nome} - abrigo`);
            continue;
          }
        }

        if (pessoa1Atende && !pessoa2Atende && adotadosPorPessoa[1].length < 3) {
          adotadosPorPessoa[1].push(nome);
          animaisAdotados[nome] = 1;
        } else if (!pessoa1Atende && pessoa2Atende && adotadosPorPessoa[2].length < 3) {
          adotadosPorPessoa[2].push(nome);
          animaisAdotados[nome] = 2;
        } else if (pessoa1Atende && pessoa2Atende) {
          resultado.push(`${nome} - abrigo`);
        } else {
          resultado.push(`${nome} - abrigo`);
        }
      }

      // Prepara lista final com quem ficou com quem
      for (const [nome, pessoa] of Object.entries(animaisAdotados)) {
        resultado.push(`${nome} - pessoa ${pessoa}`);
      }

      return { lista: resultado.sort((a, b) => a.localeCompare(b)) };

    } catch (e) {
      return { erro: 'Erro inesperado' };
    }
  }
}

export { AbrigoAnimais as AbrigoAnimais };
