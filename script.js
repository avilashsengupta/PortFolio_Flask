const dropdown = {
    'python_skill': false, 'sql_skill': false,   'html_skill': false,  'excel_skill': false, 'abap_skill': false,
    'ml_skill': false,     'flask_skill': false, 'grad-fnlyr': false,  'dsml-prj': false,    'abap-ecc001': false,
    'abap-ecc002': false,  'abap-ecc003': false, 'abap-ecc004': false, 'abap-ecc005': false
}

function showDropDown(skill) {
    if(dropdown[skill] == false) {
        document.getElementById(skill).classList.remove('hidden');
        document.getElementById(skill).classList.add('grid');
        document.getElementById(skill).classList.add('grid-cols-1');
        dropdown[skill] = true;
    }
    else {
        document.getElementById(skill).classList.remove('grid');
        document.getElementById(skill).classList.remove('grid-cols-1');
        document.getElementById(skill).classList.add('hidden');
        dropdown[skill] = false;
    }
}