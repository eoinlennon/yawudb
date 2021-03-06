import React, { PureComponent } from 'react';

class DeckIcon extends PureComponent {
    render() {
        const { width, height, faction} = this.props;
        const strippedFaction = faction.startsWith('n_') ? faction.substr(2) : faction;
        return (
            <img id="factionDeckIcon" 
                style={{width: width, height: height, margin: '0 .3rem 0 0', flex: '0 0 auto'}} 
                alt={`${faction}`} 
                src={`/assets/icons/${strippedFaction}-deck.png`} />
        );
    }
}

export default DeckIcon;