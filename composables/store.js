export const useStore = () =>
  useState("store", () => ({
    products: {},
  }));

export function fetchProducts() {
  return fetchData("products");
}

function fetchData(type) {
  const state = useStore();

  return loadReactiveState(
    () =>
      Object.keys(state.value[type]).length > 1
        ? Object.values(state.value[type])
        : undefined,
    (data) => {
      data.filter(Boolean).forEach((item) => {
        if (state.value[type][item.id]) {
          Object.assign(state.value[type][item.id], item);
        } else {
          state.value[type][item.id] = item;
        }
      });
    },
    () => $fetch(`/api/${type}`)
  );
}

async function loadReactiveState(getter, setter, fetcher) {
  const reactiveData = computed({
    get: getter,
    set: setter,
  });

  const isFetching = ref(false);

  if (reactiveData.value == null) {
    const fetchData = async () => {
      try {
        isFetching.value = true;
        const fetchedData = await fetcher();
        if (reactiveData.value != null) {
          reactiveData.value = Object.assign(reactiveData.value, fetchedData);
        } else {
          reactiveData.value = fetchedData;
        }
      } catch (e) {
        console.error(e);
        reactiveData.value = undefined;
      } finally {
        isFetching.value = false;
      }
    };

    if (process.client) {
      fetchData();
    } else {
      await fetchData();
    }
  }

  return reactive({
    isLoading: isFetching,
    data: reactiveData,
  });
}
