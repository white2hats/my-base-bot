# 🤖 Discord Bot Base — Slash Command `/ping`

[![Node.js](https://img.shields.io/badge/Node.js-v18+-green)](https://nodejs.org/) 
[![Status](https://img.shields.io/badge/status-beta-yellow)] 

Base simples de **bot de Discord em Node.js**.  
Inclui apenas o comando **/ping** como exemplo, perfeito para servir de base e expandir com mais funcionalidades.

---

## ⚙️ Configuração

### 1️⃣ Crie seu bot no Discord

1. Acesse o [Discord Developer Portal](https://discord.com/developers/applications).  
2. Clique em **“New Application”** e dê um nome ao seu bot.  
3. Vá em **Bot → Add Bot → Yes, do it!**  
4. Copie o **token do bot**. Ele será usado no `config.json`.

### 2️⃣ Edite o `config.json`

Substitua `"TOKEN BOT"` pelo token do seu bot:

```json
{
  "token": "SEU_TOKEN_AQUI"
}
````

> ⚠️ **Importante:** Nunca compartilhe seu token publicamente. Quem tiver acesso pode controlar seu bot.

---

## 💻 Requisitos

* [Node.js](https://nodejs.org/) (versão **18** ou superior)
* NPM (já vem com Node.js)

---

## 🚀 Instalação e execução

1. Abra o terminal na pasta do projeto.
2. Instale as dependências:

```bash
npm install
```

3. Execute o bot:

```bash
node main.js
```

4. O bot ficará online no seu servidor do Discord.

---

## 📝 Comandos disponíveis

| Comando | Descrição                                  |
| ------- | ------------------------------------------ |
| `/ping` | Responde com `"Pong!"` e tempo de resposta |

> Você pode adicionar novos **Slash Commands** seguindo a mesma lógica.

---

## 🔗 Links importantes

* 🌐 **Meu Portfólio:** [https://whitex-portfolio.netlify.app/#inicio](https://whitex-portfolio.netlify.app/#inicio)
* 💬 **Servidor Hyper Apps:** [https://discord.gg/jxwK6ZVCDr](https://discord.gg/jxwK6ZVCDr)
* 👤 **Discord:** `whitex0424`

---

## ⚠️ Aviso

> **Não ofereço suporte direto** para este projeto.
> Use por sua conta e risco. Esta ferramenta é **educacional e demonstrativa**.

---

## 🧾 Licença

Este projeto é de uso **livre e educacional**.
Créditos devem ser mantidos ao autor original (**whitex0424**).
