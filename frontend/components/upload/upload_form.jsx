import React from 'react';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { 
      user_id: this.props.currentUser.id,
      inputMessage: '',
      imageClass: 'image-upload',
      title: this.props.track.title,
      genre: this.props.track.genre,
      description: this.props.track.description,
      album_url: this.props.album_url,
      imageFile: null,
      audio_url: this.props.audio_url,
      audioFile: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputMessage = this.handleInputMessage.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.handleAudioChange = this.handleAudioChange.bind(this);
  }

  // handlePhotoChange(e) {
  //   console.log(e.currentTarget.value);
  //   debugger;
  //   $('.image-upload').css('background-image', `url(${e.currentTarget.value})`);
  // }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    console.log(this.props.currentUser.id);
    e.preventDefault();
    const imageFile = this.state.imageFile;
    const audioFile = this.state.audioFile;
    const formData = new FormData();
    formData.append("track[user_id]", this.state.user_id);
    formData.append("track[title]", this.state.title);
    formData.append("track[genre]", this.state.genre);
    formData.append("track[description]", this.state.description);
    if (imageFile) formData.append("track[image]", imageFile);
    if (audioFile) formData.append("track[audio]", audioFile);
    console.log(formData);
    this.props.processForm(formData);
  }

  handleAudioChange(e) {
    this.setState( {inputMessage: 'Ready. Click Save to post this track'});
    console.log(this.state.inputMessage);
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => this.setState({ audio_url: reader.result, audioFile: file });
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ audio_url: "", audioFile: null });
    }
    
  }

  handlePhotoChange(e) {
    // console.log(e.currentTarget);
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => this.setState({ album_url: reader.result, imageFile: file});
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ album_url: "", imageFile: null });
    }
  }


  render () {
    const headerMessage = this.props.formType === "Upload" ? "Upload to SonicStratus" : `Edit ${this.props.track.title}`;
    return <div>
        <form className="upload-form">
          <h1 className="form-title">Upload to SonicStratus</h1>
          <label className="upload-button">
            Choose a file to upload
            <input 
              onChange={this.handleAudioChange} 
              type="file" 
              className="hidden" 
              accept="audio/mpeg3" />
          </label>

          <p className="ready-banner">{this.state.inputMessage}</p>
          <div className="color-bar" />
          <div className="upload-form-box">
            <div className="upload-form-header">
              <h1 className="basic-info-header">Basic info</h1>
            </div>
            <div className="main-form-box">
              <div className="image-upload-box">
                <div className={this.state.imageClass}>
                  <label className="update-image-button">
                    <i className="fa fa-camera" id="camera" aria-hidden="true" />
                    Update image
                    <input 
                      onChange={this.handlePhotoChange} 
                      type="file" 
                      className="hidden" 
                      accept="image/*" />
                  </label>
                </div>
              </div>
              <div className="main-form">
                <label className="upload-form-label">
                  Title <span className="asterisk">*</span>
                  <input className="upload-form-input-title" 
                    onChange={this.update("title")} 
                    value={this.state.title} 
                    placeholder="Name your track" 
                    type="text" />
                </label>
                <label className="upload-form-label">
                  Genre
                  <input 
                    className="upload-form-input-genre" 
                    onChange={this.update("genre")} 
                    value={this.state.genre} 
                    placeholder="None" 
                    type="text" />
                </label>
                <label className="upload-form-label">
                  Description
                  <textarea 
                    className="upload-form-textarea" 
                    onChange={this.update("description")} 
                    value={this.state.description} 
                    placeholder="Describe your track" 
                    type="text" />
                </label>
              </div>
            </div>
            <div className="submitBox">
              <p className="required">
                <span className="asterisk">*</span>
                Required fields
              </p>
              <button onClick={this.handleSubmit} className="save-button">Save</button> 
            </div>
          </div>
        </form>
      </div>;
  }
}

export default UploadForm;