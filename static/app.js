const groups = [
  {
    title: "Abrir o aviso de sinistro MIP",
    description: "Formalize o pedido antes de terminar toda a coleta documental.",
    items: [
      "Ligar para o canal indicado no aplicativo: 0800 274 1000",
      "Pedir abertura formal do sinistro MIP por invalidez permanente",
      "Anotar número do protocolo e número do sinistro",
      "Confirmar o nome da seguradora e o número da apólice",
      "Solicitar a lista oficial de documentos e os formulários",
      "Solicitar as condições gerais aplicáveis ao contrato"
    ]
  },
  {
    title: "Documentos pessoais",
    description: "Use apenas nos canais oficiais; não publique documentos sensíveis.",
    items: [
      "RG de Vera",
      "CPF de Vera",
      "Comprovante de residência atualizado",
      "Certidão de estado civil, se solicitada",
      "Cartão Nacional de Saúde, se solicitado",
      "Procuração e documentos de Cláudia, caso represente Vera"
    ]
  },
  {
    title: "Financiamento e seguro",
    description: "Demonstre o vínculo, a cobertura e a participação segurada.",
    items: [
      "Contrato completo do financiamento",
      "Extrato atualizado do contrato",
      "Comprovante da participação de Vera no financiamento",
      "Certificado, proposta ou apólice do seguro habitacional",
      "Condições gerais do seguro",
      "Declaração de saúde da contratação, caso exista",
      "Comprovantes ou extratos das parcelas do seguro"
    ]
  },
  {
    title: "Prontuários das cirurgias",
    description: "Solicite cópia integral aos hospitais envolvidos.",
    items: [
      "Prontuário da artroplastia de quadril",
      "Relatório e descrição da cirurgia",
      "Ficha anestésica e relatório de alta",
      "Prontuários das cirurgias posteriores",
      "Prontuário da última cirurgia, realizada há cerca de quatro anos",
      "Registros das complicações e consultas de retorno",
      "Documentos de fisioterapia e reabilitação"
    ]
  },
  {
    title: "Infecção e abscesso",
    description: "Documente a intercorrência na região da prótese.",
    items: [
      "Relatório da internação de dezembro",
      "Relatório da retirada ou drenagem do abscesso",
      "Descrição cirúrgica e relatório de alta",
      "Exames laboratoriais e de imagem",
      "Cultura bacteriana e antibiograma, se realizados",
      "Parecer do infectologista",
      "Prescrição dos antibióticos",
      "Registro sobre eventual infecção relacionada à prótese"
    ]
  },
  {
    title: "Home Care",
    description: "Peça à empresa, ao plano de saúde ou ao hospital que encaminhou.",
    items: [
      "Relatório de admissão no Home Care",
      "Prontuário completo do atendimento domiciliar",
      "Prescrição médica do antibiótico",
      "Nome, dose e período da medicação",
      "Registros de administração do antibiótico",
      "Evoluções de enfermagem e médicas",
      "Registros de curativos e intercorrências",
      "Relatório de alta do Home Care"
    ]
  },
  {
    title: "Laudo do ortopedista",
    description: "O laudo deve descrever sequelas e limitações, não apenas o diagnóstico.",
    items: [
      "Diagnóstico e CID",
      "Histórico das cirurgias e complicações",
      "Estado atual da prótese",
      "Avaliação da musculatura estabilizadora do quadril",
      "Força, mobilidade, dor e instabilidade",
      "Necessidade de andador e risco de quedas",
      "Prognóstico e possibilidade de recuperação",
      "Descrição da incapacidade funcional e laboral"
    ]
  },
  {
    title: "Laudo do neurologista",
    description: "Essencial quando houver suspeita ou confirmação de lesão do nervo ciático.",
    items: [
      "Diagnóstico neurológico e CID",
      "Localização e lado da lesão",
      "Déficit motor, sensitivo e reflexos",
      "Dor neuropática e atrofia, se presentes",
      "Alteração da marcha e necessidade de andador",
      "Evolução progressiva, estável ou irreversível",
      "Prognóstico e possibilidade de recuperação",
      "Repercussão nas atividades diárias e no trabalho"
    ]
  },
  {
    title: "Exames complementares",
    description: "Anexe os exames citados pelos médicos nos laudos.",
    items: [
      "Radiografias do quadril e da prótese",
      "Tomografias",
      "Ressonâncias",
      "Eletroneuromiografia, se indicada",
      "Exames laboratoriais da infecção",
      "Cultura e antibiograma",
      "Avaliações de força, mobilidade, equilíbrio ou marcha"
    ]
  },
  {
    title: "Atividade profissional",
    description: "Ajude a demonstrar o trabalho habitual exercido por Vera.",
    items: [
      "Cadastro de revendedora de cosméticos, se existir",
      "Notas, pedidos, recibos ou comprovantes de compras",
      "Inscrição como MEI ou contribuições ao INSS, se houver",
      "Declarações de antigos clientes",
      "Documentos que indiquem quando ela deixou de trabalhar",
      "Descrição das tarefas: cozinhar, ficar em pé, carregar e entregar produtos"
    ]
  },
  {
    title: "Limitações atuais",
    description: "Registre a repercussão concreta do quadro na vida diária.",
    items: [
      "Declaração sobre o uso de andador",
      "Distância aproximada que consegue caminhar",
      "Tempo que consegue permanecer em pé",
      "Dificuldade para subir escadas ou sair sozinha",
      "Necessidade de ajuda para atividades diárias",
      "Histórico de quedas, se houver",
      "Atividades profissionais que deixou de realizar"
    ]
  },
  {
    title: "Protocolar e acompanhar",
    description: "Mantenha prova de tudo o que foi enviado.",
    items: [
      "Preencher os formulários da seguradora sem rasuras",
      "Digitalizar os documentos em PDF legível",
      "Criar uma relação numerada dos anexos",
      "Guardar comprovante de envio e protocolo",
      "Anotar datas, horários e nomes dos atendentes",
      "Responder pedidos de complementação",
      "Comparecer à perícia, se marcada",
      "Solicitar a decisão final por escrito"
    ]
  }
];

