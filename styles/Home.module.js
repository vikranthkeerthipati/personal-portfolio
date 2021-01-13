import css from 'styled-jsx/css'

export default css.global`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;800&display=swap');

html, body{
    background-color: rgb(17,31,77);
    color: white;
    font-family: 'Montserrat', sans-serif!important;
}

#root{
    background-color: rgb(17,31,77);
    color: white;
    font-family: 'Montserrat', sans-serif!important;
}

#particles{
    position: fixed;
    width: 100%;
    height: 100%;
}

h1{
    display:inline-block; 
    font-size: 6vh!important;
    border-bottom: 2px solid rgba(255, 223, 180,0.3);

}

h6{
    display:inline-block; 
}

a {
    color: #ffdfb4;
}

.overlay {
      position: relative;
}

.colContent{
    text-align: center;
}

.typed-cursor{
    color: #ffdfb4;
}






.links {
    margin-top: 6vh;
}

  .jumbotron h1, p{
      text-align: center;
  }

  .interact {
      z-index: 0;
  }
  
  `