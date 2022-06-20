import React from 'react';
import { View } from "react-native";

import Episodes from './Episodes';
import Show from './Show';



export default function Home() {    

    return <View>
            <>
            <Show />
            <Episodes />
            </>
    </View>     
}