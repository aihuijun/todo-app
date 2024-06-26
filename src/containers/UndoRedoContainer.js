// src/containers/UndoRedoContainer.js
import { connect } from 'react-redux';
import { undo, redo } from '../actions';
import UndoRedo from '../components/UndoRedo';

const mapStateToProps = (state) => ({
    canUndo: state.history.length > 0,
    canRedo: state.future.length > 0
});

const mapDispatchToProps = (dispatch) => ({
    undo: () => dispatch(undo()),
    redo: () => dispatch(redo())
});

export default connect(mapStateToProps, mapDispatchToProps)(UndoRedo);
