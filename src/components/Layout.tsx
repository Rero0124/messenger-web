import { Link } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="box-border h-full">
            <div className="">
                { children }
            </div>
            <div className="">
                <ul className="float-right w-full">
                    <li className="inline-block px-2">
                        <Link to="/friends">Friends</Link>
                    </li>
                    <li className="inline-block px-2">
                        |
                    </li> 
                    <li className="inline-block px-2">
                        <Link to="/chat">Chat</Link>
                    </li>
                    <li className="inline-block px-2">
                        |
                    </li> 
                    <li className="inline-block px-2">
                        <Link to="/video">Video</Link>
                    </li>
                    <li className="inline-block px-2">
                        |
                    </li> 
                    <li className="inline-block px-2">
                        <Link to="/setting">Setting</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Layout;