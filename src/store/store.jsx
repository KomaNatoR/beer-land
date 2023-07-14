import { create } from 'zustand';

const useStore = create((set) => ({
  data: null,
  fetchData: async params => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      const response = await fetch(`https://api.punkapi.com/v2/beers?page=1`);
      const data = await response.json();
      set({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}));

export default useStore;