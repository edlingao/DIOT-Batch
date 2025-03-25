import { createStore } from "solid-js/store";
import fields, { EfectosFiscalesAlComprobanteOptions, Option, TipoDeOperacionOptions, TipoTerceroOptions } from "../constants/headers";

type BatchRecord = Array<string>;

const records = localStorage.getItem("records");

export const [store, setStore] = createStore<Record<"records", Array<BatchRecord>>>({
  records: records ? JSON.parse(records) : [],
});

export function addRecord(record : BatchRecord) {
  console.log(record);
  if (record.length < fields.length) {
    throw new Error("El registro no tiene la cantidad de campos necesarios");
  }

  setStore("records", (records) => [...records, record]);
  localStorage.setItem("records", JSON.stringify(store.records));
}

export function removeRecord(index: number) {
  console.log(index);
  setStore("records", (records) => records.filter((_, i) => i !== index));
  localStorage.setItem("records", JSON.stringify(store.records));
}

export function getTextFromValue(key: string, index: number): string {
  switch (index) {
    case 0:
      return TextFromValue(key, TipoTerceroOptions);
    case 1:
      return TextFromValue(key, TipoDeOperacionOptions);
    case 53:
      return TextFromValue(key, EfectosFiscalesAlComprobanteOptions);
    default:
      return key;
  }
}

function TextFromValue(value: string, array: Array<Option>): string {
  return array.find((option) => option.value === value)?.text || "";
}


