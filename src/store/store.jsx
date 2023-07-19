import { create } from 'zustand';

const initialState = {
  data: [],
  page: 1,
  isLoading: false,
  error: null,
};

const useStore = create((set, get) => ({
  data: initialState,
  fetchData: async () => {
    if (get().data.page > 13) return;

    set((state) => ({ data: { ...state.data, isLoading: true, error: null } }));
    // console.log("isLoading|-->", get().data.isLoading);

    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      const fetchingPage = get().data.page;
      const response = await fetch(`https://api.punkapi.com/v2/beers?page=${fetchingPage}`);
      const fetchedData = await response.json();

      // console.log("FETCH      |-->", get().data.page);
      set((state) => ({
        data: {
          ...state.data,
          data: [...state.data.data, ...fetchedData],
          page: state.data.page + 1,
          isLoading: false
        }
      }));
    } catch (error) {
      set((state) => ({ data: { ...state.data, isLoading: false, error: error } }));
    }
  },
  deleteItems: (newData) => set((state) => ({ data: {...state.data, data: newData} })),
}));

export default useStore;