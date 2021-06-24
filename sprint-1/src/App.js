import React, { Component } from 'react'
import './App.scss';
import Header from "./components/Header/Header"
import Video from "./components/Video/Video"
import Comments from "./components/Comments/Comments"
import VideoList from "./components/VideoList/VideoList"
import VideoDetail from "./components/VideoDetail/VideoDetail"
import Form from "./components/Form/Form"

//data files
import data from "./data/video-details.json"
import dataList from "./data/videos.json"

//deconstructed array to populate list
const [first, ...rest] = dataList;

class App extends Component {
  
  //default video assigned to first entry in data
  state = {
    defaultVideo: data[0],
    list: [...rest]
  }
  
  changeState = (id) => {
    const clickedVideo = data.find((entry) => entry.id === id);
    let newList = dataList.filter(currentVideo => currentVideo.id !== clickedVideo.id)
    
    this.setState({
      defaultVideo: clickedVideo,
      list: newList
    })
    
    window.scrollTo(0,0)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Video
          video={this.state.defaultVideo}
        />
        <section className="main">
          <div className="main__right">
            <VideoDetail
              videoDetail={this.state.defaultVideo}
            />
            <Form />
            <Comments
              commentList={this.state.defaultVideo}
            />
          </div>
          <div className="main__left">
            <VideoList
              list={this.state.list}
              clickHandler={this.changeState} />
          </div>
        </section>
      </div>
    )
  }
}

export default App;
