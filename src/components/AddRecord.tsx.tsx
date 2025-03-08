import { For } from "solid-js";
import fields from "../constants/headers";
import { addRecord, setStore, store } from "../store/batchStore";


export function AddRecord() {

  const handleSubmit = () => {
    const form = document.querySelector("#form");
    const values: string[] = [];
    form?.querySelectorAll("input").forEach((input) => {
      values.push(input.value);
    });
    
    addRecord(values);
  };

  const downloadRecords = () => {
    const records = store.records;
    let data = "";

    records.forEach((record) => {
      data += record.join("|") + "\n";
    });

    const blob = new Blob([data], { type: "text/plain;charset=utf-8"});
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "batch.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearRecords = () => {
    if(confirm("¿Estás seguro de que deseas borrar todos los registros?")) {
      setStore("records", []);
      localStorage.removeItem("records");
    }
  }

  return (
    <div class="container p-4 mx-auto flex flex-col bg-base-200 rounded-2xl gap-4">
      <h1 class="text-2xl text-center">Registrar</h1>
      <form id="form" class="h-[50vh] max-w-md flex flex-col p-4 mx-auto overflow-y-auto" method="dialog">
        <For each={fields} fallback={<div>Loading...</div>}>
          {(field) => (
            <fieldset class="fieldset flex-1">
              <legend class="fieldset-legend w-full">{field.description}</legend>
              <input type="text" name={field.description} class="input w-full" placeholder={field.description} />
            </fieldset>
          )}
        </For>
      </form>
      <menu class="max-w-md mx-auto flex justify-between items-center gap-4 flex-wrap">
        <button onClick={downloadRecords} class="btn btn-accent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 4v12M8 12l4 4 4-4" />
          <path d="M4 18v2h16v-2" />
          </svg>
          Descargar
        </button>
        <button onClick={clearRecords} class="btn btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6h18" />
            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
            <line x1="10" y1="11" x2="10" y2="17" />
            <line x1="14" y1="11" x2="14" y2="17" />
          </svg>
          Borrar Todo
        </button>
        <button onClick={handleSubmit} class="btn btn-primary">
          Registrar
        </button>
      </menu>
    </div>
  );
}
