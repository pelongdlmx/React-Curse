import React, { Component } from 'react'
import { connect } from "react-redux"
import { bindActionCreators } from "redux";
import { getUsers } from "../actions/index"
import { Card  } from 'react-bootstrap';
// import UserItem from "../components/userItem"
// import "materialize-css/dist/css/materialize.min.css" 


class Home extends Component{

    componentWillMount(){
        this.props.getUsers(); 
      }

    render(){
        let users = []; 
        if (this.props.users.data){
            console.log(this.props.users)
            
            users = this.props.users.data.map((currentValue, index, array) => {
                return(
                    // <p>{currentValue.name}</p>
                    <div className="col-3 padding-b">
                        <Card>
                            <Card.Img variant="top" src={currentValue.flag} className="height-flag"/>
                            <Card.Body>
                            <Card.Title>{currentValue.name}</Card.Title>
                            <Card.Text>
                                {currentValue.region}<br/>{currentValue.subregion}
                            </Card.Text>
                            <Card.Text>
                                {/* Time: {z.toLocaleTimeString()}   */}
                            </Card.Text>
                            </Card.Body>
                        </Card> 
                    </div>
                )
            })
        }
        return(
            <div className="row" id="showData">
                {users}
            </div>
        ); 
    }
}


//this function convert the value of the store in props for the component
function mapStatetoProps(state) {
    return {
        users: state.getUsers
        }
    }
    
//this function make a dispatch of the action getUsers
function mapDispatchToProps(dispatch) {
return bindActionCreators({
getUsers
}, dispatch)
}
    
export default connect(mapStatetoProps, mapDispatchToProps)(Home) 