<script></script>
const table=document.createElement('table');
for(let i=0;i<3;i++)
{
    const row=document.createElement('tr');
    for(let j=0;j<3;j++)
    {
        const col=document.createElement('td');
       /* col.textContent = `Row ${i + 1}, Cell ${j + 1}`; // You can set cell content here*/

        row.appendChild(col);
    }
    table.appendChild(row);
}
 

const division=document.getElementById('table-division');
division.appendChild(table);
