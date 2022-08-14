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
                <img className="catPic" src="/Image/404Cat.jpg" alt="Cat Picture"></img>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404

