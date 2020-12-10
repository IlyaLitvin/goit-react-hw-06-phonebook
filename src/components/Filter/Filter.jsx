import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.css";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import listAction from "../../redux/listActions.js";

const FilterName = ({ filterRender, filter }) => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={500}
    classNames={styles}
    unmountOnExit
  >
    <div>
      <label htmlFor="name" className={styles.contactFormLabel}>
        Find contacts by name
      </label>
      <input
        type="text"
        value={filter}
        onChange={(e) => filterRender(e.target.value)}
      />
    </div>
  </CSSTransition>
);

FilterName.propTypes = {
  filterRender: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

const mapStateToProps = (state) => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = {
  filterRender: listAction.filterContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterName);
