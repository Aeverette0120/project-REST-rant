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
                <img className="catPic" src="https://images.unsplash.com/photo-1557246565-8a3d3ab5d7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="TigerPicture"></img>
              </div>
          </main>
      </Def>
    )
  }
  

module.exports = error404

