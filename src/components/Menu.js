export function Menu(){

    return(
        <div>
            <nav id="navmenu">
            <label for="toggle"> &#9776;</label>
            <input type="checkbox" id="toggle"/>
            <div class="nav-list">
                <div><a class="link" href="#projectSection"> Mitt arbeid</a></div>
                <div><a class="link" href="#ommeg"> Om meg</a></div>
                <div><a class="link" href="#footer"> Kontakt meg</a></div> 
            </div>
        </nav> 
      </div>
    )  
}