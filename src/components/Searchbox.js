import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';

class SearchBox extends Component {
  static propTypes = {
    mapsapi: PropTypes.shape({
      places: PropTypes.shape({
        SearchBox: PropTypes.func,
      }),
      event: PropTypes.shape({
        clearInstanceListeners: PropTypes.func,
      }),
    }).isRequired,
    placeholder: PropTypes.string,
    onPlacesChanged: PropTypes.func,
    onPlaceAdd: PropTypes.func,
  };

  static defaultProps = {
    placeholder: 'Search...',
    onPlacesChanged: null,
  };

  constructor(props) {
    super(props);

    this.searchInput = React.createRef();
  }

  componentDidMount() {
    const {
      mapsapi: { places },
    } = this.props;

    this.searchBox = new places.SearchBox(this.searchInput.current);
    this.searchBox.addListener('places_changed', this.onPlacesChanged);
  }

  componentWillUnmount() {
    const {
      mapsapi: { event },
    } = this.props;

    event.clearInstanceListeners(this.searchBox);
  }

  onPlacesChanged = () => {
    const { onPlacesChanged } = this.props;

    if (onPlacesChanged) {
      onPlacesChanged(this.searchBox.getPlaces());
    }
  };

  onPlaceAdd = () => {
      const { onPlaceAdd } = this.props;

      if (this.searchBox.getPlaces()) {
        onPlaceAdd(this.searchBox.getPlaces()[0]);
      }
  }

  render() {
    const { placeholder } = this.props;

    return (
        <div className="searchbox">
            <input
                ref={this.searchInput}
                placeholder={placeholder}
                type="text"
            />
            <Button text="add" onClick={this.onPlaceAdd} />
        </div>
    );
  }
}

export default SearchBox;