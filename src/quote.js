import React from 'react';
import './App.css';

class Quote extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            animate:false,
        }
    }

   

    render(){
        let {quotes,verseNumber} = this.props;
        return (
                   <div>
                        <blockquote className="quote">

                            <span><p id="text">{quotes}</p></span>
                            <cite className="float-right" id="author">{verseNumber}</cite>
                        </blockquote>

            </div>

        )
    }


}

export default Quote;