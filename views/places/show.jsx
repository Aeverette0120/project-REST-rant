const React = require("react");
const Def = require("./default");

function show(data) {
  let message = ''
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating = (
    <h3 className="inactive">
      Not yet rated
    </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
  }
  

  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }

  if (data.message) {
    message = (
      <h4 className="alert-danger">
        {data.message}
      </h4>
    );
  }
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
      
        <img className="myPic" src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
        </div>
        <div className="col-sm-6">
          <h1> {data.place.name}</h1>
          <h2>
            Rating
            {rating}
            </h2>

          <h2> Description
          </h2>
          <h3>
            {data.place.showEstablished()}
          </h3>
          <h4>
            Serving {data.place.cuisines}
          </h4>
          <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
          Edit
        </a>

        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
        </div>
        </div>
        <hr/>
        <h2>Comments</h2>
        <div class="row">
          <div class="border col-sm-4">
        {comments}
        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
        </div>
        </div>
        <hr/>
        <h2> Got Your Own Rant or Rave?</h2>
        <form method="POST" action={`/places/${data.place.id}/comment`}>
          <div class="row">
          <div class="form-group col-sm-12">
            <label for="content">Content</label>
            <textarea id="content" name="content" class="form-control"></textarea>
          </div>
          </div>
          <div class="row">
            <div class="form-group col-sm-4">
              <label for="author">Author</label>
              <input id="author" name="author" class="form-control"></input>
            </div>
            <div class="form-group col-sm-4">
              <label for="stars">Star Rating</label>
              <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" class="form-control"></input>
            </div>
            <div class="form-group col-sm-2">
              <label for="rant">Rant?</label>
              <input type="checkbox" id="rant" name="rant" class="form-control"></input>
            </div>
          </div>
          <button type="submit" class="btn btn-primary" value= "Add Comment">Add Comment</button>
        </form>
      </main>
    </Def>
  );
}

module.exports = show;
