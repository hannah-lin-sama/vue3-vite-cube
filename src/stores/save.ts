import { defineStore } from 'pinia'

interface SaveStoreState {
  hasUnsavedChanges: boolean
  saveLoading: boolean
  fetchDatas: object | null
  fetchDataLoading: boolean
  blobDatas: Blob | null
}
export const useSaveStore = defineStore('save', {
  state: (): SaveStoreState => ({
    hasUnsavedChanges: false,
    saveLoading: false,
    fetchDatas: null,
    fetchDataLoading: false,
    blobDatas: null as Blob | null
  }),
  getters: {
    getHasUnsavedChanges(state) {
      return state.hasUnsavedChanges
    }
  },
  actions: {
    setHasUnsavedChanges(hasUnsavedChanges: boolean) {
      this.hasUnsavedChanges = hasUnsavedChanges
    },
    async fetchData(url: string) {
      this.fetchDataLoading = true
      const res = await fetch(url) // 返回的是 Promise<Response>
      this.fetchDatas = res.json()
      this.fetchDataLoading = false
    },
    async fetchBlob(url: string) {
      this.fetchDataLoading = true
      const res = await fetch(url) // 返回的是 Promise<Response>
      this.blobDatas = await res.blob()
      this.fetchDataLoading = false
    }
  }
})
