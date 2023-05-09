import React from 'react'
import './CounterPanel.css'

export const CounterPanel = ({ increase, decrease, count }) => {
    return (
        <div className="counter-panel">
            <button
                type="button"
                onClick={() => decrease()}>
                -
            </button>
            <span>Кол-во: {count}</span>
            <button
                type="button"
                onClick={() => increase()}>
                +
            </button>
        </div>
    )
}
