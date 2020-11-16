export default function (array, prop) {
  const uniques = []
  array.forEach(el => uniques.includes(el[prop]) ? null : uniques.push(el[prop]))
  return uniques
}
