import React, { useEffect, useState } from 'react'

// Layout / HOC (high order component) 
import DefaultLayout from '../layout/DefaultLayout'


// Components
import EntertainmentCard from '../components/Entertainment/EntertainmentCard.component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/PosterSlider/PosterSlider.Component'

// api's
import axios from 'axios'


const HomePage = () => {

    const [recommendedMovies, setRecommendedMovies ] = useState([]);
    const [premierMovies, setPremierMovies ] = useState([]);
    const [onlineStreamEvents, setOnlineStreamEvents ] = useState([]);


    useEffect(()=>{
        const requestTopRatedMovies = async () => {
            const getTopRatedMovies = await axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=315c3144bf8411adf2960ff883812713")
            setRecommendedMovies(getTopRatedMovies.data.results)
        }
        requestTopRatedMovies()
    }, []);

        useEffect(()=>{
        const requestPopularMovies = async () => {
            const getPopularMovies = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=315c3144bf8411adf2960ff883812713")
            setPremierMovies(getPopularMovies.data.results)
        }
        requestPopularMovies()
    }, [])


    useEffect(()=>{
        const requestUpcomingMovies = async () => {
            const getUpcomingMovies = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=315c3144bf8411adf2960ff883812713")
            setOnlineStreamEvents(getUpcomingMovies.data.results)
        }
        requestUpcomingMovies()
    }, [])
       


  return (
    <>
        <HeroCarousel />

        <div className='container mx-auto px-4 md:px-12 my-8'>
            <h1 className='text-2xl text-bold text-gray-800 sm:,l-3 my-3'>The Best of Entertainment</h1>
            <EntertainmentCard />
        </div>

        <div className='container mx-auto px-4 md:px-12 my-8'>
            <PosterSlider 
            title= "Recommended Movies"
            subtitle="List of Recommended Movies"
            posters= {recommendedMovies}
            isDark={false}
            />
        </div>

        <div className='bg-premier-800 py-12'>
            <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="RuPay" className='w-full h-full'/>
             <PosterSlider 
            title= "Premiers"
            subtitle="Brand new release every Friday"
            posters= {premierMovies}
            isDark={true}
            />
            </div>          
        </div>

        <div className='container mx-auto px-4 md:px-12 my-8'>
             <PosterSlider 
            title= "Online Streaming Events"
            subtitle="Online Streaming Events"
            posters= {onlineStreamEvents}
            isDark={false}
            />
        </div>
    </>
  )
}

export default DefaultLayout(HomePage) 