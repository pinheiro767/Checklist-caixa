# Jornada MIP — Checklist do Seguro Habitacional

Aplicativo Flask responsivo para organizar os documentos de um pedido de análise da cobertura MIP por invalidez permanente.

## Recursos

- Checklist interativo com salvamento no navegador
- Progresso geral e por etapas
- Filtro de itens concluídos e pendentes
- Campo de anotações
- Alto contraste e aumento de fonte
- Impressão ou salvamento em PDF
- Layout responsivo para celular
- Nenhum documento médico é enviado ou armazenado no servidor

## Executar localmente

```bash
python -m venv .venv
```

No Windows:

```bash
.venv\Scripts\activate
```

No Linux/macOS:

```bash
source .venv/bin/activate
```

Depois:

```bash
pip install -r requirements.txt
python app.py
```

Abra `http://127.0.0.1:5000`.

## Subir no GitHub

1. Crie um repositório.
2. Envie todos os arquivos desta pasta.
3. Não envie CPF, endereço completo, exames, laudos ou prontuários.
4. Confirme que `app.py`, `requirements.txt` e `render.yaml` estão na raiz.

## Publicar no Render

1. Entre no Render e escolha **New Web Service**.
2. Conecte o repositório do GitHub.
3. O arquivo `render.yaml` já contém a configuração.
4. Caso configure manualmente:
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn app:app`
5. Publique o serviço.

## Privacidade

Este projeto salva o checklist e as anotações somente no `localStorage` do navegador. Não inclua documentos pessoais ou médicos no código público.
