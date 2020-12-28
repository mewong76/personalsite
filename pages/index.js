import Layout from '../components/Layout';
import Styles from '../components/Theme';
import Spacer from '../components/Spacer';
import Link from 'next/link';


export default function Index() {
    return (
        <div>
            <Layout />
            <div style={Styles.content}>
                <h1 style={Styles.header}>Hi, I'm Melissa Kay Wong.</h1>
                <p style={Styles.body}> My Portfolio is currently under construction.</p>
                <p style={Styles.body}> Please contact me on my LinkedIn.</p>

                <Spacer height={2} />

        
            
                <Spacer height={2} />
               
            </div>
        </div >
    );
}
