import React, { Component } from 'react'
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

export default class About extends Component {
    state = {
        marginStyle: {
            margin: "10px 0"
        }
    }
    render() {
        return (
            <Container maxWidth="sm">
                <Box mt={10}>
                    <h1 style={this.state.marginStyle}>{this.props.title}</h1>
                    <hr/>
                    <p style={this.state.marginStyle}>{this.props.body}</p>
                </Box>
            </Container>
        )
    }
}
