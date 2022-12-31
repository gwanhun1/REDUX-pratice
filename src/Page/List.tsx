import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, light } from '../Redux/action';

function List({ data }: any[] | any) {
	const Click = useDispatch();
	return (
		<div className="flex justify-center align-middle">
			<div className="flex flex-col justify-center align-middle w-80 h-full border border-solid border-black ml-1 mb-1">
				<div className="flex justify-center">
					<input
						type="image"
						src={data.large_cover_image}
						alt="포스터이미지"
						className="w-60 h-60  hover:cursor-pointer rounded-lg"
						onClick={() => {
							Click(light());
						}}
					/>
				</div>
				<div className="flex justify-center items-center w-full h-12 mt-3 text-lg font-bold ">{data.title}</div>
				<div className="flex justify-center w-full">{data.year}</div>
				<div className="flex justify-center w-full">{data.genres[0]}</div>
				<div className="flex justify-center items-center w-full h-10">
					<button
						type="button"
						className=" bg-blue-300 rounded-full w-20 text-center hover:cursor-pointer"
						onClick={() => {
							Click(increment());
						}}
					>
						LIKE!!
					</button>
				</div>
				<div className="flex justify-center w-full">{data.rating}</div>
			</div>
		</div>
	);
}

export default List;
