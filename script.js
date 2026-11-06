// ជំនួស URL នេះដោយ API Endpoint ពិតប្រាកដពី Xano របស់បង
const XANO_API_URL = 'https://x8i-letl-twmt.n7.xano.io/api:n0TXIUEB/student';

async function fetchStudents() {
  try {
    const response = await fetch(XANO_API_URL);
    const students = await response.json();

    const tableBody = document.getElementById('studentTableBody');
    tableBody.innerHTML = '';

    if (students.length === 0) {
      tableBody.innerHTML = '<tr><td colspan="3">មិនទាន់មានទិន្នន័យសិស្សទេ</td></tr>';
      return;
    }

    students.forEach(student => {
      tableBody.innerHTML += `
        <tr>
          <td>${student.id}</td>
          <td>${student.name || student.full_name || 'គ្មានឈ្មោះ'}</td>
          <td>${new Date(student.created_at).toLocaleDateString()}</td>
        </tr>
      `;
    });
  } catch (error) {
    console.error('Error:', error);
    document.getElementById('studentTableBody').innerHTML = '<tr><td colspan="3" style="color:red;">ទាញយកទិន្នន័យមិនបានទេ!</td></tr>';
  }
}

fetchStudents();