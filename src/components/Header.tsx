import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <React.Fragment>
            <table>
                <tbody>
                    <tr>
                        <th><Link to="/news">Hacker News</Link></th>
                        <th><Link to="/newest">new</Link> </th>
                        <th><Link to="/best">best</Link> </th>
                        <th><Link to="/ask">ask</Link></th>
                        <th><Link to="/show">show</Link></th>
                        <th><Link to="/jobs">jobs</Link></th>
                    </tr>
                </tbody>
            </table>
        </React.Fragment>
    );
    }

export default Header;