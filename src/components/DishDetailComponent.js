import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class DishDetail extends Component {

    constructor(props){
        super(props);
    }

    renderComment(comments){
        if(comments != null){
            const commentList = comments.map( (comment) => {
                return(
                    <div>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>--{comment.author}, {(comment.date).substring(0,(comment.date).indexOf("T"))}</li>
                        </ul>
                    </div>        
                );
            });
            return (commentList);
        }
        else{
            return(<div></div>);
        }
    }

    renderDish(dish){
        return(
            <div className="row">

                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {this.renderComment(dish.comments)}
                </div>
                
            </div>
        );
    }

    render(){
        return( this.renderDish(this.props.dish));
    }
}

export default DishDetail;