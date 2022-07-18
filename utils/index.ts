export const formatDate = (date: string) =>
  new Intl.DateTimeFormat('fr', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
