/**
 * Created by michael on 06/02/2018.
 */

/* React */
import React, {Component} from 'react';

/* Font Awesome */
import FontAwesome from 'react-fontawesome';

/* Constants and functons */
import {icon_heuristic, go_to} from './utils';

/* Inline styles and CSS */
import {footer_style, inner_footer_style, icon_div_style} from './style/js/Footer';
import './style/css/Footer.css';

class HostedOn extends Component {
    constructor(props) {
        super(props);

        let link = props.link ? props.link : "https://en.wikipedia.org/wiki/Internet";
        let icon = props.icon ? props.icon : icon_heuristic(link);

        this.state = {
            link: link,
            icon: icon,
            new_tab: !!props.new_tab
        }
    }

    render() {
        return (
            <div>
                <div style={footer_style}>
                    <div title={this.state.link} style={inner_footer_style}>
                        Hosted on
                        <div onClick={() => go_to(this.state.link, this.state.new_tab)} style={icon_div_style}>
                            <FontAwesome
                                name={this.state.icon}
                                size="2x"
                                style={{marginLeft: "5px"}}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HostedOn