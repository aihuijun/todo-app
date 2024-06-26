// src/components/UndoRedo.js
import React from 'react';

const UndoRedo = ({ canUndo, canRedo, undo, redo }) => (
    <div className="undo-redo">
        <button onClick={undo} disabled={!canUndo}>undo</button>
        <button onClick={redo} disabled={!canRedo}>redo</button>
    </div>
);

export default UndoRedo;
