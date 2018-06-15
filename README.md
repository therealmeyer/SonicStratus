# README

# SonicStratus
SonicStratus (SoundCloud Clone) is an Audio Discovery app that allows users to dynamically share and interact with music. Users can create, stream, update, delete, and comment on tracks. 
[SonicStratus Live](https://sonic-stratus.herokuapp.com/#/)
![Site](https://s3-us-west-1.amazonaws.com/sonicstratus/README/site-page.png)

## Technologies
* React
* Redux
* Ruby on Rails
* POSTGRESQL
* AWS-S3 Storage
* Wavesurfer.js
* BCrypt (user authentication)
* Paperclip 
* Figaro 

## Features 
### Audio Waveforms
![Waveform](https://s3-us-west-1.amazonaws.com/sonicstratus/README/show-waveform.png)
Waveform visualizations are drawn using Wavesurfer.js. The audio is loaded and decoded dynamically for each track, and drawn with Canvas. Audio peaks are drawn to visualize the spectrum of the frequencies that exist in the track. Originally, these waveforms were being decoded and drawn every time the page was loaded. This caused extremely poor performance. On first load of the stream page, almost 100 MB of data was being transferred and it took close to 30 seconds for the entire page to be fully loaded. My solution to this problem was to store the peaks data of the waveform in a JSON array and send this to the database. On subsequent loads, the peaks data can be provided to the waveform visualizer and the waveform can be drawn immediately. This resulted in much faster performance, as data transfer reduced to 190 KB and the full load of the page took 2-3 seconds rather than 30 seconds. 
#### Bad Performance (~100 MB transferred)
![Bad performance](https://s3-us-west-1.amazonaws.com/sonicstratus/README/bad-performance.png)
#### Good Performance (~190 KB transferred)
![Good performance](https://s3-us-west-1.amazonaws.com/sonicstratus/README/good-performane.png)

```javascript
  // Creating the wave
  this.wavesurfer = WaveSurfer.create({
      container: `#waveform-${this.props.track.id}`,
      progressColor: '#f50',
      height: this.props.height,
      cursorWidth: 0,
      barHeight: 1,
      barWidth: 2,
      waveColor: this.props.color,
      interact: false
  });
  // Exporting the peaks 
  this.wavesurfer.on('ready', () => {
    if (this.props.track.peaks.length < 1) {
        const peaks = this.wavesurfer.exportPCM(1024,100000,false,0);
        const formData = new FormData();
        formData.append("track[id]", this.props.track.id);
        formData.append("track[peaks]", peaks);
        
        this.props.updateTrack(formData);
    }
  });
  // Loading the peaks
  if (this.props.track.peaks.length < 1) {
      this.wavesurfer.load(this.props.track.audio_url);
      
  } else {
      this.wavesurfer.load(this.props.track.audio_url, this.props.track.peaks);
  }
  
```

###Continuous Playback and Waveform Synchronization
![Good performance](https://s3-us-west-1.amazonaws.com/sonicstratus/README/waveform-sync.gif)

The user can navigate to multiple pages while listening to music. Changing pages does not cause an interupt in the playback. `Media Player` Component listens for the current track, which is stored in the state, and passes in the AWS audio file link to `React Player` in order to play the track. This Component allows users to pause, play, change volume, and seek through the track. This `Media Player` Component is always rendered at the bottom of the page. 

The waveforms for the current track are kept in sync on page changes. When a user plays a song from the '/stream' page or the track show page. They can navigate to other pages and the waveform of the track they are currently listening to stays in sync with the player. Users can also seek through the waveform or the player and both will show the correct current time. The waveform and the player are directly reliant on each other, which creates a dynamic that is difficult to manage during page changes. The original solution to this problem was to keep track of the current time of the track in my global state, and user this current time to set the waveform on the page change. However, the current time is not always exactly up to date when loading and changing pages. This caused a slight break/delay in playback on the page changes because setting waveform would directly effect the player. 

This continous playback and waveform sync was acheived using a 'dummy waveform' in which the dummy waveform was overlayed on top of the actual waveform visualiztion. The dummy waveform controls the seeking of the track, while the visualization waveform only shows the visualization. This way, when the current time is set on the waveform during page switches the player isn't directly affected and there is no lag in the audio due to load time of the page. 

