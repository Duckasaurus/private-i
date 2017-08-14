import React, { Component } from 'react';
import $ from 'jquery';
// ES6 Imports
import Scroll from 'react-scroll';
let scroll     = Scroll.animateScroll;

import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


import './../styles/Doc.css';
import './../styles/Welcome.css';

const style = {
  margin: 6,
  marginTop: '20px',
  sub: {
    paddingLeft: '5px',
    color: 'gray',
    textTransform: 'none',
    letterSpacing: '1px',
  },
  label: {
    fontSize: '30px',
    paddingRight: '5px',
    color: '#E0E1E5',
    textTransform: 'none',
    letterSpacing: '1px',
  },
  paper: {
    height: '80px',
  },
  team: {
    height: 250,
    width: 250,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#E0E1E5',
  }
};

class Doc extends Component {
  componentDidMount() {
    $(window).on("scroll", function() {
      // console.log('scrolling')
      if( ($(window).scrollTop() > 210) && ($(window).scrollTop() < 1300 ) )  {
        $(".doc-section2").removeClass("doc-section2-visible");
        $(".doc-section2").addClass("animated zoomIn");
      } else {
        $(".doc-section2").addClass("doc-section2-visible");
        $(".doc-section2").removeClass("animated zoomIn");
      }

      if ( ($(window).scrollTop() > 1040 ) && ($(window).scrollTop() < 2000) ) {
        $(".doc-section3-content").removeClass("doc-section3-visible");
        $(".doc-section3-content").addClass("animated fadeInLeftBig");
      } else {
        $(".doc-section3-content").addClass("doc-section3-visible");
        $(".doc-section3-content").removeClass("animated fadeInLeftBig")
      }
      
    });
  }


  render() {
    return(
      <div>
        <div className='doc-section1'>
        <h2 className='doc-title'>FOCUS GROUP MANAGEMENT PLATFORM</h2>

          <p className='doc-sub-2'>Open source developer tool for capturing<br/>and analyzing user interaction to improve<br/>UX in everything you build</p>
        <RaisedButton style={{marginTop: '4%'}} label='Github' onClick={() => {window.location.href='http://github.com/Duckasaurus/private-i'}}></RaisedButton>
        <RaisedButton style={{marginTop: '4%', marginLeft: '2%'}} label='NPM' onClick={() => {window.location.href='http://npmjs.com'}}></RaisedButton>

        <div className='scroll demo' id='section07'>
            <a className='a' onClick={() => scroll.scrollTo(805)}>
              <span></span><span></span><span></span>
            </a>
            <br/><br/><br/>GET STARTED
        </div>
        </div>

        <div className='doc-section2'>
          <br/>
          <hr style={{marginBottom: '2%'}} width='15%'/>
          <h1>Quick-Start Guide</h1>
          <hr style={{marginTop: '2%'}} width='15%'/>
          <table>
            <tr>
              <td className='td-welcome'>
                <img className='mini-logo-website' src='./../../websiteicon.png'/>
                <h3 className='td-title'>Take Control</h3>
                <p className='td-sub'>By injecting our script into the top level of the front-end of your application and then cloning our interface from Github, as a developer you now have the tool to manage your own focus groups remotely and fully capture user sessions on your website.</p>
              </td>
              <td className='td-welcome'>
                <img className='mini-logo-database' src='./../../databaseicon.png'/>
                <h3 className='td-title'>Bring the best to market</h3>
                <p className='td-sub'>Now that all of the management power is in your hands, you can analyze a variety of user interactions and determine the best course of action in redesigning the front-end to drastically improve UX in all of your deployed websites, with confidence.</p>
              </td>
              <td className='td-welcome'>
                <img className='mini-logo-machinelearning' src='./../../machinelearningicon.png'/>                
                <h3 className='td-title'>Scalability</h3>
                <p className='td-sub'>With an open source approach to solving this problem, we've discovered a way to keep costs completely free in the out-of-the-box solution while giving you complete control over your costs by giving the developer's the option of providing their own server</p>
              </td>
            </tr>
          </table>
        </div>


        <div className='doc-section3'>
          <div className='doc-section3-content'>
          <hr style={{marginBottom: '2%', borderColor: 'lightgray', color: 'lightgray'}} width='15%'/>
          <h1 className='doc-section3-title'>The platform for managing modern front-end <br/>web applications.</h1>
          <hr style={{marginTop: '2%', borderColor: 'lightgray', color: 'lightgray'}} width='15%'/>
          <br/><br/><br/><br/><br/><br/><p className='gif'>INSERT GIF HERE</p>
          </div>
        </div>

        <div className='doc-section4'>
          <hr style={{marginBottom: '2%'}} width='15%'/>
          <h1>Meet the Team.</h1>
          <hr style={{marginTop: '2%'}} width='15%'/>
          <table>
            <tr>
              <td className='td-welcome'>
                <Paper style={style.team} circle={true}/><br/>
                Mustafa Khan
              </td>
                <td className='td-welcome'>
                <Paper style={style.team} circle={true}/><br/>
                Miranda Monroe
              </td>
              <td className='td-welcome'>
                <Paper style={style.team} circle={true}/><br/>
                Jerry Jong
              </td>
            </tr>
          </table>
          <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
          <div className='doc-section4-lets'>
          <h1>Let's build something great together.</h1>
          </div>
          <br/><br/><br/><br/><br/>
        </div>

        <div className='doc-sectionfooter'>
          <ul className='doc-footer-list'>
            <li className='doc-footer-individual'>Contact</li>
            <li className='doc-footer-individual'>Terms</li>
            <li className='doc-footer-individual'>Privacy</li>
            <li className='doc-footer-individual'>@Private-I</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Doc;