import React from 'react';

class SearchBar extends React.Component{

    state ={term:''};

    onFormSubmit=(event)=>{
        event.preventDefault();
        this.props.onFormSubmit(this.state.term);

    }
    onChange=(event)=>{
        this.setState({term: event.target.value});
        console.log(this.state.term);
    }

    render() {
        return (
          <div className="search-bar ui segment" style={{marginTop:"15px"}}>
            <form onSubmit={this.onFormSubmit} className="ui form">
              <div className="field">
                <label className="ui medium top left attached label red">
                  Youtube Video Search
                </label>
                <input
                  type="text"
                  value={this.state.term}
                  onChange={this.onChange}
                />
              </div>
            </form>
          </div>
        );
      }
}

export default SearchBar;
