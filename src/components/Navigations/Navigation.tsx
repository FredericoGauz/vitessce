import { Link } from 'react-router-dom';

export interface NavigationProps {}

export const Navigation = ({}: NavigationProps) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Main</Link>
                </li>
                <li>
                    <Link to="/second">Second</Link>
                </li>
            </ul>
        </nav>
    );
};
