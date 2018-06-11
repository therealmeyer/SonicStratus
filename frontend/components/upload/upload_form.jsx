import React from 'react';
import LoadingBar from 'react-redux-loading-bar';

class UploadForm extends React.Component {

  constructor(props) {
    super(props);
    let background = this.props.track.album_url
      ? `url(${this.props.track.album_url})`
      : null;
    this.state = {
      id: this.props.track.id,
      user_id: this.props.currentUser.id,
      inputMessage: "",
      imageClass: "image-upload",
      title: this.props.track.title,
      genre: this.props.track.genre,
      description: this.props.track.description,
      album_url: this.props.track.album_url,
      imageFile: null,
      audio_url: this.props.track.audio_url,
      audioFile: null,
      backgroundImage: background || "linear-gradient(135deg, #846170, #70929c)"
    };
    // debugger;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePhotoChange = this.handlePhotoChange.bind(this);
    this.handleAudioChange = this.handleAudioChange.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
    this.props.hideLoading();
  }
  
  componentWillReceiveProps() {
  }
  renderErrors() {
    return (
      <ul className="upload-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    // console.log(this.props.currentUser.id);
    e.preventDefault();
    document.getElementById("save-button").disabled = true;
    const imageFile = this.state.imageFile;
    const audioFile = this.state.audioFile;
    const formData = new FormData();
    if (this.state.id) formData.append("track[id]", this.state.id);
    formData.append("track[user_id]", this.state.user_id);
    formData.append("track[title]", this.state.title);
    formData.append("track[genre]", this.state.genre);
    formData.append("track[description]", this.state.description);
    if (imageFile) formData.append("track[image]", imageFile);
    if (audioFile) formData.append("track[audio]", audioFile);
    this.props.showLoading();
    // debugger;
    this.props
      .processForm(formData)
      .then(track => {
        this.props.history.push("/stream")
      });
    // this.props.hideLoading();
  }

  handleAudioChange(e) {
    // console.log(this.state.inputMessage);
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ audio_url: reader.result, audioFile: file });
      this.setState({
        inputMessage: `'${
          this.state.audioFile.name
        }'  Ready. Click Save to post this track`
      });
      const index = this.state.audioFile.name.indexOf(".");
      const fileName = this.state.audioFile.name.slice(0, index);
      this.setState({ title: fileName });
      // console.log(this.state.audioFile.name);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ audio_url: "", audioFile: null });
    }
  }

  highlightErrors() {
    if (this.props.errors.includes("Title can't be blank")) {
      $("#title").css("border", "1px solid #f50");
    }
  }

  handlePhotoChange(e) {
    // console.log(e.currentTarget);
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () => {
      this.setState({ album_url: reader.result, imageFile: file });
      this.setState({ backgroundImage: `url(${this.state.album_url})` });
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ album_url: "", imageFile: null });
    }
  }

  render() {
    let headerMessage;
    headerMessage =
      this.props.formType === "Upload"
        ? "Upload to SonicStratus"
        : `Edit ${this.props.track.title}`;
    let description = this.state.description ? this.state.description : "";
    let genre = this.state.genre ? this.state.genre : "";
    // debugger;
    this.highlightErrors();
    return (
      <div>
        <form className="upload-form">
          <h1 className="form-title">{headerMessage}</h1>
          <label className="upload-button">
            Choose a file to upload
            <input
              onChange={this.handleAudioChange}
              type="file"
              className="hidden"
              accept="audio/mpeg3"
            />
          </label>

          <p className="ready-banner">{this.state.inputMessage}</p>
          <div className="color-bar" />
          <div className="upload-form-box">
            <div className="upload-form-header">
              <h1 className="basic-info-header">Basic info</h1>
            </div>
            <div className="main-form-box">
              <div className="image-upload-box">
                <div
                  className="image-upload"
                  style={{ backgroundImage: this.state.backgroundImage }}
                >
                  <label className="update-image-button">
                    <i
                      className="fa fa-camera"
                      id="camera"
                      aria-hidden="true"
                    />
                    Update image
                    <input
                      onChange={this.handlePhotoChange}
                      type="file"
                      className="hidden"
                      accept="image/*"
                    />
                  </label>
                </div>
              </div>
              <div className="main-form">
                {this.renderErrors()}
                <label className="upload-form-label">
                  Title <span className="asterisk">*</span>
                  <input
                    id="title"
                    className="upload-form-input-title"
                    onChange={this.update("title")}
                    value={this.state.title}
                    placeholder="Name your track"
                    type="text"
                  />
                </label>
                <label className="upload-form-label">
                  Genre
                  <input
                    className="upload-form-input-genre"
                    onChange={this.update("genre")}
                    value={genre}
                    placeholder="None"
                    type="text"
                  />
                </label>
                <label className="upload-form-label">
                  Description
                  <textarea
                    className="upload-form-textarea"
                    onChange={this.update("description")}
                    value={description}
                    placeholder="Describe your track"
                    type="text"
                  />
                </label>
              </div>
            </div>
            <LoadingBar updateTIme={300} maxProgress={65} className="loading-bar"/>
            <div className="submitBox">
              <p className="required">
                <span className="asterisk">*</span>
                Required fields
              </p>
              <button id="save-button" onClick={this.handleSubmit} className="save-button">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default UploadForm;