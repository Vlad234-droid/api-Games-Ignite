import axios from 'axios';
import {
	popularGamesURL,
	upcomingGamesURL,
	newGamesURL,
	searchGame,
} from '../api';

// Action Creator

export const loadGames = () => async (dispatch) => {
	// Fetch axios

	const popularData = await axios.get(popularGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	const upcomingData = await axios.get(upcomingGamesURL());
	dispatch({
		type: 'FETCH_GAMES',
		payload: {
			popular: popularData.data.results,
			upcoming: upcomingData.data.results,
			newGames: newGamesData.data.results,
		},
	});
};
export const fetchSearched = (game_name) => async (dispatch) => {
	const searchGames = await axios.get(searchGame(game_name));

	dispatch({
		type: 'FETCH_SEARCHED',
		payload: {
			searched: searchGames.data.results,
		},
	});
};
