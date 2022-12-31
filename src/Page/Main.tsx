import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement } from '../Redux/action';
import List from './List';

export interface Reducer {
	countReducer: string;
	lightReducer: string;
}

function Main() {
	const [movieData, setMovieData] = useState<any>();
	useEffect(() => {
		fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`)
			.then((res) => res.json())
			.then((res) => setMovieData(res.data.movies));
	}, []);

	const counter = useSelector((state: Reducer) => state.countReducer);
	const darkMode = useSelector((state: Reducer) => state.lightReducer);
	const Click = useDispatch();

	return (
		<div className={`flex  flex-col justify-center items-center  ${darkMode ? ' bg-zinc-500' : 'bg-white'} `}>
			<div className="flex-auto text-6xl mb-4">MOVIE BOX & LIKE : {counter}</div>
			<button
				type="button"
				className="flex justify-center items-center mb-6 w-20 h-10 rounded-full bg-red-400 hover:cursor-pointer"
				onClick={() => {
					Click(decrement());
				}}
			>
				<div>Nope!!</div>
			</button>
			<div className="flex ">
				<div className="flex flex-wrap justify-center align-middle">
					{movieData && movieData.map((data: any) => <List data={data} />)}
				</div>
			</div>
		</div>
	);
}

export default Main;
