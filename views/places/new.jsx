const React = require('react')
const Def = require('../places/default')

function new_form () {
    return (
        <Def>
          <main>
            <h1>Add a New Place</h1>
            <link rel="stylesheet" href="/css/style.css"></link>
          </main>
        </Def>
    )
}

module.exports = new_form
