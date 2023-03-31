import { height } from '@mui/system'
import React from 'react'
import { Button, ButtonGroup } from '@mui/material'
export default class ProjectButtons extends React.Component{
    sendBack = () => {
        alert('sending back')
        this.props.pcallBack("b1");
    }
    sendBack2 = () => {
        alert('sending back')
        this.props.pcallBack("b2");
    }
    sendBack3 = () => {
        alert('sending back')
        this.props.pcallBack("b3");
    }
    sendBack4 = () => {
        alert('sending back')
        this.props.pcallBack("b4");
    }
    render(){
        
        return(
            <>
           
            
            
            
            <ButtonGroup variant='contained' orientation='vertical'>
                <Button
                    onClick={this.sendBack}
                >
                    checkin
                </Button>
                <Button
                    onClick={this.sendBack2}
                >checkin
                </Button>
            </ButtonGroup>

            <ButtonGroup variant='contained' orientation='vertical'>
                <Button
                    onClick={this.sendBack3}
                >
                    checkout
                </Button>
                <Button
                    onClick={this.sendBack4}
                >
                    checkout
                </Button>
            </ButtonGroup>
            <button variant="contained"> {this.props.joinstate}</button>
            </>
            
        )
    }
}