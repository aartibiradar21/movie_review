"use client"
import Actionrow from "./actionrow.js";
import React, { useState } from 'react';

const Movie_data = () => {
  const [movies, setMovies] = useState([
	{
				id:0,
	  			title:"Dear Zindgi",
	  			year:"2023",
	  			time:"3h:23sec",
	  			genre:"drama,RomanceS",
	  			description:"Kaira is a budding cinematographer in search of a perfect life. Her encounter with Jug, an unconventional thinker, helps her gain a new perspective on life. She discovers that happiness is all about finding comfort in life's imperfections.",
	  			},
	  			
	  			{
	  			id:1,
	  			title:"Brave",
	  			year:"2012",
	  			time:"1h:33m",
	  			genre:"Adventure,comedy",
	  			description:"Determined to make her own path in life, Princess Merida defies a custom that brings chaos to her kingdom. Granted one wish, Merida must rely on her bravery and her archery skills to undo a beastly curse."},
	  			
	  			{
	  			id:2,
	  			title:"moana",
	  			year:"2016",
	  			time:"1h 47m",
	  			gener:"Adventure,comedy",
	  			description:"In Ancient Polynesia, when a terrible curse incurred by the Demigod Maui reaches Moana's island, she answers the Ocean's call to seek out the Demigod to set things right."},
	  			
	  			{
	  			id:3,
	  			title:"mulan",
	  			year:"1998",
	  			time:"1h 27m",
	  			genre:"Adventure,comedy",
	  			description:"To save her father from death in the army, a young maiden secretly goes in his place and becomes one of China's greatest heroines in the process.."
	  			},
	  			
	  			{
	  			id:4,
	  			title:"He Named Me malala",
	  			year:"1998",
	  			time:"1h 27m",
	  			genre:"Adventure,comedy",
	  			description:"A look at the events leading up to the Taliban's attack on Pakistani schoolgirl Malala Yousafzai for speaking out on girls' education, followed by the aftermath, including her speech to the United Nations.."
	  			},
	  			
	  			{
	  			id:5,
	  			title:"Soul Surfer",
	  			year:"2011",
	  			time:"1h 52m",
	  			genre:"Adventure,comedy",
	  			description:"Teenage surfer Bethany Hamilton overcomes the odds and her own fears of returning to the water after losing her left arm in a shark attack."
	  			},
	  			
	  			{
	  			id:6,
	  			title:"Bend it Like Backham",
	  			year:"2002",
	  			time:"1h 52m",
	  			genre:"comedy, Drama & Romance",
	  			description:"Two ambitious girls, despite their parents' wishes, have their hearts set on careers in professional football.."
	  			},
	  			
	  			{
	  			id:7,
	  			title:"Into The Wild",
	  			year:"2007",
	  			time:"2h 28m",
	  			genre:"Drama,Biography",
	  			description:"After graduating from Emory University, top student and athlete Christopher McCandless abandons his possessions, gives his entire $24,000savings account to charity and hitchhikes to Alaska to live in the wilderness. Along the way, Christopher encounters a series of characters that shape his life.."
	  			},
	  			
	  			{
	  			id:8,
	  			title:"The Pursuit Of Happyness",
	  			year:"2006",
	  			time:"1h 27m",
	  			genre:"Adventure,comedy",
	  			description:"A struggling salesman takes custody of his son as he's poised to begin a life-changing professional career.."
	  			},
	  			
	  			{
	  			id:9,
	  			title:"The Intouchable",
	  			year:"2011",
	  			time:"1h 52m",
	  			genre:"Drama,Biography,Drama",
	  			description:"After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver."
	  			},
	   ]);

        const [current, setCurrent] = useState({});

            const handleVoteUp = (id) => {
            const newvote = { ...current };

            if (newvote[id] === undefined) {
              newvote[id] = 1;
            } else {
              newvote[id] += 1;
            }
            setCurrent(newvote);
          };

          const handleVoteDown = (id) => {
            const newvote = { ...current };

            if (newvote[id] === undefined) {
              newvote[id] = -1;
            } else {
              newvote[id] -= 1;
            }
            setCurrent(newvote);
          };

          const handleDelete = (id) => {
            const updatedMovies = movies.filter((movie) => movie.id !== id);
            setMovies(updatedMovies);
          };
          
          const sortedMovies = movies.sort((a, b) => {
            const voteA = current[a.id] || 0;
            const voteB = current[b.id] || 0;
            return voteB - voteA;
          
          });



          
          return (
            <div>
              {sortedMovies.map((movie) => (
                <Actionrow
                  key={movie.id}
                  movie={movie}
                  votes={current[movie.id]}
                  onVoteUp={() => handleVoteUp(movie.id)}
                  onVoteDown={() => handleVoteDown(movie.id)}
                  onDELETE={() => handleDelete(movie.id)}
                />
              ))}
            </div>
  );
};

export default Movie_data;

























