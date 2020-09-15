import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { SearchList } from '../components/SearchList';

export default class Search extends React.Component{
    constructor(props){
        // Init Props and States
        super(props); // calling a parent constructor
        // initalize the props from the parent and give it to child
        // props = {} // It is an Empty Object
        // props.title = "Image Search App"
        this.searchTxtValue = '';
        this.state = {imagedata:[]};

    }
    componentDidMount(){
        this.giveMeTheData();
    }
    giveMeTheData(searchValue){
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=vFRSFWo6g7vJ7ZAjt3DMDolU52ORTxwH&q=Iron%20Man&limit=5';
        const promise = fetch(url);
        promise.then(response=>{
            var p = response.json();
            p.then(result=>{
                console.log('Data is ',result.data);
                this.setState({imagedata:result.data});

            }).catch(err=>{
                console.log('Error in JSON ',err);
            })
            console.log('Response is Coming ',response);
        }).catch(err=>{
            console.log('Error Coming From the Server ',err);
        })
    }

    takeInput(event){
        let data = event.target.value;
        this.searchTxtValue = data;
        console.log("calling",this.searchTxtValue);
    }
    searchNow(){
        // console.log("search");
        this.giveMeTheData(this.searchTxtValue)
    }
    render(){
        console.log('RENDER :::: Image Data is ',this.state.imagedata);
      return (
        <div >
        <h1 className='alert-success text-center'>{this.props.title} &nbsp; {this.props.name}</h1>
        <SearchBar takeInput={this.takeInput.bind(this)} btClick={this.searchNow.bind(this)}  />

        <SearchList imagedata={this.state.imagedata} />
        </div>
      )
    }
}

/* DUMB AND OLD
function Search(){
    return (<div >
        <h1 className='alert-success text-center'>Search Engine App</h1>
        <SearchBar/>
        <SearchList/>
    </div>)
}
export default Search;
*/