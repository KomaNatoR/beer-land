import { create } from 'zustand';

const useStore = create((set) => ({
  data: [],
  fetchData: async (params = 1) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const response = await fetch(`https://api.punkapi.com/v2/beers?page=${params}`);
      const fetchData = await response.json();
      set((state) => ({ data: [
        ...state.data,
        ...fetchData.filter((obj) => !state.data.some((item) => item.id === obj.id))
      ] }));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  deleteItems: (newData) => set((state) => ({ data: newData })),
}));

export default useStore;
//[...state.data, ...fetchData]