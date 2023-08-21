import { Link } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div>
            { children }
            <div className="relative bottom-0 left-0">
                <ul className="float-right w-full">
                    <li className="inline-block px-2">
                        <Link to="/friends">Friends</Link>
                    </li> |
                    <li className="inline-block px-2">
                        <Link to="/chat">Chat</Link>
                    </li> |
                    <li className="inline-block px-2">
                        <Link to="/video">Video</Link>
                    </li> |
                    <li className="inline-block px-2">
                        <Link to="/setting">Setting</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Layout;