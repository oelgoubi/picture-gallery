import React from 'react';



class ImageCard extends React.Component {
    constructor(props){
        super(props);
        
        this.state={spans :0};
        this.imageRef = React.createRef();
    }
    componentDidMount(){
        this.imageRef.current.addEventListener('load',this.setSpan)
        
    }
      
    setSpan = _ =>{
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height/10);// GRID auto rows = 10; height grid
                                           // figure out how many rows the pics should take
         
        this.setState({spans});
    }

    render() {
        const { description, urls } = this.props.image;
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}


export default ImageCard;