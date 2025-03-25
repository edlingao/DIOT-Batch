import { For, Show, type Component } from 'solid-js';
import { getTextFromValue, removeRecord, store } from '../store/batchStore';
import fields from '../constants/headers';

export const RecordTable: Component = () => {
  return (
    <div class="container p-4 mx-auto">
      <div class="overflow-x-auto max-h-[25vh] rounded-box border border-base-content/5 bg-base-100">
        <table class="table table-xs table-pin-rows table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Acciones</th>
              <th>#</th>
              <For each={fields} fallback={<th>Loading...</th>}>
                {(record) => (
                  <th>{record.description}</th>
                )}
              </For>
            </tr>
          </thead>
          <tbody>
            <Show when={store.records.length} fallback={<tr><td>Sin registros...</td></tr>}>
              <For each={store.records} fallback={<tr>Sin registros...</tr>}>
                {(record, index) => (
                  <tr>
                    <td>
                      <menu>
                        <button class="btn btn-error btn-xs text-white" onClick={() => removeRecord(index())}>
                          
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M3 6h18" />
                            <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                            <line x1="10" y1="11" x2="10" y2="17" />
                            <line x1="14" y1="11" x2="14" y2="17" />
                          </svg>
                          <span>Borrar</span>
                        </button>
                      </menu>
                    </td>
                    <td>{index()}</td>
                    <For each={record} fallback={<td>Loading...</td>}>
                      {(field, indexField) => (
                        <td>{getTextFromValue(field, indexField())}</td>
                      )}
                    </For>
                  </tr>
                )}
              </For>
            </Show>
          </tbody>
        </table>
      </div>
    </div>
  );
};

