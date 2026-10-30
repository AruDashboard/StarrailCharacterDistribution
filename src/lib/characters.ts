import type { CharacterTableData } from '../data/characters.ts';

export function createRows(data: CharacterTableData) {
  const rowKeys = new Set(data.rows.map((row) => row.key));
  const colKeys = new Set(data.cols.map((col) => col.key));
  for (const character of data.characters) {
    if (!rowKeys.has(character.element) || !colKeys.has(character.path)) {
      throw new Error(`角色「${character.name}」的元素或命途未定义`);
    }
  }
  return data.rows.map((row) => ({
    ...row,
    cells: data.cols.map((col) =>
      data.characters.filter(
        (character) => character.element === row.key && character.path === col.key,
      ),
    ),
  }));
}

export function imageUrl(path: string, base: string) {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
