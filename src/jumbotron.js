import {useState} from 'react'

const JumboTron = () => {

const [value, setsNewValue] = useState("SHOP NOW")

const changeValue = () => {
  setsNewValue("YOU DIDN'T SAT THE MAGIC WORD")
}

    return ( 
        <div className="jumbotron">
        <h1 classNa="display-4">A Warm Welcome!</h1>
        <p className="lead">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button" onClick={changeValue}>{value}</a>
        </p>
      </div>
     );
}
 
export default JumboTron ;
