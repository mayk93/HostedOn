/**
 * Created by michael on 06/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* Font Awesome */
import FontAwesome from 'react-fontawesome';


/* Inline styles and CSS */
import {footer_style} from './style/js/Footer';
import './style/css/Footer.css';

let hosting_providers = [
    "github",
    "bitbucket",
    "gitlab"
];

let icon_heuristic = (link) => {
    let icon = "cloud";

    hosting_providers.map((provider) => {
        if (link.indexOf(provider) !== -1) {
            icon = provider;
        }
    });

    return icon;
};

class HostedOn extends Component {
    constructor(props) {
        super(props);

        let link = props.link ? props.link : "https://en.wikipedia.org/wiki/Internet";
        let icon = props.icon ? props.icon : icon_heuristic(link);

        this.state = {
            link: link,
            icon: icon
        }
    }

    render() {
        return (
            <div>
                <div style={footer_style}>
                    <div style={{flex: 1}}>
                        Hosted on
                        <a href={this.state.link} className="link_class" style={{color: "black"}}>
                            <FontAwesome
                                name={this.state.icon}
                                size="2x"
                                style={{marginLeft: "5px"}}
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default HostedOn