import React from 'react';


class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state={ term:''};
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange (e){ this.setState({term: e.target.value}); };

     onFormSubmit(e)
    {
        e.preventDefault();   
        const data = this.state.term;
        data === ''? alert("Enter the name of the item") : 
        this.props.onSearchSubmit(this.state.term); // pass the Value to the parent Element using the intermediare function
    }

    render() {
        return (
            <div className="ui segment" >
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label htmlFor="imageName">Search fo an image</label>
                        <input id="imageName" placeholder="Type the Image Name"  type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange} />
                    </div>
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}


export default SearchBar;