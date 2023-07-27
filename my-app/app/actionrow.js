const Actionrow = ({ movie, votes, onVoteUp, onVoteDown, onDELETE }) => {
  return (
    <div className="movierow">
      <div className="image">
        <img className="movie_img" src="movie.image" alt="image2" height="100%" width="100%" />
      </div>

      <div className="action">
        <h1>{movie.title}</h1>
        <p>{movie.year} | {movie.genre} | {movie.time}</p>
        <h2>Description</h2>
        <p>{movie.description}</p>
      </div>

      <div className="like_row">
        <div className="like_col1">
          <img src="Icon - Like (1).svg" alt="image1" height="100%" width="100%" onClick={() => onVoteUp(movie.id)} />
        </div>
        <div className="dotRow"><h2 className="dot">{votes}</h2></div>
        <div className="dislike_col2">
          <img src="Icon - Like.svg" alt="image" height="100%" width="100%" onClick={() => onVoteDown(movie.id)} />
        </div>

        <div className="delete_col">
          <img src="Iocn - Delete.svg" alt="image" height="100%" width="100%" onClick={() => onDELETE(movie.id)} />
        </div>
      </div>
    </div>
  );
};

export default Actionrow;

