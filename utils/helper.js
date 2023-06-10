export function filterData(searchText, restaurant) {
  const data = restaurant.filter((res) => {
    return res?.data?.name?.toLowerCase()?.includes(searchText?.toLowerCase());
  });
  return data;
}
