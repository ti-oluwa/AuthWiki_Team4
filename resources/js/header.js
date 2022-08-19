
function darkMode() {
    var body = document.getElementsByTagName("body");
    var text = [document.getElementsByTagName("p"),  document.getElementsByTagName("hr"), document.getElementsByTagName("a"), document.getElementsByTagName("li")];
    var headings = [document.getElementsByTagName("h1"), document.getElementsByTagName("h2"), 
                                document.getElementsByTagName("h3"), document.getElementsByTagName("h4"), 
                                document.getElementsByTagName("h5"), document.getElementsByTagName("h6"), 
                                document.getElementsByTagName("strong"), document.getElementsByTagName("small"), 
                                document.getElementsByTagName("b")];
     
    // CHANGE TEXT COLOR
    for (var i = 0; i < text.length; i++) {
        for (var j = 0; j < text[i].length; j++) {
            text[i][j].style.color = "#969696";
        };
    };


    // CHANGE BODY BACKGROUND COLOR
    // if ( body[0].style.background != null){
    //     body[0].style.backgroundImage = "url('../images/Background_dark.svg')";
    // };
    body[0].style.backgroundImage = "none";
    body[0].style.backgroundColor = "#121212";

   
    if (document.getElementsByTagName('header')[0] || document.getElementsByTagName('footer')[0] != null) {
        var handf = [document.getElementsByTagName("header")[0], document.getElementsByTagName("footer")[0]];
        var footer_links = document.getElementsByClassName('footer_links');
        var header = document.getElementsByTagName('header')[0];
        var footer = document.getElementsByTagName('footer')[0];
        var header_links = header.getElementsByTagName('a');
        var header_img = header.getElementsByTagName('img')[0];
        var header_svg = header.getElementsByTagName('svg');
        var footer_logo_paths = footer.getElementsByTagName('svg')[0].getElementsByTagName('path');
        var myHovermenu = document.getElementById("myHovermenu");
        var mySidemenu = document.getElementById("mySidemenu");
        var mySidemenu_links = mySidemenu.getElementsByTagName('a');

        // HEADER AND FOOTER BACKGROUND AND TEXT
        for (var i = 0; i < handf.length; i++) {
            handf[i].style.backgroundColor = "var(--text_color)";
            handf[i].style.boxShadow = "0px 2px 10px #0d1117";
            handf[i].style.color = "var(--text_color)";
        };

        // CHANGE HEADER SVG's COLOR
        for (var i = 0; i < header_svg.length; i++){
            for (var j = 0; j < header_svg[i].getElementsByTagName('path').length; j++){
                header_svg[i].getElementsByTagName('path')[j].style.fill = "#e1e1e1";
            };
        };

        // CHANGE HEADER LINKS AND IMAGE COLOR
        for (var i = 0; i < header_links.length; i++){
            header_links[i].style.color = "#e1e1e1";
            header_links[i].style.opacity = "1";
        };
        if (header_img.src.includes('default') == true){
            header_img.style.backgroundColor = "#e1e1e1";
        };

        document.getElementById('menu_button').style.backgroundColor = 'transparent';


        // CHANGE HOVER MENU COLOR
        if (myHovermenu != null){
            myHovermenu.style.backgroundColor = "var(--text_color)";
            myHovermenu.style.boxShadow = "0px 2px 10px #0d1117";
            myHovermenu.style.borderWidth = "0px";
        };
        

        // CHANGE SIDE MENU COLOR
        mySidemenu.style.backgroundColor = "var(--text_color)";
        mySidemenu.style.color = "#e1e1e1";
        document.getElementsByClassName('menu_search')[0].style.backgroundColor = "#e1e1e1";
        document.getElementsByClassName('menu_search')[0].style.borderColor = "#121212";
        for (var i = 0; i < mySidemenu_links.length; i++) {
            mySidemenu_links[i].style.color = "#e1e1e1";
        };

        // CHANGE FOOTER LOGO COLOR
        for (var i = 0; i < footer_logo_paths.length; i++){
            footer_logo_paths[i].style.fill = "#e1e1e1";
        };

        // CHANGE FOOTER LINKS HEADER COLOR
        for (var i = 0; i < footer_links.length; i++){
            footer_links[i].getElementsByTagName('p')[0].style.color = "#e1e1e1"
        };

    };


    // CHANGE HR COLOR
    if (document.getElementsByTagName("hr") != []){
        for(var i = 0; i < document.getElementsByTagName("hr").length; i++){
            document.getElementsByTagName("hr")[i].style.borderColor = "#e1e1e1";
        };
    };
    

    // CHANGE HEADINGS COLOR
    for (var i = 0; i < headings.length; i++) {
        for (var j = 0; j < headings[i].length; j++) {
            headings[i][j].style.setProperty('color', '#e1e1e1', 'important');
        };
    };
    
    
    // CHANGE ABOUT INTRO COLOR AND TEAM SECTION COLOR
    if (window.location.href.includes('about') == true){
        document.getElementsByClassName('about_intro')[0].style.backgroundColor = "#202023";
        document.getElementsByClassName('about_intro')[0].style.boxShadow = "0 0 0 100vmax #202023";
        document.getElementsByClassName('team_section')[0].style.backgroundColor = "#202023";
        document.getElementsByClassName('team_section')[0].style.boxShadow = "0 0 0 100vmax #202023";
    };

    // CHANGE INPUT AND TEXT FIELDS COLOR
    if (window.location.href.includes('form') == true || window.location.href.includes('publish') == true){
        var inputsAndTextFields = [document.getElementsByTagName('input'), document.getElementsByTagName('textarea')];
        var select = document.getElementById('categories');
        var add_btn = document.getElementById('add_btn');
        var cat_card = document.getElementById('cat_card');
        document.getElementById('info_text').style.color = 'rgb(233, 113, 0)';
        document.getElementById('info_text').style.backgroundColor = 'var(--text_color)';
        document.getElementById('info_text').style.border = '1px solid #808080';
        cat_card.style.backgroundColor = "#121212"
        add_btn.style.backgroundColor = "#d0d0d0"
        select.style.backgroundColor = "#202023";
        select.style.color = "#e1e1e1";
        for (var i = 0; i < inputsAndTextFields.length; i++){
            for(var j = 0; j < inputsAndTextFields[i].length; j++){
                if (inputsAndTextFields[i][j].type != 'file' && inputsAndTextFields[i][j].id != 'email_field'){
                    inputsAndTextFields[i][j].style.backgroundColor = '#202023';
                    inputsAndTextFields[i][j].style.color = "#e1e1e1"
                };
                
            };
        };
    };


    // CHANGE DOCUMENTATION COLOR
    if (window.location.href.includes('documentation') == true){
        var side_bar = document.getElementsByClassName('side-bar-body')[0];
        var glossary_headers = document.getElementsByClassName('head');
        var side_bar_links = side_bar.getElementsByTagName('a');
        document.getElementsByClassName('search_bar')[0].style.backgroundColor = '#fff';
        document.getElementsByClassName('side-bar-text')[0].getElementsByTagName('a')[0].style.color = 'var(--highlight_color)';
        side_bar.style.backgroundColor = "#102350";
        for (var i = 0; i < side_bar_links.length; i++){
            side_bar_links[i].getElementsByTagName('p')[0].style.color = "#e1e1e1";
        };

        for (var i = 0; i < glossary_headers.length; i++){
            glossary_headers[i].style.color = "#e1e1e1";
        };
    };


    // CHANGE SETTINGS COLOR
    if (window.location.href.includes('settings') == true){
        document.getElementById('popup_success').style.backgroundColor = "#2f2f2f";
        document.getElementById('delete_confirm').style.backgroundColor = "#2f2f2f";
        document.getElementById('delete_confirm').getElementsByTagName('button')[1].style.color = "red";
        document.getElementById('hr1').style.boxShadow = "0 0 0 100vmax #e1e1e1";
        var labels = document.getElementsByTagName('label');
        document.getElementById('delete_button').style.color = "#e1e1e1";
        document.getElementById('remove_button').style.color = "#e1e1e1";
        document.getElementById('remove_button').style.borderColor = "coral";
        var inputs = document.getElementsByTagName('input');

        for (var i = 0; i < labels.length; i++){
            labels[i].style.color = "#969696";
        };

        for (var i = 0; i < inputs.length; i++){
            if (inputs[i].id != 'email_field'){
                inputs[i].style.setProperty('background-color', "#202023", "important");
                inputs[i].style.color = "#e1e1e1"; 
            };   
        };
    };


    // CHANGE EMAIL VERIFICATION COLOR
    if (window.location.href.includes('verification') == true){
        document.getElementsByTagName('main')[0].style.backgroundColor = "#1f1f1f";
        document.getElementsByTagName('main')[0].style.boxShadow = "0 0 10px 5px rgba(31, 31, 31, 0.7)";
        var socials = document.getElementsByClassName('social');
        for (var i = 0; i < socials.length; i++){
            socials[i].style.backgroundColor = "#2f2f2f";
            socials[i].style.boxShadow = "0px 4px 5px 1px rgba(250, 250, 250, 0.1)";
        };
    };


    // CHANGE LANDING PAGE COLOR

    if (window.location.href.includes('landing') == true){

    }



}







