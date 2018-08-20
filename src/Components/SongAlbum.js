import React, {Component} from 'react';

class Background extends Component{
    constructor(){
        super();
        this.state = {
            pictures: [],
        }
    }

    componentDidMount(){
        fetch("https://itunes.apple.com/us/rss/topalbums/limit=2/json")
        .then(results=> {
            return results.json();
        }).then(data => {
            console.log(data.feed.link)
            let pictures = data.feed.link.map((l) => {
                console.log("====")
                console.log()
                return (
                    <div>
                        <p>{l.attributes.href}</p>
                    </div>
                )
            })
            this.setState({pictures: pictures});
            console.log("State", this.state.pictures);
        })
    }
    
    render(){
        return (   
            <div>Song album</div> 
            // <div>{this.state.pictures}</div>
        )
    }
}

export default Background;