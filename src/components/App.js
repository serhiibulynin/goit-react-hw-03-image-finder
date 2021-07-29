import React, { Component } from "react";

import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import Modal from "./modal/Modal";
import Button from "./button/Button";

import fetchPicturesApi from "../services/pixabayApi";
import Loader from "react-loader-spinner";

class App extends Component {
  state = {
    pictures: [],
    searchQuery: "",
    currentPage: 1,
    showModal: false,
    originalPictureSize: "",
    originalPictureTag: "",
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchPictures();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      pictures: [],
      error: null,
    });
  };

  fetchPictures = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };

    this.setState({ isLoading: true });

    fetchPicturesApi(options)
      .then((response) =>
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...response],
          currentPage: prevState.currentPage + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
  };

  toggleModal = (url, tag) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      originalPictureSize: url,
      originalPictureTag: tag,
    }));
  };

  render() {
    const {
      pictures,
      originalPictureSize,
      originalPictureTag,
      isLoading,
      error,
    } = this.state;
    const textButton = "Load More";

    return (
      <>
        <Searchbar onSubmit={this.onChangeQuery} />
        {error && alert("Not found pictures for you querry")}
        <ImageGallery pictures={pictures} toggleModal={this.toggleModal} />
        {pictures.length && (
          <Button onClick={this.fetchPictures}>
            {isLoading ? (
              <Loader type="Circles" color="#00BFFF" height={24} width={24} />
            ) : (
              textButton
            )}
          </Button>
        )}

        {this.state.showModal && (
          <Modal
            url={originalPictureSize}
            alt={originalPictureTag}
            toggleModal={this.toggleModal}
          />
        )}
      </>
    );
  }
}

export default App;
