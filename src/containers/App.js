import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

class App extends Component {
	constructor(){
		super();
		this.state = { //state er React object
			robots: [], //lager 2 objects robots og search
			search: ''
		}
	}

	componentDidMount(){ //kjører når component mounter DOM element
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json() )
		.then(users => this.setState({robots: users}) )
	}

//Custom funksjoner i klasser under React må defineres med function arrow
	OnSearchChange = (event) => { //denne funksjonen oppdateres hver gang av searchbox onChange
		this.setState({search: event.target.value}); //oppdaterer search state til å vise verdi i searchfield
	}

	render() {
		const {robots, search} = this.state;
		const filteredRobots = robots.filter(robots => { //filtrerer array robot
			return robots.name.toLowerCase().includes(search.toLowerCase()) //gjør robots name til lowercase og sjekker om den inkluderer bokstavene i search
		});
		return !robots.length ?
			<h1 className='tc f1'>Loading</h1> :
			(
				<div className='tc'>
					<h1 className='f1'>Robofriends</h1>
					<Searchbox searchChange={this.OnSearchChange}/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots= {filteredRobots}/>
						</ErrorBoundary>
					</Scroll>
				</div>
			);
	}
}

export default App;