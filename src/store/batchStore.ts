import { createStore } from "solid-js/store";
import fields from "../constants/headers";

type BatchRecord = Array<string>;

const records = localStorage.getItem("records");

export const [store, setStore] = createStore<Record<"records", Array<BatchRecord>>>({
  records: records ? JSON.parse(records) : [],
});

export function addRecord(record : BatchRecord) {
  if (record.length < fields.length) {
    throw new Error("El registro no tiene la cantidad de campos necesarios");
  }

  setStore("records", (records) => [...records, record]);
  localStorage.setItem("records", JSON.stringify(store.records));
}

