import { create } from 'zustand'
import defaultJson from '../data/defaultjson'

export const useStore = create((set) => ({
  jsonInput: defaultJson,
  setJsonInput: (jsonInput: string) => set(() => ({ jsonInput })),
  clearJsonInput: () => set({ jsonInput: '' })
}))
