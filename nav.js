const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <h1>Chalo Rider</h1>
        <div class="nav">
          <ul>  
            <li>
              <a href="" target=""><input type="button" class="button1" value="Home"></a>
            </li>
            <li>
              <a href="" target=""><input type="button" class="button1" value="Posts"></a>
            </li>
            <li>
              <a href="" target="_blank"><input type="button" class="button1" value="Shop"></a>
            </li>

            <li>
              <a href="" target="_blank"><input type="button" class="button1" value="Maps"></a>
            </li>

            <li>
              <a href="" target="_blank"><input type="button" class="button1" value="Music"></a>
            </li>

          </ul>
        </div>
    `;
}

createNav();