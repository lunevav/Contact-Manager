import React, {Component} from 'react';

class Header extends Component {
    render() {
        const {title} = this.props;
        return (
            <nav className={"navbar navbar-expand-sm navbar-dark bg-secondary mb-3 py-0"}>
                <div className={"container"}>
                    <a href="/" className={"navbar-brand"}>
                        {title}
                    </a>
                    <div>
                        <ul className={"navbar-nav mr-auto"}>
                            <li className={"nav-item"}>
                                <a href="/" className={"nav-link"}>
                                    Home
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;