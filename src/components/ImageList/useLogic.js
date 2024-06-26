export const useLogic = () => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };

    return date.toLocaleDateString('ru-RU', options);
  };

  return { formatDate };
};
