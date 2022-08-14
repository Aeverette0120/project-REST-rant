const React = require('react')
const Def = require('./places/default')

function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              
              <div>
                <img className="myPic"src="/Images/burger.jpg" alt="Burger Picture"></img>
              </div>
              <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

          </main>
      </Def>
    )
  }
  

module.exports = home
