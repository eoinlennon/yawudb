import React, { Component } from 'react';
import ToggleImageButton from './ToggleImageButton';
import { setInfos, setsIndex } from '../data/index';
import * as _ from 'lodash';

class ExpansionsToggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedExpansions: this.props.selectedSets.map(x => parseInt(x, 10)),
        }

        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle(expansion) {
        const exp = parseInt(expansion, 10);
        let expansions = [];
        const indexOf = this.state.selectedExpansions.indexOf(exp);
        if(indexOf >= 0) {
            expansions = [...this.state.selectedExpansions.slice(0, indexOf), ...this.state.selectedExpansions.slice(indexOf + 1)]
        } else {
            expansions = [exp, ...this.state.selectedExpansions]
        }

        this.setState({selectedExpansions: expansions});
        
        if(this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        this.timeoutId = setTimeout(() => this.props.onExpansionsChange(expansions), 350);
    }

    renderIndex(v){
        const name = setsIndex[v];
        return <ToggleImageButton key={name}
                    isOff={!this.state.selectedExpansions.includes(parseInt(v, 10))} 
                    onImage={`/assets/icons/${name}-icon.png`}
                    offImage={`/assets/icons/${name}-icon-bw.png`}
                    onToggle={this.handleToggle.bind(this, v)}
                    />
    }

    render() {
        return (
            <div>
                { _.keys(setInfos).map(v => this.renderIndex(v)) }
            </div>
        );
    }
}

export default ExpansionsToggle;