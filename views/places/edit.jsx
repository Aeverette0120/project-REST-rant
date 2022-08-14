const React = require("react");
const Def = require("./default.jsx");

function edit_form(data) {
  return (
    <Def>
      <main>
        <h1>Edit Place</h1>
        <form method="POST" action={`/places/${data.index}?_method=PUT`}>
          
            <div>
              <label htmlFor="name">Place Name</label>
              <input id="name" name="name" defaultValue={data.place.name} required />
            </div>
            <div>
              <label htmlFor="pic">Place Picture</label>
              <input
                id="name"
                name="name"
                
              />
            </div>
            <div>
              <label htmlFor="city">City</label>
              <input id="city" name="city" />
            </div>
            <div>
              <label htmlFor="state">State</label>
              <input id="state" name="state" />
            </div>
            <div>
              <label htmlFor="cuisines">Cuisines</label>
              <input id="cuisines" name="cuisines" required />
            </div>
            <input type="submit" value="Add Place" />
          
        </form>
      </main>
    </Def>
  );
}

module.exports = edit_form;
