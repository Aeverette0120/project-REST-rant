const React = require("react");
const Def = require("../places/default");

function new_form() {
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        
        <link rel="stylesheet" href="/css/style.css"></link>
        <form method="POST" action="/places">
          <div class="row">
  <div class="form-group col-sm-6">
    <label htmlFor="name">Place Name</label>
    <input id="name" name="name" required />
  </div>
  <div>
  <div class="form-group col-sm-6">
    <label htmlFor="pic">Place Picture</label>
    <input id="pic" name="pic" />
  </div>
  </div>
  </div>
  <div class="row">
  <div class="form-group col-sm-4">
    <label htmlFor="city">City</label>
    <input id="city" name="city" />
  </div>
  <div class="form-group col-sm-4">
    <label htmlFor="state">State</label>
    <input id="state" name="state" />
  </div>
  <div class="form-group col-sm-4">
  <label htmlfor="founded">Founded Year</label>
  <input type ="number" className="form-control" id="founded" name="founded" value={new Date().getFullYear()} />
</div>
</div>
  <div class="form-group">
    <label htmlFor="cuisines">Cuisines</label>
    <input id="cuisines" name="cuisines" required />
  </div>
  <input type="submit" value="Add Place" />
</form>

      </main>
    </Def>
  );
}

module.exports = new_form;
