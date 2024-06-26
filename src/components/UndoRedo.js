// src/components/UndoRedo.js
import React from 'react';

const UndoRedo = ({ canUndo, canRedo, undo, redo }) => (
    <div className="undo-redo">
        <button onClick={undo} disabled={!canUndo}>撤销</button>
        <button onClick={redo} disabled={!canRedo}>恢复</button>
    </div>
);

export default UndoRedo;
