# 🆔 Guia de IDs - Referência Rápida

Este arquivo lista todos os IDs dos elementos das páginas para facilitar remoção/edição.

## Como Usar

1. **Encontrar um ID:** Inspecione o elemento no navegador (F12) ou consulte este arquivo
2. **Remover/Editar:** Me diga: "Remova o `card-index-03`" ou "Edite o `sec-index-02`"

---

## 📄 index.mdx (Página Inicial)

| ID | Tipo | Descrição |
|----|------|-----------|
| `alert-index-01` | Alert | Recomendação estratégica (Quick Wins) |
| `sec-index-01` | Heading | Seção "Números-Chave do Projeto" |
| `section-index-01` | Div | Container dos 4 cards de métricas |
| `card-index-01` | Card | "31 Oportunidades Identificadas" |
| `card-index-02` | Card | "9 Quick Wins (P0)" |
| `card-index-03` | Card | "+50-80% Potencial de Conversão" |
| `card-index-04` | Card | "2-4 sem Timeline P0" |
| `sec-index-02` | Heading | Seção "Sobre o Projeto" |
| `sec-index-03` | Heading | Seção "Principais Insights" |
| `section-index-02` | Div | Container dos 2 cards de insights |
| `card-index-05` | Card | Card "Landing Page" (problemas/soluções) |
| `card-index-06` | Card | Card "Gestão de Pagamento" (problemas/soluções) |
| `sec-index-04` | Heading | Seção "Tecnologias" |
| `sec-index-05` | Heading | Seção "Navegação" |

---

## 📄 getting-started.mdx

*(Em breve - posso adicionar IDs se precisar)*

---

## 📄 ui-kit.mdx

*(Em breve - posso adicionar IDs se precisar)*

---

## 📄 test-components.mdx

*(Em breve - posso adicionar IDs se precisar)*

---

## 💡 Exemplos de Uso

### Remover um elemento
```
Você: "Remova o card-index-03"
Eu: *Remove o card de conversão*
```

### Editar conteúdo
```
Você: "Edite o alert-index-01 para dizer X"
Eu: *Atualiza o texto do alert*
```

### Remover seção inteira
```
Você: "Remova a seção sec-index-04 (Tecnologias)"
Eu: *Remove a seção inteira com heading e conteúdo*
```

---

## 🔍 Como Inspecionar IDs no Navegador

1. Abra a página (`npm run dev`)
2. Clique com botão direito no elemento → **Inspecionar**
3. No DevTools, procure por `id="xxx"` na tag HTML
4. Copie o ID e me passe!

---

**Última atualização:** Implementado na página `index.mdx`. Outras páginas podem receber IDs sob demanda.
