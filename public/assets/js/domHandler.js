function setTheme(theme){
    localStorage.setItem('theme', theme);
    applyTheme();
}

function applyTheme(){
    let theme = localStorage.getItem('theme') || 'light';
    if(theme == 'dark'){
        $('#toggle')[0].checked = true;
    }
    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    document.body.classList.add(theme);
    if(theme == 'light'){
        document.body.style.setProperty('--themeForegroundColor', '#585858')
    }
    else{
        document.body.style.setProperty('--themeForegroundColor', '#bbbbbb')
    }
}

function toggleTheme(){
    let theme = localStorage.getItem('theme') || 'light';
    theme = (theme === 'light') ? 'dark' : 'light';
    setTheme(theme);
}

function submitdata(){
    let text = $('#textarea').val().trim();
    if(!text) return;
    let data = {"data" : text};
    $.ajax({
        type: "POST",
        url: "api/wordCheck",
        data: JSON.stringify(data),
        success: function(e){
            if(e){
                let el = document.createElement('li');
                el.appendChild(document.createTextNode(text));
                $('#loadedContent')[0].appendChild(el);
            }
        },
        async: false,
        dataType: "json",
        contentType : "application/json"
      });
}