import { For, Show, type Component } from 'solid-js';
import { store } from '../store/batchStore';
import fields from '../constants/headers';

export const RecordTable: Component = () => {
  return (
    <div class="container p-4 mx-auto">
      <div class="overflow-x-auto max-h-[25vh] rounded-box border border-base-content/5 bg-base-100">
        <table class="table table-xs table-pin-rows">
          {/* head */}
          <thead>
            <tr>
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
                    {/* @ts-ignore */}
                    <td>{index}</td>
                    <For each={record} fallback={<td>Loading...</td>}>
                      {(field) => (
                        <td>{field}</td>
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

