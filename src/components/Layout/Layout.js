import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classcss from './Layout.css';

const layout = (props) => (
    <Aux>
        <div>toolbar, sidebar, backdrop</div>
        <main className = {classcss.LayoutContent} >
            {props.children}
        </main>
    </Aux>
);

export default layout;