const storageKey = "mipChecklistV1";
const notesKey = "mipNotesV1";
let state = JSON.parse(localStorage.getItem(storageKey) || "{}");
let filter = "all";

const container = document.getElementById("checklistContainer");

function itemKey(groupIndex, itemIndex) {
  return `${groupIndex}-${itemIndex}`;
}

function render() {
  container.innerHTML = "";
  let visible = 0;

  groups.forEach((group, groupIndex) => {
    const filteredItems = group.items
      .map((text, itemIndex) => ({ text, itemIndex, checked: !!state[itemKey(groupIndex, itemIndex)] }))
      .filter(item => filter === "all" || (filter === "done" ? item.checked : !item.checked));

    if (!filteredItems.length) return;
    visible++;

    const card = document.createElement("article");
    card.className = "check-group";
    card.innerHTML = `
      <div class="group-head">
        <span class="group-number">${String(groupIndex + 1).padStart(2, "0")}</span>
        <div>
          <h3>${group.title}</h3>
          <p>${group.description}</p>
        </div>
      </div>
      <div class="group-items"></div>
    `;

    const itemContainer = card.querySelector(".group-items");

    filteredItems.forEach(({ text, itemIndex, checked }) => {
      const key = itemKey(groupIndex, itemIndex);
      const row = document.createElement("div");
      row.className = `check-item ${checked ? "done" : ""}`;
      row.innerHTML = `
        <input type="checkbox" id="item-${key}" ${checked ? "checked" : ""}>
        <label for="item-${key}">${text}</label>
      `;
      row.querySelector("input").addEventListener("change", event => {
        state[key] = event.target.checked;
        localStorage.setItem(storageKey, JSON.stringify(state));
        updateProgress();
        render();
      });
      itemContainer.appendChild(row);
    });

    container.appendChild(card);
  });

  if (!visible) {
    container.innerHTML = `<div class="empty-state">Nenhum item corresponde ao filtro selecionado.</div>`;
  }
}

function updateProgress() {
  const total = groups.reduce((sum, group) => sum + group.items.length, 0);
  const done = Object.values(state).filter(Boolean).length;
  const pending = total - done;
  const percent = total ? Math.round((done / total) * 100) : 0;
  const completeSections = groups.filter((group, gi) =>
    group.items.every((_, ii) => state[itemKey(gi, ii)])
  ).length;

  document.getElementById("progressTitle").textContent = `${percent}% concluído`;
  document.getElementById("progressNumber").textContent = `${percent}%`;
  document.getElementById("progressRing").style.setProperty("--progress", percent);
  document.getElementById("doneCount").textContent = done;
  document.getElementById("pendingCount").textContent = pending;
  document.getElementById("sectionCount").textContent = `${completeSections}/${groups.length}`;
}

document.getElementById("filterSelect").addEventListener("change", event => {
  filter = event.target.value;
  render();
});

document.getElementById("printBtn").addEventListener("click", () => window.print());

document.getElementById("contrastBtn").addEventListener("click", () => {
  document.body.classList.toggle("high-contrast");
});

document.getElementById("fontBtn").addEventListener("click", () => {
  document.documentElement.classList.toggle("large-font");
});

const notes = document.getElementById("notes");
notes.value = localStorage.getItem(notesKey) || "";
notes.addEventListener("input", () => {
  localStorage.setItem(notesKey, notes.value);
  const status = document.getElementById("saveStatus");
  status.textContent = "Anotações salvas neste navegador.";
  clearTimeout(window.noteTimer);
  window.noteTimer = setTimeout(() => {
    status.textContent = "As informações ficam salvas apenas neste navegador.";
  }, 1800);
});

render();
updateProgress();
