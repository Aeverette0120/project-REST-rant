const React = require('react')
const Def = require('./places/default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <link rel="stylesheet" href="/css/style.css"></link>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                <img className="catPic" src="./Images/404Cat.jpg" alt="TigerPicture"></img>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404

