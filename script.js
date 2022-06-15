
let actualpath = {
    dontreadme: "i told you",
}

function page(name) {
    return function () {
        
        if (!$('#' + name).length) {
            term.echo($($('#_' + name).prop('content')).find('section'));
            $('#' + name).removeClass('disabled');
        }
    }
    
}

function ls(path='') {
    Object.keys(actualpath).forEach(name => {
        term.echo(name)
    })
}

function cat(path) {
    term.echo(actualpath[path]);
}

$(function() {
    term = $('body').terminal({
        home : page("home"),
        whoami : page("bio"),
        wget: page("social"),
        contact: page("contact"),
        nunzio: () => "Yes, I am",
        ricci: () => "the lastname but not the leastname",
        ls: ls,
        cat: cat,
    },{
        greetings: null,
        prompt: "guest@nunzioricci.tk:~> ",
        checkArity: false,
    });
    term.exec('home', { typing: true, delay: 50});
})

