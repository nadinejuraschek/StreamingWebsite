import React from 'react';

// npm react-router-dom imports
// all <a></a> tags should be replaced with <Link />
import { BrowserRouter, Route, Link } from 'react-router-dom';

// import components
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path='/' exact component={StreamList} />
                    <Route path='/streams/new' exact component={StreamCreate} />
                    <Route path='/streams/edit' exact component={StreamEdit} />
                    <Route path='/streams/delete' exact component={StreamDelete} />
                    <Route path='/streams/show' exact component={StreamShow} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;