//This page uses a-frame to create an interactive 3d environment


import React, { Component } from 'react';
import StackGrid from 'react-stack-grid';
import ReactPlayer from 'react-player';

export default class Happy extends Component {


  render() {
    return (
  <StackGrid id="contact" className="container" columnWidth={160} gutterWidth={80} gutterHeight={20}>
            <div className="article" key="key1">
              <img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
              <div className="middle">
                <div className="text"><a href="https://www.youtube.com/watch?v=aXItOY0sLRY">Breath Deep</a></div>
              </div>
            </div>
          <div className="article" key="key2">
            <img src="https://i.imgur.com/N9oOvUi.jpg" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="https://www.huffingtonpost.com/entry/11-answers-to-how-can-i-help-someone-with-depression_us_5813c9ede4b08301d33e096f">Learn to Help</a></div>
              </div>
          </div>

          <div className="article" key="key3">
            <img src="https://i.imgur.com/Bz5k6dK.jpg" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="http://ndpr.nd.edu/news/experiences-of-depression-a-study-in-phenomenology/">Great Article</a></div>
              </div>
          </div>

          <div className="article" key="key4">
            <img src="http://www.metrocrisisservices.org/library/images/SPL_logo_220x240_ENG.png" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="https://suicidepreventionlifeline.org/">Immediate Help</a></div>
              </div>
          </div>

          <div className="article" key="key5">
            <img src="https://i.imgur.com/JEYPkzg.jpg" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="https://medlineplus.gov/ency/patientinstructions/000325.htm">
                Great Article</a></div>
              </div>
          </div>

          <div className="article" key="key6">
            <ReactPlayer url="https://www.youtube.com/watch?v=EJ_S5Rjt_iI" height="200px" width="220px" className="image" />
          </div>

          <div className="article" key="key7">
              <img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
              <div className="middle">
                <div className="text"><a href="">Go</a></div>
              </div>
            </div>

          <div className="article" key="key8">
            <img src="https://i.imgur.com/YOtytAUb.jpg" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="">Go</a></div>
              </div>
          </div>

          <div className="article" key="key9">
            <img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="">Go</a></div>
              </div>
          </div>

          <div className="article" key="key10">
            <ReactPlayer url="https://www.youtube.com/watch?v=z-IR48Mb3W0" height="200px" width="220px" className="image" />
          </div>

          <div className="article" key="key11">
            <img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="">Cheer Someone Up</a></div>
              </div>
          </div>

          <div className="article" key="key12">
            <ReactPlayer url="https://www.youtube.com/watch?v=bCI68IfY0D8" height="200px" width="220px" className="image" />
          </div>  

          <div className="article" key="key13">
            <img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="">Go</a></div>
              </div>
          </div>

          <div className="article" key="key14">
             <ReactPlayer url="https://www.youtube.com/watch?v=NOAgplgTxfc" height="200px" width="220px" className="image" />
          </div>

          <div className="article" key="key15">
            <img src="https://i.imgur.com/2ChazgF.jpg" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="">Cheer Someone Up</a></div>
              </div>
          </div> 

          <div className="article" key="key16">
               <ReactPlayer url="https://www.youtube.com/watch?v=coSbBsTGs_A" height="200px" width="220px" className="image" />
          </div>

          <div className="article" key="key17">
            <img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="http://www.lifehack.org/articles/communication/25-simple-and-creative-ways-cheer-someone.html">Cheer Someone Up</a></div>
              </div>
          </div> 

          <div className="article" key="key18">
            <ReactPlayer url="https://www.youtube.com/watch?v=K2Uj8QahSdw" height="200px" width="220px" className="image" />
          </div>

          <div className="article" key="key19">
            <img src="https://i.imgur.com/Huou7Gh.gif" height="200px" width="220px" className="image" />
              <div className="middle">
                <div className="text"><a href="">Go</a></div>
              </div>
          </div>

          <div className="article" key="key20">
            <img src="https://i.imgur.com/9KYVk8z.jpg" height="200px" width="220px" className="image" />
            <div className="middle">
                <div className="text"><a href="https://greatist.com/grow/common-mistakes-when-comforting-friend">Cheer Someone Up</a></div>
              </div>
          </div>         
        </StackGrid>
 
    );
  }
}