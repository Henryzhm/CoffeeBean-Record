import { useState, useEffect } from "react";

import CoffeeCard from "./CofeeCard";

import './App.css';
import SearchIcon from './search.svg';

// API Key
const API_URL = 'http://www.omdbapi.com?apikey=4de70aba';

const App = () => {
    const [beans, setBeans] = useState([]);

    // Function to search for movies
    const searchBeans = async (title) => {
        try {
            const response = await fetch(`${API_URL}&s=${title}`);
            const data = await response.json();

            setBeans(data.searchBeans);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    // Run searchMovies on component mount
    useEffect(() => {
        searchBeans('Spiderman');
    }, []);

    return (
        <div className="app">
            <h1>CoffeeLand</h1>

            <div className="search">
                <input 
                    placeholder="Search for coffee beans?" 
                    value="Panama Gesha"
                    onChange={() => {}}
                />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            {beans?.length > 0
                ? (
                    <div className="container"> 
                        {beans.map((coffeeBean) => (
                            <CoffeeCard coffeeBean={  }/>
                        ))}
                    </div>
                ) : (
                    <div className="empty">     
                        <h2>No Beans Found</h2>
                    </div>
                )
            }
            
        </div>
    );
};

export default App;
