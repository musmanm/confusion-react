import React from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { interval } from 'rxjs';
import '../App.css';

function RenderDish({dish}){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
}

function RenderComments({comments}){
    if(comments != null){
        const commentList = comments.map( (comment) => {
            return(
                <div>
                    <ul className="list-unstyled">
                        <li>{comment.comment}</li>
                        <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse((comment.date).substring(0,(comment.date).indexOf("T")))))}</li>
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

const DishDetail = (props) =>{
    if(props.dish != null){
        return( 
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.dish.comments} />
                    </div> 
                </div>
                 
            </div>
        );
    }
    else{
        return(<div></div>);
    }
}


export default DishDetail

















/* import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import { interval } from 'rxjs';
import '../App.css';

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
                            <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse((comment.date).substring(0,(comment.date).indexOf("T")))))}</li>
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
        if(dish !=null){
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
        else{
            return(
                <div></div>
            );
        }
    }

    render(){
        return( 
            <div className="container">
                {this.renderDish(this.props.dish)}
            </div>
        );
    }
}

export default DishDetail; */