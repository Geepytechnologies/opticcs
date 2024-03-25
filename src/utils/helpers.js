export function downloadTable(tableRef, filename) {
  const table = tableRef.current;

  if (table) {
    const rows = Array.from(table.rows);
    const headers = Array.from(rows.shift()?.cells || []).map(
      (cell) => cell.textContent
    );
    const csv = [headers.join(",")];

    for (const row of rows) {
      const cells = Array.from(row.cells).map((cell) => cell.textContent);
      csv.push(cells.join(","));
    }

    const blob = new Blob([csv.join("\n")], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${filename}.csv`);
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("Table downloaded as CSV!");
  }
}

export const capitalizeFirstLetter = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};
