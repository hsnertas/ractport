import React from 'react';
import Card from '../components/Card';
import burger from '../assets/images/burger.png';
import bookbrain from '../assets/images/bookbrain.png';
import dayplanner from '../assets/images/dayplanner.png';
import password from '../assets/images/password.png';
import quiz from '../assets/images/quiz.png';
import readme from '../assets/images/readme.png';
import weather from '../assets/images/weather.png';
import webtravelers from '../assets/images/webtravelers.png';


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Eat Da Burger',
                    subTitle: 'In this assignment, I created a burger logger with MySQL, Node, Express and a homemade ORM (yum!).',
                    imgSrc: burger,
                    link: 'https://nameless-falls-74805.herokuapp.com/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Book Brain',
                    subTitle: 'Book Brain which will serve as an interactive platform where people can read and save their books.',
                    imgSrc: bookbrain,
                    link: 'https://katapt.herokuapp.com/',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Work Day Scheduler',
                    subTitle: 'This is a simple calendar application that allows the user to save events for each hour of the day.',
                    imgSrc: dayplanner,
                    link: 'https://hsnertas.github.io/randey-con/',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Password Generator',
                    subTitle: 'Password Generator application that generates a random password based on user-selected criteria.',
                    imgSrc: password,
                    link: 'https://hsnertas.github.io/unitytrame/',
                    selected: false
                },
                {
                    id: 4,
                    title: 'Code Quiz',
                    subTitle: 'This app runs in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code.',
                    imgSrc: quiz,
                    link: 'https://hsnertas.github.io/armut34/',
                    selected: false
                },
                {
                    id: 5,
                    title: 'Good README Generator',
                    subTitle: "This a command-line application that dynamically generates a README.md from a user's input.",
                    imgSrc: readme,
                    link: 'https://drive.google.com/file/d/11vATnblnZbsOxgnKJiFinL4MiyqPHuAR/view',
                    selected: false
                },
                {
                    id: 6,
                    title: 'Weather Dashboard',
                    subTitle: 'This weather dashboard uses Javascript to dynamically update weather data from OpenWeather, a third-party server-side API.',
                    imgSrc: weather,
                    link: 'https://hsnertas.github.io/propenphyg/',
                    selected: false
                },
                {
                    id: 7,
                    title: 'Travel Advisory',
                    subTitle: 'This applaction helps users to search different country all over the world with a focus on weather, news, maps, pandemic',
                    imgSrc: webtravelers,
                    link: 'https://hsnertas.github.io/rainvoke/',
                    selected: false
                },
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;