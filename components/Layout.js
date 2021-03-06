
import Link from 'next/link';
import Styles from './Theme';
import Spacer from './Spacer';

const linkStyle = {
    marginRight: 15,
    fontFamily: 'Verdana',
    textDecoration: 'none',
    color: 'black',
};

const header = {
    position: 'fixed',
    padding: '1rem',
    top: 0,
    left: 0,
    width: '100%',
    height: '1rem',
    backgroundColor: 'skyblue',
    color: 'white',
}

const footer = {
    position: 'fixed',
    padding: '1rem',
    left: 0,
    bottom: 0,
    width: '100%',
    height: '1rem',
    backgroundColor: 'skyblue',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
}

const Header = () => (
    <div style={header}>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>

        <a style={linkStyle} href="/resume.pdf">Resume</a>
        <a style={linkStyle} href="https://github.com/mewong76"> Github </a>
        <a style={linkStyle} href="https://www.linkedin.com/in/melissa-wong-59609814a/"> LinkedIn </a>
        
        <Link href="/interests">
            <a style={linkStyle}></a>
        </Link>

    </div>
);


const Layout = () => {
    return <> <Header /></>
}


export default Layout;

