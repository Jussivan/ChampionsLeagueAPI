# ChampionsLeagueAPI

API completa e eficiente para acessar e manipular dados da Champions League, construída com Node.js e Express.

## Funcionalidades

- Consulta, criação, atualização e remoção de equipes, jogadores e partidas
- Consulta de classificações (standings)
- Estrutura RESTful pronta para integração com interfaces de usuário

## Instalação

```bash
git clone https://github.com/seuusuario/ChampionsLeagueAPI.git
cd ChampionsLeagueAPI
npm install
```

## Uso

```bash
node index.js
```

A API estará disponível em `http://localhost:3000`.

## Endpoints principais

- `GET /teams` — Lista todas as equipes
- `GET /players` — Lista todos os jogadores
- `GET /matches` — Lista todas as partidas
- `GET /standings` — Mostra a classificação atual

Também há suporte para `POST`, `PUT` e `DELETE` nos recursos acima.

## Exemplo de requisição

```bash
curl http://localhost:3000/teams
```

## Estrutura de pastas

- `routes/` — Rotas da API
- `controllers/` — Lógica de manipulação dos dados

## Observações

- Os dados são mantidos em memória para fins de demonstração.
- Para produção, recomenda-se integrar com um banco de dados real.

---