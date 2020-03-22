export function slugify(name) {
  return name
    .toString()
    .toLowerCase()
    .trim()
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[\s\W-]+/g, "-")
    .replace(/-$/, ""); // Remove last floating dash if exists
}

export function formatDate(date) {
  return new Date(Date.parse(date)).toLocaleDateString();
}

export function formatTime(time) {
  return new Date(Date.parse(time)).toLocaleTimeString();
}

export function formatDatetime(datetime) {
  const date = new Date(Date.parse(datetime));
  return date.toLocaleDateString() + " " + date.toLocaleTimeString();
}
