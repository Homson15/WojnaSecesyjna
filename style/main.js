var button = {
    
    przyczyny : document.getElementById("bPrzyczyny"),
    
    przebieg : document.getElementById("bPrzebieg"),
    
    postacie : document.getElementById("bPostacie"),
    
    skutki :   document.getElementById("bSkutki")
};

var slide = {
    
    przyczyny : document.getElementById("sPrzyczyny"),
    
    przebieg : document.getElementById("sPrzebieg"),
    
    postacie : document.getElementById("sPostacie"),
    
    skutki :   document.getElementById("sSkutki"),
    
    menu :     document.getElementById("menu"),
    
    space :    document.getElementById("space"),
    
    back :     document.getElementById("back")
};

var topdes = "Wojna secesyjna – wojna, która toczyła się w latach 1861–1865 w Stanach Zjednoczonych Ameryki, pomiędzy stanami wchodzącymi w skład Stanów Zjednoczonych (tzw. Unią lub „Północą”) i Skonfederowanymi Stanami Ameryki (tzw. Konfederacją lub „Południem”), które wystąpiły z Unii. \n\n Powszechną nazwą, stosowaną zwłaszcza w USA, jest także „amerykańska wojna domowa” (ang. American Civil War).";

var info = 'Informacje o prezentacji: \n \n Najechanie na słowa ze znakiem "*" pokarze informacje związene z danym pojęciem \n \n Aby uzyskać informacje z prezentacji należy wybrać zakładkę na dole \n \n Żródłem informacji zawartej w prezentacji jest strona "wikipedia". \n Po naciścięciu w znak zapytania nastąpi przekierowanie do tej strony'

var abo = 'Abolicjonizm - w XVIII i XIX wieku ruch społeczno-polityczny i ideowy w Europie i obu Amerykach, stawiający sobie za zadanie zniesienie niewolnictwa i związanego z nim handlu ludźmi.'

var secesja = 'Secesja - odłączenie się, zerwanie z czymś, wyodrębnienie się nowego państwa bez upadku dotychczasowego.'

var proklamacja = 'Proklamacja Emancypacji to akt prawny wydany 22 września 1862 roku przez prezydenta Stanów Zjednoczonych Abrahama Lincolna znoszący niewolnictwo na obszarach Skonfederowanych Stanów Ameryki. \n\n Proklamacja nie była ustawą ustanowioną przez Kongres Stanów Zjednoczonych, lecz dekretem prezydenckim. Weszła w życie 1 stycznia 1863 roku i swoim zasięgiem obejmowała wyłącznie obszar Skonfederowanych Stanów Ameryki. Po wojnie secesyjnej niewolnictwo zostało zniesione w większości stanów, jednak w niektórych stanach pozostało legalne.';

var poprawki = '13. poprawka do Konstytucji Stanów Zjednoczonych dotyczy zniesienia niewolnictwa i robót przymusowych. Została uchwalona przez Kongres Stanów Zjednoczonych 31 stycznia 1865 i weszła w życie 18 grudnia 1865 roku.';

var fort='Fort Sumter – fort w Stanach Zjednoczonych, w stanie Karolina Południowa. Zbudowany w pierwszej połowie XIX wieku w celu obrony portu i miasta Charleston. Bitwa o Fort Sumter, która miała miejsce 12 kwietnia 1861, rozpoczęła wojnę secesyjną.'

function onLoad() {
    
    document.getElementById("top").title = topdes;
    document.getElementById("des").title = info;
    document.getElementById("abo").title = abo;
    document.getElementById("secesja").title = secesja;
    document.getElementById("proklamacja").title = proklamacja;
    document.getElementById("poprawki").title = poprawki;
    document.getElementById("fort").title = fort;
}

function view(x) {
    
    slide.przyczyny.style.display = "none";
    slide.przebieg.style.display = "none";
    slide.postacie.style.display = "none";
    slide.skutki.style.display   = "none";
    
    button.przyczyny.style.color = "white";
    button.przebieg.style.color = "white";
    button.postacie.style.color = "white";
    button.skutki.style.color   = "white";
    
    if(x!=null){

        switch(x){
            case "Przyczyny":
                slide.przyczyny.style.display = "block";
                button.przyczyny.style.color  = "black";
                break;    
            case "Przebieg":
                slide.przebieg.style.display = "block";
                button.przebieg.style.color  = "black";
                break;    
            case "Postacie":
                slide.postacie.style.display = "block";
                button.postacie.style.color  = "black";
                break;
            case "Skutki":
                slide.skutki.style.display   = "block";
                button.skutki.style.color    = "black";
                break;    
        }
        
        slide.space.style.height = "20vh";
        menu.style.borderBottom = "2px solid darkblue";
        slide.back.style.display = "block"
    }
}

function scrollWin() {
  window.scrollTo(0, 0);
}