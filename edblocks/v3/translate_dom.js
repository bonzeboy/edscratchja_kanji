// Top menu
var menuItems = document.querySelectorAll("li.nav-item a.nav-link");
for (var i = 0; i < menuItems.length; i++) {
    var translation = null;

    var menuItem = menuItems[i].innerHTML;

    switch (menuItem) {
        case "<span class=\"oi oi-menu\"></span> Menu":
            translation = "<span class=\"oi oi-menu\"></span> メニュー";
            break;
        case "<span class=\"oi oi-pencil\"></span> Save":
            translation = "<span class=\"oi oi-pencil\"></span> 保存";
            break;
    }

    if (translation != null) {
        menuItems[i].innerHTML = translation;
    }
}

// Sub menu
var menuItems = document.getElementsByClassName("dropdown-item");
for (var i = 0; i < menuItems.length; i++) {
    var translation = null;

    var menuItem = menuItems[i].innerHTML;

    switch (menuItem) {
        case "New":
            translation = "新規";
            break;
        case "Load demo":
            translation = "デモを読み込む";
            break;
        case "Load from device":
            translation = "コンピューターから読み込む";
            break;
        case "Save to device":
            translation = "コンピューターに保存する";
            break;
        case "Update firmware":
            translation = "ファームウェアを更新する";
            break;
        case "Diagnostics":
            translation = "診断する";
            break;
        case "About":
            translation = "EdBlocksについて";
            break;
        case "Terms of use <span class=\"oi oi-share-boxed\"></span>":
            translation = "利用規約 <span class=\"oi oi-share-boxed\"></span>";
            break;

        case "Switch to Edison V1/V2":
            translation = "Edison V1/V2に切り替える";
            break;
        case "Which version do I have?":
            translation = "自分のEdisonのバージョンを確認する";
            break;
    }

    if (translation != null) {
        menuItems[i].innerHTML = translation;
    }
}

// Loading
var loading = document.querySelector("#modalLoading div.modal-body");
if (loading != null) {
    loading.innerHTML = '読み込み中...';
}

// Program
var programFlash = document.querySelector("#navProgramFlash");
if (programFlash != null) {
    programFlash.innerHTML = '<span class="oi oi-sun"></span> プログラムを書き込む';
}

var program = document.querySelector("#navProgram");
if (program != null) {
    program.innerHTML = '<i class="fa-brands fa-usb"></i> プログラムを書き込む';
}
