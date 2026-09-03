const ALUNOS_KEY = "escola:alunos";
const NOTAS_KEY = "escola:notas";

function readAll(key) {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function writeAll(key, value) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
}

function makeId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

// --- Alunos ---

export function getAlunos() {
  return readAll(ALUNOS_KEY).sort((a, b) => a.nome.localeCompare(b.nome));
}

export function getAluno(id) {
  return readAll(ALUNOS_KEY).find((a) => a.id === id) ?? null;
}

export function saveAluno(aluno) {
  const alunos = readAll(ALUNOS_KEY);
  const registro = { ...aluno, id: aluno.id ?? makeId() };
  const idx = alunos.findIndex((a) => a.id === registro.id);
  if (idx >= 0) {
    alunos[idx] = registro;
  } else {
    alunos.push(registro);
  }
  writeAll(ALUNOS_KEY, alunos);
  return registro;
}

export function deleteAluno(id) {
  writeAll(
    ALUNOS_KEY,
    readAll(ALUNOS_KEY).filter((a) => a.id !== id)
  );
  // remove notas órfãs do aluno excluído
  writeAll(
    NOTAS_KEY,
    readAll(NOTAS_KEY).filter((n) => n.alunoId !== id)
  );
}

// --- Notas ---

export function getNotas() {
  return readAll(NOTAS_KEY);
}

export function saveNota(nota) {
  const notas = readAll(NOTAS_KEY);
  const registro = { ...nota, id: nota.id ?? makeId() };
  const idx = notas.findIndex((n) => n.id === registro.id);
  if (idx >= 0) {
    notas[idx] = registro;
  } else {
    notas.push(registro);
  }
  writeAll(NOTAS_KEY, notas);
  return registro;
}

export function deleteNota(id) {
  writeAll(
    NOTAS_KEY,
    readAll(NOTAS_KEY).filter((n) => n.id !== id)
  );
}