function closeNavOnOutsideClick(){
    var ignoreClickOnMeElement = document.getElementById('mySidemenu');
    var ignoreClickOnMeElement1 = document.getElementById('menu_button');
    document.addEventListener('click', function(event) {
        var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        var isClickInsideElement1 = ignoreClickOnMeElement1.contains(event.target);
        if (!isClickInsideElement && !isClickInsideElement1) {
            closeNav()
        }
});
    
}

function openNav() {
    var mySidemenu = document.getElementById("mySidemenu");
    var screenWidth = window.innerWidth;
    mySidemenu.style.paddingLeft = "32px";
    mySidemenu.style.boxShadow = "0px 0px 100px 100vw  rgba(0, 0, 0, 0.2), 0px 4px 100px 20px rgba(0, 0, 0, 0.2)";
    if (screenWidth < 768) {
        mySidemenu.style.width = screenWidth * 0.8 + "px";
    }
    else {
        mySidemenu.style.width = '322px' ;
    }
    mySidemenu.style.opacity = "1";
}

  

function closeNav() {
    var mySidemenu = document.getElementById("mySidemenu");
    mySidemenu.style.width = "0px";
    mySidemenu.style.paddingLeft = "0px";
    mySidemenu.style.opacity = "0";
    mySidemenu.style.boxShadow = "none"

}


function closeHoverMenuOnOutsideClick(){
    var ignoreClickOnMeElement = document.getElementById('myHovermenu');
    var ignoreClickOnMeElement1 = document.getElementById('icon');
    document.addEventListener('click', function(event) {
        var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
        var isClickInsideElement1 = ignoreClickOnMeElement1.contains(event.target);
        if (!isClickInsideElement && !isClickInsideElement1) {
            hideHoverMenu()
        }
});
}


function submit_form(){
    var form = document.getElementById("menu_search_form");
    form.submit();
}

function showHoverMenu() {
    var myHovermenu = document.getElementById("myHovermenu");
    myHovermenu.style.display = "flex";
}

function hideHoverMenu() {
    var myHovermenu = document.getElementById("myHovermenu");
    myHovermenu.style.display = "none";
}

function moveToPosition(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({behavior: "smooth", block: "nearest", inline: "nearest"})
}
