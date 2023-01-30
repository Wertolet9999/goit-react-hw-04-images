import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { BsSearch } from 'react-icons/bs';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onChangeInputValue = e => {
    const { value } = e.target;
    this.setState({ inputValue: value });
  };

  resetInputValue = () => {
    this.setState({ inputValue: '' });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.inputValue);
    this.resetInputValue();
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={css.SearchFormButton}>
            <span>
              <BsSearch className={css.SearchFormButtonIcon} />
            </span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.value}
            placeholder="Search images and photos"
            onChange={this.onChangeInputValue}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
