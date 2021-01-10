import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
  
  function RenderComments({comments}) {
    if (comments !== null) {
      return comments.map(comment => {
        return (
          <div key={comment.id} className="comment">
            <p>{comment.comment}</p>
            <p className="ml-1">-- {comment.author}, {new Intl.DateTimeFormat(
                'en-US',
                {year: 'numeric', month: 'short', day: '2-digit'}
              )
              .format(new Date(Date.parse(comment.date)))}</p>
          </div>
        );
      });
    } else {
      return (<div></div>);
    }
  }
  
  const RenderDish = ({dish}) =>  {
    if (dish !== undefined) {
      return(
        <div className="container">
          <div className="row mt-4 m-1">
            <Card className="col-md-5">
              <CardImg width="100%" src={dish.image} alt={dish.name}/>
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
            <div className="col-md-5">
              <h3>Comments</h3>
              <RenderComments comments={dish.comments}/>
            </div>
          </div>
        </div>
      );
    } else {
      return(<div></div>);
    }
  }

export default RenderDish;