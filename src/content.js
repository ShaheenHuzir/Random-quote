import React from 'react';
import generateVerseId from './generate';
import tweetme from './assets/tweet.png';
import Quote from './quote';
class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            verseNo: "",
            showMe: false,
        }

        this.verseId = "PRO.1.1";  //set to default number for intial render
    }

    //fetches using verseId given as argument
    fetchQuote = (verse) => {
        fetch(`https://api.scripture.api.bible/v1/bibles/de4e12af7f28f599-01/verses/${this.verseId}?content-type=text`, {
            method: "GET",
            headers: {
                'api-key': "a99efbcc373db5d9e2c9a9ba57746680",
                "content-type": "text",
            },
        })
            .then(response => response.json())
            .then(data => {
                console.log(data.data.content)
                this.setState({
                    quote: data.data.content.replace(/\[\d+\]/, ""),//replaces verse number in content text
                    verseNo: data.data.reference
                })
            }).catch(error=>console.log(error));
    }
    componentDidMount() {
        this.fetchQuote(this.verseId);
        //calls the fetch after component mounts for intial render with intial verseId
        
            this.setState({
                showMe:false,
            })

    }
    
    
    generateNewQuote = () => {
        this.verseId = generateVerseId();// on each click generate a new verseId and re-assign the initial verseId
        this.fetchQuote(this.verseId);//on each click call the fetch for newly generated verseId
        console.log(this.verseId);//for debugging
            console.log(this.state.showMe)
             let showToggle = this.state.showMe;
             this.setState({
                 showMe:true,
             })
    
    }

    render() {

        let { quote, verseNo,showMe } = this.state;

        return (
            <div className="wrapper container" id="quote-box">
                 <div className={`quote-wrapper`} >
                 <Quote quotes={quote} verseNumber={verseNo} animate={showMe}/>
                 
                 <div className="w-100">
                 <a href="twitter.com/intent/tweet" className="float-left" id="tweet-quote">
                 <img src={tweetme} width="50px" height="50px"/></a>
                 </div>
                 </div>
                
                <div className="btn-wrap">
                        <button id="new-quote" onClick={this.generateNewQuote}>Generate New Quote</button>
                    </div>
                </div>


            

        
        )
    }
}

export default Content;