/**
 * Turn a leading ✓ / ✗ / ~ in a comparison-table cell into a coloured chip.
 *
 * The authoring convention lives in CONTENT-PLAN.md: writers type
 * `| ✓ Incluido |` and get a green pill. Keeping the marker in the Markdown
 * means the source stays readable and a post still makes sense if this
 * plugin ever goes away.
 *
 * Hand-rolled tree walk rather than unist-util-visit — it is a dozen lines
 * and skips a dependency whose only job here is recursion.
 */

const MARKERS = {
  '✓': 'chip-yes',
  '✗': 'chip-no',
  '~': 'chip-partial',
};

export function rehypeTableChips() {
  return (tree) => {
    walk(tree);
  };
}

function walk(node) {
  if (!node || typeof node !== 'object') return;

  const children = node.children;
  if (!Array.isArray(children)) return;

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child?.type !== 'element') {
      walk(child);
      continue;
    }

    if (child.tagName === 'td') decorate(child);

    // Markdown cannot emit a wrapper, and a table needs one: on a narrow
    // screen it has to scroll horizontally, and a `display: block` table
    // leaves the surplus width unclaimed by any cell — a white gap beside
    // the last column. The wrapper scrolls; the table stays a table.
    if (child.tagName === 'table') {
      labelCells(child);
      children[i] = {
        type: 'element',
        tagName: 'div',
        properties: { className: ['table-scroll'] },
        children: [child],
      };
    }

    walk(child);
  }
}

/**
 * Copy each column's header onto its cells as `data-label`.
 *
 * Below 640px the table restacks into one card per row (see post.css) and
 * the header row disappears, so every value needs to carry its own column
 * name. Horizontal scrolling was the alternative and it is worse: the
 * Dentalpin column starts off-screen, which turns a comparison into a
 * single-vendor spec sheet unless the reader thinks to swipe.
 */
function labelCells(table) {
  const headRow = find(table, (n) => n.tagName === 'tr');
  if (!headRow) return;

  const labels = (headRow.children ?? [])
    .filter((n) => n.type === 'element' && n.tagName === 'th')
    .map((n) => textOf(n).trim());
  if (!labels.length) return;

  for (const row of allOf(table, (n) => n.tagName === 'tr')) {
    const cells = (row.children ?? []).filter(
      (n) => n.type === 'element' && n.tagName === 'td',
    );
    cells.forEach((cell, index) => {
      const label = labels[index];
      if (label) cell.properties = { ...cell.properties, 'data-label': label };
    });
  }
}

function find(node, predicate) {
  for (const child of node.children ?? []) {
    if (child.type !== 'element') continue;
    if (predicate(child)) return child;
    const nested = find(child, predicate);
    if (nested) return nested;
  }
  return null;
}

function allOf(node, predicate, acc = []) {
  for (const child of node.children ?? []) {
    if (child.type !== 'element') continue;
    if (predicate(child)) acc.push(child);
    allOf(child, predicate, acc);
  }
  return acc;
}

function textOf(node) {
  if (node.type === 'text') return node.value;
  return (node.children ?? []).map(textOf).join('');
}

function decorate(cell) {
  const first = cell.children?.[0];
  if (!first || first.type !== 'text') return;

  const marker = first.value.trimStart().charAt(0);
  const chipClass = MARKERS[marker];
  if (!chipClass) return;

  // Drop the marker character and the space after it; the chip's colour is
  // the signal, and a repeated glyph inside it reads as noise.
  first.value = first.value.trimStart().slice(1).trimStart();

  cell.children = [
    {
      type: 'element',
      tagName: 'span',
      properties: { className: ['chip', chipClass] },
      children: cell.children,
    },
  ];
}
