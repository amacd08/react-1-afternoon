import React, {Component} from 'react'
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterString from '../Topics/FilterString'
import FilterObject from '../Topics/FilterObject'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'




class TopicBrowser extends Component {
    render(){
        return(
        <div>
            <EvenAndOdd/>
            <FilterString/>
            <FilterObject/>
            <Palindrome/>
            <Sum/>
        </div>
        )
    
    }
}


//class Topics extends Component {








export default TopicBrowser