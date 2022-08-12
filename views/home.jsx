const React = require('react')
const Def = require('./places/default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <link rel="stylesheet" href="/css/style.css"></link>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

          </main>
      </Def>
    )
  }
  

module.exports = home
