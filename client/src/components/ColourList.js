import React, {Component} from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {v4 as uuid} from "uuid";

import {connect} from "react-redux";
import {getColours} from "../actions/ColourActions";
import PropTypes from "prop-types";

class ColourList extends Component {
    componentDidMount() {
        this.props.getColours();
    }

    render() {
        const {colours} = this.props.colour;
        return (
            <Container>
                <Button color="primary" style={{marginBottom: "2rem"}} onClick={() => {
                    const colour = prompt("Enter Colour");
                    if(colour) 
                    {
                        this.setState(state => ({
                            colours: [...state.colours, { _id: uuid(), color: colour }]
                        }));
                    }
                }}>Add Colour</Button>

                <ListGroup>
                    <TransitionGroup className="colour-list">
                        {colours.map(({ _id, color }) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                {color}
                                    <Button className="remove-btn" color="danger" size="sm" onClick={() => {
                                        this.setState(state => ({
                                            colours: state.colours.filter(colour => colour._id !== _id)
                                        }));
                                    }}><span style={{fontSize:"1.5rem",lineHeight:"1.25rem"}}>&times;</span></Button>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>

            </Container>
        );
    }
}

ColourList.propTypes = {
    getColours: PropTypes.func.isRequired,
    colour: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    colour: state.colour
});

export default connect( mapStateToProps, { getColours }) (ColourList);