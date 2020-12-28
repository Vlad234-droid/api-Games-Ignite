import React, {useState} from 'react';
//anumation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from '../img/logo.svg';
//redux and routers
import {fetchSearched} from '../actions/gameActions';
import {useDispatch} from 'react-redux';
//animation
import {fadeIn} from '../animation';

const Nav = () => {
	const dispatch = useDispatch();
	const [textInput, setTextInput] = useState('');

	const inputHandler = (e) => {
		setTextInput(e.target.value);
	};

	const submitSearch = (e) => {
		e.preventDefault();
		dispatch(fetchSearched(textInput));
		setTextInput('');
	};
	const clearSearched = () => {
		dispatch({type: 'CLEAR_SEARCHED'});
	};
	return (
		<StyledNav variants={fadeIn} initial="hidden" animate="show">
			<Logo onClick={clearSearched}>
				<img src={logo} alt="logo" />
				<h1>Ignite</h1>
				<form className="search">
					<input value={textInput} onChange={inputHandler} type="text" />
					<button onClick={submitSearch} type="submit">
						Search
					</button>
				</form>
			</Logo>
		</StyledNav>
	);
};

const StyledNav = styled(motion.nav)`
	width: 80%;
	margin: 0 auto;
	padding: 1rem 2rem;
	text-align: center;
	input {
		width: 60%;
		font-size: 1.2rem;
		padding: 0.5rem;
		border: none;
		margin-top: 1rem;
		box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
		outline: none;
	}
	button {
		font-size: 1.2rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: poiner;
		background: #ff7676;
		color: white;
	}
`;
const Logo = styled(motion.div)`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
	cursor: pointer;
	img {
		height: 2rem;
		width: 2rem;
	}
`;

export default Nav;
