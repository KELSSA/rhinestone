
import React from 'react';
import { useState } from 'react';
import {credentialContext} from '../App';
import Dos from './dosDashboard/Dos';



function DosDashboard(){

const{credentials}=useState(credentialContext);

    
    return(

        <div className="dos">
           {credentials && <Dos/>}
        </div>
    );
}

export default DosDashboard;