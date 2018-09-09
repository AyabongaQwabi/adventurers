
import React, { Component } from 'react';
import Header from '../components/header';
import Filter from '../components/filter';
import Feed from '../components/feed';

const retroImages = ['/static/images/m1.jpg','/static/images/m2.jpg','/static/images/m3.jpg','/static/images/m4.jpg']
const feeds = [{
        image: '/static/images/artwar.jpg',
        title: 'Nkululeko Zulu', 
        description: "This was just meant to be a hair study in vector to see what I can achieve... I'm on Instagram too",
        username: '@artnwar', 
        tags:['all','black-and-white'] ,
        type:'single',
    },
    {
        image: '/static/images/chris.jpg' ,
        title: 'Christopher Junior Masuabi', 
        description: "Christopher the chuckle bberg  #ChrisDesign",
        username: '@chris',
        tags:['all','mural'] ,
        type:'single',
    },
    {
        images: retroImages,
        title: 'Ntsako Terence Maluleke' ,
        description: "Limited Edition WAY WAY Iconic Collection prints",
        username: '@wayway_sa' ,
        tags:['all','retro'] ,
        type:'multi',
    },
    {
        image: '/static/images/peace.jpg' ,
        title: 'Rob Crawford' ,
        description: "Peace In Our Time.",
        username: '@mrgrimsley_' ,
        tags:['all','mural'] ,
        type:'single',
    },
    {
        image: '/static/images/mama.jpg' ,
        title: 'Baba Tjeko' ,
        description: "WOMAN OF STRENGTH.",
        username: 'Zondeni Sobukwe' ,
        tags:['all','black-and-white'] ,
        type:'single',
    }
]


class home extends Component {
    constructor(){
        super()
        this.filterFeeds = this.filterFeeds.bind(this);
        this.state = {pageFeeds:[]}
    }

    filterFeeds(item){
        return () =>{
            const pageFeeds = feeds.filter(feed => {
                const matchedTags = feed.tags.filter(tag => tag === item);
                const hasTag = matchedTags.length !== 0;
                return hasTag;
            })
            
            this.setState({pageFeeds})
        }
    }

    componentWillMount(){
        this.setState({pageFeeds: feeds})
    }

    render(){
        const { pageFeeds } = this.state;
        console.info('PageFeeds: ',pageFeeds)
        return (
            <div>
                <Header title='South African illustrations' subtitle='as seen on facebook' />
                <Filter onFilter={this.filterFeeds} />
                <Feed posts={pageFeeds} />
                <style jsx>{`@import '/static/css/bootstrap/bootstrap.min.css'`}</style>
            </div>
        )
    }
};

export default home;