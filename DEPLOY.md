# 🚀 Deploy no Vercel - Guia Rápido

## Passo a Passo (5 minutos)

### 1️⃣ Acesse o Vercel
Abra: **https://vercel.com/signup**

- Clique em "Continue with GitHub"
- Faça login com sua conta GitHub
- Autorize o Vercel a acessar seus repositórios

### 2️⃣ Importe o Projeto
- No dashboard do Vercel, clique em **"Add New"** → **"Project"**
- Procure por: `thaisnsouzaproductdesigner/Meli`
- Clique em **"Import"**

### 3️⃣ Configure o Projeto
Na tela de configuração:

**Framework Preset**: Next.js (detectado automaticamente) ✅
**Root Directory**: `./` (deixe como está)
**Build Command**: `npm run build` (já preenchido)
**Output Directory**: `.next` (já preenchido)
**Install Command**: `npm install` (já preenchido)

**IMPORTANTE**: Em "Git Branch", selecione:
```
claude/nextra-product-design-docs-kJcl5
```

### 4️⃣ Deploy
- Clique no botão azul **"Deploy"**
- Aguarde ~2 minutos (você verá o progresso em tempo real)
- ✅ Pronto! Você receberá uma URL tipo: `https://meli-xxxx.vercel.app`

### 5️⃣ Acesse sua Documentação
Clique na URL gerada ou copie e cole no navegador.

---

## 🎯 Resultado Final

Você terá:
- ✅ URL pública compartilhável
- ✅ HTTPS automático
- ✅ Deploy automático a cada push na branch
- ✅ Dark mode funcionando
- ✅ Animações e interatividade
- ✅ Performance otimizada

---

## 🔄 Próximas Atualizações

Sempre que você fizer alterações:
```bash
git add .
git commit -m "sua mensagem"
git push origin claude/nextra-product-design-docs-kJcl5
```

O Vercel atualiza automaticamente em ~1 minuto! 🚀

---

## ⚠️ Problemas?

- **Build falhou?** Verifique se todas as dependências foram instaladas
- **404 em alguma página?** Limpe o cache do Vercel e faça redeploy
- **Domínio customizado?** Configure em Settings → Domains no Vercel

---

**Precisa de ajuda? Me pergunte!** 💬
