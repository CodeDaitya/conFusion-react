import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);
    
    this.state = {

    };
  }
  
  mapComments(comments) {console.log(comments);
    if (comments !== null) {
      return comments.map(comment => {
        return (
          <div key={comment.id} className="comment">
            <p>{comment.comment}</p>
            <p className="ml-1">-- {comment.author}, {comment.date}</p>
          </div>
        );
      });
    } else {
      return (<div></div>);
    }
  }
  
  render() {
    if (this.props.dish != null) {
      const comments = this.mapComments(this.props.dish.comments);
      
      return(
        <div className="row mt-4 m-1">
          <Card className="col-md-5">
            <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name}/>
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
          <div className="col-md-5">
            <h3>Comments</h3>
            {comments}
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default DishDetail;