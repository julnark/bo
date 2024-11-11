// script.js
function showForm(formId) {
    // Verwijder 'active' klasse van alle inhoud en tab-knoppen
    document.querySelectorAll('.form-content').forEach(form => form.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(button => button.classList.remove('active'));
    
    // Voeg 'active' klasse toe aan de geselecteerde tab en formulier
    document.getElementById(formId).classList.add('active');
    document.querySelector(`.tab-button[onclick="showForm('${formId}')"]`).classList.add('active');
}
